const { text1, separator3, table1, separator4, table2 } = components;

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

const id1 = "slide-2c776e051648";
let prevInput =
  getFromSlide(id1, "cc_submit_e6a119967b77_input1.data.text", "") || "";
let pop;
if (!prevInput) {
  pop = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id1)}\]}`;
} else {
  pop = utils.math.evaluateLatex(prevInput);
  if (!pop.error) {
    let roundsActual = totalRounds(pop.value);
    let smilesActual = totalSmiles(roundsActual);
    table2.updateCell(0, 0, { value: `$${roundsActual}$` });
    table2.updateCell(0, 1, { value: `$${smilesActual}$` });
    // let newCols = [...table2.data.columns];
    // newCols[1] = `Total Number of Smiles After $${roundsActual}$ Rounds`;
    // table2.updateData({ columns: [...newCols] });
    table2.updateHeader(1, {
      value: `Total Number of Smiles After $${roundsActual}$ Rounds`,
    });
    pop = pop.value;
  } else {
    pop = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id1
    )}\]}`;
  }
}

text1.updateData({
  align: "center",
  text: `School Population: $${pop}$`,
});

let prevGuess =
  getFromSlide(id1, "cc_submit_5f2188c966cd_input1.data.text", "") || "";
// let roundsGuess = "";
if (!prevGuess) {
  prevGuess = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}`;
} else {
  let roundsGuessed = utils.math.evaluateLatex(prevGuess);
  if (!roundsGuessed.error) {
    let smilesGuessed = totalSmiles(roundsGuessed.value);
    if (smilesGuessed.toString().length > 10) {
      smilesGuessed = smilesGuessed.toPrecision(4);
    }
    table1.updateCell(0, 1, { value: `$${smilesGuessed}$` });
    // let newCols = [...table1.data.columns];
    // newCols[1] = `Total Number of Smiles After $${roundsGuessed.value}$ Rounds`;
    // table1.updateData({ columns: [...newCols] });
    table1.updateHeader(1, {
      value: `Total Number of Smiles After $${roundsGuessed.value}$ Rounds`,
    });
    // console.log(table1.getCell(-1, 1));
  }
}
table1.updateCell(0, 0, { value: `$${prevGuess}$` });

function totalSmiles(round) {
  return Math.pow(2, round + 1) - 1;
}

function totalRounds(pop) {
  return Math.ceil(Math.log2(pop + 1) - 1);
}

/*
{"compTotals":{"textbox":1,"separator":2,"table":2},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Print Alt: Exponential Functions","teacherView":true,"layout":"one col"}
*/
