const { button1, separator1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateData({ imageA: ggb1.instance.getPNGBase64(1, true, 300) });
    ggb1.updateData({ save64: ggb1.instance.getBase64() });

    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

let shadowFill = 0.2;
let normalFill = 1;

let tableCell00;
let tableCell01;

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("showResultBool", true);
  ggb1.updateData({ imageA: ggb1.instance.getPNGBase64(1, true, 300) });
  ggb1.updateData({ save64: ggb1.instance.getBase64() });
});

/*autorun(() => {
  let cell00 = table1.getCell(0, 0).value;
  let cell01 = table1.getCell(0, 1).value;
  ggb1.updateInnerData({ tableSubmittedBool: false });
  ggb1.instance.setFilling('objADisplay', normalFill);
  ggb1.instance.setFilling('objBDisplay', normalFill);
  tableCell00 = cell00;
  tableCell01 = cell01;
  if (cell00 == '' || cell01 == '') {
    button2.updateData({ disabled: true });
  } else {
    button2.updateData({ disabled: false });
  }
});

button2.on('click', () => {
  ggb1.updateInnerData({
    tableSubmittedBool: true,
    valFromTable1: tableCell00,
    valFromTable2: tableCell01,
  });
  ggb1.instance.setFilling('objADisplay', shadowFill);
  ggb1.instance.setFilling('objBDisplay', shadowFill);
  button2.updateData({ disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});*/

/*
{"compTotals":{"button":1,"separator":1,"geogebra":1},"stage":"Learn","lessonInfo":"8 M5 TC L12 - Print Alternate Slide Deck for Solving Historical Problems with Systems of Equations​","teacherView":true,"layout":"one col"}
*/
