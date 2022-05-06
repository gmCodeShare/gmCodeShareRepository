const { ggb1, feedback, tex1, input1, table1, separator1, button1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ disabled: true });
autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ disabled: false });
    input1.updateData({ last: input1.data.text });
  }
});
autorun(() => {
  let entries = [table1.getCell(0, 0).value, table1.getCell(0, 2).value];
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value),
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
button1.on("click", () => {
  let frac = input1.data.text.replace(/\\frac{/, "("); //replaces \frac{
  let fracMid = frac.replace(/\}\{/, ")/("); //replaces }{ from \frac{}{}
  let leftParen = fracMid.replace(/\\left/g, ""); //replaces \left part of parens
  let rightParen = leftParen.replace(/\\right/g, ""); //replaces\right part of parens
  let absLeft = rightParen.replace(/\|/, "abs("); //replaces left bar for absolute value
  let absRight = absLeft.replace(/\|/, ")"); //replaces right bar for absolute value
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt("); //replaces \sqrt for square root function
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt("); //replaces \sqrt[3]{} for cube root function
  let brackRight = cbrtLeft.replace(/\}/g, ")"); //replaces the right side brackets
  let brackLeft = brackRight.replace(/\{/g, "("); //replaces any remaining left side brackets
  let finalAnswer = brackLeft.replace(/ /, ""); //empty in case of additions
  ggb1.instance.setTextValue("studentFunction", finalAnswer);
  // console.log(
  //   "Student Function: " + ggb1.instance.getValueString("studentFunction")
  // );
  ggb1.instance.setValue(
    "B13",
    utils.math.evaluateLatex(table1.data.rows[0][0].value).value
  );
  ggb1.instance.setValue(
    "C13",
    utils.math.evaluateLatex(table1.data.rows[0][2].value).value
  );
  ggb1.instance.evalCommand("g13:If(B13<=x<=C13,A13)");
  button1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"input":1,"table":1,"separator":1,"button":1},"stage":"Launch","lessonInfo":"9 M4 TC L20 - Art with Transformations","teacherView":false,"layout":"two col"}
*/
