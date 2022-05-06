const {
  buttonGroup1,
  ggb1,
  feedback,
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19,
  button20,
  button21,
  button22,
  button23,
  button24,
  button25,
  button26,
  button27,
  button28,
  button29,
  button30,
  button31,
  button32,
  button33,
  button34,
  button35,
  button36,
  button37,
  button38,
  button39,
  button40,
  button41,
  button42,
  button43,
  button44,
  button45,
  button46,
  button47,
  button48,
  button49,
  textDisplay1,
  text1,
  cc_submit_0536db8bd072_textbox1: submitText1,
  cc_submit_0536db8bd072_input1: submitInput1,
  cc_submit_0536db8bd072_button1: submitButton1,
  separator3,
  text2,
  select1,
  select2,
  select3,
} = components;

ggb1.instance.setErrorDialogsActive(false);

const buttonList = [
  button0,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19,
  button20,
  button21,
  button22,
  button23,
  button24,
  button25,
  button26,
  button27,
  button28,
  button29,
  button30,
  button31,
  button32,
  button33,
  button34,
  button35,
  button36,
  button37,
  button38,
  button39,
  button40,
  button41,
  button42,
  button43,
  button44,
  button45,
  button46,
  button47,
  button48,
  button49,
];

let exp1;
let selectedProblem;
text2.updateData({ visibilityBehavior: "hide" });
onInit();
function onInit() {
  if (!text1.data.init) {
    // set initial states
    for (let i = 0, L = buttonList.length; i < L; i++) {
      buttonList[i].updateData({ visible: false });
    }
    text1.updateData({ buttonListData: [] });
    text1.updateData({ lastTimestamp: 0 });
    text1.updateData({ inChallenge: false });
    select1.setVisible(false);
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    buttonGroup1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    text1.updateData({ init: true });
  }
}

//the magic... update buttons as data comes in to the RTS
utils.RTS.on("datachange", "slide-74e5ac695299", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  const filteredRegister = filterOldResponses(register);

  // think of this forEach as "for each student's input, do the following"
  filteredRegister.forEach(({ data, info }, index) => {
    // console.log("Index: " + index);
    let buttonListArray = [...text1.data.buttonListData];
    const { thePackage } = data;
    console.log(thePackage);
    let tempArray = [];
    const studentID = info.device;
    // for (let i = 0, L = thePackage[0].length; i < L; i++) {
    //   tempArray.push(thePackage);
    // }
    //entry is user's first response
    if (!buttonListArray.includes(studentID)) {
      // console.log("did not include student");
      buttonListArray.push(studentID);
      buttonListArray.push(thePackage);
      text1.updateData({ buttonListData: buttonListArray });
      buttonList[buttonListArray.length / 2 - 1].updateData({
        visible: !text1.data.inChallenge,
        text: `Problem posed by ${studentID}.`,
      });
    }

    //entry is user has updated their response
    else if (buttonListArray.includes(studentID)) {
      // console.log("student has updated their posed problem");
      buttonListArray.splice(
        buttonListArray.indexOf(studentID) + 1,
        1,
        thePackage
      );
      text1.updateData({ buttonListData: buttonListArray });
      console.log(buttonListArray);
      buttonList[buttonListArray.indexOf(studentID) / 2].updateData({
        outline: false,
        color: "primary",
      });
    }
    //console.log() stuff to test
    text1.updateData({ lastTimestamp: info.timestamp });
  });
});

function filterOldResponses(register) {
  let lastTimestamp = text1.data.lastTimestamp;
  return register.filter(({ info: { timestamp } }) => {
    return timestamp > lastTimestamp;
  });
}

