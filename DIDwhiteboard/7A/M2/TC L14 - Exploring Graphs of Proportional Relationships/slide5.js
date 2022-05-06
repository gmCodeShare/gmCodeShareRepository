const { ggb1, ggb2, ggb3, ggb4, table1, table2, table3, table4, separator1, select1 } = components;

const numOfSets = 4;

const arbitraryXY = -100;

const ggbArr = [ggb1, ggb2, ggb3, ggb4];
const tableArr = [table1, table2, table3, table4];

const xAxisLabelArr = ['Number of Copies Made', 'Rice (cups)', 'Time (hours)', 'Side Length of a Square'];
const yAxisLabelArr = ['Cost', 'Water (cups)', 'Bike Rental Cost (dollars)', 'Area of a Square'];

const xMaxArr = [350, 7, 4.5, 5];
const yMaxArr = [70, 7, 30, 10];

const xStepArr = [50, 1, 0.5, 0.5];
const yStepArr = [10, 1, 5, 1];

const graphLineBoolArr = [false, true, true, true];

const graphStartXArr = [undefined, 0, 0, undefined];
const graphStartYArr = [undefined, 0, 12, undefined];

const graphEndXArr = [undefined, 7, 4.5, 5];
const graphEndYArr = [undefined, 4 + 2 / 3, 30, undefined];

const graphEquationArr = [undefined, `f(x)=If(0 ≤ x ≤ ${graphEndXArr[1]}, ((${graphStartYArr[1]} - ${graphEndYArr[1]}) / (${graphStartXArr[1]} - ${graphEndXArr[1]}))((x) - ${graphStartXArr[1]}) + ${graphStartYArr[1]})`, `f(x)=If(0 ≤ x ≤ ${graphEndXArr[2]}, ((${graphStartYArr[2]} - ${graphEndYArr[2]}) / (${graphStartXArr[2]} - ${graphEndXArr[2]}))((x) - ${graphStartXArr[2]}) + ${graphStartYArr[2]})`, `f(x)=If(0 ≤ x ≤ ${graphEndXArr[3]}, x^2)`];

slide.on('firstload', () => {
  select1.selectOption('0');
  for (let i = 0, L = numOfSets; i < L; i++) {
    setGGB([i], ggbArr[i], xAxisLabelArr[i], yAxisLabelArr[i], xMaxArr[i], yMaxArr[i], xStepArr[i], yStepArr[i], graphLineBoolArr[i], graphEquationArr[i]);
  }
});

select1.on('change', (selected) => {
  let choice = parseInt(selected.selected[0]);
  for (let i = 0, L = numOfSets; i < numOfSets; i++) {
    ggbArr[i].updateData({ visible: false });
    tableArr[i].setVisible(false);
  }
  if (choice == 0) {
    separator1.updateData({ size: '16px' });
  } else {
    separator1.updateData({ size: '57px' });
  }
  ggbArr[choice].updateData({ visible: true });
  tableArr[choice].setVisible(true);
});

function setGGB(numSetCurrent, appletCurrent, xAxisLabelCurrent, yAxisLabelCurrent, xMaxCurrent, yMaxCurrent, xStepsCurrent, yStepsCurrent, graphLineBoolCurrent, graphEquationCurrent) {
  if (!graphLineBoolCurrent) {
    let numOfPoints = tableArr[numSetCurrent].data.rows.length - 1;
    //tableVals pulls values from table1 and makes an array in the form of tableVals = [[r1c0, r1c2], [r2c0, r2c1], ...]. Is used to create points in ggb1.
    const tableVals = (() => {
      let array = [];
      for (i = 1, L = numOfPoints; i <= L; i++) {
        array.push([tableArr[numSetCurrent].getCell(i, 0).value, tableArr[numSetCurrent].getCell(i, 1).value]);
      }
      return array;
    })();

    //creating points from tableVals, hiding them to be revealed after button1 click, and making them unselectable.
    for (let i = 1, L = numOfPoints; i <= L; i++) {
      let xTemp = tableVals[i - 1][0];
      let yTemp = tableVals[i - 1][1];
      appletCurrent.instance.evalCommand(`P${i}=(${arbitraryXY},${arbitraryXY})`);
      appletCurrent.instance.setLabelVisible(`P${i}`, false);
      appletCurrent.instance.setCoords(`P${i}`, xTemp, yTemp);
      appletCurrent.instance.setFixed(`P${i}`, true, false);
    }
  } else {
    myGraph = appletCurrent.instance.evalCommandGetLabels(graphEquationCurrent);
    appletCurrent.instance.setLabelVisible(myGraph, false);
    appletCurrent.instance.setFixed(myGraph, true, false);
  }

  //sets maxX & maxY values in ggb1
  appletCurrent.instance.setValue('xMax', xMaxCurrent);
  appletCurrent.instance.setValue('yMax', yMaxCurrent);

  //sets axis step valuse in ggb1
  appletCurrent.instance.setAxisSteps(1, xStepsCurrent, yStepsCurrent);

  //set ggb1 axis labels
  appletCurrent.instance.setTextValue('xAxisLabelText', xAxisLabelCurrent);
  appletCurrent.instance.setTextValue('yAxisLabelText', yAxisLabelCurrent);

  //set ggb1 graph title false
  appletCurrent.instance.setVisible('titleShown', false);
}
