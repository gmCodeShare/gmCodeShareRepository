const {
  text1,
  separator3,
  textDisplay5,
  ggb1,
  feedback,
  cc_submit_36fd40ca2477_textbox1,
  cc_submit_36fd40ca2477_input1,
  cc_submit_36fd40ca2477_button1,
  separator2,
  cc_sharewithclass_970845c1f96e_textbox1,
  cc_sharewithclass_970845c1f96e_input1,
  cc_sharewithclass_970845c1f96e_button1,
  cc_sharewithclass_970845c1f96e_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    cc_submit_36fd40ca2477_button1.updateData({ align: 'right' });
    cc_sharewithclass_970845c1f96e_button1.updateData({ align: 'right' });
    cc_sharewithclass_970845c1f96e_button1.updateData({ visible: false });
    cc_sharewithclass_970845c1f96e_input1.updateData({ visible: false });
    cc_sharewithclass_970845c1f96e_textbox1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

cc_submit_36fd40ca2477_button1.on('click', () => {
  cc_sharewithclass_970845c1f96e_textbox1.updateData({ visible: true });
  cc_sharewithclass_970845c1f96e_input1.updateData({ visible: true });
  cc_sharewithclass_970845c1f96e_button1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":3,"separator":2,"geogebra":1,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
