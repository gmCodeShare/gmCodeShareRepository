const { ggb1, feedback1, text2, text4, input1, text3, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: "right" });
    text3.updateData({ align: "right" });
    text4.updateData({ visible: false });
    ggb1.instance.evalCommand("RunClickScript(newRouteButton)");
    ggb1.updateData({ init: true });
  }
}
let num11 = ggb1.instance.getValueString(
  "AY" + ggb1.instance.getValue("numLocation1")
);
let num21 = ggb1.instance.getValueString(
  "AY" + ggb1.instance.getValue("numLocation2")
);
let num12 = ggb1.instance.getValueString(
  "AZ" + ggb1.instance.getValue("numLocation1")
);
let num22 = ggb1.instance.getValueString(
  "AZ" + ggb1.instance.getValue("numLocation2")
);

let actualValue = ggb1.instance.getValue(`distance`).toFixed(0);
console.log(actualValue);
text2.updateData({
  text: `Ok, round 2.

How far do you think it is from ${num11}, ${num12}, to ${num21}, ${num22} in miles?`,
});

button1.on("click", () => {
  const num = utils.math.evaluateLatex(input1.data.text);
  if (num.value < 0 || num.error) {
    return;
  } else {
    ggb1.instance.setValue("studentEstimate", num.value);
    // console.log(ggb1.instance.getValue("studentEstimate"));
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
    button1.updateData({ text: "Submitted", disabled: true });
    text4.updateData({ visible: true });
    text3.updateData({ visible: false });
    input1.updateData({ visible: false });
    text4.updateData({ text: `$${num.value}$ miles` });
    // Send response to Real Time Server
    utils.RTS.sendData("slide-e9dcbfed402b.input1", {
      estimate: num.value,
      actualValue,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"input":1,"button":1},"stage":"Learn","lessonInfo":"7 M5 TD L19 - Applying Percent Error (digital)","teacherView":false,"layout":"two col"}
*/
