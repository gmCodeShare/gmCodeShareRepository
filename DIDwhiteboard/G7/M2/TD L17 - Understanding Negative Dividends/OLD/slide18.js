const { ggb1, text1, select1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const dividend = -9;
const divisor = 2;

text2.updateData({ visible: false, align: "center" });
button1.updateData({ visible: false });

autorun(() => {
  if (select1.data.selected == "0") {
    ggb1.instance.setValue("showSlider", "true");
    ggb1.instance.setValue("divSize", "true");
    button1.updateData({ visible: true, disabled: false });
  } else if (select1.data.selected == "1") {
    ggb1.instance.setValue("showSlider", "true");
    ggb1.instance.setValue("divSize", "false");
    button1.updateData({ visible: true, disabled: false });
  }
});

autorun(() => {
  let num1 = ggb1.innerData["numDisplay01"];
  let num2 = ggb1.innerData["numDisplay1"];
  let size1 = ggb1.innerData["sizeDisplay02"];
  let size2 = ggb1.innerData["sizeDisplay2"];
  ggb1.instance.setVisible("pic1", false);
  ggb1.instance.setVisible("pic2", false);
  ggb1.instance.setVisible("numTexts", false);
  if (select1.data.selected == "0") {
    //size
    text2.updateData({ visible: false, text: `$${size1}$` });
    button1.updateData({ visible: true, disabled: false });
  } else if (select1.data.selected == "1") {
    //num
    text2.updateData({ visible: false, text: `$${num1}$` });
    button1.updateData({ visible: true, disabled: false });
  }
});

button1.on("click", () => {
  let num1 = ggb1.innerData["numDisplay01"];
  let num2 = ggb1.innerData["numDisplay1"];
  let size1 = ggb1.innerData["sizeDisplay02"];
  let size2 = ggb1.innerData["sizeDisplay2"];
  if (
    select1.data.selected == "1" &&
    ggb1.instance.getValue("dividend") == dividend &&
    ggb1.instance.getValue("divisor") == divisor
  ) {
    //correct
    text2.updateData({ visible: true, text: `$${num2}$` });
    ggb1.instance.setVisible("pic2", true);
    ggb1.instance.setVisible("numTexts", true);
  } else {
    //incorrect
    ggb1.instance.setVisible("pic1", true);
  }
  button1.updateData({ disabled: true });
});
