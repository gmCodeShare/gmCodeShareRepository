const {
  image1,
  feedback1,
  cc_submit_ae2d98d6752e_textbox1: submitText1,
  cc_submit_ae2d98d6752e_input1: submitInput1,
  cc_submit_ae2d98d6752e_button1: submitButton1,
  separator1,
  cc_sharewithclass_c9bfb2a2a1a7_textbox1: shareText1,
  cc_sharewithclass_c9bfb2a2a1a7_input1: shareInput1,
  cc_sharewithclass_c9bfb2a2a1a7_button1: shareButton1,
  cc_sharewithclass_c9bfb2a2a1a7_studentanswers1,
} = components;

let id1 = 'slide-92653fba98ab';

let grab = getFromSlide(id1, 'ggb1.data.image', false) || false;

if (!!grab) {
  image1.updateData({ src: `data:image/png;base64,${grab}` });
}

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"bynder-image":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M2 TE L17 - Partial Quotients","teacherView":false,"layout":"two col"}
*/
