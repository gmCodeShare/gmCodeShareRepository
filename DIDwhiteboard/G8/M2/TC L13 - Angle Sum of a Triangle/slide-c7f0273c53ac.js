const {
  ggb1,
  feedback1,
  text2,
  separator5,
  buttongroup1,
  separator6,
  cc_sharewithclass_e947c8c8fb0e_textbox1: text1,
  cc_sharewithclass_e947c8c8fb0e_input1: input1,
  cc_sharewithclass_e947c8c8fb0e_button1: button1,
  cc_sharewithclass_e947c8c8fb0e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('time', update);

function update() {
  if (ggb1.instance.getValue('time') == 1) {
    text1.updateData({ visible: true });
    input1.updateData({ visible: true });
    button1.updateData({ visible: true });
  }
}

buttongroup1.on('click:1', () => {
  alert('button1 clicked!');
  ggb1.instance.evalCommand('RunClickScript(split)');
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  buttongroup1.updateSingleButton({ disabled: false }, 2);
});

buttongroup1.on('click:2', () => {
  alert('button2 clicked!');
  ggb1.instance.evalCommand('RunClickScript(button1)');
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":2,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
