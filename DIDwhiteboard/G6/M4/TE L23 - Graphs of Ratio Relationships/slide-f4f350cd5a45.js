const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback1,
  text2,
  radio1,
  text3,
  radio2,
  ggb2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('xAxisDepend', false);
    ggb1.instance.setValue('gallons', 0);
    ggb2.instance.setValue('gallons', 0);
    ggb1.instance.setValue('gallons2', 0);
    ggb2.instance.setValue('gallons2', 0);
    ggb1.instance.setVisible('xAxisInDepend', false);
    ggb1.instance.setVisible('yAxisDepend', false);
    ggb1.instance.setVisible('yAxisInDepend', false);
    ggb2.updateData({ visible: false });
    button1.updateData({ disabled: true });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  const xaxis = radio1.data.selected;
  // console.log(xaxis);
  switch (xaxis) {
    case '1':
      ggb1.instance.setVisible('xAxisDepend', true);
      ggb1.instance.setVisible('xAxisInDepend', false);
      ggb1.instance.setValue('on', true);
      ggb1.instance.setValue('gallons', 0);
      ggb2.instance.setValue('gallons', 0);
      ggb1.instance.setValue('gallons2', 0);
      ggb2.instance.setValue('gallons2', 0);
      ggb1.instance.setAnimating('gallons', false);
      ggb1.instance.setAnimating('gallons2', false);
      ggb2.instance.setAnimating('gallons', false);
      ggb2.instance.setAnimating('gallons2', false);
      ggb1.instance.setAxisLabels(1, '$\\mathit{}$', '$\\mathit{}$');

      break;
    case '0':
      ggb1.instance.setVisible('xAxisDepend', false);
      ggb1.instance.setVisible('xAxisInDepend', true);
      ggb1.instance.setValue('on', false);
      ggb1.instance.setValue('gallons', 0);
      ggb2.instance.setValue('gallons', 0);
      ggb1.instance.setValue('gallons2', 0);
      ggb2.instance.setValue('gallons2', 0);
      ggb1.instance.setAnimating('gallons', false);
      ggb1.instance.setAnimating('gallons2', false);
      ggb2.instance.setAnimating('gallons', false);
      ggb2.instance.setAnimating('gallons2', false);
      ggb1.instance.setAxisLabels(1, '$\\mathit{}$', '$\\mathit{}$');
  }
  const yaxis = radio2.data.selected;
  // console.log(yaxis);
  switch (yaxis) {
    case '1':
      ggb1.instance.setVisible('yAxisDepend', true);
      ggb1.instance.setVisible('yAxisInDepend', false);
      ggb1.instance.setValue('onY', true);
      ggb1.instance.setValue('gallons', 0);
      ggb2.instance.setValue('gallons', 0);
      ggb1.instance.setValue('gallons2', 0);
      ggb2.instance.setValue('gallons2', 0);
      ggb1.instance.setAnimating('gallons', false);
      ggb1.instance.setAnimating('gallons2', false);
      ggb2.instance.setAnimating('gallons', false);
      ggb2.instance.setAnimating('gallons2', false);
      ggb1.instance.setAxisLabels(1, '$\\mathit{}$', '$\\mathit{}$');
      break;
    case '0':
      ggb1.instance.setVisible('yAxisDepend', false);
      ggb1.instance.setVisible('yAxisInDepend', true);
      ggb1.instance.setValue('onY', false);
      ggb1.instance.setValue('gallons', 0);
      ggb2.instance.setValue('gallons', 0);
      ggb1.instance.setValue('gallons2', 0);
      ggb2.instance.setValue('gallons2', 0);
      ggb1.instance.setAnimating('gallons', false);
      ggb1.instance.setAnimating('gallons2', false);
      ggb2.instance.setAnimating('gallons', false);
      ggb2.instance.setAnimating('gallons2', false);
      ggb1.instance.setAxisLabels(1, '$\\mathit{}$', '$\\mathit{}$');
  }

  if (
    (radio1.data.selected == '0' && radio2.data.selected == '1') ||
    (radio1.data.selected == '1' && radio2.data.selected == '0')
  ) {
    button1.updateData({ disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
  /*    if(radio1.data.selected==1 && radio2.data.selected==0){
  button1.updateData({disabled:false});
  }else{
  button1.updateData({disabled:true});
  }*/
});

button1.on('click', () => {
  if (radio1.data.selected == '1') {
    ggb1.instance.setAxisLabels(1, '$\\mathit{c}$', '$\\mathit{g}$');
  } else {
    ggb1.instance.setAxisLabels(1, '$\\mathit{g}$', '$\\mathit{c}$');
  }
  ggb2.updateData({ visible: true });
  button1.updateData({ disabled: true });
  ggb2.instance.evalCommand('RunClickScript(button1)');
  ggb1.instance.evalCommand('RunClickScript(button1)');
});

ggb2.instance.registerObjectUpdateListener('cost', update);
ggb2.instance.registerObjectUpdateListener('cost2', update);

function update() {
  ggb2.instance.setTextValue(
    'text1',
    ggb2.instance.getValue('cost').toFixed(2)
  );
  ggb2.instance.setTextValue(
    'text4',
    ggb2.instance.getValue('cost2').toFixed(2)
  );
  // console.log(ggb1.instance.getValue("cost").toFixed(2));
  // console.log(ggb1.instance.getValue("cost2").toFixed(2));
}

autorun(() => {
  ggb2.updateInnerData({ gallons: ggb1.innerData['gallons'] });
  ggb2.updateInnerData({ gallons2: ggb1.innerData['gallons2'] });
});

/*
{"compTotals":{"textbox":4,"geogebra":2,"separator":1,"button":1,"radiogroup":2},"stage":"Launch","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"T layout"}
*/
