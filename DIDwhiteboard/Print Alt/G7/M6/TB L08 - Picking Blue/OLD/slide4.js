const { ggb1, button1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.evalCommand('SetValue(pull1, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull2, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull3, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull4, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull5, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull6, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull7, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull8, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull9, RandomBetween(0, 1))');
    ggb1.instance.evalCommand('SetValue(pull10, RandomBetween(0, 1))');
    table1.updateData({ visible: false });
  }
  ggb1.updateData({ init: true });
}

let num1 = ggb1.instance.getValue('soFar1');
let num2 = ggb1.instance.getValue('soFar2');
let num3 = ggb1.instance.getValue('soFar3');
let num4 = ggb1.instance.getValue('soFar4');
let num5 = ggb1.instance.getValue('soFar5');
let num6 = ggb1.instance.getValue('soFar6');
let num7 = ggb1.instance.getValue('soFar7');
let num8 = ggb1.instance.getValue('soFar8');
let num9 = ggb1.instance.getValue('soFar9');
let num10 = ggb1.instance.getValue('soFar10');
let num11 = Math.round(ggb1.instance.getValue('prob1') * 100) / 100;
let num12 = Math.round(ggb1.instance.getValue('prob2') * 100) / 100;
let num13 = Math.round(ggb1.instance.getValue('prob3') * 100) / 100;
let num14 = Math.round(ggb1.instance.getValue('prob4') * 100) / 100;
let num15 = Math.round(ggb1.instance.getValue('prob5') * 100) / 100;
let num16 = Math.round(ggb1.instance.getValue('prob6') * 100) / 100;
let num17 = Math.round(ggb1.instance.getValue('prob7') * 100) / 100;
let num18 = Math.round(ggb1.instance.getValue('prob8') * 100) / 100;
let num19 = Math.round(ggb1.instance.getValue('prob9') * 100) / 100;
let num20 = Math.round(ggb1.instance.getValue('prob10') * 100) / 100;

button1.on('click', () => {
  //clickCount ++;
  table1.updateData({ visible: true });
  button1.updateData({ disabled: true });
  if (ggb1.innerData['count'] < 11) {
    ggb1.instance.evalCommand('SetValue(blueChipX,RandomBetween(-2,2))');
    ggb1.instance.setValue('enableButton', false);
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('break', false);
    ggb1.instance.setValue('break', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
  }
  if (ggb1.instance.getValue('count') == 1) {
    table1.updateCell(0, 1, { value: `$${num1}$` });
    table1.updateCell(0, 2, { value: `$\\frac${num1}{1}$` });
    table1.updateCell(0, 3, { value: `$${num11}$` });
  }
  if (ggb1.instance.getValue('count') == 2) {
    table1.updateCell(1, 1, { value: `$${num2}$` });
    table1.updateCell(1, 2, { value: `$\\frac${num2}{2}$` });
    table1.updateCell(1, 3, { value: `$${num12}$` });
  }
  if (ggb1.instance.getValue('count') == 3) {
    table1.updateCell(2, 1, { value: `$${num3}$` });
    table1.updateCell(2, 2, { value: `$\\frac${num3}{3}$` });
    table1.updateCell(2, 3, { value: `$${num13}$` });
  }
  if (ggb1.instance.getValue('count') == 4) {
    table1.updateCell(3, 1, { value: `$${num4}$` });
    table1.updateCell(3, 2, { value: `$\\frac${num4}{4}$` });
    table1.updateCell(3, 3, { value: `$${num14}$` });
  }
  if (ggb1.instance.getValue('count') == 5) {
    table1.updateCell(4, 1, { value: `$${num5}$` });
    table1.updateCell(4, 2, { value: `$\\frac${num5}{5}$` });
    table1.updateCell(4, 3, { value: `$${num15}$` });
  }
  if (ggb1.instance.getValue('count') == 6) {
    table1.updateCell(5, 1, { value: `$${num6}$` });
    table1.updateCell(5, 2, { value: `$\\frac${num6}{6}$` });
    table1.updateCell(5, 3, { value: `$${num16}$` });
  }
  if (ggb1.instance.getValue('count') == 7) {
    table1.updateCell(6, 1, { value: `$${num7}$` });
    table1.updateCell(6, 2, { value: `$\\frac${num7}{7}$` });
    table1.updateCell(6, 3, { value: `$${num17}$` });
  }
  if (ggb1.instance.getValue('count') == 8) {
    table1.updateCell(7, 1, { value: `$${num8}$` });
    table1.updateCell(7, 2, { value: `$\\frac${num8}{8}$` });
    table1.updateCell(7, 3, { value: `$${num18}$` });
  }
  if (ggb1.instance.getValue('count') == 9) {
    table1.updateCell(8, 1, { value: `$${num9}$` });
    table1.updateCell(8, 2, { value: `$\\frac${num9}{9}$` });
    table1.updateCell(8, 3, { value: `$${num19}$` });
  }
  if (ggb1.instance.getValue('count') == 10) {
    table1.updateCell(9, 1, { value: `$${num10}$` });
    table1.updateCell(9, 2, { value: `$\\frac${num10}{10}$` });
    table1.updateCell(9, 3, { value: `$${num20}$` });
  }
});

autorun(() => {
  let time2 = ggb1.innerData['time2'];
  if (ggb1.innerData['enableButton'] && ggb1.innerData['count'] < 11) {
    button1.updateData({ disabled: false });
  }
});
