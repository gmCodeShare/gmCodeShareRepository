const { ggb1, separator1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    button1.updateData({ disabled: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

button1.on('click', show);

function show() {
  ggb1.instance.setValue('x1', 16);
  ggb1.instance.setValue('x3', 14);
  ggb1.instance.setValue('x6', 12);
  ggb1.instance.setValue('x8', 13);
  ggb1.instance.setValue('x13', 15);
  ggb1.instance.setValue('x14', 16);
  ggb1.instance.setValue('x17', 14);
  ggb1.instance.setValue('x18', 25);
  ggb1.instance.setValue('x19', 14);
  ggb1.instance.setValue('x20', 21);
  ggb1.instance.setValue('x24', 20);
  ggb1.instance.setValue('x26', 30);
  ggb1.instance.setValue('x28', 19);
  ggb1.instance.setValue('x30', 17);
  ggb1.instance.setValue('x32', 23);
  ggb1.instance.setFixed('P1', false, true);
  ggb1.instance.setFixed('P3', false, true);
  ggb1.instance.setFixed('P6', false, true);
  ggb1.instance.setFixed('P8', false, true);
  ggb1.instance.setFixed('P13', false, true);
  ggb1.instance.setFixed('P14', false, true);
  ggb1.instance.setFixed('P17', false, true);
  ggb1.instance.setFixed('P18', false, true);
  ggb1.instance.setFixed('P19', false, true);
  ggb1.instance.setFixed('P20', false, true);
  ggb1.instance.setFixed('P24', false, true);
  ggb1.instance.setFixed('P26', false, true);
  ggb1.instance.setFixed('P28', false, true);
  ggb1.instance.setFixed('P30', false, true);
  ggb1.instance.setFixed('P32', false, true);
  ggb1.instance.setValue('show', false);
  button1.updateData({ disabled: true });
}

ggb1.instance.registerObjectUpdateListener('show', reveal);

function reveal() {
  if (ggb1.instance.getValue('show')) {
    button1.updateData({ disabled: false });
  }
}

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Print Alt: Choosing a Measure of Center","teacherView":true,"layout":"one col"}
*/
