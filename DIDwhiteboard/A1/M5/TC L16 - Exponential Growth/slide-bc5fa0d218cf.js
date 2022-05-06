const {
  ggb1,
  feedback,
  text1,
  ggb2,
  cc_sharewithclass_337f45d2372d_textbox1,
  cc_sharewithclass_337f45d2372d_input1,
  cc_sharewithclass_337f45d2372d_button1,
  cc_sharewithclass_337f45d2372d_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

cc_sharewithclass_337f45d2372d_button1.updateData({ align: "right" });
//button1.updateData({align: "right"});  SF: removed button

/*button1.on('click', () => {
  ggb1.instance.evalCommand("RunClickScript(inc)");
  button1.updateData({disabled: ggb1.instance.getValue("gen") >= 20}); // CW
}); SF: removed button */

ggb2.instance.registerObjectUpdateListener("start", updateLeft);
ggb2.instance.registerObjectUpdateListener("rate", updateLeft);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

function updateLeft() {
  ggb1.instance.setValue("start", ggb2.instance.getValue("start"));
  ggb1.instance.setValue("rate", ggb2.instance.getValue("rate"));
  // console.log(ggb1.instance.getValue("start"));
  // console.log(ggb1.instance.getValue("rate"));
}

/*autorun(() => {
  if(ggb1.instance.getValue("gen") >= 20) {
    button1.updateData({disabled: true});
  } else {
    button1.updateData({disabled: false});
  }
  console.log(ggb1.instance.getValue("gen"));
}); */ // CW commented out

/*
{"compTotals":{"geogebra":2,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
