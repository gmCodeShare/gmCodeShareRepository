const {
  ggb1,
  feedback1,
  text1,
  text2,
  buttonGroup1,
  text3,
  separator1,
  buttonGroup2,
  cc_submit_7c076d9c5077_textbox1,
  cc_submit_7c076d9c5077_input1,
  cc_submit_7c076d9c5077_button1: submitButton1,
  separator2,
  cc_sharewithclass_6b37376c84a5_textbox1: shareText1,
  cc_sharewithclass_6b37376c84a5_input1: shareInput1,
  cc_sharewithclass_6b37376c84a5_button1: shareButton1,
  cc_sharewithclass_6b37376c84a5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

var FirstList = ['230', '23', '2', '', ''];
var FirstList2 = ['.000000', '.000000', '.300000', '.230000', '.023000'];
var SecondList = ['560', '56', '5', '', ''];
var SecondList2 = ['.000000', '.000000', '.600000', '.560000', '.056000'];
var ThirdList = ['128800', '12880', '1288', '128', '12', '1', '', '', ''];
var ThirdList2 = [
  '.000000',
  '.000000',
  '.000000',
  '.800000',
  '.880000',
  '.288000',
  '.128800',
  '.012880',
  '.001288',
];

let Count1 = 0;
let Count2 = 0;
let countFirst = 1;
let countSecond = 1;
let countThird = countFirst + countSecond;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('count1', Count1);
    ggb1.instance.setValue('count2', Count2);
    ggb1.instance.setTextValue('firstList', FirstList[countFirst]);
    ggb1.instance.setTextValue('firstList2', FirstList2[countFirst]);
    ggb1.instance.setTextValue('secondList', SecondList[countSecond]);
    ggb1.instance.setTextValue('secondList2', SecondList2[countSecond]);
    ggb1.instance.setTextValue('thirdList', ThirdList[countThird]);
    ggb1.instance.setTextValue('thirdList2', ThirdList2[countThird]);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  Count1 += 1;
  countFirst -= 1;
  let countThird = countFirst + countSecond;
  ggb1.instance.setValue('count1', Count1);
  ggb1.instance.setValue('count2', Count2);
  if (Count1 == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  if (Count1 == -3) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
  ggb1.instance.setTextValue('firstList', FirstList[countFirst]);
  ggb1.instance.setTextValue('firstList2', FirstList2[countFirst]);
  ggb1.instance.setTextValue('secondList', SecondList[countSecond]);
  ggb1.instance.setTextValue('secondList2', SecondList2[countSecond]);
  ggb1.instance.setTextValue('thirdList', ThirdList[countThird]);
  ggb1.instance.setTextValue('thirdList2', ThirdList2[countThird]);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  Count1 -= 1;
  countFirst += 1;
  let countThird = countFirst + countSecond;
  ggb1.instance.setValue('count1', Count1);
  ggb1.instance.setValue('count2', Count2);
  if (Count1 == -3) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
  ggb1.instance.setTextValue('firstList', FirstList[countFirst]);
  ggb1.instance.setTextValue('firstList2', FirstList2[countFirst]);
  ggb1.instance.setTextValue('secondList', SecondList[countSecond]);
  ggb1.instance.setTextValue('secondList2', SecondList2[countSecond]);
  ggb1.instance.setTextValue('thirdList', ThirdList[countThird]);
  ggb1.instance.setTextValue('thirdList2', ThirdList2[countThird]);
});

buttonGroup2.on('click:1', () => {
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  Count2 += 1;
  countSecond -= 1;
  let countThird = countFirst + countSecond;
  ggb1.instance.setValue('count1', Count1);
  ggb1.instance.setValue('count2', Count2);
  if (Count2 == 1) {
    buttonGroup2.updateSingleButton({ disabled: true }, 1);
  }
  if (Count2 == -3) {
    buttonGroup2.updateSingleButton({ disabled: true }, 2);
  }
  ggb1.instance.setTextValue('firstList', FirstList[countFirst]);
  ggb1.instance.setTextValue('firstList2', FirstList2[countFirst]);
  ggb1.instance.setTextValue('secondList', SecondList[countSecond]);
  ggb1.instance.setTextValue('secondList2', SecondList2[countSecond]);
  ggb1.instance.setTextValue('thirdList', ThirdList[countThird]);
  ggb1.instance.setTextValue('thirdList2', ThirdList2[countThird]);
});

buttonGroup2.on('click:2', () => {
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  Count2 -= 1;
  countSecond += 1;
  let countThird = countFirst + countSecond;
  ggb1.instance.setValue('count1', Count1);
  ggb1.instance.setValue('count2', Count2);
  if (Count2 == 1) {
    buttonGroup2.updateSingleButton({ disabled: true }, 1);
  }
  if (Count2 == -3) {
    buttonGroup2.updateSingleButton({ disabled: true }, 2);
  }
  ggb1.instance.setTextValue('firstList', FirstList[countFirst]);
  ggb1.instance.setTextValue('firstList2', FirstList2[countFirst]);
  ggb1.instance.setTextValue('secondList', SecondList[countSecond]);
  ggb1.instance.setTextValue('secondList2', SecondList2[countSecond]);
  ggb1.instance.setTextValue('thirdList', ThirdList[countThird]);
  ggb1.instance.setTextValue('thirdList2', ThirdList2[countThird]);
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"buttongroup":2,"separator":2,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TD L14 - Patterns in Multiplying Decimals","teacherView":false,"layout":"two col"}
*/
