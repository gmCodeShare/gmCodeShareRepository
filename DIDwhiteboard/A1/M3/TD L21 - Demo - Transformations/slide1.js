const { ggb1, fib1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ disabled: true });
});

button1.on('click', () => {
  result = utils.math.evaluateLatex(fib1.getInput(0).text).value;
  const min = 0.01;
  const max = 100;
  num = boundIt(result, 0, min, max);
  ggb1.instance.setValue('k', num);
  ggb1.instance.setValue('show', true);
  button1.updateData({ disabled: true, text: 'Submitted' });
});

fib1.on('change', ({ values }) => {
  button1.updateData({ disabled: false, text: 'Submit' });
  ggb1.instance.setValue('show', false);
});

function boundIt(val, position, min, max) {
  const result = utils.math.evaluateLatex(fib1.getInput(position).text);
  if (result.error) {
    fib1.updateInput(position, { text: '0' });
    return 0;
  } else if (result.value < min) {
    fib1.updateInput(position, { text: `${min}` });
    return min;
  } else if (result.value > max) {
    fib1.updateInput(position, { text: `${max}` });
    return max;
  }
  return result.value;
}
