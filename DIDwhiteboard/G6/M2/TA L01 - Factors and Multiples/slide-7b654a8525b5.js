const {
  ggb1,
  feedback1,
  cc_submit_13bf6bf9b83d_textbox1: submitText1,
  cc_submit_13bf6bf9b83d_input1: submitInput1,
  cc_submit_13bf6bf9b83d_button1: submitButton1,
  separator3,
  cc_sharewithclass_805516dded9e_textbox1: shareText1,
  cc_sharewithclass_805516dded9e_input1: shareInput1,
  cc_sharewithclass_805516dded9e_button1: shareButton1,
  cc_sharewithclass_805516dded9e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('gridLength', 76);
    ggb1.instance.setValue('gridWidth', 76);
    ggb1.instance.setValue('rectLength', 6);
    ggb1.instance.setValue('rectWidth', 4);
    ggb1.instance.setValue('gridSize', 2);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TA L01 - Factors and Multiples","teacherView":false,"layout":"two col"}
*/
