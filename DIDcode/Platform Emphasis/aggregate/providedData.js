/**
 * for lessons in which students collect data, include options to use provided data
 * set up text and select components on a TVO slide as per the following:
 * {@link https://digital.greatminds.org/lessons/authoring/editor/activities/611191c9f48321001240800c}
 *
 * the following code sets a default choice and sends data:
 */

const { select1 } = components;

// use your favorite "onInit" here
slide.on("firstload", () => {
  select1.selectOption("0");
});

select1.on("change", ({ selected }) => {
  utils.RTS.sendData("slide-numbersNumbers", {
    showProvided: selected.includes("1"),
    showCombined: selected.includes("2"),
  });
});

// then on subsequent slides, be sure to include provided data (in GGB files, etc.)
// in this example, there were lists of points that used conditional visiblity:
// * show students' collected data if !showProvided && !showCombined

utils.RTS.on("datachange", "slide-43b49a6aec4c", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  const prefs = lastRegister[0];
  ggb1.instance.setValue("showProvided", !!prefs.data?.showProvided);
  ggb1.instance.setValue("showCombined", !!prefs.data?.showCombined);
});

function discardOldResponses(register) {
  const devices = new Set();
  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}
