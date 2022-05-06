const { ggb1, text1, text2, buttonGroup1, buttonGroup2 } = components;

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
  text2.updateData({ visible: false });
  buttonGroup2.updateData({ visible: false });
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
  text2.updateData({ visible: true });
  ggb1.instance.setVisible("solutionSetText", true);
  buttonGroup2.updateData({ visible: true });
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

buttonGroup1.on("click:2", () => {
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

buttonGroup2.on("click:1", () => {
  ggb1.instance.setFixed("solutionSetText", true, false);
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
});

buttonGroup2.on("click:2", () => {
  ggb1.instance.setFixed("solutionSetText", false, true);
  buttonGroup2.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup2.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});
