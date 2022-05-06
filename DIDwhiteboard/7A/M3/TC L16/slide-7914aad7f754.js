const { categorization1, text1, feedback1 } = components;

let firstYes;
let firstNo;
let secondYes;
let secondNo;
let thirdYes;
let thirdNo;

categorization1.on("change", ({ assigned }) => {
  const { category_0, category_1 } = assigned;

  if (!category_0 || !category_0.length) {
    firstYes = 0;
    secondYes = 0;
    thirdYes = 0;
  } else {
    if (category_0.includes("0")) {
      firstYes = 1;
    } else {
      firstYes = 0;
    }
    if (category_0.includes("1")) {
      secondYes = 1;
    } else {
      secondYes = 0;
    }
    if (category_0.includes("2")) {
      thirdYes = 1;
    } else {
      thirdYes = 0;
    }
  }

  if (!category_1 || !category_1.length) {
    firstNo = 0;
    secondNo = 0;
    thirdNo = 0;
  } else {
    if (category_1.includes("0")) {
      firstNo = 1;
    } else {
      firstNo = 0;
    }
    if (category_1.includes("1")) {
      secondNo = 1;
    } else {
      secondNo = 0;
    }
    if (category_1.includes("2")) {
      thirdNo = 1;
    } else {
      thirdNo = 0;
    }
  }

  utils.RTS.sendData("slide-7914aad7f754", {
    yesNoData: [firstYes, firstNo, secondYes, secondNo, thirdYes, thirdNo],
  });
});

/*
{"compTotals":{"categorization":1,"textbox":2},"stage":"Learn","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"one col"}
*/
