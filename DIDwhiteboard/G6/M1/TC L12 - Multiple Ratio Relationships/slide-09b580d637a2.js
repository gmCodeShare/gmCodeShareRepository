const {
  ggb1,
  text1,
  cc_sharewithclass_b59a837f4ae5_textbox1: shareText1,
  cc_sharewithclass_b59a837f4ae5_input1: shareInput1,
  cc_sharewithclass_b59a837f4ae5_button1: shareButton1,
  cc_sharewithclass_b59a837f4ae5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-042033649309';

let blueNum1 = getFromSlide(id1, `input1.data.text`, false) || false;
let redNum1 = getFromSlide(id1, `input2.data.text`, false) || false;
let blueNum2 = getFromSlide(id1, `input3.data.text`, false) || false;
let redNum2 = getFromSlide(id1, `input4.data.text`, false) || false;

if (blueNum1) {
  ggb1.instance.setValue('blueParts1', blueNum1);
}

if (redNum1) {
  ggb1.instance.setValue('redParts1', redNum1);
}

if (blueNum2) {
  ggb1.instance.setValue('blueParts2', blueNum2);
}

if (redNum2) {
  ggb1.instance.setValue('redParts2', redNum2);
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
