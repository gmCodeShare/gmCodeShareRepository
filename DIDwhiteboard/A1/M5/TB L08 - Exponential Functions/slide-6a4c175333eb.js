const { text1, ggb1, separator1, buttonGroup1, feedback, separator2, table1 } =
  components;

ggb1.instance.setErrorDialogsActive(false);

let prevInput =
  getFromSlide(
    "slide-2c776e051648",
    "cc_submit_e6a119967b77_input1.data.text",
    ""
  ) || "";
let classSize;
if (prevInput) {
  classSize = utils.math.evaluateLatex(prevInput);
}
if (!!classSize && !classSize.error) {
  ggb1.instance.setValue("end", classSize.value);
} else {
  ggb1.instance.setValue("end", 100);
}

displayVals();

buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(dec)");
  displayVals();
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.evalCommand("RunClickScript(inc)");
  displayVals();
});

autorun(() => {
  // disable buttons appropriately
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] < 1 }, 1);
  buttonGroup1.updateSingleButton({ disabled: ggb1.innerData["gen"] > 11 }, 2);
});

// function boundIt(inp, min, max) {
//   const result = utils.math.evaluateLatex(inp);
//   if (result.error) {
//     submitInput1.updateData({ text: "20" }); // what should the text do/say if students input "cabbage"?
//     return 20; // whatever you go with here, make sure it's inside of your min and max!
//   } else if (result.value < min) {
//     submitInput1.updateData({ text: `${min}` });
//     return min;
//   } else if (result.value > max) {
//     submitInput1.updateData({ text: `${max}` });
//     return max;
//   }
//   return result.value;
// }

function displayVals() {
  table1.updateCell(0, 0, { value: `${ggb1.instance.getValue("gen")}` });
  table1.updateCell(0, 1, { value: `${ggb1.instance.getValue("numNew")}` });
  let totalSmiles =
    1 * ggb1.instance.getValue("numNew") + 1 * ggb1.instance.getValue("numOld");
  table1.updateCell(0, 2, { value: `${totalSmiles}` });
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"separator":2,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"9 M5 TB L08 - Exponential Functions","teacherView":false,"layout":"T layout"}
*/
