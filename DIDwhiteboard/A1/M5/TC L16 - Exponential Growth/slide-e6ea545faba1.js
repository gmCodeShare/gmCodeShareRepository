const {
  ggb1,
  feedback,
  text1,
  select1,
  cc_sharewithclass_3e12d75322bb_textbox1: shareText1,
  cc_sharewithclass_3e12d75322bb_input1: shareInput1,
  cc_sharewithclass_3e12d75322bb_button1: shareButton1,
  cc_sharewithclass_3e12d75322bb_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: "right" });
});

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in the example, choices were sentences
      shareInput1.updateData({ text: sentStart + " because " });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
