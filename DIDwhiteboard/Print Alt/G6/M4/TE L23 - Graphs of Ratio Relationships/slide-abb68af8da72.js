const { ggb1, feedback1, button1, text2, select1, text3, select2 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('gallons', 0);
    ggb1.instance.setValue('cost', ggb1.instance.getValue('cost1').toFixed(2));
    text3.updateData({ visible: false });
    text2.updateData({ visible: false });
    select1.setVisible(false);
    select2.setVisible(false);
    ggb1.updateData({ init: true });
  }
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

ggb1.instance.registerObjectUpdateListener('gallons', update);
ggb1.instance.registerObjectUpdateListener('cost1', update);

function update() {
  ggb1.instance.setTextValue(
    'text5',
    ggb1.instance.getValue('cost1').toFixed(2)
  );
  if (ggb1.instance.getValue('gallons') >= 3) {
    text2.updateData({ visible: true });
    select1.setVisible(true);
    text3.updateData({ visible: true });
    select2.setVisible(true);
  }
}

/*select1.on('change', ({ selected }) => {
  button2.updateData({
    text: 'Submit',
    disabled: !selected.length,
  });
});

select2.on('change', ({ selected }) => {
  button2.updateData({
    text: 'Submit',
    disabled: !selected.length,
    visible: true,
  });
});
*/

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1,"select":2},"stage":"Launch","lessonInfo":"6 M4 TE L23 - Print Alt Slide Deck Graphs of Ratio Relationships","teacherView":true,"layout":"two col"}
*/
