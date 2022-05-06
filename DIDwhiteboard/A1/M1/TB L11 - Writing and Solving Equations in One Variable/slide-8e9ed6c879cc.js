const {
  image1,
  feedback1,
  text2,
  separator4,
  textDisplay1,
  select1,
  cc_sharewithclass_2ba928406ba6_textbox1: shareText1,
  cc_sharewithclass_2ba928406ba6_input1: shareInput1,
  cc_sharewithclass_2ba928406ba6_button1: shareButton1,
  cc_sharewithclass_2ba928406ba6_studentanswers1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

select1.on("change", () => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    let chosen = select1.data.options[parseInt(select1.data.selected[0])].label;
    let sentStart = chosen.replace(".", ","); // in the example, choices were sentences
    shareInput1.updateData({ text: sentStart + " because " });
  }
});

/*
{"compTotals":{"uploaded-image":1,"textbox":3,"separator":1,"select":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"two col"}
*/
