const {
  Image1,
  text1,
  Image2,
  text2,
  feedback,
  cc_submit_93a46b696380_textbox1: submitText1,
  cc_submit_93a46b696380_input1: submitInput1,
  cc_submit_93a46b696380_button1: submitButton1,
  Separator1,
  cc_sharewithclass_fec6056611d5_textbox1: shareText1,
  cc_sharewithclass_fec6056611d5_input1: shareInput1,
  cc_sharewithclass_fec6056611d5_button1: shareButton1,
  cc_sharewithclass_fec6056611d5_studentanswers1,
} = components;

submitButton1.updateData({ align: 'right' });
shareButton1.updateData({ align: 'right' });
text1.updateData({ align: 'center' });
text2.updateData({ align: 'center' });

onInit();
function onInit() {
  if (!text1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    text1.updateData({ init: true });
  }
}

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"uploaded-image":2,"textbox":3,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
