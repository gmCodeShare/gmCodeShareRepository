const {
  text2,
  text1,
  separator7,
  table1,
  separator8,
  table2,
  button1,
  feedback,
  cc_sharewithclass_4f1239fbb0a2_textbox1: shareText1,
  cc_sharewithclass_4f1239fbb0a2_input1: shareInput1,
  cc_sharewithclass_4f1239fbb0a2_button1: shareButton1,
  cc_sharewithclass_4f1239fbb0a2_studentanswers1,
} = components;

// let pop =
//   getFromSlide(
//     "slide-4202051357f1",
//     "cc_submit_b51173edde46_input1.data.text"
//   ) || `\\text\\color{A0A0A0}{\[no input yet on slide 7\]}`;

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

const id1 = "slide-4202051357f1";
let prevInput =
  getFromSlide(id1, "cc_submit_b51173edde46_input1.data.text", "") || "";
let pop;
if (!prevInput) {
  pop = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
} else {
  pop = utils.math.evaluateLatex(prevInput);
  if (!pop.error) {
    // let roundsActual = totalRounds(pop.value);
    // let smilesActual = totalSmiles(roundsActual);
    // table2.updateCell(0, 0, { value: `$${roundsActual}$` });
    // table2.updateCell(0, 1, { value: `$${smilesActual}$` });
    //let newCols = [...table2.data.columns];
    //newCols[1] = `Total Number of Smiles After $${roundsActual}$ Rounds`;
    //table2.updateData({ columns: [...newCols] });
    pop = pop.value;
  } else {
    pop = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`;
  }
}

let roundsGuessed =
  getFromSlide(id1, "cc_submit_e23eafe346b2_input1.data.text", "") ||
  `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;

const id2 = "slide-12c9f860b7e1";
let equationInput =
  getFromSlide(id2, "cc_sharewithclass_58546e8dab0e_input1.data", "") || "";
let equation = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
  id2
)}\]}`;
if (equationInput) {
  if (equationInput.text && equationInput.text != "g(x) = ") {
    equation = equationInput.text;
  }
}

text2.updateData({
  text: `Use your total smiles function $${equation}$ to complete the tables.`,
});
text1.updateData({ align: "center", text: `State Population: $${pop}$` });
table1.updateCell(0, 0, { value: `$${roundsGuessed}$` });
// update columns, get share group to hide until the table is filled

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table2.getCell(0, 0).value,
    table2.getCell(0, 1).value,
  ];
  // if (entries.every((value) => !!value)) {
  //   shareText1.updateData({ visible: true });
  //   shareInput1.updateData({ visible: true });
  //   shareButton1.updateData({ visible: true });
  // }
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    });
    table1.updateData({ last: [...entries] });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

function totalSmiles(round) {
  return Math.pow(2, round + 1) - 1;
}

function totalRounds(pop) {
  return Math.ceil(Math.log2(pop + 1) - 1);
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"textbox":3,"separator":2,"table":2,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"T layout"}
*/
