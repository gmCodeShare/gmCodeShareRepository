const {
  ggb1,
  buttonGroup1,
  cc_submit_0126e3740302_textbox1: text1,
  cc_submit_0126e3740302_button1: button1,
  cc_submit_0126e3740302_input1: input1,
  text2,
  fib1,
  button2,
  select1,
  fib2,
  fib3,
  fib4,
} = components;

components.feedback1.updateData({ visible: false });
ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  fib1.setVisible(false);
  fib2.setVisible(false);
  fib3.setVisible(false);
  fib4.setVisible(false);
  select1.setVisible(false);
  text2.updateData({ visible: false });
  button2.updateData({
    visible: false,
    align: "right",
    disabled: "true",
  });
});

fib1.on("change", ({ values }) => {
  button2.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib2.on("change", ({ values }) => {
  button2.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib3.on("change", ({ values }) => {
  button2.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib4.on("change", ({ values }) => {
  button2.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  select1.setVisible(true);
  fib1.setVisible(true);
  fib2.setVisible(true);
  fib3.setVisible(true);
  fib4.setVisible(true);
  select1.selectOption("0");
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
});

function fillFibs(values, fibComp) {
  const textVals = values.map(({ text }) => text);
  const fibs = [fib1, fib2, fib3, fib4];
  fibs.splice(fibs.indexOf(fibComp), 1);
  for (let j = 0, K = fibs.length; j < K; j++) {
    for (let i = 0, L = textVals.length; i < L; i++) {
      fibs[j].updateInput(i, { text: textVals[i] });
    }
  }
}

select1.on("change", ({ selected }) => {
  const fibs = [fib1, fib2, fib3, fib4];
  const oldFibs = fibs.filter((fib) => fib.data.visible);
  const oldVals = oldFibs[0].data.values;
  fillFibs(oldVals, oldFibs[0]);
  for (let i = 0, L = fibs.length; i < L; i++) {
    fibs[i].setVisible(selected.includes(`${i}`));
  }
});
const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.setCaption("c", "$%v$");
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setCaption("c", "$x$");
});
