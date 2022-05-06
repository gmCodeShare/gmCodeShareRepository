const {
  ggb1,
  feedback1,
  text1,
  text2,
  text3,
  separator1,
  select1,
  buttonGroup1,
  text5,
  text4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

//"is a solution" is 10, "not a solution" is 1... even though the ggb documention says it is 2 for a "cross"
let correctPoints = [10, 1, 1, 1, 1, 10, 1, 1];

slide.on("firstload", () => {
  ggb1.instance.setCoords("P1A", -5, 10);
  ggb1.instance.setCoords("P1B", 10, -5);
  ggb1.instance.setCoords("P2A", -1, -10);
  ggb1.instance.setCoords("P2B", 10, 1);

  ggb1.instance.setValue("showLine1Points", false);
  ggb1.instance.setValue("showLine2Points", false);
  ggb1.instance.setValue("allowLineControls", false);
  ggb1.instance.setValue("showQuestionMarks", true);

  ggb1.instance.setValue("counter", 1);

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
});

select1.on("change", ({ selected }) => {
  let counter = ggb1.instance.getValue("counter");
  if (selected[0] == "0" || selected[0] == "1") {
    buttonGroup1.updateSingleButton(
      {
        disabled: false,
      },
      1
    );
    ggb1.instance.setValue("answerSelected", true);
    ggb1.instance.setVisible(`QuizPoint${counter}`, true);
    ggb1.instance.setColor(
      `QuizPoint${counter}`,
      selected[0] == "0" ? 130 : 128,
      selected[0] == "0" ? 63 : 128,
      selected[0] == "0" ? 152 : 128
    );
    ggb1.instance.setPointStyle(
      `QuizPoint${counter}`,
      selected[0] == "0" ? 10 : 1
    );
    ggb1.instance.setPointSize(
      `QuizPoint${counter}`,
      selected[0] == "0" ? 5 : 8
    );
  }
});

buttonGroup1.on("click:1", () => {
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
  ggb1.instance.setValue("counter", ggb1.instance.getValue("counter") + 1);
  if (
    ggb1.instance.getPointStyle(
      `QuizPoint${ggb1.instance.getValue("counter") - 1}`
    ) == correctPoints[ggb1.instance.getValue("counter") - 2]
  ) {
    text5.updateData({ text: "Correct" });
  } else {
    text5.updateData({ text: "Incorrect" });
  }
});

buttonGroup1.on("click:2", () => {
  let counterPlus = ggb1.instance.getValue("counter") + 1;
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    3
  );
  ggb1.instance.setValue("answerSelected", false);
  ggb1.instance.setVisible(`QuizPoint${counterPlus}`, false);
  /*switch (ggb1.instance.getValue('counter') + 1) {
    case 2:
      text3.updateData({ text: `$(8, -2)$` });
      break;
    case 3:
      text3.updateData({ text: `$(10, 1)$` });
      break;
    case 4:
      text3.updateData({ text: `$(2, -7)$` });
      break;
    case 5:
      text3.updateData({ text: `$(-5, -3)$` });
      break;
    case 6:
      text3.updateData({ text: `$(-3, 8)$` });
      break;
    case 7:
      text3.updateData({ text: `$(9, -4)$` });
      break;
    case 8:
      text3.updateData({ text: `$(6, -8)$` });
      break;
  }*/
  switch (ggb1.instance.getValue("counter")) {
    case 2:
      text3.updateData({ text: `$(8, -2)$` });
      break;
    case 3:
      text3.updateData({ text: `$(10, 1)$` });
      break;
    case 4:
      text3.updateData({ text: `$(2, -7)$` });
      break;
    case 5:
      text3.updateData({ text: `$(-5, -3)$` });
      break;
    case 6:
      text3.updateData({ text: `$(-3, 8)$` });
      break;
    case 7:
      text3.updateData({ text: `$(9, -4)$` });
      break;
    case 8:
      text3.updateData({ text: `$(6, -8)$` });
      break;
  }
  select1.unselectAll();
  //ggb1.instance.setValue('counter', ggb1.instance.getValue('counter') + 1);
  if (ggb1.instance.getValue("counter") > 8) {
    let numCorrect = 0;
    for (let i = 1, L = 8; i <= L; i++) {
      if (
        ggb1.instance.getPointStyle(`QuizPoint${i}`) == correctPoints[i - 1]
      ) {
        numCorrect++;
      }
    }
    text2.updateData({ visible: false });
    text3.updateData({ visible: false });
    select1.setVisible(false);
    separator1.updateData({ size: "149px" });
    if (numCorrect == 8) {
      text4.updateData({ visible: true, text: "You have all 8 correct!" });
    } else {
      text4.updateData({
        visible: true,
        text: `You have ${numCorrect} out of 8 correct. Try using the inequalities to check the ordered pairs.`,
      });
    }
  }
  /*if (
    ggb1.instance.getPointStyle(
      `QuizPoint${ggb1.instance.getValue('counter') - 1}`
    ) == correctPoints[ggb1.instance.getValue('counter') - 2]
  ) {
    text5.updateData({ text: 'Correct' });
  } else {
    text5.updateData({ text: 'Incorrect' });
  }*/
  text5.updateData({ text: "" });
});

buttonGroup1.on("click:3", () => {
  text5.updateData({ text: "" });
  ggb1.instance.setValue("counter", 1);
  ggb1.instance.setVisible("QuizPoint1", false);
  ggb1.instance.setValue("answerSelected", false);
  text2.updateData({ visible: true });
  text3.updateData({ visible: true, text: `$(4, 4)$` });
  text4.updateData({ visible: false, text: "" });
  separator1.updateData({ size: "0px" });
  select1.unselectAll();
  select1.setVisible(true);
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    3
  );
});

/*
{"compTotals":{"geogebra":1,"textbox":6,"separator":1,"select":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TB L12 - Print Alt: Solution Sets of Systems of Linear Inequalities","teacherView":true,"layout":"two col"}
*/
