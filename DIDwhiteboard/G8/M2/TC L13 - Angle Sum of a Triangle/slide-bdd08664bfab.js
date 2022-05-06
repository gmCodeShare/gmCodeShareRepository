const {
  ggb1,
  separator3,
  buttongroup1,
  feedback1,
  text1,
  cc_sharewithclass_5798439c25fe_textbox1: text2,
  cc_sharewithclass_5798439c25fe_input1: input2,
  cc_sharewithclass_5798439c25fe_button1: button2,
  cc_sharewithclass_5798439c25fe_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ align: 'center' });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('A', update);
ggb1.instance.registerObjectUpdateListener('B', update);
ggb1.instance.registerObjectUpdateListener('C', update);
ggb1.instance.registerObjectUpdateListener('timeSweep3', update);

function update() {
  if (ggb1.instance.getValue('timeSweep2') == 1) {
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
}

buttongroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  buttongroup1.updateSingleButton({ disabled: false }, 2);
});
buttongroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
