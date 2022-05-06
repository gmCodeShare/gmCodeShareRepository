const {
  ggb8,
  button2,
  cc_sharewithclass_749efda97d70_textbox1: text1,
  cc_sharewithclass_749efda97d70_input1: input1,
  cc_sharewithclass_749efda97d70_button1: button1,
} = components;

ggb8.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb8.data.init) {
    // set initial states
    ggb8.instance.setAnimating("time", true);
    ggb8.instance.startAnimation();
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb8.updateData({ init: true });
  }
}

button2.on("click", () => {
  ggb8.instance.setValue("time", 0);
  ggb8.instance.setValue("time2", 0);
  ggb8.instance.setAnimating("time", true);
  ggb8.instance.startAnimation();
});
