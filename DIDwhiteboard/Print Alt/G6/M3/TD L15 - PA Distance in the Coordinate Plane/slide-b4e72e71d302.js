const { ggb1, separator1, feedback, ggb2, buttonGroup1 } = components;

components.feedback.updateData({ visible: false });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb1.updateData({ init: true });
  }
}

ggb2.instance.registerObjectUpdateListener('length', updateRight);

function updateRight() {
  ggb1.instance.setValue('length', ggb2.instance.getValue('length'));
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('c', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('c', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":2,"separator":1,"textbox":1,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - PA Distance in the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
