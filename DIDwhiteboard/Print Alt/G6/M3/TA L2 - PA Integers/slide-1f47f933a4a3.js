const { ggb1, feedback, text1, separator1, button1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setPointSize('movingCenterPoint', 9);
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  let changeText = ggb1.instance.getValue('switch');
  if (changeText) {
    button1.updateData({ text: 'Vertical' });
    ggb1.instance.evalCommand('RunClickScript(button1)');
  } else {
    button1.updateData({ text: 'Horizontal' });
    ggb1.instance.evalCommand('RunClickScript(button1)');
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":1,"button":1},"stage":"Launch","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"two col"}
*/