function undoLaTeX(inp) {
  let frac = inp.replace(/\\frac{/g, "(");
  let fracMid = frac.replace(/\}\{/g, ")/(");
  let leftParen = fracMid.replace(/\\left/g, "");
  let rightParen = leftParen.replace(/\\right/g, "");
  let absLeft = rightParen.replace(/\|/, "abs(");
  let absRight = absLeft.replace(/\|/, ")");
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");
  let brackRight = cbrtLeft.replace(/\}/g, ")");
  let brackLeft = brackRight.replace(/\{/g, "(");
  let lessThan = brackLeft.replace(/\\le/g, "<=");
  let greaterThan = lessThan.replace(/\\ge/g, ">=");
  let cDot = greaterThan.replace(/\\cdot/g, "*");
  let finalAnswer = cDot.replace(/\\Box/g, "0");
  return finalAnswer;
}

submitButton1.on("click", () => {
  let exp2 = submitInput1.data.text;
  let smoothExp1 = '"' + undoLaTeX(exp1).toString() + '"';
  let smoothExp2 = '"' + undoLaTeX(exp2).toString() + '"';
  ggb1.instance.evalCommand("ParseToFunction(exp1," + smoothExp1 + ")");
  ggb1.instance.evalCommand("ParseToFunction(exp2," + smoothExp2 + ")");
  // console.log(smoothExp2);
  let letterCheck = /[a-w|y-z]/;
  if (
    letterCheck.test(smoothExp2) == false &&
    ggb1.instance.getValue("isCorrect") == 1
  ) {
    text2.updateData({ text: "" });
    buttonList[selectedProblem].updateData({
      //			outline: false,
      color: "success",
    });
    text2.updateData({
      text: `Great work! Now try another classmate's posed problem.`,
    });
  } else {
    text2.updateData({
      text: "The expression and your product are not equivalent yet.",
    });
  }
});

slide.on("firstload", () => {
  ggb1.updateData({ visible: false });
  ggb1.instance.setValue("first", 2);
  ggb1.instance.setValue("second", 2);
  select2.setVisible(false);
  select3.setVisible(false);
  select2.selectOption("0");
  select3.selectOption("0");
});

autorun(() => {
  // console.log(select1.data.selected);
  if (select1.data.selected.includes("0")) {
    ggb1.updateData({ visible: true });
    select2.setVisible(true);
    select3.setVisible(true);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.updateData({ visible: false });
    select2.setVisible(false);
    select3.setVisible(false);
  }
});

select2.on("change", (selected) => {
  if (select2.data.selected[0] == 0) {
    ggb1.instance.setValue("Rows", 2);
  }
  if (select2.data.selected[0] == 1) {
    ggb1.instance.setValue("Rows", 3);
  }
});

select3.on("change", (selected) => {
  if (select3.data.selected[0] == 0) {
    ggb1.instance.setValue("Columns", 2);
  }
  if (select3.data.selected[0] == 1) {
    ggb1.instance.setValue("Columns", 3);
  }
  // console.log(select3.data.selected[0]);
});

button0.on("click", () => {
  buttonClickFunction(0);
});

button1.on("click", () => {
  buttonClickFunction(1);
});

button2.on("click", () => {
  buttonClickFunction(2);
});
button3.on("click", () => {
  buttonClickFunction(3);
});
button4.on("click", () => {
  buttonClickFunction(4);
});
button5.on("click", () => {
  buttonClickFunction(5);
});
button6.on("click", () => {
  buttonClickFunction(6);
});
button7.on("click", () => {
  buttonClickFunction(7);
});
button8.on("click", () => {
  buttonClickFunction(8);
});
button9.on("click", () => {
  buttonClickFunction(9);
});
button10.on("click", () => {
  buttonClickFunction(10);
});
button11.on("click", () => {
  buttonClickFunction(11);
});
button12.on("click", () => {
  buttonClickFunction(12);
});
button13.on("click", () => {
  buttonClickFunction(13);
});
button14.on("click", () => {
  buttonClickFunction(14);
});
button15.on("click", () => {
  buttonClickFunction(15);
});
button16.on("click", () => {
  buttonClickFunction(16);
});
button17.on("click", () => {
  buttonClickFunction(17);
});
button18.on("click", () => {
  buttonClickFunction(18);
});
button19.on("click", () => {
  buttonClickFunction(19);
});
button20.on("click", () => {
  buttonClickFunction(20);
});
button21.on("click", () => {
  buttonClickFunction(21);
});
button22.on("click", () => {
  buttonClickFunction(22);
});
button23.on("click", () => {
  buttonClickFunction(23);
});
button24.on("click", () => {
  buttonClickFunction(24);
});
button25.on("click", () => {
  buttonClickFunction(25);
});
button26.on("click", () => {
  buttonClickFunction(26);
});
button27.on("click", () => {
  buttonClickFunction(27);
});
button28.on("click", () => {
  buttonClickFunction(28);
});
button29.on("click", () => {
  buttonClickFunction(29);
});
button30.on("click", () => {
  buttonClickFunction(30);
});
button31.on("click", () => {
  buttonClickFunction(31);
});
button32.on("click", () => {
  buttonClickFunction(32);
});
button33.on("click", () => {
  buttonClickFunction(33);
});
button34.on("click", () => {
  buttonClickFunction(34);
});
button35.on("click", () => {
  buttonClickFunction(35);
});
button36.on("click", () => {
  buttonClickFunction(36);
});
button37.on("click", () => {
  buttonClickFunction(37);
});
button38.on("click", () => {
  buttonClickFunction(38);
});
button39.on("click", () => {
  buttonClickFunction(39);
});
button40.on("click", () => {
  buttonClickFunction(40);
});
button41.on("click", () => {
  buttonClickFunction(41);
});
button42.on("click", () => {
  buttonClickFunction(42);
});
button43.on("click", () => {
  buttonClickFunction(43);
});
button44.on("click", () => {
  buttonClickFunction(44);
});
button45.on("click", () => {
  buttonClickFunction(45);
});
button46.on("click", () => {
  buttonClickFunction(46);
});
button47.on("click", () => {
  buttonClickFunction(47);
});
button48.on("click", () => {
  buttonClickFunction(48);
});
button49.on("click", () => {
  buttonClickFunction(49);
});

function buttonClickFunction(a) {
  text1.updateData({
    inChallenge: true,
    text: `Problem posed by ${text1.data.buttonListData[2 * a]}.`,
  });
  buttonList[a].updateData({ outline: true });
  for (let i = 0, L = buttonList.length; i < L; i++) {
    buttonList[i].updateData({ visible: false });
  }
  exp1 = text1.data.buttonListData[2 * (a + 1) - 1];
  selectedProblem = a;
  select1.setVisible(true);
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true });
  buttonGroup1.updateData({ visible: true });
  submitText1.updateData({
    text: `What is the product $${exp1}$?`,
  });
}

buttonGroup1.on("click:1", () => {
  select1.setVisible(false);
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false, text: "" });
  submitButton1.updateData({ visible: false });
  buttonGroup1.updateData({ visible: false });
  for (let i = 0, L = text1.data.buttonListData.length / 2; i < L; i++) {
    buttonList[i].updateData({ visible: true });
  }
  text1.updateData({
    inChallenge: false,
    text: "",
  });
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1,"textbox":4,"button":50,"submit":1,"separator":1,"select":3},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
