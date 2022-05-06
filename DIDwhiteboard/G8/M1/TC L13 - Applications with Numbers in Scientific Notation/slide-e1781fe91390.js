const {
  ggb1,
  table2,
  separator1,
  text3,
  select1,
  feedback,
  text1,
  table1,
  text2,
  buttonGroup1,
} = components;

const heights = {
  Sun: 1.39 * 10 ** 9,
};
for (let i = 0, L = table1.data.rows.length; i < L; i++) {
  heights[table1.getCell(i, 0).value] = utils.math.evaluateLatex(
    table1.getCell(i, 1).value
  ).value;
}
// console.log(heights);

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateData({ justify: 'right' });
  select1.selectOption('0');
  table2.updateData({ step: 0 });
  ggb1.instance.setValue('mercDia', heights.Mercury);
  ggb1.instance.setValue('venDia', heights.Venus);
  ggb1.instance.setValue('earthDia', heights.Earth);
  ggb1.instance.setValue('marsDia', heights.Mars);
  ggb1.instance.setValue('jupDia', heights.Jupiter);
  ggb1.instance.setValue('satDia', heights.Saturn);
  ggb1.instance.setValue('uraDia', heights.Uranus);
  ggb1.instance.setValue('nepDia', heights.Neptune);
  ggb1.instance.setValue('sunDia', heights.Sun);
});

select1.on('change', ({ selected }) => {
  ggb1.updateData({ visible: selected.includes('0') });
  table2.updateData({ visible: selected.includes('1') });
  text3.updateData({ visible: selected.includes('1') });
  // need a separator with GGB, but not with table:
  separator1.updateData({ size: selected.includes('0') ? '16px' : '0px' });
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  const quants = table1.data.rows.map((row) => row[2].value);
  if (!quants.every(isWhole)) {
    text2.updateData({ text: 'Make sure to use whole numbers!' });
    return;
  }
  const quantsNum = quants.map(
    (numStr) => utils.math.evaluateLatex(numStr).value
  );
  if (!quantsNum.every((quantity) => quantity < 6)) {
    text2.updateData({
      text: 'Make sure to use no more than $5$ of each planet!',
    });
    return;
  }
  if (quantsNum.reduce((acc, quantity) => acc + (!!quantity ? 1 : 0)) < 3) {
    text2.updateData({
      text: 'Make sure to use at least $3$ different planets!',
    });
    return;
  }
  text2.updateData({ text: '' });
  const numNames = [
    'numMerc',
    'numVen',
    'numEarth',
    'numMars',
    'numJup',
    'numSat',
    'numUra',
    'numNep',
  ];
  for (let i = 0, L = numNames.length; i < L; i++) {
    ggb1.instance.setValue(numNames[i], quantsNum[i]);
    // console.log(numNames[i], quantsNum[i]);
  }
  const sum =
    heights.Mercury * quantsNum[0] +
    heights.Venus * quantsNum[1] +
    heights.Earth * quantsNum[2] +
    heights.Mars * quantsNum[3] +
    heights.Jupiter * quantsNum[4] +
    heights.Saturn * quantsNum[5] +
    heights.Uranus * quantsNum[6] +
    heights.Neptune * quantsNum[7];
  const diff = sum - heights.Sun;
  const diffPrefix = diff > 0 ? '+' : '';
  const sumExp = makeExp(sum);
  const diffExp = makeExp(diff);
  if (table2.data.step < 3) {
    table2.updateCell(table2.data.step, 1, { value: sumExp });
    table2.updateCell(table2.data.step, 2, {
      value: `${diffPrefix}${diffExp}`,
    });
    table2.updateData({ step: table2.data.step + 1 });
  }
  text3.updateData({
    text: `Your stack is $${sumExp} \\text{ m}$ tall.
  
  That's ${
    !!diffPrefix ? 'taller' : 'shorter'
  } than the sun by $${diffExp.replace('-', '')} \\text{ m}$!`,
  });
  select1.selectOption('0');
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.startAnimation();
});

function isWhole(num) {
  const result = utils.math.evaluateLatex(num);
  return !result.error && result.value >= 0 && Number.isInteger(result.value);
}

function makeExp(num) {
  return num
    .toExponential()
    .replaceAll('+', '')
    .replace('e', `\\times 10^{`)
    .concat('}');
}

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  // I bet there's a better way to do this than hard-coding each cell!
  let entries = [
    table1.getCell(0, 2).value,
    table1.getCell(1, 2).value,
    table1.getCell(2, 2).value,
    table1.getCell(3, 2).value,
    table1.getCell(4, 2).value,
    table1.getCell(5, 2).value,
    table1.getCell(6, 2).value,
    table1.getCell(7, 2).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    // button1.updateData({
    //   /* text: "Submit", */
    //   disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
    //   //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    // });
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      1
    );
    table1.updateData({ last: [...entries] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"geogebra":1,"table":2,"separator":1,"textbox":4,"select":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"two col"}
*/
