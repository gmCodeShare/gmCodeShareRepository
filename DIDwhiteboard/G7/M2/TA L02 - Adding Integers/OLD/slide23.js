const {
  ggb1,
  cc_sharewithclass_90fa4945d858_button1: button1,
  cc_sharewithclass_90fa4945d858_input1: input1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setSize(590, 590);
button1.updateData({ align: "right" });
ggb1.instance.setVisible("haloA", false);
ggb1.instance.setVisible("haloB", false);
ggb1.instance.setFixed("A", true, false);
ggb1.instance.setFixed("B", true, false);

ggb1.instance.setValue("addend1", "-2");
ggb1.instance.setValue("addend2", "7");
ggb1.instance.setValue("addendSum", "5");
