const { buttonGroup1, text3, ggb1, table1, feedback1, separator6 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('C3', false);
    ggb1.updateData({ visible: false });
    table1.updateData({ visible: false });

    ggb1.instance.setVisible('pic3', false);
    ggb1.instance.setVisible('Point1', false);
    ggb1.instance.setVisible('Point2', false);
    ggb1.instance.setVisible('Point3', false);
    ggb1.instance.setVisible('Point4', false);
    ggb1.instance.setVisible('Point5', false);
    ggb1.instance.setVisible('C1', false);
    ggb1.instance.setVisible('C2', false);
    ggb1.instance.setGridVisible(false);
    ggb1.instance.setAxesVisible(false, false);

    ggb1.updateData({ init: true });
  }
}

let num;
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  let num = 'table';
  ggb1.updateData({ visible: false });
  table1.updateData({ visible: true });
  /*ggb1.instance.setVisible("pic3", true);
ggb1.instance.setVisible("Point1", false);
ggb1.instance.setVisible("Point2", false);
ggb1.instance.setVisible("Point3", false);
ggb1.instance.setVisible("Point4", false);
ggb1.instance.setVisible("Point5", false);
ggb1.instance.setVisible("text1", false);
ggb1.instance.setVisible("text2", false);
ggb1.instance.setGridVisible(false);
ggb1.instance.setAxesVisible(false, false);
ggb1.instance.setVisible("text3", false);
ggb1.updateData({visible:true});
text1.updateData({visible:true});
input1.updateData({visible:true});
button1.updateData({visible:true});*/
});
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  let num = 'graph';
  ggb1.instance.setVisible('pic3', false);
  ggb1.instance.setVisible('Point1', true);
  ggb1.instance.setVisible('Point2', true);
  ggb1.instance.setVisible('Point3', true);
  ggb1.instance.setVisible('Point4', true);
  ggb1.instance.setVisible('Point5', true);
  ggb1.instance.setVisible('C1', true);
  ggb1.instance.setVisible('C2', true);
  ggb1.instance.setGridVisible(true);
  ggb1.instance.setAxesVisible(true, true);
  ggb1.instance.setVisible('C3', false);
  ggb1.updateData({ visible: true });
  table1.updateData({ visible: false });
  ggb1.instance.setAxisLabels(1, '$\\mathit{h}$', '$\\mathit{t}$');
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  let num = 'equation';
  ggb1.updateData({ visible: true });
  table1.updateData({ visible: false });
  ggb1.instance.setVisible('C3', true);
  ggb1.instance.setVisible('pic3', false);
  ggb1.instance.setVisible('Point1', false);
  ggb1.instance.setVisible('Point2', false);
  ggb1.instance.setVisible('Point3', false);
  ggb1.instance.setVisible('Point4', false);
  ggb1.instance.setVisible('Point5', false);
  ggb1.instance.setVisible('C1', false);
  ggb1.instance.setVisible('C2', false);
  ggb1.instance.setGridVisible(false);
  ggb1.instance.setAxesVisible(false, false);
});

/*
{"compTotals":{"buttongroup":1,"textbox":2,"geogebra":1,"table":1,"separator":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Print Alt Slide Deck Graphs of Ratio Relationships","teacherView":true,"layout":"one col"}
*/
