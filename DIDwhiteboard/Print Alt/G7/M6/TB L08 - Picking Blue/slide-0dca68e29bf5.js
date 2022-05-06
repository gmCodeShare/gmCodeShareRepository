const { ggb1, text1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    table1.updateCell(0, 1, { value: '5' });
    table1.updateCell(1, 1, { value: '5' });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('blueCount', addBlue);

function addBlue() {
  let num = ggb1.instance.getValue('blueCount');
  table1.updateCell(0, 1, { value: `$${num}$` });
}

ggb1.instance.registerObjectUpdateListener('redCount', addRed);

function addRed() {
  let num2 = Math.round(ggb1.instance.getValue('redCount') * 1) / 1;
  table1.updateCell(1, 1, { value: `$${num2}$` });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"table":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Print Alt: Picking Blue","teacherView":true,"layout":"two col"}
*/
