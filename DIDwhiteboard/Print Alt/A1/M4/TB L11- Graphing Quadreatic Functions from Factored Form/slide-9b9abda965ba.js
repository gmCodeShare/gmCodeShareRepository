const {
  ggb1,
  feedback1,
  text1,
  cc_submit_63b642cb8c43_textbox1: text3,
  cc_submit_63b642cb8c43_input1: input1,
  cc_submit_63b642cb8c43_button1: button1,
  separator1,
  text2,
  separator2,
  buttonGroup1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setMode(62);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
});

/*autorun(() => {
  if (radio1.data.selected) {
    text3.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
  if (radio1.data.selected === '0' && ggb1.instance.getValue('show')) {
    ggb1.instance.setVisible('slide19a', true);
    ggb1.instance.setVisible('slide19b', false);
    ggb1.instance.setVisible('slide19c', false);
    ggb1.instance.setVisible('slide19d', false);
  }
  if (radio1.data.selected === '1' && ggb1.instance.getValue('show')) {
    ggb1.instance.setVisible('slide19a', false);
    ggb1.instance.setVisible('slide19b', true);
    ggb1.instance.setVisible('slide19c', false);
    ggb1.instance.setVisible('slide19d', false);
  }
  if (radio1.data.selected === '2' && ggb1.instance.getValue('show')) {
    ggb1.instance.setVisible('slide19a', false);
    ggb1.instance.setVisible('slide19b', false);
    ggb1.instance.setVisible('slide19c', true);
    ggb1.instance.setVisible('slide19d', false);
  }
  if (radio1.data.selected === '3' && ggb1.instance.getValue('show')) {
    ggb1.instance.setVisible('slide19a', false);
    ggb1.instance.setVisible('slide19b', false);
    ggb1.instance.setVisible('slide19c', false);
    ggb1.instance.setVisible('slide19d', true);
  }
});*/

button1.on("click", () => {
  buttonGroup1.updateData({ visible: true });
  text2.updateData({ visible: true });
  ggb1.instance.setVisible("Vertex", true);
  ggb1.instance.setVisible("XInt1", true);
  ggb1.instance.setVisible("XInt2", true);
  ggb1.instance.setVisible("YInt", true);
  ggb1.instance.setVisible("AHalo", true);
  ggb1.instance.setVisible("BHalo", true);
  ggb1.instance.setVisible("CHalo", true);
  ggb1.instance.setVisible("DHalo", true);
  ggb1.instance.setVisible("eq1", true);
  ggb1.instance.setVisible("eq2", true);
  ggb1.instance.setVisible("AOSPoint", true);
  ggb1.instance.setVisible("text1", true);
});

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.setVisible("slide19a", true);
  ggb1.instance.evalCommand("SelectObjects()");
  ggb1.instance.setValue("show", true);
  ggb1.instance.setFixed("Vertex", false, false);
  ggb1.instance.setFixed("XInt1", false, false);
  ggb1.instance.setFixed("XInt2", false, false);
  ggb1.instance.setFixed("YInt", false, false);
  ggb1.instance.setVisible("AHalo", false);
  ggb1.instance.setVisible("BHalo", false);
  ggb1.instance.setVisible("CHalo", false);
  ggb1.instance.setVisible("DHalo", false);
  ggb1.instance.setVisible("eq1", false);
  ggb1.instance.setFixed("AOSPoint", false, false);
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setValue("show", false);
  ggb1.instance.setVisible("slide19a", false);
  ggb1.instance.setVisible("slide19b", false);
  ggb1.instance.setVisible("slide19c", false);
  ggb1.instance.setVisible("slide19d", false);
  ggb1.instance.setFixed("Vertex", false, true);
  ggb1.instance.setFixed("XInt1", false, true);
  ggb1.instance.setFixed("XInt2", false, true);
  ggb1.instance.setFixed("YInt", false, true);
  ggb1.instance.setVisible("AHalo", true);
  ggb1.instance.setVisible("BHalo", true);
  ggb1.instance.setVisible("CHalo", true);
  ggb1.instance.setVisible("DHalo", true);
  ggb1.instance.setVisible("eq1", true);
  ggb1.instance.setFixed("AOSPoint", false, true);
});

ggb1.instance.registerObjectUpdateListener("show", update);

function update() {
  if (!ggb1.instance.getValue("show")) {
    ggb1.instance.setVisible("slide19a", false);
    ggb1.instance.setVisible("slide19b", false);
    ggb1.instance.setVisible("slide19c", false);
    ggb1.instance.setVisible("slide19d", false);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"submit":1,"separator":2,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M4 TB L11 - Print Alternate Slide Deck for Graphing Quadratic Functions from Factored Form","teacherView":true,"layout":"two col"}
*/
