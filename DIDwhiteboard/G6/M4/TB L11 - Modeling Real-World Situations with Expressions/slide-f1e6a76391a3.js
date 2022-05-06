const { ggb1, feedback1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('time', updateStop);

let id1 = 'slide-7ea3bdbf89c2';

let distances = ['1.5', '3', '5', '6', '8', '10'];

let costs = ['6.75', '10.50', '15.50', '18.00', '23.00', '28.00'];

let timeStopArray = [0.15, 0.3, 0.5, 0.6, 0.8, 1];

// let nextAvailableRow;
//updateStop keeps getting called twice for some reason, so needed to prevent it from running a second time
// let updateStopFiredAlready;

let defPrevGGB1 = {
  innerData: { cost: 0, distance: 0 },
};

let prevGGB1 = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes('innerData')
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  prevGGB1 = defPrevGGB1;
} else {
  let rowIndex = distances.indexOf(prevGGB1.innerData.distance.toString());

  table1.updateCell(rowIndex, 1, {
    value: prevGGB1.innerData.distance,
  });
  table1.updateCell(rowIndex, 2, {
    value: prevGGB1.innerData.cost,
  });
  table1.updateCell(rowIndex, 3, {
    value: prevGGB1.innerData.cost,
  });
}

slide.on('firstload', setTable);
// setTable();

function setTable() {
  let rowEmpty = [];
  for (let i = 0; i < table1.data.rows.length; i++) {
    rowEmpty.push(!table1.getCell(i, 3).value);
    table1.updateCell(i, 3, {
      editable: false,
    });
  }
  let nextAvailableRow = rowEmpty.indexOf(true);
  saveData({ nextAvailableRow });
  if (nextAvailableRow > -1) {
    table1.updateCell(nextAvailableRow, 3, {
      editable: true,
    });
  }
}

function updateStop() {
  let updateStopFiredAlready = getData('updateStopFiredAlready');
  if (
    ggb1.instance.getValue('time') == ggb1.instance.getValue('timeStop') &&
    !updateStopFiredAlready
  ) {
    // updateStopFiredAlready = true;
    saveData({ updateStopFiredAlready: true });
    let nextAvailableRow = getData('nextAvailableRow');
    table1.updateCell(nextAvailableRow, 1, {
      value: parseFloat(distances[nextAvailableRow]),
    });
    table1.updateCell(nextAvailableRow, 2, {
      value: parseFloat(costs[nextAvailableRow]),
    });
    setTable();
  }
}

button1.on('click', () => {
  // updateStopFiredAlready = false;
  saveData({ updateStopFiredAlready: false });
  button1.updateData({ disabled: true });
  let nextAvailableRow = getData('nextAvailableRow');
  table1.updateCell(nextAvailableRow, 3, {
    editable: false,
  });
  ggb1.instance.setValue('time', 0.02);
  ggb1.instance.setValue('timeStop', timeStopArray[nextAvailableRow]);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  let rowEmptyAutorun = [];
  for (let i = 0; i < table1.data.rows.length; i++) {
    rowEmptyAutorun.push(!table1.getCell(i, 2).value);
  }
  if (rowEmptyAutorun.indexOf(true) == -1) {
    button1.updateData({
      disabled: true,
    });
  } else {
    let nextAvailableRow = getData('nextAvailableRow');
    button1.updateData({
      disabled: table1.getCell(nextAvailableRow, 3).value == '',
    });
  }
});

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error(
      'saveData error: Parameters should be an object and a string!'
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Launch","lessonInfo":"6 M4 TB L11 - Modeling Real-Life Situations and Expressions","teacherView":false,"layout":"two col"}
*/
