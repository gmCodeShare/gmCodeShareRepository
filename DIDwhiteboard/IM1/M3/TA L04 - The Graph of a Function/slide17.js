const {
  ggb1,
  text2,
  text3,
  buttonGroup1,
  select1,
  cc_sharewithclass_2bf0a6586793_textbox1: text1,
  cc_sharewithclass_2bf0a6586793_input1: input1,
  cc_sharewithclass_2bf0a6586793_button1: button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.deleteObject("D");
  ggb1.instance.deleteObject("E");
  ggb1.instance.deleteObject("F");
  ggb1.instance.deleteObject("G");
  ggb1.instance.setVisible("eq2", false);
  ggb1.instance.setVisible("eq3", false);
  ggb1.instance.setVisible("eq4", false);
  ggb1.instance.setVisible("eq5", false);
  text1.updateData({ visible: false });
  input1.updateData({ visible: false });
  button1.updateData({ visible: false });
  text3.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  ggb1.instance.setValue("page1", false);
  ggb1.instance.setValue("page2", true);
  ggb1.instance.setValue("points", true);
  ggb1.instance.setCaption("f", "$f$");
  ggb1.instance.setCaption("g", "$g$");
});
select1.on("change", (selected) => {
  buttonGroup1.updateData({ visible: true });
  text3.updateData({ visible: true });
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  text1.updateData({ visible: true });
  input1.updateData({ visible: true });
  button1.updateData({ visible: true });
  ggb1.instance.setVisible("eq6", false);
  ggb1.instance.setVisible("eq7", false);
  ggb1.instance.setVisible("eq8", false);
  ggb1.instance.setVisible("A", false);
  ggb1.instance.setVisible("B", false);
  ggb1.instance.setVisible("C", false);
  ggb1.instance.setValue("points", false);
  //ggb1.instance.setValue("prompt1",true);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setVisible("eq6", true);
  ggb1.instance.setVisible("eq7", true);
  ggb1.instance.setVisible("eq8", true);
  ggb1.instance.setVisible("A", true);
  ggb1.instance.setVisible("B", true);
  ggb1.instance.setVisible("C", true);
  ggb1.instance.setValue("points", true);
});
