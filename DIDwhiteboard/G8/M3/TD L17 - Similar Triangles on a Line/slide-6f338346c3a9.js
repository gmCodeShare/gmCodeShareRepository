const { ggb1, feedback1, text1, input1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("k", false);
    ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
    ggb1.instance.setVisible("l", false);
    button1.updateData({ align: "right" });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("tryItWasPressed", true);
  const result = utils.math.evaluateLatex(input1.data.text);

  if (result.value < 0 || result.error) {
    ggb1.instance.evalCommand("ReadText(yourLengthText)");
    return;
  }

  // if (result.value < 0) {
  //   ggb1.instance.evalCommand("ReadText(yourLengthText)");
  //   return;
  // }

  ggb1.instance.setValue("missing", result.value);
  ggb1.instance.setVisible("k", true);
  ggb1.instance.evalCommand("RunClickScript(play)");
  ggb1.instance.evalCommand("ReadText(yourLengthText)");
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Similar Triangles on a Line","teacherView":false,"layout":"two col"}
*/
