const {
  ggb1,
  feedback1,
  text1,
  cc_submit_7d28bfd4e4cd_textbox1: submitText1,
  cc_submit_7d28bfd4e4cd_input1: submitInput1,
  cc_submit_7d28bfd4e4cd_button1: submitButton1,
  separator1,
  cc_sharewithclass_fc555e1d8f1c_textbox1: shareText1,
  cc_sharewithclass_fc555e1d8f1c_input1: shareInput1,
  cc_sharewithclass_fc555e1d8f1c_button1: shareButton1,
  cc_sharewithclass_fc555e1d8f1c_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareAnswers1.updateData({ visible: false });

  ggb1.instance.setValue("showSpringDragger", false);
  setTableColor();
});

ggb1.instance.registerObjectUpdateListener("Point1", setTableColor);
ggb1.instance.registerObjectUpdateListener("Point2", setTableColor);

function setTableColor() {
  for (i = 0, L = ggb1.instance.getValue("pointListLength"); i <= L; i++) {
    ggb1.instance.setColor("xText" + (i + 1), 0, 0, 0);
    ggb1.instance.setColor("yText" + (i + 1), 0, 0, 0);
  }

  ggb1.instance.setColor(
    "xText" + ggb1.instance.getValue("point1Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "yText" + ggb1.instance.getValue("point1Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "xText" + ggb1.instance.getValue("point2Index"),
    218,
    41,
    28
  );
  ggb1.instance.setColor(
    "yText" + ggb1.instance.getValue("point2Index"),
    218,
    41,
    28
  );
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareAnswers1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TA L03 - Analyzing Functions that Model Projectile Motion","teacherView":false,"layout":"two col"}
*/
