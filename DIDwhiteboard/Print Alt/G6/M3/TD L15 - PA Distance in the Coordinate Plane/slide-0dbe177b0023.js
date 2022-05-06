const { ggb1, separator1, feedback, separator2, text3, ggb2, buttonGroup1 } =
  components;

components.feedback.updateData({ visible: false });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    ggb2.instance.setValue('length', 5);
    ggb1.updateData({ init: true });
  }
}

ggb2.instance.registerObjectUpdateListener('length', updateRight);

function updateRight() {
  ggb1.instance.setValue('length', ggb2.instance.getValue('length'));
}

ggb1.instance.registerObjectUpdateListener('C', update);
ggb1.instance.registerObjectUpdateListener('D', update);
ggb1.instance.registerObjectUpdateListener('A', update);
ggb1.instance.registerObjectUpdateListener('B', update);

function update() {
  let firstVert = ggb1.instance.getYcoord('C');
  let secondVert = ggb1.instance.getYcoord('D');
  let firstHori = ggb1.instance.getXcoord('A');
  let secondHori = ggb1.instance.getXcoord('B');
  let length = ggb1.instance.getValue('length');
  if (ggb1.instance.getValue('c') == true) {
    text3.updateData({
      text: `$\\huge{|${firstVert}|+|${secondVert}|=${length}}$`,
    });
  }
  if (ggb1.instance.getValue('c') == false) {
    text3.updateData({
      text: `$\\huge{|${firstHori}|+|${secondHori}|=${length}}$`,
    });
  }
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
{"compTotals":{"geogebra":2,"separator":2,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"6 M3 TD L15 - PA Distance in the Coordinate Plane","teacherView":true,"layout":"two col"}
*/
