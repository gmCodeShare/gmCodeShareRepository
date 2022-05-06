const {
  ggb1,
  feedback,
  cc_submit_2bb0b66acf46_textbox1: submitText1,
  cc_submit_2bb0b66acf46_input1: submitInput1,
  cc_submit_2bb0b66acf46_button1: submitButton1,
  separator1,
  cc_sharewithclass_5268af174ccf_textbox1: shareText1,
  cc_sharewithclass_5268af174ccf_input1: shareInput1,
  cc_sharewithclass_5268af174ccf_button1: shareButton1,
  cc_sharewithclass_5268af174ccf_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

if (ggb1.instance.getValue("showHint")) {
  let allPoints = ggb1.instance.getAllObjectNames("point");
  let visPoints = allPoints.filter((point) => point.includes("Vis"));
  ggb1.instance.registerObjectUpdateListener("Follow", () => {
    for (let i = 0, L = visPoints.length; i < L; i++) {
      if (ggb1.instance.getVisible(visPoints[i])) {
        ggb1.instance.setValue("showHint", false);
        ggb1.instance.unregisterObjectUpdateListener("Follow");
        break;
      }
    }
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"two col"}
*/
