const {
  text1,
  ggb1,
  separator2,
  buttonGroup1,
  feedback1,
  text2,
  cc_sharewithclass_1ff8e22ed745_textbox1: shareText1,
  cc_sharewithclass_1ff8e22ed745_input1: shareInput1,
  cc_sharewithclass_1ff8e22ed745_button1: shareButton1,
  cc_sharewithclass_1ff8e22ed745_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  //buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
});
// let data = getFromSlide('slide-7793d711ccda', 'ggb2');
let data = getFromSlide("slide-7793d711ccda", "ggb2", false || false);
let aVal, bVal;
if (data.innerData) {
  aVal = data.innerData["a"];
  bVal = data.innerData["b"];
  ggb1.instance.setValue("a", aVal);
  ggb1.instance.setValue("b", bVal);
}

//ggb1.instance.setValue("a",2);
//ggb1.instance.setValue("b",5);

ggb1.instance.setValue("step", 7);
ggb1.instance.setValue("time1a", Math.PI / 2);
ggb1.instance.setValue("time2a", Math.PI / 2);
ggb1.instance.setValue("time3a", Math.PI / 2);
ggb1.instance.setValue("time1b", Math.PI / 2);
ggb1.instance.setValue("time2b", Math.PI / 2);
ggb1.instance.setValue("time3b", Math.PI / 2);
ggb1.instance.setValue("time4", 0);
ggb1.instance.setValue("time5", 1);

/*autorun(() => {
  let leftTri = ggb1.innerData['B'];
  let rightTri = ggb1.innerData['C'];
  //console.log(ggb1.instance.getValue('Distance(B,TriLeft)'));
  //console.log(ggb1.instance.getValue('Distance(C,TriLeft+(a+b,0))'));
  if (
    ggb1.instance.getValue("Distance(B,TriLeft)") > 0.5 ||
    ggb1.instance.getValue("Distance(C,TriLeft+(a+b,0))") > 0.5
  ) {
    //button1.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});*/

//show angle measures
/*button1.on('click', () => {
  ggb1.instance.setValue('step', 7);
  ggb1.instance.setValue('time1a', Math.PI / 2);
  ggb1.instance.setValue('time2a', Math.PI / 2);
  ggb1.instance.setValue('time3a', Math.PI / 2);
  ggb1.instance.setValue('time1b', Math.PI / 2);
  ggb1.instance.setValue('time2b', Math.PI / 2);
  ggb1.instance.setValue('time3b', Math.PI / 2);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setValue('time5', 1);
  console.log(ggb1.instance.getValue('step'));
  ggb1.instance.evalCommand('RunClickScript(button2)');
  text2.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  button1.updateData({ text: "Reset" });
  button1.updateData({ visible: false });
});*/

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("step", 7);
  ggb1.instance.setValue("time1a", Math.PI / 2);
  ggb1.instance.setValue("time2a", Math.PI / 2);
  ggb1.instance.setValue("time3a", Math.PI / 2);
  ggb1.instance.setValue("time1b", Math.PI / 2);
  ggb1.instance.setValue("time2b", Math.PI / 2);
  ggb1.instance.setValue("time3b", Math.PI / 2);
  ggb1.instance.setValue("time4", 0);
  ggb1.instance.setValue("time5", 1);
  console.log(ggb1.instance.getValue("step"));
  ggb1.instance.evalCommand("RunClickScript(button2)");
  text2.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  //button1.updateData({ text: 'Reset' });
  //button1.updateData({ visible: false });
});

/*buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('enableButton', false);
});*/

/*ggb1.instance.registerObjectUpdateListener('enableButton', buttonWork);

function buttonWork() {
  if (ggb1.instance.getValue('enableButton')) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}*/

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"buttongroup":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
