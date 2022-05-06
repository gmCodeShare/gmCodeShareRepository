const {
  ggb1,
  separator1,
  ggb2,
  text1,
  table1,
  buttonGroup1,
  cc_sharewithclass_aac99cd9a50a_textbox1: shareText1,
  cc_sharewithclass_aac99cd9a50a_input1: shareInput1,
  cc_sharewithclass_aac99cd9a50a_button1: shareButton1,
  cc_sharewithclass_aac99cd9a50a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.instance.setValue('OnMix1', false);
    ggb1.instance.setValue('OnMix2', false);
    ggb2.instance.setVisible('d', false);
    ggb2.instance.setVisible('e', false);

    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  let blueNum = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  if (blueNum.value < 1 || blueNum.error || blueNum.value > 50) {
    return;
  }
  let redNum = utils.math.evaluateLatex(table1.getCell(1, 1).value);
  if (redNum.value < 1 || redNum.error || redNum.value > 50) {
    return;
  }

  ggb1.instance.setValue('redParts1', redNum.value);
  ggb2.instance.setValue('redPart', redNum.value);
  ggb1.instance.setValue('blueParts1', blueNum.value);
  ggb2.instance.setValue('bluePart', blueNum.value);
  ggb1.instance.setValue('OnMix2', true);
  ggb2.instance.setVisible('d', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on('click:2', () => {
  let blueNum2 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  if (blueNum2.value < 1 || blueNum2.error || blueNum2.value > 50) {
    return;
  }
  let redNum2 = utils.math.evaluateLatex(table1.getCell(1, 2).value);
  if (redNum2.value < 1 || redNum2.error || redNum2.value > 50) {
    return;
  }
  ggb1.instance.setValue('blueParts2', blueNum2.value);
  ggb2.instance.setValue('bluePart2', blueNum2.value);
  ggb1.instance.setValue('redParts2', redNum2.value);
  ggb2.instance.setValue('redPart2', redNum2.value);
  ggb1.instance.setValue('OnMix1', true);
  ggb2.instance.setVisible('e', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  let entries = [table1.getCell(0, 1).value, table1.getCell(1, 1).value];
  if (!arrayEquals(entries, ggb1.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      1
    );
    ggb1.updateData({ last: [...entries] });
  }
});

autorun(() => {
  let entries = [table1.getCell(0, 2).value, table1.getCell(1, 2).value];
  if (!arrayEquals(entries, ggb2.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      2
    );
    ggb2.updateData({ last: [...entries] });
  }
});

/*
{"compTotals":{"geogebra":2,"separator":1,"textbox":1,"table":1,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
