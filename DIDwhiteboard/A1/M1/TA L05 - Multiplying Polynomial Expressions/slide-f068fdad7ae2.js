const {
  ggb1,
  feedback1,
  text1,
  select1,
  separator1,
  text2,
  separator2,
  cc_sharewithclass_2e66caa7fdcc_textbox1: text3,
  cc_sharewithclass_2e66caa7fdcc_input1: input3,
  cc_sharewithclass_2e66caa7fdcc_button1: button3,
  cc_sharewithclass_2e66caa7fdcc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button3.updateData({ visible: false });
});
autorun(() => {
  // console.log(select1.data.selected);
  if (select1.data.selected.includes("0")) {
    text2.updateData({ text: "$(x-1)(3x-7)$\n\n$(x-1)(3x)+(x-1)(-7)$" });
    ggb1.instance.setValue("dist1", false);
    ggb1.instance.setValue("dist2", true);
  }
  if (select1.data.selected.includes("1")) {
    text2.updateData({ text: "$(x-1)(3x-7)$\n\n$x(3x-7)+(-1)(3x-7)$" });
    ggb1.instance.setValue("dist1", true);
    ggb1.instance.setValue("dist2", false);
  }
});

select1.on("change", (selected) => {
  text3.updateData({ visible: true });
  input3.updateData({ visible: true });
  button3.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"select":1,"separator":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
