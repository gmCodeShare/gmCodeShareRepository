const { Textbox1, ggb1, feedback, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.evalCommand('RunClickScript(button1)');
    button1.updateData({ disabled: true });
    button1.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}

const id1 = `slide-72dd83784034`;
let num1 =
  getFromSlide(id1, 'cc_sharewithclass_f763ad53b1a8_input1.data.text', '') ||
  '';

if (!num1) {
  num1 = num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
}

text1.updateData({
  text: `You said that Noor's earnings for the $5$ days are equivalent to $${num1}$.  

Create a tape diagram that models your thinking.`,
});

ggb1.instance.registerObjectUpdateListener('WL1', update);
ggb1.instance.registerObjectUpdateListener('WL2', update);
ggb1.instance.registerObjectUpdateListener('WL3', update);
ggb1.instance.registerObjectUpdateListener('WL4', update);
ggb1.instance.registerObjectUpdateListener('WL5', update);
ggb1.instance.registerObjectUpdateListener('CL1', update);
ggb1.instance.registerObjectUpdateListener('CL2', update);
ggb1.instance.registerObjectUpdateListener('CL3', update);
ggb1.instance.registerObjectUpdateListener('CL4', update);
ggb1.instance.registerObjectUpdateListener('CL5', update);
ggb1.instance.registerObjectUpdateListener('TL1', update);
ggb1.instance.registerObjectUpdateListener('TL2', update);
ggb1.instance.registerObjectUpdateListener('TL3', update);
ggb1.instance.registerObjectUpdateListener('TL4', update);
ggb1.instance.registerObjectUpdateListener('TL5', update);

button1.on('click', () => {
  button1.updateData({ disabled: true });
});

function update() {
  button1.updateData({ disabled: false });
}

/*
{"compTotals":{"textbox":3,"geogebra":1,"button":1},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
