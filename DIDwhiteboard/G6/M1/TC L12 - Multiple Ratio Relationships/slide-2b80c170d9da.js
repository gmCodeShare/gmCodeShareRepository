const {
  ggb1,
  table1,
  cc_sharewithclass_1a711709a027_textbox1: shareText1,
  cc_sharewithclass_1a711709a027_input1: shareInput1,
  cc_sharewithclass_1a711709a027_button1: shareButton1,
  cc_sharewithclass_1a711709a027_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-327a92d99a54';

slide.on('firstload', () => {
  ggb1.instance.setVisible('d', true);
  ggb1.instance.setVisible('e', true);
  ggb1.instance.setVisible('H', false);
});

const rowsContent = getFromSlide(id1, 'table1.data.rows', false) || false;

for (let i = 0; i < rowsContent.length; i++) {
  table1.updateCell(i, 1, {
    value: rowsContent[i][1].value,
    math: true,
    editable: false,
  });
}
for (let i = 0; i < rowsContent.length; i++) {
  table1.updateCell(i, 2, {
    value: rowsContent[i][2].value,
    math: true,
    editable: false,
  });
}

if (
  table1.getCell(0, 1).value == '' ||
  table1.getCell(1, 1).value == '' ||
  table1.getCell(0, 2).value == '' ||
  table1.getCell(1, 2).value == ''
) {
  ggb1.instance.setVisible('d', false);
  ggb1.instance.setVisible('e', false);
}
let data = getFromSlide(id1, `ggb1`, false) || false;

if (!typeof data.innerData == 'undefined') {
  ggb1.instance.evalCommand(`bluePart=(${data.innerData['bluePart']})`);
  ggb1.instance.evalCommand(`redPart=(${data.innerData['redPart']})`);
  ggb1.instance.evalCommand(`bluePart2=(${data.innerData['bluePart2']})`);
  ggb1.instance.evalCommand(`redPart2=(${data.innerData['redPart2']})`);
}

/*
{"compTotals":{"geogebra":1,"table":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
