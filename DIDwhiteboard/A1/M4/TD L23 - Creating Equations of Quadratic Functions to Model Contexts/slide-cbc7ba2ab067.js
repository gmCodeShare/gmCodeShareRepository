const {
  ggb1,
  feedback1,
  ggb2,
  separator2,
  text1,
  input1,
  text2,
  button1,
  separator1,
  cc_sharewithclass_2282dbea5620_textbox1: text3,
  cc_sharewithclass_2282dbea5620_input1: input6,
  cc_sharewithclass_2282dbea5620_button1: button2,
  cc_sharewithclass_2282dbea5620_studentanswers1,
} = components;

slide.on("firstload", () => {
  text3.updateData({ visible: false });
  input6.updateData({ visible: false });
  button2.updateData({ visible: false });
  button1.updateData({ align: "right" });
  ggb1.instance.setVisible("pic2", true);
});

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

button1.on("click", () => {
  let input = boundIt(input1.data.text, 5, 75);
  if (input && ggb1.instance.getValue("step") == 0) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue("mph1", input);
    ggb2.instance.setValue("mph", input);
    ggb2.instance.setAnimating("time", false);
    ggb2.instance.setValue("time", 0);
    ggb2.instance.setAnimating("time", true);
    ggb2.instance.startAnimation();
    ggb1.instance.setValue("step", ggb1.instance.getValue("step") + 1);
  } else if (input && ggb1.instance.getValue("step") == 1) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue("mph2", input);
    ggb2.instance.setValue("mph", input);
    ggb2.instance.setAnimating("time", false);
    ggb2.instance.setValue("time", 0);
    ggb2.instance.setAnimating("time", true);
    ggb2.instance.startAnimation();
    ggb1.instance.setValue("step", ggb1.instance.getValue("step") + 1);
  } else if (input && ggb1.instance.getValue("step") == 2) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue("mph3", input);
    ggb2.instance.setValue("mph", input);
    ggb2.instance.setAnimating("time", false);
    ggb2.instance.setValue("time", 0);
    ggb2.instance.setAnimating("time", true);
    ggb2.instance.startAnimation();
    ggb1.instance.setValue("step", ggb1.instance.getValue("step") + 1);
  } else if (input && ggb1.instance.getValue("step") == 3) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue("mph4", input);
    ggb2.instance.setValue("mph", input);
    ggb2.instance.setAnimating("time", false);
    ggb2.instance.setValue("time", 0);
    ggb2.instance.setAnimating("time", true);
    ggb2.instance.startAnimation();
    ggb1.instance.setValue("step", ggb1.instance.getValue("step") + 1);
  } else if (input && ggb1.instance.getValue("step") == 4) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue("mph5", input);
    ggb2.instance.setValue("mph", input);
    ggb2.instance.setAnimating("time", false);
    ggb2.instance.setValue("time", 0);
    ggb2.instance.setAnimating("time", true);
    ggb2.instance.startAnimation();
    ggb1.instance.setValue("step", 0);
  }
});

autorun(() => {
  let trigger = input1.data.text;
  ggb2.instance.stopAnimation();
  ggb2.instance.setValue("time", 0);
  button1.updateData({ disabled: false });
});

function boundIt(inp, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    return 0;
  } else if (result.value < min) {
    input1.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    input1.updateData({ text: `${max}` });
    return max;
  }
  return result.value;
}

ggb2.instance.registerObjectUpdateListener("time", update);

function update() {
  if (ggb2.instance.getValue("time") == 1) {
    ggb2.instance.stopAnimation();
    button1.updateData({ disabled: false });
    if (ggb1.instance.getValue("step") == 1) {
      ggb1.instance.setVisible("A", true);
      ggb1.instance.setVisible("C5", true);
      ggb1.instance.setVisible("C10", true);
    } else if (ggb1.instance.getValue("step") == 2) {
      ggb1.instance.setVisible("B", true);
      ggb1.instance.setVisible("C6", true);
      ggb1.instance.setVisible("C11", true);
    } else if (ggb1.instance.getValue("step") == 3) {
      ggb1.instance.setVisible("C", true);
      ggb1.instance.setVisible("C7", true);
      ggb1.instance.setVisible("C12", true);
      text3.updateData({ visible: true });
      input6.updateData({ visible: true });
      button2.updateData({ visible: true });
    } else if (ggb1.instance.getValue("step") == 4) {
      ggb1.instance.setVisible("D", true);
      ggb1.instance.setVisible("C8", true);
      ggb1.instance.setVisible("C13", true);
    } else if (ggb1.instance.getValue("step") == 0) {
      ggb1.instance.setVisible("E", true);
      ggb1.instance.setVisible("C9", true);
      ggb1.instance.setVisible("C14", true);
    }
  }
}

/*
{"compTotals":{"geogebra":2,"textbox":3,"separator":2,"input":1,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TD L23 - Creating Equations of Quadratic Functions to Model Contexts","teacherView":false,"layout":"two col"}
*/
