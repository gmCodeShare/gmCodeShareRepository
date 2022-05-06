const { ggb1, separator5, buttonGroup1, feedback } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setValue('spaceMode', true);
  ggb1.instance.setValue('time', 1);
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue(
    'numDollars',
    ggb1.instance.getValue('numDollars') + 1
  );
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"one col"}
*/
