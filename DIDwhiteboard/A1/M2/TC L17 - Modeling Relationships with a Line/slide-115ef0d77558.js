const { ggb1, feedback1, text1, input1, text2, button1 } = components;

button1.updateData({ align: "right" });
text2.updateData({ align: "right" });
ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setVisible("lineOfBestFit", true);

let num = Math.round(ggb1.instance.getValue("slope") * 100) / 100;
let num2 = Math.round(ggb1.instance.getValue("yInt") * 100) / 100;

text1.updateData({
  text: `The equation of the line of best fit for the Monopoly data is\n\n$y = ${num}x + ${num2}$\n\nUse the equation to predict the price of a property that is $30$ spaces from GO.`,
});

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: "Submit", disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on("click", () => {
  const result = utils.math.evaluateLatex(input1.data.text);
  if (!result.error) {
    button1.updateData({ text: "Submitted", disabled: true });
    ggb1.instance.evalLaTeX(`slide12YVal= ${input1.data.text}`);
    ggb1.instance.setVisible("Slide12Point", true);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"input":1,"button":1},"stage":"Learn","lessonInfo":"9 M2 TC L17 - Modeling Relationships with a Line","teacherView":false,"layout":"two col"}
*/
