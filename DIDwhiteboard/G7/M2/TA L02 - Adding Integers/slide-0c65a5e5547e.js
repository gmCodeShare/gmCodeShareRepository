const {
  text1,
  ggb1,
  separator1,
  feedback,
  text2,
  select1,
  text3,
  select2,
  cc_submit_af6d18028670_textbox1: submitText1,
  cc_submit_af6d18028670_input1: submitInput1,
  cc_submit_af6d18028670_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text3.updateData({ visible: false });
    select2.updateData({ visible: false });
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false, align: 'right' });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
    problem = ggb1.innerData['addProblem'];
    addend1 = ggb1.innerData['addend2'];
    text1.updateData({ align: 'center', text: `$${problem}$` });
    text3.updateData({
      text: `Is the result greater than or less than $${addend1}$?`,
    });
  }
}

autorun(() => {
  if (select1.data.selected) {
    // CW
    text3.updateData({ visible: true });
    select2.updateData({ visible: true });
  }
});

autorun(() => {
  if (select2.data.selected) {
    // CW
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true, align: 'right' });
  }
});

/*
{"compTotals":{"textbox":4,"geogebra":1,"separator":1,"radiogroup":2,"submit":1},"stage":"Learn","lessonInfo":"7 M2 TA L02 - Adding Integers","teacherView":false,"layout":"two col"}
*/
