const {
  image1,
  feedback1,
  cc_submit_34e9c3c75088_textbox1: submitText1,
  cc_submit_34e9c3c75088_input1: submitInput1,
  cc_submit_34e9c3c75088_button1: submitButton1,
  separator2,
  text1,
  input1,
  text2,
  button1,
} = components;

let id1 = 'slide-4717518a83f0';
let id2 = 'slide-6664645630df';

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
  if (!image1.data.init) {
    // set the initial states of everything (note: generally, if some function down below sets or updates something, a command to undo that thing should go in here)
    button1.updateData({ align: 'right', visible: false });
    input1.updateData({ visible: false });
    text1.updateData({ visible: false });
    text2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    image1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  show();
});

function show() {
  text1.updateData({ visible: true });
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
}

autorun(() => {
  if (input1.data.text != input1.data.last) {
    button1.updateData({ text: 'Submit', disabled: !input1.data.text });
    input1.updateData({ last: input1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

let num2 = getFromSlide(id1, 'input1.data.text', false) || false;
let num3 = getFromSlide(id2, 'input1.data.text', false) || false;

if (!num2) {
  num2 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
}

if (!num3) {
  num3 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id2
  )}\]}$`;
}

submitText1.updateData({
  text: `You will need $613.2$ kilograms of oxygen, $${num2}$ liters of water, and $${num3}$ pounds of food for $2$ years.\n\nWhat calculations do you need to make before you can find the total mass in kilograms of a $2$-year supply of food, water, and oxygen? Explain.`,
});

/*
{"compTotals":{"uploaded-image":1,"textbox":3,"submit":1,"separator":1,"input":1,"button":1},"stage":"Learn","lessonInfo":"6 M2 TF L24 - Living on Mars","teacherView":false,"layout":"two col"}
*/
