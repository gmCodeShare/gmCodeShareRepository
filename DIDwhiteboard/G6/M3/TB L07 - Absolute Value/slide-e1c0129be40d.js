const { ggb1, feedback1, text1, select1, text2, select2 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text2.updateData({ visible: false });
    select2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('BluePoint', hide);

function hide() {
  ggb1.instance.setValue('show', false);
}

autorun(() => {
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    select2.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":2},"stage":"Learn","lessonInfo":"6 M3 TB L07 - Absolute Value","teacherView":false,"layout":"two col"}
*/
