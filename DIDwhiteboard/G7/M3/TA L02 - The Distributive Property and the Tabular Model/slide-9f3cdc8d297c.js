const {
  ggb1,
  feedback,
  text4,
  cc_submit_468d92c43b8a_textbox1: text1,
  cc_submit_468d92c43b8a_input1: input1,
  cc_submit_468d92c43b8a_button1: button1,
  separator6,
  cc_submit_88593606ced5_textbox1: text2,
  cc_submit_88593606ced5_input1: input2,
  cc_submit_88593606ced5_button1: button2,
  separator7,
  cc_submit_6521aa82759d_textbox1: text3,
  cc_submit_6521aa82759d_input1: input3,
  cc_submit_6521aa82759d_button1: button3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    text3.updateData({ visible: false });
    input3.updateData({ visible: false });
    button3.updateData({ visible: false });
    button1.updateData({ align: 'right' });
    button2.updateData({ align: 'right' });
    button3.updateData({ align: 'right' });
    ggb1.instance.setVisible('redPoint', false);
    ggb1.updateData({ init: true });
  }
}

const id1 = `slide-4a82a8a90ddd`;

let defPrevGGB1 = {
  innerData: {
    emptyInt1: '',
    emptyInt2: '',
    emptyL1: '',
    emptyT1: '',
    emptyT2: '',
  },
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

// let data = getFromSlide(`slide-4a82a8a90ddd`, "ggb1");
if (data.innerData) {
  ggb1.instance.setTextValue('emptyInt1', data.innerData['emptyInt1']);
  ggb1.instance.setTextValue('emptyInt2', data.innerData['emptyInt2']);
  ggb1.instance.setTextValue('emptyL1', data.innerData['emptyL1']);
  ggb1.instance.setTextValue('emptyT1', data.innerData['emptyT1']);
  ggb1.instance.setTextValue('emptyT2', data.innerData['emptyT2']);
}

button1.on('click', () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  text2.updateData({
    text: `What is $-2(w+4)$ when $w$ equals $${input1.data.text}$?`,
  });
});

button2.on('click', () => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
  text3.updateData({
    text: `What is $-2w-8$ when $w$ equals $${input1.data.text}$?`,
  });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":3,"separator":2},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
