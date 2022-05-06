const {
  ggb1,
  Separator12,
  text1,
  feedback,
  text2,
  select1,
  text3,
  select2,
  cc_submit_97841450bec0_textbox1: submitText1,
  cc_submit_97841450bec0_input1: submitInput1,
  cc_submit_97841450bec0_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
let problem;
let multiplier;
let multiplicand;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    multiplicand = Math.floor(Math.random() * 19) + 2;
    multiplier = Math.floor(Math.random() * 19) + 2;
    if (Math.floor(Math.random() * 3) == 0) {
      multiplicand = multiplicand * -1;
      problem = `$${multiplier}\\cdot(${multiplicand})$`;
    } else if (Math.floor(Math.random() * 3) == 1) {
      multiplier = multiplier * -1;
      problem = `$${multiplier}\\cdot${multiplicand}$`;
    } else {
      problem = `$${multiplier}\\cdot${multiplicand}$`;
    }
    text3.updateData({ visible: false });
    select2.updateData({ visible: false });
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false, align: 'right' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
    text1.updateData({ align: 'center', text: `$${problem}$` });
    text3.updateData({
      text: `Is the result greater or less than $${multiplier}$?`,
    });
  }
}

autorun(() => {
  if (select1.data.selected) {
    text3.updateData({ visible: true });
    select2.updateData({ visible: true });
  }
});

autorun(() => {
  if (select2.data.selected) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true, align: 'right' });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":4,"radiogroup":2,"submit":1},"stage":"Land","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
