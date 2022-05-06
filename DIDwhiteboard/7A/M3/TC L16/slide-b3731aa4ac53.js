const {
  table1,
  feedback1,
  text2,
  radio1,
  cc_sharewithclass_357b93f146bc_textbox1: shareText1,
  cc_sharewithclass_357b93f146bc_input1: shareInput1,
  cc_sharewithclass_357b93f146bc_button1: shareButton1,
  cc_sharewithclass_357b93f146bc_studentanswers1: shareAnswers1,
} = components;

onInit();
function onInit() {
  if (!radio1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareAnswers1.updateData({ visible: false });

    radio1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ["True because ", "False because "];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace(".", ",");
      //shareInput1.updateData({ text: optionArray[radio1.data.selected] });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
{"compTotals":{"table":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
