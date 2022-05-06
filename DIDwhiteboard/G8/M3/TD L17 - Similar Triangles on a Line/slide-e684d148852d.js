const {
  ggb1,
  feedback1,
  text3,
  button3,
  text4,
  cc_submit_6ff1fe7b670b_textbox1: text1,
  cc_submit_6ff1fe7b670b_input1: input1,
  cc_submit_6ff1fe7b670b_button1: button1,
  separator3,
  cc_sharewithclass_568244c7cd83_textbox1: text2,
  cc_sharewithclass_568244c7cd83_input1: input2,
  cc_sharewithclass_568244c7cd83_button1: button2,
  cc_sharewithclass_568244c7cd83_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

//shows the r= text
ggb1.instance.registerObjectUpdateListener('text1', updateRight);
function updateRight() {
  let anim = (
    3 * ggb1.instance.getValue('animTime') +
    1 -
    ggb1.instance.getValue('animTime')
  ).toFixed(1);
  // console.log(anim);
  text4.updateData({ text: `$r=${anim}$` });
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible("t1'", false);
    ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
    text1.updateData({ visible: false });
    input1.updateData({ visible: false });
    button1.updateData({ visible: false });
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

let data = getFromSlide(`slide-a54624cada0b`, `ggb1`, false) || false;
if (data.innerData && data.innerData.A?.length) {
  ggb1.instance.setCoords('A', data.innerData['A'][0], data.innerData['A'][1]);
}

button3.on('click', () => {
  ggb1.instance.setVisible("t1'", true);
  //ggb1.instance.setLineStyle("c", 2);
  ggb1.instance.setVisible('b', false);
  ggb1.instance.evalCommand('RunClickScript(button1)');
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  ggb1.instance.setValue("initial",false);
});

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"button":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Similar Triangles on a Line","teacherView":false,"layout":"two col"}
*/
