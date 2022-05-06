const {
  ggb1,
  feedback,
  cc_submit_f8fdb86cd1e1_textbox1,
  cc_submit_f8fdb86cd1e1_input1: input1,
  cc_submit_f8fdb86cd1e1_button1: button1,
  separator1,
  cc_sharewithclass_9ffdfff3446d_textbox1: text2,
  cc_sharewithclass_9ffdfff3446d_input1: input2,
  cc_sharewithclass_9ffdfff3446d_button1: button2,
  cc_sharewithclass_9ffdfff3446d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: "right" });
button2.updateData({ align: "right" });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text2.updateData({ visible: false });
    input2.updateData({ visible: false });
    button2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

for (var i = 33; i < 64; i++) {
  ggb1.instance.setVisible("P" + i, false);
}

for (var i = 0; i < 31; i++) {
  ggb1.instance.setVisible("backCritter'_{" + i + "}", false);
}

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
