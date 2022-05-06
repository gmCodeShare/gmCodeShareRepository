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
  ggb1.instance.setValue("showP1HelpPoints", true);
  ggb1.instance.setValue("showLine2", false);
  ggb1.instance.setValue("showFrog", true);
  ggb1.instance.setValue("showCheese1", true);
  ggb1.instance.setValue("showCheese2", true);
  ggb1.instance.setValue("showCheese3", true);

  ggb1.instance.setCoords("FrogPoint", -3, 4);
  ggb1.instance.setCoords("Cheese1Point", 8.5, 2);
  ggb1.instance.setCoords("Cheese2Point", -6, -5);
  ggb1.instance.setCoords("Cheese3Point", 3.5, -5);

  ggb1.instance.setFixed("frogSVG", true, false);
  ggb1.instance.setFixed("cheese1SVG", true, false);
  ggb1.instance.setFixed("cheese2SVG", true, false);
  ggb1.instance.setFixed("cheese3SVG", true, false);

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
  if (
    ggb1.instance.getValue("frogCompletelyInInequality1") &&
    !ggb1.instance.getValue("cheese1InInequality1") &&
    !ggb1.instance.getValue("cheese2InInequality1") &&
    !ggb1.instance.getValue("cheese3InInequality1")
  ) {
    text2.updateData({ text: "" });
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    ggb1.instance.setValue("showLine1Points", false);
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
  } else if (
    ggb1.instance.getValue("frogInInequality1") &&
    !ggb1.instance.getValue("frogCompletelyInInequality1")
  ) {
    text2.updateData({
      text: "Keep trying! Be sure to capture the entire frog.",
    });
  } else if (
    ggb1.instance.getValue("frogCompletelyInInequality1") &&
    (ggb1.instance.getValue("cheese1InInequality1") ||
      ggb1.instance.getValue("cheese2InInequality1") ||
      ggb1.instance.getValue("cheese3InInequality1"))
  ) {
    text2.updateData({
      text: "Keep trying! Be sure to completely avoid the stinky cheese.",
    });
  } else {
    text2.updateData({ text: "Keep trying! Be sure to capture the frog." });
  }
});

buttonGroup1.on("click:2", () => {
  text2.updateData({ text: "" });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false, text: "", previousAnswer: "" });
  submitButton1.updateData({ visible: false });
  ggb1.instance.setValue("showLine1Points", true);
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
  ggb1.instance.setVisible("studentGraph", false);
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
  ggb1.instance.setVisible("studentGraph", true);
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"submit":1},"stage":"Launch","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
