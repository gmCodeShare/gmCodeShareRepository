const { button2, ggb1, feedback1, cc_sharewithclass_127e1aa6645a_input1: input1, cc_sharewithclass_127e1aa6645a_button1: button1, cc_sharewithclass_127e1aa6645a_textbox1: text1, text3, select1, buttonGroup2, buttonGroup3, buttonGroup4 } = components;
let pointSelected = "";
//hide feedback
feedback1.updateData({ visible: false });

//hide yes/no buttons and text
text3.updateData({ visible: false });
select1.updateData({ visible: false });

//reset button script - enables buttons and resets color
button2.on("click", () => {
  pointSelected = "";
  ggb1.instance.evalCommand("SelectObjects()");
  select1.updateData({ selected: '', visible: false });
  text3.updateData({ visible: false });
  buttonGroup3.updateSingleButton({ disabled: false, color: "primary" }, 1);
  buttonGroup3.updateSingleButton({ disabled: false, color: "primary" }, 2);
  buttonGroup3.updateSingleButton({ disabled: false, color: "primary" }, 3);
  buttonGroup3.updateSingleButton({ disabled: false, color: "primary" }, 4);
  buttonGroup4.updateSingleButton({ disabled: false, color: "primary" }, 1);
  buttonGroup4.updateSingleButton({ disabled: false, color: "primary" }, 2);
  buttonGroup4.updateSingleButton({ disabled: false, color: "primary" }, 3);
  buttonGroup4.updateSingleButton({ disabled: false, color: "primary" }, 4);
  buttonGroup2.updateSingleButton({ disabled: false, color: "primary" }, 1);
  buttonGroup2.updateSingleButton({ disabled: false, color: "primary" }, 2);
  buttonGroup2.updateSingleButton({ disabled: false, color: "primary" }, 3);
  buttonGroup2.updateSingleButton({ disabled: false, color: "primary" }, 4);
});

function buttonClickFunction() {
  ggb1.instance.setCoords("text1", ggb1.instance.getXcoord(pointSelected) - 0.5, ggb1.instance.getYcoord(pointSelected) + 1.5);
  ggb1.instance.setVisible("text1", true);
  ggb1.instance.evalCommand("SelectObjects()");
}
//first line of buttons
buttonGroup3.on('click:1', () => {
  pointSelected = "S1";
  buttonGroup3.updateSingleButton({ color: "secondary" }, 1);
  ggb1.instance.setValue("shownVal", -3);
  buttonClickFunction();
});
buttonGroup3.on('click:2', () => {
  pointSelected = "S2";
  buttonGroup3.updateSingleButton({ color: "secondary" }, 2);
  ggb1.instance.setValue("shownVal", -2);
  buttonClickFunction();
});
buttonGroup3.on('click:3', () => {
  pointSelected = "S3";
  buttonGroup3.updateSingleButton({ color: "secondary" }, 3);
  ggb1.instance.setValue("shownVal", -1);
  buttonClickFunction();
});
buttonGroup3.on('click:4', () => {
  pointSelected = "S4";
  buttonGroup3.updateSingleButton({ color: "secondary" }, 4);
  ggb1.instance.setValue("shownVal", 0);
  buttonClickFunction();
});

//second line of buttons
buttonGroup4.on('click:1', () => {
  pointSelected = "S5";
  buttonGroup4.updateSingleButton({ color: "secondary" }, 1);
  ggb1.instance.setValue("shownVal", 0.5);
  buttonClickFunction();
});
buttonGroup4.on('click:2', () => {
  pointSelected = "S6";
  buttonGroup4.updateSingleButton({ color: "secondary" }, 2);
  ggb1.instance.setValue("shownVal", 0.9);
  buttonClickFunction();
});
buttonGroup4.on('click:3', () => {
  pointSelected = "S7";
  buttonGroup4.updateSingleButton({ color: "secondary" }, 3);
  ggb1.instance.setValue("shownVal", 1);
  buttonClickFunction();
});
buttonGroup4.on('click:4', () => {
  pointSelected = "S8";
  buttonGroup4.updateSingleButton({ color: "secondary" }, 4);
  ggb1.instance.setValue("shownVal", 1.1);
  buttonClickFunction();
});

//third line of buttons
buttonGroup2.on('click:1', () => {
  pointSelected = "S9";
  buttonGroup2.updateSingleButton({ color: "secondary" }, 1);
  ggb1.instance.setValue("shownVal", 1.5);
  buttonClickFunction();
});
buttonGroup2.on('click:2', () => {
  pointSelected = "S10";
  buttonGroup2.updateSingleButton({ color: "secondary" }, 2);
  ggb1.instance.setValue("shownVal", 2);
  buttonClickFunction();
});
buttonGroup2.on('click:3', () => {
  pointSelected = "S11";
  buttonGroup2.updateSingleButton({ color: "secondary" }, 3);
  ggb1.instance.setValue("shownVal", 3);
  buttonClickFunction();
});
buttonGroup2.on('click:4', () => {
  pointSelected = "S12";
  buttonGroup2.updateSingleButton({ color: "secondary" }, 4);
  ggb1.instance.setValue("shownVal", 4);
  buttonClickFunction();
});


autorun(() => {
  //runs button script for yes/no
  //if yes...
  if (select1.data.selected == "0") {
    ggb1.instance.setVisible("text1", false);
    ggb1.instance.setVisible(pointSelected, true);
    ggb1.instance.setPointStyle(pointSelected, 10);
    ggb1.instance.setColor(pointSelected, 0, 127, 175);
    ggb1.instance.evalCommand("SelectObjects()");
    select1.updateData({ selected: '', visible: false });
    text3.updateData({ visible: false });
  }
  //if no...
  if (select1.data.selected == "1") {
    ggb1.instance.setVisible("text1", false);
    ggb1.instance.setVisible(pointSelected, true);
    ggb1.instance.setPointStyle(pointSelected, 1);
    ggb1.instance.setColor(pointSelected, 218, 41, 28);
    ggb1.instance.evalCommand("SelectObjects()");
    select1.updateData({ selected: '', visible: false });
    text3.updateData({ visible: false });
  }

  //register variables determining how many yes/no buttons selected and which number chosen
  let count = ggb1.innerData["counter"];
  let num = ggb1.innerData["shownVal"];
  //if a valid number is selected, show yes/no and text
  if (num > -10) {
    select1.updateData({ visible: true });
    text3.updateData({ text: `Is $${num}$ a solution?`, visible: true });
  }
  //if all numbers have been selected, show share button.  If not, hide it.
  if (count > 13) {
    text1.updateData({ visible: true });
    button1.updateData({ visible: true });
    input1.updateData({ visible: true });
  } else {
    text1.updateData({ visible: false });
    button1.updateData({ visible: false });
    input1.updateData({ visible: false });
  }
});