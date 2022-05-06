const {
  ggb1,
  Separator2,
  text1,
  feedback,
  text2,
  select1,
  cc_submit_dd5fdb81847a_textbox1: submitText1,
  cc_submit_dd5fdb81847a_input1: submitInput1,
  cc_submit_dd5fdb81847a_button1: submitButton1,
  text3,
  select2,
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
  }
}

autorun(() => {
  if (select1.data.selected) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true, align: 'right' });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":4,"radiogroup":2,"submit":1},"stage":"Learn","lessonInfo":"7 M2 TD L17 - Understanding Negative Dividends","teacherView":false,"layout":"two col"}
*/
