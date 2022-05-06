const {
  ggb1,
  feedback1,
  text1,
  table1,
  cc_sharewithclass_08883e0adaa2_textbox1,
  cc_sharewithclass_08883e0adaa2_input1,
  cc_sharewithclass_08883e0adaa2_button1,
  cc_sharewithclass_08883e0adaa2_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states

    /*   components.cc_sharewithclass_08883e0adaa2_textbox1.updateData({visible: false});
      components.cc_sharewithclass_08883e0adaa2_input1.updateData({visible: false});
      components.cc_sharewithclass_08883e0adaa2_button1.updateData({visible: false});*/
    components.cc_sharewithclass_08883e0adaa2_button1.updateData({
      align: 'right',
    });

    table1.updateCell(0, 1, { value: '5' });
    table1.updateCell(1, 1, { value: '5' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*   autorun(() => {
  let A = ggb1.innerData["A"];
  if (ggb1.innerData["showPrompt"]) {
      components.cc_sharewithclass_08883e0adaa2_textbox1.updateData({visible: true});
      components.cc_sharewithclass_08883e0adaa2_input1.updateData({visible: true});
      components.cc_sharewithclass_08883e0adaa2_button1.updateData({visible: true});
  }
});*/

ggb1.instance.registerObjectUpdateListener('blueCount', addBlue);

function addBlue() {
  // let num= Math.round(ggb1.instance.getValue("blueCount")*1)/1;
  let num = ggb1.instance.getValue('blueCount');
  table1.updateCell(0, 1, { value: `$${num}$` });
}

ggb1.instance.registerObjectUpdateListener('redCount', addRed);

function addRed() {
  let num2 = Math.round(ggb1.instance.getValue('redCount') * 1) / 1;
  table1.updateCell(1, 1, { value: `$${num2}$` });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"two col"}
*/
