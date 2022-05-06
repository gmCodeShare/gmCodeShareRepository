const {
  ggb1,
  feedback1,
  cc_submit_745efa9fd98c_textbox1: submitText1,
  cc_submit_745efa9fd98c_input1: submitInput1,
  cc_submit_745efa9fd98c_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('gridLength', 5);
    ggb1.instance.setValue('gridWidth', 4);
    ggb1.instance.setValue('sideLength', 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1},"stage":"Learn","lessonInfo":"6 M2 TA L01 - Factors and Multiples","teacherView":false,"layout":"two col"}
*/
