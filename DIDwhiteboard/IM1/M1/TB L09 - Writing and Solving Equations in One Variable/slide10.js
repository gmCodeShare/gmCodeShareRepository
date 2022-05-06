const {
  ggb1,
  text1,
  text2,
  input1,
  cc_submit_edb04424cad4_textbox1: submitText1,
  cc_submit_edb04424cad4_input1: submitInput1,
  cc_submit_edb04424cad4_button1: submitButton1,
  fib1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  fib1.setVisible(false);
  button1.updateData({ visible: false, align: "right", disabled: "true" });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

autorun(() => {
  let trigger1 = ggb1.innerData["horizontal"];
  let trigger2 = ggb1.innerData["vertical"];
  let case1 = ggb1.instance.getValue("showFifty");
  let case2 = ggb1.instance.getValue("showFourteen");

  if (!ggb1.data.init) {
    // set initial states
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  } else if ((ggb1.data.init && case1 == true) || case2 == true) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    ggb1.updateData({ init: true });
  }

  if (case1 == true) {
    text1.updateData({
      visible: true,
      text: `# You found a hint! 
  
  # The sum of the squares is $169$.`,
    });
  } else if (case2 == true) {
    text1.updateData({
      visible: true,
      text: `# You found a hint! 
  
  # The sum of the squares is $110$.`,
    });
  } else {
    text1.updateData({
      visible: false,
      visibilityBehavior: "hide",
      text: `# You found a hint! 
  
  # The sum of the squares is $110$.`,
    });
  }
});

submitButton1.on("click", () => {
  fib1.setVisible(true);
  button1.updateData({ visible: true });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});
