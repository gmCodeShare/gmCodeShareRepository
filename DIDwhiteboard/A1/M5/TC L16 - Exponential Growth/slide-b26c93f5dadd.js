const {
  text1,
  table1,
  feedback,
  cc_submit_061e63dcb5e9_textbox1: submitText1,
  cc_submit_061e63dcb5e9_input1: submitInput1,
  cc_submit_061e63dcb5e9_button1: submitButton1,
  separator3,
  cc_sharewithclass_4be59bd0b340_textbox1: shareText1,
  cc_sharewithclass_4be59bd0b340_input1: shareInput1,
  cc_sharewithclass_4be59bd0b340_button1: shareButton1,
  cc_sharewithclass_4be59bd0b340_studentanswers1,
} = components;

submitButton1.updateData({ align: "right" });
shareButton1.updateData({ align: "right" });

onInit();
function onInit() {
  if (!table1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    table1.updateData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":2,"table":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
