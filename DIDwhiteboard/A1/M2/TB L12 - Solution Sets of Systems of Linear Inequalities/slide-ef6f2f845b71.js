const {
  ggb1,
  feedback1,
  text1,
  cc_submit_1530c28110e0_textbox1: submitText1,
  cc_submit_1530c28110e0_input1: submitInput1,
  cc_submit_1530c28110e0_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerClientListener(clientListenerFunction);
ggb1.instance.registerObjectUpdateListener("follow", booleanListener);

slide.on("firstload", () => {
  ggb1.instance.setCoords("P1A", -5, 10);
  ggb1.instance.setCoords("P1B", 10, -5);
  ggb1.instance.setCoords("P2A", -1, -10);
  ggb1.instance.setCoords("P2B", 10, 1);

  ggb1.instance.setValue("showLine1Points", false);
  ggb1.instance.setValue("showLine2Points", false);
  ggb1.instance.setValue("allowLineControls", false);

  for (let i = 1, L = 8; i <= L; i++) {
    let inRegion = [1, 6]; //points that are in the solution region
    ggb1.instance.setVisible(`QuizPoint${i}`, true);
    ggb1.instance.setFixed(`QuizPoint${i}`, true, true);
    ggb1.instance.setColor(
      `QuizPoint${i}`,
      inRegion.includes(i) ? 130 : 128,
      inRegion.includes(i) ? 63 : 128,
      inRegion.includes(i) ? 152 : 128
    );
    ggb1.instance.setPointStyle(`QuizPoint${i}`, inRegion.includes(i) ? 10 : 1);
    ggb1.instance.setPointSize(`QuizPoint${i}`, inRegion.includes(i) ? 5 : 8);
  }
});

function clientListenerFunction(a) {
  if (a.type == "select") {
    for (let i = 1, L = 8; i <= L; i++) {
      ggb1.instance.setLabelVisible(`QuizPoint${i}`, false);
    }
    ggb1.instance.setLabelVisible(a.target, true);
  }
}

function booleanListener() {
  for (let i = 1, L = 8; i <= L; i++) {
    ggb1.instance.setLabelVisible(
      `QuizPoint${i}`,
      ggb1.instance.getValue(`inQuiz${i}Region`)
    );
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Solution Sets of Systems of Linear Inequalities","teacherView":false,"layout":"two col"}
*/
