const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  text2,
  cc_submit_241cab3a868b_textbox1: submitText1,
  cc_submit_241cab3a868b_input1: submitInput1,
  cc_submit_241cab3a868b_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let inequalityGroup1 = [
  "P1A",
  "P1B",
  "inequality1LessGreaterToggle",
  "inequality1EqualNotEqualToggle",
];
let inequalityGroup2 = [
  "P2A",
  "P2B",
  "inequality2LessGreaterToggle",
  "inequality2EqualNotEqualToggle",
];

slide.on("firstload", () => {
  ggb1.instance.setValue("showP2HelpPoints", true);
  ggb1.instance.setValue("showLine1", false);

  ggb1.instance.setValue("showFrog", false);
  ggb1.instance.setValue("showCheese1", false);
  ggb1.instance.setValue("showCheese2", false);
  ggb1.instance.setValue("showCheese3", false);

  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

ggb1.instance.registerClientListener(clientFunction);

function clientFunction(a) {
  switch (a.type) {
    case "deselect":
      ggb1.instance.setValue("inequalityGroup1Selected", false);
      ggb1.instance.setValue("inequalityGroup2Selected", false);
      break;
    case "select":
      if (inequalityGroup1.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup1Selected", true);
      } else if (inequalityGroup2.includes(a[1])) {
        ggb1.instance.setValue("inequalityGroup2Selected", true);
      }
  }
}

buttonGroup1.on("click:1", () => {
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  ggb1.instance.setValue("showLine2Points", false);
  ggb1.instance.setValue("allowLineControls", false);
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
});

buttonGroup1.on("click:2", () => {
  text2.updateData({ text: "" });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  ggb1.instance.setValue("showLine2Points", true);
  ggb1.instance.setValue("allowLineControls", true);
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

submitButton1.on("click", () => {
  let frac = submitInput1.data.text.replace(/\\frac{/, "("); //replaces \frac{
  let fracMid = frac.replace(/\}\{/, ")/("); //replaces }{ from \frac{}{}
  let leftParen = fracMid.replace(/\\left/g, ""); //replaces \left part of parens
  let rightParen = leftParen.replace(/\\right/g, ""); //replaces \right part of parens
  let absLeft = rightParen.replace(/\|/, "abs("); //replaces left bar for absolute value
  let absRight = absLeft.replace(/\|/, ")"); //replaces right bar for absolute value
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt("); //replaces \sqrt for square root function
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt("); //replaces \sqrt[3]{} for cube root function
  let brackRight = cbrtLeft.replace(/\}/g, ")"); //replaces the right side brackets
  let brackLeft = brackRight.replace(/\{/g, "("); //replaces any remaining left side brackets
  let lessThan = brackLeft.replace(/\\le/g, "<="); //replaces less than
  let greaterThan = lessThan.replace(/\\ge/g, ">="); //replaces greater than
  let finalAnswer = greaterThan; /*.replace(//,"");*/ //empty in case of additions
  ggb1.instance.deleteObject("studentGraph");
  ggb1.instance.evalCommand("studentGraph: " + finalAnswer);
  ggb1.instance.setColor("studentGraph", 130, 63, 152);
  ggb1.instance.setFixed("studentGraph", true, false);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
