const {
  ggb1,
  cc_submit_7079de9f0d37_input1: input1,
  cc_submit_7079de9f0d37_button1: button1,
  cc_sharewithclass_73fb401d6023_textbox1: text2,
  cc_sharewithclass_73fb401d6023_input1: input2,
  cc_sharewithclass_73fb401d6023_button1: button2,
} = components;

ggb1.instance.setValue("state", 2);
ggb1.instance.setErrorDialogsActive(false);

let equa =
  getFromSlide(
    `slide-97ff43948160`,
    `cc_submit_8dd0e0ddcf25_input1.data.text`,
    ""
  ) || "";
if (equa) {
  ggb1.instance.evalLaTeX(`studentLine: ${equa}`);
  ggb1.instance.setVisible("shortenedStudentLine", true);
  ggb1.instance.setVisible("equationText", true);
}

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
    ggb1.instance.evalLaTeX(`slide12YVal= ${input1.data.text}`);
    ggb1.instance.setVisible("Slide12Point", true);
    ggb1.instance.setVisible("text2", true);
    ggb1.instance.setVisible("eq3", true);
  }
});
