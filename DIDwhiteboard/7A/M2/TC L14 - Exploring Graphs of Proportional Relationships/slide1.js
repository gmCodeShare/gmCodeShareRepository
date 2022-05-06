const { ggb1, table1, text1, select1, button1 } = components;

const xAxisLabel = 'Number of Copies Made';
const yAxisLabel = 'Cost';

const arbitraryXY = -100;

const xMax = 350;
const yMax = 70;

const xSteps = 50;
const ySteps = 10;

let speed = 2;

//SET ABOVE VALUES AS NEEDED
//xAxisLabel & yAxisLabel are labels for the axes in the graph.
//arbitraryXY is coord value to send points off screen just in case they "flash" when first created
//xMax & yMax to be set ggb1 xMax and yMax.
//xSteps & ySteps used to set axis step values.
//speed for points to be revealed as time animates.

//numOfPoints equal to num of rows in table minus 1 for the header row
const numOfPoints = table1.data.rows.length - 1;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', timeListener);
ggb1.instance.registerClientListener(clientListener);

slide.on('firstload', () => {
  button1.updateData({ visible: false });

  //setGGB function defined below
  setGGB();
});

select1.on('change', (selected) => {
  button1.updateData({ visible: true });
});

button1.on('click', () => {
  button1.updateData({ disabled: true });
  startTime();
});

function setGGB() {
  //set ggb1 speed for animation
  ggb1.instance.setValue('speed', speed);

  //tableVals pulls values from table1 and makes an array in the form of tableVals = [[r1c0, r1c2], [r2c0, r2c1], ...]. Is used to create points in ggb1.

  const tableVals = (() => {
    let array = [];
    for (i = 1, L = numOfPoints; i <= L; i++) {
      array.push([table1.getCell(i, 0).value, table1.getCell(i, 1).value]);
    }
    return array;
  })();

  //creating points from tableVals, hiding them to be revealed after button1 click, and making them unselectable.
  for (let i = 1, L = numOfPoints; i <= L; i++) {
    let xTemp = tableVals[i - 1][0];
    let yTemp = tableVals[i - 1][1];
    ggb1.instance.evalCommand(`P${i}=(${arbitraryXY},${arbitraryXY})`);
    ggb1.instance.setVisible(`P${i}`, false);
    ggb1.instance.setLabelVisible(`P${i}`, false);
    ggb1.instance.setCoords(`P${i}`, xTemp, yTemp);
    ggb1.instance.setFixed(`P${i}`, true, false);
  }

  //sets maxX & maxY values in ggb1
  ggb1.instance.setValue('xMax', xMax);
  ggb1.instance.setValue('yMax', yMax);

  //sets axis step valuse in ggb1
  ggb1.instance.setAxisSteps(1, xSteps, ySteps);

  //set ggb1 axis labels
  ggb1.instance.setTextValue('xAxisLabelText', xAxisLabel);
  ggb1.instance.setTextValue('yAxisLabelText', yAxisLabel);

  //set ggb1 graph title false
  ggb1.instance.setVisible('titleShown', false);
}

function startTime() {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

function timeListener() {
  let time = ggb1.instance.getValue('time');
  let timeMult = Math.ceil(time * numOfPoints);
  for (let i = 1, L = numOfPoints; i <= L; i++) {
    table1.updateCell(i, 0, { className: '' });
    table1.updateCell(i, 1, { className: '' });
  }
  table1.updateCell(timeMult, 0, { className: 'bg-info' });
  table1.updateCell(timeMult, 1, { className: 'bg-info' });
  ggb1.instance.setVisible(`P${timeMult}`, true);
  if (time == 1) {
    for (let i = 1, L = numOfPoints; i <= L; i++) {
      table1.updateCell(i, 0, { className: '' });
      table1.updateCell(i, 1, { className: '' });
      ggb1.instance.setVisible(`P${i}`, true);
      ggb1.instance.setFixed(`P${i}`, true, true);
    }
    ggb1.instance.unregisterObjectUpdateListener('time');
  }
}

function clientListener(a) {
  if (a[0] == 'select') {
    let pointNum = parseInt(a[1].substring(1));
    table1.updateCell(pointNum, 0, { className: 'bg-info' });
    table1.updateCell(pointNum, 1, { className: 'bg-info' });
  } else if (a[0] == 'deselect') {
    for (let i = 1, L = numOfPoints; i <= L; i++) {
      table1.updateCell(i, 0, { className: '' });
      table1.updateCell(i, 1, { className: '' });
    }
  }
}
