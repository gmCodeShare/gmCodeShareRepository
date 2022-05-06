const { fib1, button1, select1, fib2, fib3, fib4, text1 } = components;

slide.on("firstload", () => {
  fib1.setVisible(true);
  fib2.setVisible(true);
  fib3.setVisible(true);
  fib4.setVisible(true);
  select1.selectOption("0");
  button1.updateData({
    visible: true,
    align: "right",
    disabled: "true",
  });
});

fib1.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib2.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib3.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

fib4.on("change", ({ values }) => {
  button1.updateData({
    text: "Submit",
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
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
