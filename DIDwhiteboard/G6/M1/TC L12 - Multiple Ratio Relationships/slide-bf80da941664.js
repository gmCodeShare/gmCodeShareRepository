const {
  ggb1,
  text1,
  cc_sharewithclass_b59a837f4ae5_textbox1: shareText1,
  cc_sharewithclass_b59a837f4ae5_input1: shareInput1,
  cc_sharewithclass_b59a837f4ae5_button1: shareButton1,
  cc_sharewithclass_b59a837f4ae5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-327a92d99a54';

let data = getFromSlide(id1, `ggb1`, false) || false;

if (data.innerData) {
  ggb1.instance.evalCommand(`blueParts1=(${data.innerData['bluePart']})`);
  ggb1.instance.evalCommand(`redParts1=(${data.innerData['redPart']})`);
  ggb1.instance.evalCommand(`blueParts2=(${data.innerData['bluePart2']})`);
  ggb1.instance.evalCommand(`redParts2=(${data.innerData['redPart2']})`);
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
