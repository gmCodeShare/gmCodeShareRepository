const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  text1,
  text2,
  ggb2,
  cc_sharewithclass_3a0d57308484_textbox1,
  cc_sharewithclass_3a0d57308484_input1,
  cc_sharewithclass_3a0d57308484_button1,
  cc_sharewithclass_3a0d57308484_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb2.instance.registerObjectUpdateListener('length', updateRight);
ggb1.instance.registerObjectUpdateListener('C', update);
ggb1.instance.registerObjectUpdateListener('D', update);
ggb1.instance.registerObjectUpdateListener('A', update);
ggb1.instance.registerObjectUpdateListener('B', update);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb2.instance.setValue('length', 5);
    ggb1.updateData({ init: true });
  }
}

function updateRight() {
  ggb1.instance.setValue('length', ggb2.instance.getValue('length'));
}

function update() {
  let firstVert = ggb1.instance.getYcoord('C');
  let secondVert = ggb1.instance.getYcoord('D');
  let firstHori = ggb1.instance.getXcoord('A');
  let secondHori = ggb1.instance.getXcoord('B');
  let length = ggb1.instance.getValue('length');
  if (ggb1.instance.getValue('c') == true) {
    text2.updateData({ text: `$|${firstVert}|+|${secondVert}|=${length}$` });
  }
  if (ggb1.instance.getValue('c') == false) {
    text2.updateData({ text: `$|${firstHori}|+|${secondHori}|=${length}$` });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('c', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('c', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":2,"separator":1,"buttongroup":1,"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - Distance in the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
