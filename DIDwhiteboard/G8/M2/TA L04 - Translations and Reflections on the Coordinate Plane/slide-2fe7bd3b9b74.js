const {
  ggb1,
  feedback1,
  cc_submit_398b221e7939_textbox1,
  cc_submit_398b221e7939_input1,
  cc_submit_398b221e7939_button1: button1,
  separator1,
  cc_sharewithclass_e73dad4258bc_textbox1: text2,
  cc_sharewithclass_e73dad4258bc_input1: input2,
  cc_sharewithclass_e73dad4258bc_button1: button2,
  cc_sharewithclass_e73dad4258bc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.setVisible("DragPoint", true);
  //ggb1.instance.setVisible('halo', true);
  ggb1.instance.setValue("originMovable", true);
  ggb1.instance.evalCommand(`ReadText("The origin is now movable.")`);
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TA L04 - Translations and Reflections on the Coordinate Plane","teacherView":false,"layout":"two col"}
*/
