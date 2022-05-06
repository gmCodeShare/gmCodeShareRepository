const {
  ggb1,
  feedback,
  text1,
  ggb2,
  Separator2,
  button1,
  separator1,
  text2,
  input2,
  text3,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.evalCommand('RunClickScript(button1)');
    ggb2.instance.evalCommand('RunClickScript(button1)');
    button2.updateData({ visible: false });
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    text3.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    input2.updateData({ visible: false });
    button2.updateData({ disabled: true });
    ggb2.instance.setVisible('TextNumber', false);
    ggb1.instance.evalCommand('RunClickScript(button2)');
    ggb1.updateData({ init: true });
  }
}

const id1 = `slide-1feda3178d3b`;

let defPrevGGB1 = {
  innerData: { D: [4.5, 4.5] },
};

let data = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes('innerData')
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

// let data = getFromSlide(`slide-1feda3178d3b`, "ggb1");
ggb1.instance.evalCommand(`D=(${data.innerData['D']})`);
ggb1.instance.setColor('D', 0, 0, 0);
ggb1.instance.setFixed('D', false, false);
ggb1.instance.setVisible('eq1', false);
ggb2.instance.setValue('number', (ggb1.instance.getValue('β') * 180) / Math.PI);
//ggb1.instance.evalCommand(`locked=(${data.innerData["locked"]})`);

ggb1.instance.registerObjectUpdateListener('β', updateRight);
ggb1.instance.registerObjectUpdateListener('locked', updateRight);
ggb1.instance.registerObjectUpdateListener('showBracket', updateRight);
ggb2.instance.registerObjectUpdateListener('set', updateRight);

function updateRight() {
  ggb2.instance.setValue(
    'number',
    (ggb1.instance.getValue('β') * 180) / Math.PI
  );
  ggb2.instance.setValue('locked', ggb1.instance.getValue('locked'));
  ggb2.instance.setValue('showBracket', ggb1.instance.getValue('showBracket'));
  ggb2.instance.getValue('set');
}

button1.on('click', () => {
  ggb2.instance.setValue('showBracket', true);
  button2.updateData({ visible: true });
  text2.updateData({ visible: true });
  //text3.updateData({visible:true});
  input2.updateData({ visible: true });
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (input2.data.text != input2.data.last) {
    button2.updateData({ text: 'Submit', disabled: !input2.data.text });
    input2.updateData({ last: input2.data.text });
  }
});

button2.on('click', () => {
  let num = input2.data.text;
  ggb2.instance.setTextValue('TextNumber', num);
  //ggb2.instance.setVisible('TextNumber', true);
  ggb2.instance.setVisible('text8', true);
  button2.updateData({ text: 'Submitted', disabled: true });
});

ggb2.instance.registerObjectUpdateListener('C1', update);
ggb2.instance.registerObjectUpdateListener('C2', update);
ggb2.instance.registerObjectUpdateListener('C3', update);
ggb2.instance.registerObjectUpdateListener('C4', update);
ggb2.instance.registerObjectUpdateListener('C5', update);
ggb2.instance.registerObjectUpdateListener('W1', update);
ggb2.instance.registerObjectUpdateListener('W2', update);
ggb2.instance.registerObjectUpdateListener('W3', update);
ggb2.instance.registerObjectUpdateListener('W4', update);
ggb2.instance.registerObjectUpdateListener('W5', update);

function update() {
  button1.updateData({ disabled: false });
}

/*
{"compTotals":{"geogebra":2,"textbox":4,"separator":2,"button":2,"input":1},"stage":"Learn","lessonInfo":"7 M3 TB L08 - Strategies to Determine Unknown Angle Measures","teacherView":false,"layout":"two col"}
*/
