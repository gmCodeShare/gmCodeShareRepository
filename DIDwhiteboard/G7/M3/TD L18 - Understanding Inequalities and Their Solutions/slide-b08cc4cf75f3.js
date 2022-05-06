const {
  separator7,
  text4,
  ggb1,
  text3,
  ggb2,
  feedback1,
  text1,
  button2,
  text5,
  cc_sharewithclass_0187fa47e8ae_textbox1: shareText1,
  cc_sharewithclass_0187fa47e8ae_input1: shareInput1,
  cc_sharewithclass_0187fa47e8ae_button1: shareButton1,
  cc_sharewithclass_0187fa47e8ae_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text5.updateData({ visible: false });
    text4.updateData({ align: 'center' });
    text3.updateData({ align: 'center' });
    shareText1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

button2.on('click', () => {
  button2.updateData({
    disabled: true,
    text: 'Submitted',
  });
  if (
    ggb1.instance.getValue('openPoint') == 0 ||
    Math.abs(ggb1.instance.getXcoord('D') - 6) > 0.1 ||
    ggb1.instance.getValue('blueA') == 0 ||
    ggb2.instance.getValue('openPoint') == 0 ||
    Math.abs(ggb2.instance.getXcoord('A') - 6) > 0.1 ||
    ggb2.instance.getValue('blueA') == 0
  ) {
    text5.updateData({ visible: true });
    shareText1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
  } else {
    text5.updateData({ visible: false });
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
  }
});

autorun(() => {
  let reup = ggb1.innerData['A'];
  let reup2 = ggb2.innerData['D'];
  let click = ggb1.innerData['blueA'];
  let click2 = ggb2.innerData['blueA'];
  let open = ggb1.innerData['openPoint'];
  let open2 = ggb2.innerData['openPoint'];
  button2.updateData({
    disabled: false,
    text: 'Submit',
  });
  text5.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
});

/*
{"compTotals":{"separator":1,"textbox":5,"geogebra":2,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
