const {
  ggb1,
  text1,
  buttonGroup1,
  separator1,
  cc_sharewithclass_0e4f626f8266_textbox1: shareText1,
  cc_sharewithclass_0e4f626f8266_input1: shareInput1,
  cc_sharewithclass_0e4f626f8266_button1: shareButton1,
  cc_sharewithclass_0e4f626f8266_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('numOfTiles', update);
ggb1.instance.registerObjectUpdateListener('time', update);

let id1 = 'slide-934c81c7905a';

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    ggb1.updateData({ init: true });
  }
}

let data = getFromSlide(id1, 'ggb1', false) || false;

if (data.innerData) {
  ggb1.instance.evalCommand(`numOfTiles=(${data.innerData['numOfTiles']})`);
  ggb1.instance.evalCommand(`time=(${data.innerData['time']})`);
  ggb1.instance.setCoords(
    'tile1T1SliderPoint',
    data.innerData['tile1T1SliderPoint'][0],
    data.innerData['tile1T1SliderPoint'][1]
  );
  ggb1.instance.setCoords(
    'tile1T2SliderPoint',
    data.innerData['tile1T2SliderPoint'][0],
    data.innerData['tile1T2SliderPoint'][1]
  );
} else {
  ggb1.instance.setValue('numOfTiles', 1);
}

function update() {
  let num = ggb1.instance.getValue('numOfTiles');
  text1.updateData({ text: `Number of Batches: $${num}$` });
  if (
    ggb1.instance.getValue('time') == 0 ||
    ggb1.instance.getValue('time') == 1
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  if (
    ggb1.instance.getValue('numOfTiles') > 1 &&
    ggb1.instance.getValue('time') == 0
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  if (ggb1.instance.getValue('numOfTiles') == 10) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  if (ggb1.instance.getValue('numOfTiles') == 10) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
