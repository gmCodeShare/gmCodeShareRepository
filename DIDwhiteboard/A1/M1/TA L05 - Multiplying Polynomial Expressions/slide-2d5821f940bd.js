const {
  ggb1,
  feedback1,
  text1,
  select1,
  text2,
  textDisplay2,
  fib1,
  fib2,
  cc_submit_5b076c3eee5b_textbox1: text3,
  cc_submit_5b076c3eee5b_input1: input7,
  cc_submit_5b076c3eee5b_button1: button3,
} = components;

slide.on("firstload", () => {
  ggb1.instance.setErrorDialogsActive(false);
  ggb1.instance.setVisible("E1", false);
  ggb1.instance.setVisible("E2", false);
  ggb1.instance.setVisible("E3", false);
  ggb1.instance.setVisible("E4", false);
  ggb1.instance.setVisible("E16", false);
  ggb1.instance.setVisible("E9", false);
  ggb1.instance.setVisible("E12", false);
  ggb1.instance.setVisible("E13", false);
  ggb1.instance.setVisible("E14", false);
  ggb1.instance.setVisible("E15", false);
  ggb1.instance.setVisible("vect1", false);
  ggb1.instance.setVisible("vect2", false);
  ggb1.instance.setVisible("vect3", false);
  ggb1.instance.setVisible("vect4", false);
  fib1.setVisible(false);
  fib2.setVisible(false);
  textDisplay2.updateData({ visible: false });
  text3.updateData({ visible: false });
  button3.updateData({ visible: false });
  input7.updateData({ visible: false });
});

select1.on("change", (selected) => {
  textDisplay2.updateData({ visible: true });
  text3.updateData({ visible: true });
  button3.updateData({ visible: true });
  input7.updateData({ visible: true });
  ggb1.instance.setVisible("E1", false);
  ggb1.instance.setVisible("E2", false);
  ggb1.instance.setVisible("E3", false);
  ggb1.instance.setVisible("E4", false);
  ggb1.instance.setVisible("E16", false);
  ggb1.instance.setVisible("E9", false);
  fib1.clear();
  fib2.clear();
  if (select1.data.selected.includes("0")) {
    fib1.setVisible(true);
    fib2.setVisible(false);
  }
  if (select1.data.selected.includes("1")) {
    fib2.setVisible(true);
    fib1.setVisible(false);
  }
});

autorun(() => {
  if (select1.data.selected.includes("0")) {
    text2.updateData({ text: "$(x+2)(x^2)+(x+2)(-x)+(x+2)(-5)$" });
    ggb1.instance.setValue("dist1", false);
    ggb1.instance.setValue("dist2", true);
  }
  if (select1.data.selected.includes("1")) {
    text2.updateData({ text: "$x(x^2-x-5)+(2)(x^2-x-5)$" });
    ggb1.instance.setValue("dist1", true);
    ggb1.instance.setValue("dist2", false);
  }
});
autorun(() => {
  if (select1.data.selected.includes("0")) {
    if (fib1.getInput(0).text) {
      ggb1.instance.setTextValue("textinput1", fib1.getInput(0).text);
      ggb1.instance.setVisible("E1", true);
    }
    if (fib1.getInput(1).text) {
      ggb1.instance.setTextValue("textinput2", fib1.getInput(1).text);
      ggb1.instance.setVisible("E2", true);
    }
    if (fib1.getInput(2).text) {
      ggb1.instance.setTextValue("textinput3", fib1.getInput(2).text);
      ggb1.instance.setVisible("E3", true);
    }
    if (fib1.getInput(3).text) {
      ggb1.instance.setTextValue("textinput4", fib1.getInput(3).text);
      ggb1.instance.setVisible("E4", true);
    }
    if (fib1.getInput(4).text) {
      ggb1.instance.setTextValue("textinput5", fib1.getInput(4).text);
      ggb1.instance.setVisible("E16", true);
    }
    if (fib1.getInput(5).text) {
      ggb1.instance.setTextValue("textinput6", fib1.getInput(5).text);
      ggb1.instance.setVisible("E9", true);
    }
  }

  if (select1.data.selected.includes("1")) {
    if (fib2.getInput(0).text) {
      ggb1.instance.setTextValue("textinput1", fib2.getInput(0).text);
      ggb1.instance.setVisible("E1", true);
    }
    if (fib2.getInput(1).text) {
      ggb1.instance.setTextValue("textinput3", fib2.getInput(1).text);
      ggb1.instance.setVisible("E3", true);
    }
    if (fib2.getInput(2).text) {
      ggb1.instance.setTextValue("textinput5", fib2.getInput(2).text);
      ggb1.instance.setVisible("E16", true);
    }
    if (fib2.getInput(3).text) {
      ggb1.instance.setTextValue("textinput2", fib2.getInput(3).text);
      ggb1.instance.setVisible("E2", true);
    }
    if (fib2.getInput(4).text) {
      ggb1.instance.setTextValue("textinput4", fib2.getInput(4).text);
      ggb1.instance.setVisible("E4", true);
    }
    if (fib2.getInput(5).text) {
      ggb1.instance.setTextValue("textinput6", fib2.getInput(5).text);
      ggb1.instance.setVisible("E9", true);
    }
  }
});
button3.on("click", () => {
  ggb1.instance.setVisible("E12", true);
  ggb1.instance.setVisible("E13", true);
  ggb1.instance.setVisible("E14", true);
  ggb1.instance.setVisible("E15", true);
  ggb1.instance.setVisible("vect1", true);
  ggb1.instance.setVisible("vect2", true);
  ggb1.instance.setVisible("vect3", true);
  ggb1.instance.setVisible("vect4", true);
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"select":1,"fillblank":2,"submit":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
