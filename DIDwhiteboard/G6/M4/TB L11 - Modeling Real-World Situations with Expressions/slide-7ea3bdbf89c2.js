const { ggb1, feedback1, text1, select1, button1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('distance', update);
ggb1.instance.registerObjectUpdateListener('cost', update);
ggb1.instance.registerObjectUpdateListener('time', update);
ggb1.instance.registerObjectUpdateListener('timeStop', update);

let timeArray = [0.15, 0.3, 0.5, 0.6, 0.8, 1];

onInit();
function onInit() {
  if (!ggb1.data.init) {
    button1.updateData({ align: 'center' });
    ggb1.updateData({ init: true });
  }
}

function update() {
  let cost = ggb1.instance.getValue('cost').toFixed(2);
  let distance = ggb1.instance.getValue('distance');
  let time = ggb1.instance.getValue('time');
  let timeStop = ggb1.instance.getValue('timeStop');
  if (time == timeStop) {
    text2.updateData({
      text: `Cost: $\\$${cost}$  
Distance: $${distance}$ miles`,
    });
  }
}

button1.on(`click`, () => {
  ggb1.instance.setValue('time', 0.02);
  ggb1.instance.setValue(
    'timeStop',
    timeArray[parseInt(select1.data.selected[0])]
  );
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  button1.updateData({ disabled: true, text: 'Submitted' });
  select1.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":1,"button":1},"stage":"Launch","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"two col"}
*/
