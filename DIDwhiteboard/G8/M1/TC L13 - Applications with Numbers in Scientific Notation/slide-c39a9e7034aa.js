const {
  text1,
  separator1,
  select1,
  separator2,
  text2,
  separator3,
  select2,
  separator4,
  text3,
  fib1,
  fib2,
  feedback,
} = components;

let ID1 = "slide-d20790b75945";

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
  text2.updateData({ visible: false });
  select2.setVisible(false);
  text3.updateData({ visible: false });
  // text4.updateData({ visible: false });
  fib1.setVisible(false);
  fib2.setVisible(false);
});

let breathVol = getFromSlide(ID1, "input1.data.text", false) || false;

if (!breathVol) {
  breathVol = `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(
    ID1
  )}\]}$`;
}

text3.updateData({
  text: `You said that the volume of your "life breath balloon" would be $${breathVol}$ cubic meters.`,
});

select1.on("change", () => {
  text2.updateData({ visible: true });
  select2.setVisible(true);
  // let chosenLabel = selectedLabelsOrdered(select1)[0].replaceAll(`"`, "");
  // text4.updateData({
  //   text: `Complete the comparison statement: \n\n The volume of \\_\\_\\_ ( \\_\\_\\_ cubic meters) is \\_\\_\\_ ${chosenLabel} the volume of \\_\\_\\_ ( \\_\\_\\_ cubic meters). \n\n # \\[this is where a fill in the blank component will go, once those are ready\\]`,
  // });
  copyFibs();
  showFibs();
});

select2.on("change", () => {
  text3.updateData({ visible: true });
  // text4.updateData({ visible: true });
  copyFibs();
  showFibs();
});

// function selectedLabelsOrdered(selectComponent) {
//   let selected = [...selectComponent.data.selected];
//   // create an array out of the labels for each element of the selected array
//   return selected.map(
//     (index) => selectComponent.data.options[parseInt(index)].label
//   );
// }

function showFibs() {
  fib1.setVisible(
    select1.data.selected.includes("0") && select2.data.selected.length
  );
  fib2.setVisible(
    select1.data.selected.includes("1") && select2.data.selected.length
  );
}

function copyFibs() {
  const fibs = [fib1, fib2];
  const oldFibs = fibs.filter((fib) => fib.data.visible);
  if (!oldFibs.length) {
    return;
  }
  const oldVals = oldFibs[0].data.values;
  fillFibs(oldVals, oldFibs[0]);
}

function fillFibs(values, fibComp) {
  const textVals = values.map(({ text }) => text);
  const fibs = [fib1, fib2];
  fibs.splice(fibs.indexOf(fibComp), 1);
  for (let j = 0, K = fibs.length; j < K; j++) {
    for (let i = 0, L = textVals.length; i < L; i++) {
      fibs[j].updateInput(i, { text: textVals[i] });
    }
  }
}

/*
{"compTotals":{"textbox":4,"separator":4,"select":2,"fillblank":2},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"one col"}
*/
