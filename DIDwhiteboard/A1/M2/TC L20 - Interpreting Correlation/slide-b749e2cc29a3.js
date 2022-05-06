const {
  ggb1,
  feedback,
  text1,
  ggb2,
  separator1,
  cc_sharewithclass_5945554ff6a5_textbox1: shareText1,
  cc_sharewithclass_5945554ff6a5_input1: shareInput1,
  cc_sharewithclass_5945554ff6a5_button1: shareButton1,
  cc_sharewithclass_5945554ff6a5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

autorun(() => {
  let rValue = ggb2.innerData["r"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  ggb1.instance.setValue("r", ggb2.instance.getValue("r"));
});

/*
{"compTotals":{"geogebra":2,"textbox":2,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"two col"}
*/
