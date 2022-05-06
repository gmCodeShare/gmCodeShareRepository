const {
  ggb1,
  separator1,
  buttonGroup1,
  cc_sharewithclass_7cce33dc83a1_textbox1: shareText1,
  cc_sharewithclass_7cce33dc83a1_input1: shareInput1,
  cc_sharewithclass_7cce33dc83a1_button1: shareButton1,
  cc_sharewithclass_7cce33dc83a1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-a0109e29b7d1';

let data = getFromSlide(id1, 'ggb1', false) || false;

if (data.innerData) {
  ggb1.instance.evalCommand(`Number=(${data.innerData['Number']})`);
  ggb1.instance.evalCommand(`time=(${data.innerData['time']})`);
  if (data.innerData['Number'] == 15) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
} else {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setAnimating('Number', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setValue('Number', 0);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M1 TA L04 - Exploring Ratios by Making Batches","teacherView":false,"layout":"two col"}
*/
