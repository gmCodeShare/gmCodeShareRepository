const { ggb1, text1, image1, text2, ggb2, text3 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
ggb2.instance.registerObjectUpdateListener('t1Num', update);
ggb2.instance.registerObjectUpdateListener('b1Num', update);
ggb2.instance.registerObjectUpdateListener('t2Num', update);
ggb2.instance.registerObjectUpdateListener('b2Num', update);
ggb2.instance.registerObjectUpdateListener('t3Num', update);
ggb2.instance.registerObjectUpdateListener('b3Num', update);
ggb2.instance.registerObjectUpdateListener('t4Num', update);
ggb2.instance.registerObjectUpdateListener('b4Num', update);
ggb2.instance.registerObjectUpdateListener('t5Num', update);
ggb2.instance.registerObjectUpdateListener('b5Num', update);

function update() {
  ggb1.instance.setValue('t2Num', ggb2.instance.getValue('t2Num'));
  ggb1.instance.setValue('b2Num', ggb2.instance.getValue('b2Num'));
  ggb1.instance.setValue('t3Num', ggb2.instance.getValue('t3Num'));
  ggb1.instance.setValue('b3Num', ggb2.instance.getValue('b3Num'));
  ggb1.instance.setValue('t4Num', ggb2.instance.getValue('t4Num'));
  ggb1.instance.setValue('b4Num', ggb2.instance.getValue('b4Num'));
  ggb1.instance.setValue('t5Num', ggb2.instance.getValue('t5Num'));
  ggb1.instance.setValue('b5Num', ggb2.instance.getValue('b5Num'));

  let num1 =
    ((ggb2.instance.getValue('t1Num') / ggb2.instance.getValue('b1Num')) * 4) /
    3;
  let num2 =
    ((ggb2.instance.getValue('t2Num') / ggb2.instance.getValue('b2Num')) * 4) /
    3;
  let num3 =
    ((ggb2.instance.getValue('t3Num') / ggb2.instance.getValue('b3Num')) * 4) /
    3;
  let num4 =
    ((ggb2.instance.getValue('t4Num') / ggb2.instance.getValue('b4Num')) * 4) /
    3;
  let num5 =
    ((ggb2.instance.getValue('t5Num') / ggb2.instance.getValue('b5Num')) * 4) /
    3;
  let Total = num1 + num2 + num3 + num4 + num5;

  if (
    ggb2.instance.getValue('b5Num') > 0 &&
    ggb2.instance.getValue('t5Num') > 0 &&
    ggb2.instance.getValue('t1Num') > 0 &&
    ggb2.instance.getValue('b1Num') > 0 &&
    ggb2.instance.getValue('t2Num') > 0 &&
    ggb2.instance.getValue('b2Num') > 0 &&
    ggb2.instance.getValue('t3Num') > 0 &&
    ggb2.instance.getValue('b3Num') > 0 &&
    ggb2.instance.getValue('t4Num') > 0 &&
    ggb2.instance.getValue('b4Num') > 0 &&
    Total !== 5
  ) {
    text3.updateData({
      text: `You have at least one point that does not represent the relationship $$3$ every $4$ days. `,
    });
  }
  if (
    ggb2.instance.getValue('b5Num') > 0 &&
    ggb2.instance.getValue('t5Num') > 0 &&
    ggb2.instance.getValue('t1Num') > 0 &&
    ggb2.instance.getValue('b1Num') > 0 &&
    ggb2.instance.getValue('t2Num') > 0 &&
    ggb2.instance.getValue('b2Num') > 0 &&
    ggb2.instance.getValue('t3Num') > 0 &&
    ggb2.instance.getValue('b3Num') > 0 &&
    ggb2.instance.getValue('t4Num') > 0 &&
    ggb2.instance.getValue('b4Num') > 0 &&
    Total == 5
  ) {
    text3.updateData({
      text: `All of your points represent the relationship of $$3.00$ every $4$ days. `,
    });
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":3,"uploaded-image":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
