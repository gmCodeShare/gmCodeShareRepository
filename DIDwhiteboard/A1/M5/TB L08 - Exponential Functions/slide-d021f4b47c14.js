const {
  textDisplay1,
  select1,
  separator1,
  cc_sharewithclass_b03b47e4e24c_textbox1: shareText1,
  cc_sharewithclass_b03b47e4e24c_input1: shareInput1,
  cc_sharewithclass_b03b47e4e24c_button1: shareButton1,
  cc_sharewithclass_b03b47e4e24c_studentanswers1,
  feedback,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

/*select1.on("change", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});*/

select1.on("change", () => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    let options = ["A,", "B,"];
    let chosen = options[parseInt(select1.data.selected[0])];
    let sentStart = chosen.replace(".", ","); // in the example, choices were sentences
    shareInput1.updateData({ text: sentStart + " because " });
  }
});

/*
{"compTotals":{"textbox":2,"select":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"one col"}
*/
