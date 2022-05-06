const { ggb1, text1, text2, text3, buttonGroup1, fib1, fib2 } = components;

const safeRound = 13;
ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  ggb1.instance.setVisible('PointSqRt13', false);
  ggb1.instance.setVisible('PointCbRt13', false);
  ggb1.instance.setVisible('PointSqRt24', false);
  // ggb1.instance.setVisible('PointCbRt24', false);
  ggb1.instance.setVisible('PointSqRt1div64', false);
  ggb1.instance.setVisible('PointCbRt1div64', false);
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.getValue('clickCount');
  if (ggb1.instance.getValue('clickCount') == 0) {
    ggb1.instance.setVisible('PointSqRt24', true);
  } else if (ggb1.instance.getValue('clickCount') == 1) {
    ggb1.instance.setVisible('PointCbRt13', true);
  } else if (ggb1.instance.getValue('clickCount') == 2) {
    ggb1.instance.setVisible('PointSqRt13', true);
  } else if (ggb1.instance.getValue('clickCount') == 3) {
    ggb1.instance.setVisible('PointCbRt1div64', true);
  } else if (ggb1.instance.getValue('clickCount') == 4) {
    ggb1.instance.setVisible('PointSqRt1div64', true);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  ggb1.instance.setValue('clickCount', ggb1.instance.getValue('clickCount') + 1);
});

fib1.on('change', ({ values }) => {
  let input = values[0].text;
  const result = utils.math.evaluateLatex(input);
  text2.updateData({ visible: !result.error });
  if (result.error) {
    return;
  }
  const squaredNum = result.value ** 2;
  // const roundedNum = squaredNum.toFixed(6);
  const roundedNum = round(squaredNum, safeRound);
  text2.updateData({ text: `$= ${roundedNum}$` });
});

fib2.on('change', ({ values }) => {
  let input = values[0].text;
  const result = utils.math.evaluateLatex(input);
  text3.updateData({ visible: !result.error });
  if (result.error) {
    return;
  }
  const cubedNum = result.value ** 3; // slide specific
  // const roundedNum = cubedNum.toFixed(6);
  const roundedNum = round(cubedNum, safeRound); // slide specific
  text3.updateData({ text: `$= ${roundedNum}$` });
});

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
