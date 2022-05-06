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
  ggb1.instance.setValue("showFrog", true);
  ggb1.instance.setValue("showCheese1", true);
  ggb1.instance.setValue("showCheese2", true);
  ggb1.instance.setValue("showCheese3", true);

  ggb1.instance.setCoords("FrogPoint", -1, 2);
  ggb1.instance.setCoords("Cheese1Point", -6, -2);
  ggb1.instance.setCoords("Cheese2Point", 4, -4);
  ggb1.instance.setCoords("Cheese3Point", 6, 4);

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
    ggb1.instance.getValue("frogCompletelyInInequality2") &&
    !(
      ggb1.instance.getValue("cheese1InInequality1") &&
      ggb1.instance.getValue("cheese1InInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese2InInequality1") &&
      ggb1.instance.getValue("cheese2InInequality2")
    ) &&
    !(
      ggb1.instance.getValue("cheese3InInequality1") &&
      ggb1.instance.getValue("cheese3InInequality2")
    )
  ) {
    text2.updateData({ text: "" });
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    ggb1.instance.setValue("showLine1Points", false);
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
  } else {
    text2.updateData({
      text: "Keep trying! Be sure that the frog is captured in both half-planes and that it is the only object captured in both half-planes.",
    });
  }
});

buttonGroup1.on("click:2", () => {
  text2.updateData({ text: "" });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  ggb1.instance.setValue("showLine1Points", true);
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

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"submit":1},"stage":"Launch","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
