const {
  ggb1,
  text1,
  text2,
  cc_sharewithclass_822f77b69bea_textbox1: shareText1,
  cc_sharewithclass_822f77b69bea_input1: shareInput1,
  cc_sharewithclass_822f77b69bea_button1: shareButton1,
  cc_sharewithclass_822f77b69bea_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("platformPrintABool", false);
ggb1.instance.setValue("platformPrintBBool", false);
ggb1.instance.setValue("origDimensionsBool", true);

shareButton1.updateData({ align: "right" });

shareText1.updateData({ visible: false });
shareInput1.updateData({ visible: false });
shareButton1.updateData({ visible: false });
shareAnswers1.updateData({ visible: false });

autorun(() => {
  let time = ggb1.innerData["time"];
  let clickCount = ggb1.innerData["clickCount"];
  ggb1.instance.setValue("imageOrigOutlineBool", false);
  if (time > 0) {
    ggb1.instance.setValue("imageOrigOutlineBool", true);
  }
  if (time < 1) {
    text2.updateData({ text: "" });
  } else if (time == 1 && clickCount < 3) {
    text2.updateData({ text: "Keep trying!" });
  } else {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
  }
});
