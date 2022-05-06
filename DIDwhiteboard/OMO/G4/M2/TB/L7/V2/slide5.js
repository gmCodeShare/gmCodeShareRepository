const {
  cat1,
  text1,
  button1,
  text2,
  imageArr,
  imagePVC,
  imageArea,
  textExp,
  imageCheck,
  text3,
} = components;

function hideFeedback() {
  const compsToHide = [imageArr, imagePVC, imageArea, textExp, imageCheck];
  compsToHide.forEach((comp) => {
    comp.updateData({ visible: false });
  });
  text2.updateData({ text: "" });
  text3.updateData({ text: "" });
}

slide.on("firstload", () => {
  hideFeedback();
  button1.updateData({ disabled: true });
});

cat1.on("change", () => {
  hideFeedback();
  button1.updateData({ disabled: false, text: "Submit" });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  // get assigned data from cat comp and assign names
  const assigned = assignedSafe(cat1);
  recordAttempt(1, { assigned: { ...assigned } });
  const { category_0: thirty, category_1: six } = assigned;
  // generate objects to track each representation
  const arrCheck = {
    correct: thirty.includes("3") && six.includes("0"),
    target: imageArr,
    text2feedback: "Check your thinking. Here is another example of an array.",
    text3feedback:
      "$24$ is the product of the $4$ by $6$ array because $4\\times6=24$. What products do your arrays represent?",
  };
  const pvcCheck = {
    correct: thirty.includes("5") && six.includes("2"),
    target: imagePVC,
    text2feedback:
      "Check your thinking. Here is another example of a place value chart.",
    text3feedback:
      "The place value chart shows $24$ because there are $2$ tens and $4$ ones. What do your place value charts show?",
  };
  const areaCheck = {
    correct: thirty.includes("4") && six.includes("7"),
    target: imageArea,
    text2feedback:
      "Check your thinking. Here is another example of an area model.",
    text3feedback:
      "You can find the area of a rectangle by multiplying the length, $6$, and the width, $4$, to get an area of $24$ square units. What areas do your area models show?",
  };
  const expCheck = {
    correct: thirty.includes("1") && six.includes("6"),
    target: textExp,
    text2feedback:
      "Check your thinking. Here is another example of an expression.",
    text3feedback:
      "The product is $24$ because $4\\times6=24$. What products do your expressions show?",
  };
  // check the reps in a random order
  const shuffled = shuffle([arrCheck, pvcCheck, areaCheck, expCheck]);
  for (let i = 0, L = shuffled.length; i < L; i++) {
    const { correct, target, text2feedback, text3feedback } = shuffled[i];
    if (!correct) {
      target.updateData({ visible: true });
      text2.updateData({ text: text2feedback });
      text3.updateData({ text: text3feedback });
      return;
    }
  }
  // if you made it past the return, it's correct!
  imageCheck.updateData({ visible: true });
  setTimeout(controls.next, 2000);
});

// generic functions

function assignedSafe(catComponent) {
  const allCategoryValues = catComponent.data.categories.map(
    (category) => category.value
  );
  const tempObject = {};
  allCategoryValues.forEach((value) => {
    tempObject[value] = [];
  });
  return { ...tempObject, ...catComponent.data.assigned };
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function recordAttempt(prompt = 1, data = {}) {
  utils.RTS.sendData("slide-3d79ba9a5cf4", {
    prompt,
    slide: controls.current,
    attempt: {
      ...data,
    },
  });
}
