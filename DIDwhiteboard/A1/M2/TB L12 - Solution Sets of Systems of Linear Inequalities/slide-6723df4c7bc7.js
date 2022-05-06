const {
  ggb1,
  feedback1,
  buttonGroup1,
  cc_submit_a4b21c2673c9_textbox1: submitText1,
  cc_submit_a4b21c2673c9_input1: submitInput1,
  cc_submit_a4b21c2673c9_button1: submitButton1,
  separator1,
  cc_submit_5efe9db88f53_textbox1: submitText2,
  cc_submit_5efe9db88f53_input1: submitInput2,
  cc_submit_5efe9db88f53_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener("time", timeFunction);

slide.on("firstload", () => {
  ggb1.instance.setValue("showOrigGraph", false);
  ggb1.instance.setValue("showFakeGrids", true);
  ggb1.instance.setAxesVisible(false, false);
  ggb1.instance.setGridVisible(false);

  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

function timeFunction() {
  if (ggb1.instance.getValue("time") == 1) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
  }
}

buttonGroup1.on("click:1", () => {
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation("time");
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"buttongroup":1,"submit":2,"separator":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
