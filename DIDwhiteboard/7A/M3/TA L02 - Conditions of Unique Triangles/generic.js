const { cat1, ggb1, text1, text2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
//ggb1.instance.registerClientListener(clientFunc);
ggb1.instance.registerAddListener(addListenerFunc);

let pointSelected;

//these arrays will need to be updated for each slide
const catNums = [0, 1, 2];
const availCatsArr = ['category_0', 'category_1', 'category_2'];
//example for angles and sides: catTypesArr = ['angle', 'angle', 'side'];
const catTypesArr = ['angle', 'side', 'side'];
//example for angle and sides: catDefArr = [(30 * Math.PI) / 180, (65 * Math.PI) / 180, 4];
const catDefArr = [(30 * Math.PI) / 180, 5, 6];

const storedCatsInGGBArr = ['cat0Stored', 'cat1Stored', 'cat2Stored'];
const orderCatsAssignedInGGBArr = [
  'catAssignedFirst',
  'catAssignedSecond',
  'catAssignedThird',
];

//if no angles available as item options, comment out the three angle choices here
const platformItemsArr = [
  ['angle', 'A', '$\\angle A$'],
  ['angle', 'B', '$\\angle B$'],
  ['angle', 'C', '$\\angle C$'],
  ['side', 'A', '$\\overline{\\rm AB}$'],
  ['side', 'B', '$\\overline{\\rm BC}$'],
  ['side', 'C', '$\\overline{\\rm CA}$'],
];

const pointArr = ['A', 'B', 'C'];
const segOrder = ['c', 'a', 'b'];

const currentAnglesArr = [
  ['currentAngleBAC', 'currentAngleCAB'],
  ['currentAngleABC', 'currentAngleCBA'],
  ['currentAngleACB', 'currentAngleBCA'],
];

const fixedAnglesArr = [
  ['fixedAngleBAC', 'fixedAngleCAB'],
  ['fixedAngleCBA', 'fixedAngleABC'],
  ['fixedAngleACB', 'fixedAngleBCA'],
];

const sidesArr = [
  ['fixedLengthAB', 'fixedLengthBA'],
  ['fixedLengthBC', 'fixedLengthCB'],
  ['fixedLengthCA', 'fixedLengthAC'],
];

cat1.on('change', ({ assigned }) => {
  //0a. Start by checking that each assigned is in a matching category type; in other words, angles are in conditions about angles and sides are in conditions about sides. If not, remove incorrectly assigned item and end function.
  if (!allConditionsMatchType(assigned)) {
    return;
  }

  //0b. Check if more than one item assigned to a category. If so, remove first item. 'change' will run twice if there are two items in a category; once for putting the item in, and a second time when the following lines remove the first item. checkOneAssignedItem ends the initial change function so that the rest of the function only runs once, when there is only 1 item per category.
  if (!onlyOneAssignedItem(assigned)) {
    return;
  }

  //0c. See what changed. If nothing, return!
  const catData = hasChanges(assigned);
  if (!catData.changesExist) {
    return;
  }

  //storeVals();

  //redefine all points as free points
  pointArr.forEach((el) => {
    const tempXVal = ggb1.instance.getXcoord(el);
    const tempYVal = ggb1.instance.getYcoord(el);
    ggb1.instance.evalCommand(`${el}:(${tempXVal},${tempYVal})`);
  });
  currentAnglesArr.forEach((el) => {
    ggb1.instance.setVisible(el[0], false);
    ggb1.instance.setVisible(el[1], false);
  });
  segOrder.forEach((el) => {
    ggb1.instance.setLineStyle(el, 1);
    ggb1.instance.setLabelVisible(el, false);
  });

  //1. Set cat values in ggb.
  catData.platformVals.forEach((el, index) => {
    if (el !== catData.ggbVals[index]) {
      ggb1.instance.setValue(storedCatsInGGBArr[index], parseInt(el));
    }
  });

  //2. Check if there is a condition. If not, set triangle to defaults and return.
  if (!hasConditions(catData.platformVals)) {
    orderCatsAssignedInGGBArr.forEach((el, index) => {
      catData.orderCatsAssigned[index] = '-1';
      ggb1.instance.setValue(el, -1);
    });
    return;
  }

  //2.1. If there are conditions, determine the order
  determineOrderAssigned(catData);

  //3. Go through conditions. There should be 1 to 3 conditions. Each step will have its own flow chart/switch statement.

  //3.1 Determine major switch statement. Need to determine
  const primaryIndex = pointArr.indexOf(
    platformItemsArr[parseInt(catData.orderedItems[0])][1]
  );

  const modNum = pointArr.length;

  const primaryPoint = pointArr[primaryIndex];
  const secondaryPoint = pointArr[(primaryIndex + 1) % modNum];
  const tertiaryPoint = pointArr[(primaryIndex + 2) % modNum];

  const hundredsDigitSorter =
    platformItemsArr[parseInt(catData.orderedItems[0])][0] === 'angle'
      ? 100
      : 400;

  const tensDigitSorter =
    typeof catData.orderedItems[1] === 'undefined'
      ? 0
      : 10 *
          ((pointArr.indexOf(
            platformItemsArr[parseInt(catData.orderedItems[1])][1]
          ) -
            primaryIndex +
            modNum) %
            modNum) +
        10 +
        (platformItemsArr[parseInt(catData.orderedItems[1])][0] === 'side'
          ? 30
          : 0);

  const onesDigitSorter =
    typeof catData.orderedItems[2] === 'undefined'
      ? 0
      : ((pointArr.indexOf(
          platformItemsArr[parseInt(catData.orderedItems[2])][1]
        ) -
          primaryIndex +
          modNum) %
          modNum) +
        1 +
        (platformItemsArr[parseInt(catData.orderedItems[2])][0] === 'side'
          ? 3
          : 0);

  const threeDigitSorter =
    hundredsDigitSorter + tensDigitSorter + onesDigitSorter;

  switch (threeDigitSorter) {
    case 100:
      case100(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 120:
      case120(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 130:
      case130(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 140:
      case140(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 150:
      case150(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 160:
      case160(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 123:
      case123(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 124:
      case124(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 125:
      case125(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 126:
      case126(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 132:
      case132(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 134:
      case134(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 135:
      case135(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 136:
      case136(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 142:
      case142(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 143:
      case143(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 145:
      case145(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 146:
      case146(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 152:
      case152(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 153:
      case153(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 154:
      case154(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 156:
      case156(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 162:
      case162(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 163:
      case163(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 164:
      case164(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 165:
      case165(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 400:
      case400(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 410:
      case410(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 420:
      case420(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 430:
      case430(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 450:
      case450(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 460:
      case460(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 412:
      case412(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 413:
      case413(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 415:
      case415(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 416:
      case416(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 421:
      case421(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 423:
      case423(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 425:
      case425(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 426:
      case426(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 431:
      case431(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 432:
      case432(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 435:
      case435(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 436:
      case436(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 451:
      case451(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 452:
      case452(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 453:
      case453(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 456:
      case456(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 461:
      case461(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 462:
      case462(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 463:
      case463(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    case 465:
      case465(
        primaryIndex,
        primaryPoint,
        secondaryPoint,
        tertiaryPoint,
        catData
      );
      break;
    default:
      console.warn('error in threeDigitSorter switch statement');
      break;
  }
  /*
  FOR TESTING, CONSIDER USING THE FOLLOWING:
  console.log('catData end');
  console.log(catData);
  */
});

function allConditionsMatchType(assigned) {
  let tempVar = true;
  for (const [key, value] of Object.entries(assigned)) {
    value.forEach((el) => {
      if (platformItemsArr[el][0] !== catTypesArr[availCatsArr.indexOf(key)]) {
        cat1.unassignItem(el, key);
        tempVar = false;
      }
    });
  }
  return tempVar;
}

function onlyOneAssignedItem(assigned) {
  let tempVar = true;
  for (const [key, value] of Object.entries(assigned)) {
    if (value.length > 1) {
      cat1.unassignItem(value[0], key);
      tempVar = false;
    }
  }
  return tempVar;
}

function hasChanges(assigned) {
  const catData = {
    changesExist: false,
    platformVals: [],
    ggbVals: [],
    orderCatsAssigned: [],
    orderedItems: [],
  };
  storedCatsInGGBArr.forEach((el) => {
    catData.ggbVals.push(ggb1.instance.getValue(el).toString());
  });
  orderCatsAssignedInGGBArr.forEach((el) => {
    catData.orderCatsAssigned.push(ggb1.instance.getValue(el).toString());
  });
  availCatsArr.forEach((el) => {
    catData.platformVals.push(
      typeof el === 'undefined' ||
        typeof assigned[el] === 'undefined' ||
        assigned[el].length === 0
        ? '-1'
        : assigned[el][0].toString()
    );
  });
  catData.ggbVals.forEach((el, index) => {
    if (el !== catData.platformVals[index]) {
      catData.changesExist = true;
    }
  });
  return catData;
}

function hasConditions(platVals) {
  let tempVar = false;
  platVals.forEach((el) => {
    if (el !== '-1') {
      tempVar = true;
    }
  });
  return tempVar;
}

function determineOrderAssigned(catData) {
  const catsThatChangedBoolArr = [];
  catData.platformVals.forEach((el, index) => {
    catsThatChangedBoolArr.push(el !== catData.ggbVals[index]);
  });
  //if only one cat changes
  if (
    catsThatChangedBoolArr.filter(function (x) {
      return x;
    }).length == 1
  ) {
    const singleCatThatChanged = catsThatChangedBoolArr.indexOf(true);
    //if item was added where there was nothing
    if (catData.ggbVals[singleCatThatChanged] === '-1') {
      for (let i = 0, L = catData.orderCatsAssigned.length; i < L; i++) {
        if (catData.orderCatsAssigned[i] === '-1') {
          catData.orderCatsAssigned[i] = singleCatThatChanged.toString();
          ggb1.instance.setValue(
            orderCatsAssignedInGGBArr[i],
            singleCatThatChanged
          );
          break;
        }
      }
    }
    //if item was removed
    else if (catData.platformVals[singleCatThatChanged] === '-1') {
      for (
        let i = catData.orderCatsAssigned.indexOf(
            singleCatThatChanged.toString()
          ),
          L = catData.orderCatsAssigned.length - 1;
        i < L;
        i++
      ) {
        catData.orderCatsAssigned[i] = catData.orderCatsAssigned[i + 1];
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[i],
          ggb1.instance.getValue(orderCatsAssignedInGGBArr[i + 1])
        );
      }
      catData.orderCatsAssigned[catData.orderCatsAssigned.length - 1] = '-1';
      ggb1.instance.setValue(
        orderCatsAssignedInGGBArr[catData.orderCatsAssigned.length - 1],
        -1
      );
    }
  }
  //if two cats change
  else {
    const singleCatThatStayed = catsThatChangedBoolArr.indexOf(false);
    const twoThatChanged = catNums.filter(function (x) {
      return x !== singleCatThatStayed;
    });
    const indexA = catData.orderCatsAssigned.indexOf(
      twoThatChanged[0].toString()
    );
    const indexB = catData.orderCatsAssigned.indexOf(
      twoThatChanged[1].toString()
    );
    const switchVal =
      indexA === -1 || indexB === -1
        ? 0
        : catData.platformVals[catData.orderCatsAssigned[0]] === '-1' &&
          (indexA === 0 || indexB === 0) &&
          (indexA === 1 || indexB === 1)
        ? 1
        : (indexA === 0 || indexB === 0) && (indexA === 1 || indexB === 1)
        ? 2
        : catData.platformVals[catData.orderCatsAssigned[0]] === '-1' &&
          (indexA === 0 || indexB === 0) &&
          (indexA === 2 || indexB === 2)
        ? 3
        : (indexA === 0 || indexB === 0) && (indexA === 2 || indexB === 2)
        ? 4
        : catData.platformVals[catData.orderCatsAssigned[1]] === '-1'
        ? 5
        : 6;
    switch (switchVal) {
      //if moved into an empty category
      case 0:
        const catThatMoved = twoThatChanged[indexA === -1 ? 1 : 0];
        const indexOfCatThatMovedInOrderAssigned =
          catData.orderCatsAssigned.indexOf(catThatMoved.toString());
        const catMovedInto = twoThatChanged[indexA === -1 ? 0 : 1];
        catData.orderCatsAssigned[indexOfCatThatMovedInOrderAssigned] =
          catMovedInto.toString();
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[indexOfCatThatMovedInOrderAssigned],
          catMovedInto
        );
        break;
      //moved into something and one item is
      case 1:
        catData.orderCatsAssigned[0] = catData.orderCatsAssigned[1];
        catData.orderCatsAssigned[1] = catData.orderCatsAssigned[2];
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[0],
          ggb1.instance.getValue(orderCatsAssignedInGGBArr[1])
        );
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[1],
          ggb1.instance.getValue(orderCatsAssignedInGGBArr[2])
        );
        break;
      case 2:
        catData.orderCatsAssigned[1] = catData.orderCatsAssigned[2];
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[1],
          ggb1.instance.getValue(orderCatsAssignedInGGBArr[2])
        );
        break;
      case 3:
        catData.orderCatsAssigned[0] = catData.orderCatsAssigned[2];
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[0],
          ggb1.instance.getValue(orderCatsAssignedInGGBArr[2])
        );
        break;
      case 4:
        //don't think I need this...
        break;
      case 5:
        catData.orderCatsAssigned[1] = catData.orderCatsAssigned[2];
        ggb1.instance.setValue(
          orderCatsAssignedInGGBArr[1],
          ggb1.instance.getValue(orderCatsAssignedInGGBArr[2])
        );
        break;
      case 6:
        //don't think I need this...
        break;
      default:
        console.warn(
          'error in switch statement for two changed where something moves into a cat that already has an item'
        );
        break;
    }
    catData.orderCatsAssigned[2] = '-1';
    ggb1.instance.setValue(orderCatsAssignedInGGBArr[2], -1);
  }
  //make order of items assigned array
  catData.orderCatsAssigned.forEach((el) => {
    catData.orderedItems.push(catData.platformVals[parseInt(el)]);
  });
}

function clientFunc(a) {
  console.log(a);
  switch (a.type) {
    case 'select':
      //storeVals();
      pointSelected = a.target;
      break;
    case 'deselect':
      //storeVals();
      pointSelected = 'nothing';
      break;
  }
}

function addListenerFunc(a) {
  ggb1.instance.setVisible(a, false);
}

/*
MAY NOT BE NECESSARY ANY LONGER...
function storeVals() {
  for (let i = 0, L1 = xDiffStoredValsArr.length; i < L1; i++) {
    for (let j = 0, L2 = xDiffStoredValsArr[i].length; j < L2; j++) {
      let tempX = ggb1.instance.getValue(xDiffCurrentNamesArr[i][j]);
      let tempY = ggb1.instance.getValue(yDiffCurrentNamesArr[i][j]);
      ggb1.instance.setValue(xDiffStoredNamesArr[i][j], tempX);
      ggb1.instance.setValue(yDiffStoredNamesArr[i][j], tempY);
      xDiffStoredValsArr[i][j] = tempX;
      yDiffStoredValsArr[i][j] = tempY;
    }
  }
}
*/

function case100(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 100');
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(ray${primaryPoint}${tertiaryPoint}Fixed)`
  );
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
}

function case120(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 120');
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 1) % pointArr.length][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 1) % pointArr.length][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Intersect(ray${primaryPoint}${tertiaryPoint}Fixed,ray${secondaryPoint}${tertiaryPoint}Fixed)`
  );
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setVisible(
    `currentAngle${tertiaryPoint}${secondaryPoint}${primaryPoint}`,
    true
  );
}

function case130(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 130');
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 2) % pointArr.length][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 2) % pointArr.length][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Intersect(ray${primaryPoint}${secondaryPoint}Fixed,ray${tertiaryPoint}${secondaryPoint}Fixed)`
  );
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setVisible(
    `currentAngle${primaryPoint}${tertiaryPoint}${secondaryPoint}`,
    true
  );
}

function case140(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 140');
  //set 100 and 40 values
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    sidesArr[primaryIndex][0],
    catDefArr[parseInt(catData.orderCatsAssigned[1])]
  );
  ggb1.instance.setValue(
    sidesArr[primaryIndex][1],
    catDefArr[parseInt(catData.orderCatsAssigned[1])]
  );
  //redefine necessary points
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(ray${primaryPoint}${tertiaryPoint}Fixed)`
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  //style/show parts as needed
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
}

function case150(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 150');
  //set 100 and 50 values
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    sidesArr[(primaryIndex + 1) % pointArr.length][0],
    catDefArr[parseInt(catData.orderCatsAssigned[1])]
  );
  ggb1.instance.setValue(
    sidesArr[(primaryIndex + 1) % pointArr.length][1],
    catDefArr[parseInt(catData.orderCatsAssigned[1])]
  );
  //redefine necessary points
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point({Intersect(circle${secondaryPoint}${tertiaryPoint}FixedLength, ray${primaryPoint}${tertiaryPoint}Fixed)})`
  );
  //style/show parts as needed
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 1) % pointArr.length], 0);
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 1) % pointArr.length],
    true
  );
}

function case160(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 160');
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    sidesArr[(primaryIndex + 2) % pointArr.length][0],
    catDefArr[parseInt(catData.orderCatsAssigned[1])]
  );
  ggb1.instance.setValue(
    sidesArr[(primaryIndex + 2) % pointArr.length][1],
    catDefArr[parseInt(catData.orderCatsAssigned[1])]
  );
  //redefine necessary points
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point({Intersect(circle${primaryPoint}${tertiaryPoint}FixedLength, ray${primaryPoint}${tertiaryPoint}Fixed)})`
  );
  //style/show parts as needed
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 2) % pointArr.length], 0);
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 2) % pointArr.length],
    true
  );
}

function case123(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 123');
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 1) % pointArr.length][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 1) % pointArr.length][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Intersect(ray${primaryPoint}${tertiaryPoint}Fixed,ray${secondaryPoint}${tertiaryPoint}Fixed)`
  );
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setVisible(
    `currentAngle${tertiaryPoint}${secondaryPoint}${primaryPoint}`,
    true
  );
  ggb1.instance.setVisible(
    `currentAngle${primaryPoint}${tertiaryPoint}${secondaryPoint}`,
    true
  );
}

function case124(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 124');
}

function case125(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 125');
}

function case126(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 126');
}

function case132(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 132');
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 2) % pointArr.length][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 2) % pointArr.length][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Intersect(ray${primaryPoint}${secondaryPoint}Fixed,ray${tertiaryPoint}${secondaryPoint}Fixed)`
  );
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setVisible(
    `currentAngle${primaryPoint}${tertiaryPoint}${secondaryPoint}`,
    true
  );
  ggb1.instance.setVisible(
    `currentAngle${tertiaryPoint}${secondaryPoint}${primaryPoint}`,
    true
  );
}

function case134(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 134');
}

function case135(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 135');
}

function case136(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 136');
}

function case142(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 142');
}

function case143(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 143');
}

function case145(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 145');
}

function case146(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 146');
}

function case152(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 152');
}

function case153(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 153');
}

function case154(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 154');
}

function case156(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 156');
}

function case162(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 162');
}

function case163(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 163');
}

function case164(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 164');
}

function case165(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 165');
}

function case400(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 400');
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${secondaryPoint}`,
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
}

function case410(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 410');
  //set 400 and 10 values
  ggb1.instance.setValue(
    sidesArr[primaryIndex][0],
    catDefArr[parseInt(catData.orderCatsAssigned[0])]
  );
  ggb1.instance.setValue(
    sidesArr[primaryIndex][1],
    catDefArr[parseInt(catData.orderCatsAssigned[0])]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[primaryIndex][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  //redefine necessary points
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(ray${primaryPoint}${tertiaryPoint}Fixed)`
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  //style/show parts as needed
  ggb1.instance.setVisible(
    `currentAngle${secondaryPoint}${primaryPoint}${tertiaryPoint}`,
    true
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
}

function case420(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 420');
  //set 400 and 20 values
  ggb1.instance.setValue(
    sidesArr[primaryIndex][0],
    catDefArr[parseInt(catData.orderCatsAssigned[0])]
  );
  ggb1.instance.setValue(
    sidesArr[primaryIndex][1],
    catDefArr[parseInt(catData.orderCatsAssigned[0])]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 1) % pointArr.length][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 1) % pointArr.length][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[1]]
  );
  //redefine necessary points
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(ray${secondaryPoint}${tertiaryPoint}Fixed)`
  );

  //style/show parts as needed
  ggb1.instance.setVisible(
    `currentAngle${tertiaryPoint}${secondaryPoint}${primaryPoint}`,
    true
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
}

function case430(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 430');
  /*
  WARNING!!!ONLY PARTIALLY COMPLETE! DOES NOT INCLUDE OBTUSE OR RIGHT TERTIARY ANGLES
  */

  /*
  MODEL FOR MAJOR ARC FOR TERTIARY POINT FOR ACUTE TERTIARY ANGLES
Point(Arc(Circle(Intersect(Ray(A, Rotate(B, 30°, A)), Ray(B, Rotate(A, -30°, B))), (0.5Distance(A, B)) / cos(30°)), B, A))

turns into...

  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(Arc(Circle(Intersect(Ray(${primaryPoint}, Rotate(${secondaryPoint}, ${
      Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
    }, ${primaryPoint})), Ray(${secondaryPoint}, Rotate(${primaryPoint}, -${
      Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
    }, ${secondaryPoint}))), (0.5Distance(${primaryPoint}, ${secondaryPoint})) / cos(${
      Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
    })), ${secondaryPoint}, ${primaryPoint}))`
  );

  */
  //set 400 and 30 values
  ggb1.instance.setValue(
    sidesArr[primaryIndex][0],
    catDefArr[parseInt(catData.orderCatsAssigned[0])]
  );
  ggb1.instance.setValue(
    sidesArr[primaryIndex][1],
    catDefArr[parseInt(catData.orderCatsAssigned[0])]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 2) % pointArr.length][0],
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    fixedAnglesArr[(primaryIndex + 2) % pointArr.length][1],
    2 * Math.PI - catDefArr[catData.orderCatsAssigned[1]]
  );
  //redefine necessary points
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  if (Math.PI / 2 > catDefArr[catData.orderCatsAssigned[1]]) {
    ggb1.instance.evalCommand(
      `${tertiaryPoint}:Point({Arc(Circle(Intersect(Ray(${primaryPoint}, Rotate(${secondaryPoint}, ${
        Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
      }, ${primaryPoint})), Ray(${secondaryPoint}, Rotate(${primaryPoint}, -${
        Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
      }, ${secondaryPoint}))), (0.5Distance(${primaryPoint}, ${secondaryPoint})) / cos(${
        Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
      })), ${secondaryPoint}, ${primaryPoint}),Arc(Circle(Intersect(Ray(${secondaryPoint}, Rotate(${primaryPoint}, ${
        Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
      }, ${secondaryPoint})), Ray(${primaryPoint}, Rotate(${secondaryPoint}, -${
        Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
      }, ${primaryPoint}))), (0.5Distance(${secondaryPoint}, ${primaryPoint})) / cos(${
        Math.PI / 2 - catDefArr[catData.orderCatsAssigned[1]]
      })), ${primaryPoint}, ${secondaryPoint})})`
    );
  }
  //style/show parts as needed
  ggb1.instance.setVisible(
    `currentAngle${primaryPoint}${tertiaryPoint}${secondaryPoint}`,
    true
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
}

function case450(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 450');
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${secondaryPoint}`,
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    `fixedLength${secondaryPoint}${tertiaryPoint}`,
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(circle${secondaryPoint}${tertiaryPoint}FixedLength)`
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 1) % pointArr.length], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 1) % pointArr.length],
    true
  );
}

function case460(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 460');
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${secondaryPoint}`,
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${tertiaryPoint}`,
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point(circle${primaryPoint}${tertiaryPoint}FixedLength)`
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 2) % pointArr.length], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 2) % pointArr.length],
    true
  );
}

function case412(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 412');
}

function case413(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 413');
}

function case415(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 415');
}

function case416(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 416');
}

function case421(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 421');
}

function case423(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 423');
}

function case425(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 425');
}

function case426(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 426');
}

function case431(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 431');
}

function case432(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 432');
}

function case435(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 435');
}

function case436(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 436');
}

function case451(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 451');
}

function case452(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 452');
}

function case453(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 453');
}

function case456(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 456');
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${secondaryPoint}`,
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    `fixedLength${secondaryPoint}${tertiaryPoint}`,
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${tertiaryPoint}`,
    catDefArr[catData.orderCatsAssigned[2]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point({Intersect(circle${primaryPoint}${tertiaryPoint}FixedLength, circle${secondaryPoint}${tertiaryPoint}FixedLength)})`
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 1) % pointArr.length], 0);
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 2) % pointArr.length], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 1) % pointArr.length],
    true
  );
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 2) % pointArr.length],
    true
  );
}

function case461(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 461');
}

function case462(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 462');
}

function case463(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 463');
}

function case465(
  primaryIndex,
  primaryPoint,
  secondaryPoint,
  tertiaryPoint,
  catData
) {
  console.log('case 465');
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${secondaryPoint}`,
    catDefArr[catData.orderCatsAssigned[0]]
  );
  ggb1.instance.setValue(
    `fixedLength${primaryPoint}${tertiaryPoint}`,
    catDefArr[catData.orderCatsAssigned[1]]
  );
  ggb1.instance.setValue(
    `fixedLength${secondaryPoint}${tertiaryPoint}`,
    catDefArr[catData.orderCatsAssigned[2]]
  );
  ggb1.instance.evalCommand(
    `${secondaryPoint}:Point(circle${primaryPoint}${secondaryPoint}FixedLength)`
  );
  ggb1.instance.evalCommand(
    `${tertiaryPoint}:Point({Intersect(circle${primaryPoint}${tertiaryPoint}FixedLength, circle${secondaryPoint}${tertiaryPoint}FixedLength)})`
  );
  ggb1.instance.setLineStyle(segOrder[primaryIndex], 0);
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 1) % pointArr.length], 0);
  ggb1.instance.setLineStyle(segOrder[(primaryIndex + 2) % pointArr.length], 0);
  ggb1.instance.setLabelVisible(segOrder[primaryIndex], true);
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 1) % pointArr.length],
    true
  );
  ggb1.instance.setLabelVisible(
    segOrder[(primaryIndex + 2) % pointArr.length],
    true
  );
}

// function firstAssignedAngleFuncPrimary(a) {
//   console.log(`from primary => a: ${a}, pointSelected: ${pointSelected}`);
//   if (a === pointSelected) {
//     console.log('inside angle func primary');
//     console.log(a);
//     const primaryIndex = pointArr.indexOf(a);
//     const secondaryPoint = pointArr[(primaryIndex + 1) % pointArr.length];
//     const tertiaryPoint = pointArr[(primaryIndex + 2) % pointArr.length];
//     console.log('primaryIndex');
//     console.log(primaryIndex);
//     console.log('secondaryPoint');
//     console.log(secondaryPoint);
//     console.log('tertiaryPoint');
//     console.log(tertiaryPoint);
//     ggb1.instance.setCoords(
//       secondaryPoint,
//       ggb1.instance.getXcoord(a) + xDiffStoredValsArr[primaryIndex][0],
//       ggb1.instance.getYcoord(a) + yDiffStoredValsArr[primaryIndex][0]
//     );
//     ggb1.instance.setCoords(
//       tertiaryPoint,
//       ggb1.instance.getXcoord(a) + xDiffStoredValsArr[primaryIndex][1],
//       ggb1.instance.getYcoord(a) + yDiffStoredValsArr[primaryIndex][1]
//     );
//   }
// }

// function firstAssignedAngleFuncSecondary(a) {
//   console.log(`from secondary => a: ${a}, pointSelected: ${pointSelected}`);
//   if (a === pointSelected) {
//     console.log('inside angle func secondary');
//     console.log(a);
//     const primaryIndex = (pointArr.indexOf(a) - 1) % pointArr.length;
//     //const secondaryPoint = pointArr[(primaryIndex + 1) % pointArr.length];
//     const tertiaryPoint = pointArr[(primaryIndex + 2) % pointArr.length];
//     console.log('primaryIndex');
//     console.log(primaryIndex);
//     console.log('tertiaryPoint');
//     console.log(tertiaryPoint);
//     ggb1.instance.setCoords(
//       tertiaryPoint,
//       ggb1.instance.getXcoord(currentLengthFixedRayArr[primaryIndex]),
//       ggb1.instance.getYcoord(currentLengthFixedRayArr[primaryIndex])
//     );
//   }
// }

// function firstAssignedAngleFuncTertiary(a) {
//   console.log(`from tertiary => a: ${a}, pointSelected: ${pointSelected}`);
//   if (a === pointSelected && ggb1.instance.getAlgorithmXML(a) === '') {
//     const primaryIndex = (pointArr.indexOf(a) - 2) % pointArr.length;
//     console.log(primaryIndex);
//     console.log('inside angle func tertiary');
//     console.log(a);
//     console.log('myVal');
//     ggb1.instance.evalCommand(`${a}:Point(rayACFixed)`);
//     const secondaryPoint = pointArr[(primaryIndex + 1) % pointArr.length];
//     //const tertiaryPoint = pointArr[(primaryIndex + 2) % pointArr.length];
//     // ggb1.instance.setCoords(
//     //   a,
//     //   ggb1.instance.getXcoord(currentLengthFixedRayArr[primaryIndex]),
//     //   ggb1.instance.getYcoord(currentLengthFixedRayArr[primaryIndex])
//     // );
//   }
// }

/*
LIKELY TO DELETE
function firstAssignedSideFuncPrimary(s) {
  console.log('inside side func primary');
  console.log(s);
}

function firstAssignedSideFuncSecondary(s) {
  console.log('inside side func secondary');
  console.log(s);
}

function firstAssignedSideFuncTertiary(s) {
  console.log('inside side func tertiary');
  console.log(s);
}
*/

/*
LIKELY TO DELETE - IF NOT, RETURN UP TOP TO DECLARATIONS
const xDiffCurrentNamesArr = [
  ['AtoBDiffXCurrent', 'AtoCDiffXCurrent'],
  ['BtoCDiffXCurrent', 'BtoADiffXCurrent'],
  ['CtoADiffXCurrent', 'CtoBDiffXCurrent'],
];
const yDiffCurrentNamesArr = [
  ['AtoBDiffYCurrent', 'AtoCDiffYCurrent'],
  ['BtoCDiffYCurrent', 'BtoADiffYCurrent'],
  ['CtoADiffYCurrent', 'CtoBDiffYCurrent'],
];
const xDiffStoredNamesArr = [
  ['AtoBDiffXStored', 'AtoCDiffXStored'],
  ['BtoCDiffXStored', 'BtoADiffXStored'],
  ['CtoADiffXStored', 'CtoBDiffXStored'],
];
const yDiffStoredNamesArr = [
  ['AtoBDiffYStored', 'AtoCDiffYStored'],
  ['BtoCDiffYStored', 'BtoADiffYStored'],
  ['CtoADiffYStored', 'CtoBDiffYStored'],
];
const xDiffFixedNamesArr = [
  ['AtoBDiffXFixed', 'AtoCDiffXFixed'],
  ['BtoCDiffXFixed', 'BtoADiffXFixed'],
  ['CtoADiffXFixed', 'CtoBDiffXFixed'],
];
const yDiffFixedNamesArr = [
  ['AtoBDiffYFixed', 'AtoCDiffYFixed'],
  ['BtoCDiffYFixed', 'BtoADiffYFixed'],
  ['CtoADiffYFixed', 'CtoBDiffYFixed'],
];

const xDiffStoredValsArr = [
  [
    ggb1.instance.getValue('AtoBDiffXStored'),
    ggb1.instance.getValue('AtoCDiffXStored'),
  ],
  [
    ggb1.instance.getValue('BtoCDiffXStored'),
    ggb1.instance.getValue('BtoADiffXStored'),
  ],
  [
    ggb1.instance.getValue('CtoADiffXStored'),
    ggb1.instance.getValue('CtoBDiffXStored'),
  ],
];
const yDiffStoredValsArr = [
  [
    ggb1.instance.getValue('AtoBDiffYStored'),
    ggb1.instance.getValue('AtoCDiffYStored'),
  ],
  [
    ggb1.instance.getValue('BtoCDiffYStored'),
    ggb1.instance.getValue('BtoADiffYStored'),
  ],
  [
    ggb1.instance.getValue('CtoADiffYStored'),
    ggb1.instance.getValue('CtoBDiffYStored'),
  ],
];
const xDiffFixedValsArr = [
  [
    ggb1.instance.getValue('AtoBDiffXFixed'),
    ggb1.instance.getValue('AtoCDiffXFixed'),
  ],
  [
    ggb1.instance.getValue('BtoCDiffXFixed'),
    ggb1.instance.getValue('BtoADiffXFixed'),
  ],
  [
    ggb1.instance.getValue('CtoADiffXFixed'),
    ggb1.instance.getValue('CtoBDiffXFixed'),
  ],
];
const yDiffFixedValsArr = [
  [
    ggb1.instance.getValue('AtoBDiffYFixed'),
    ggb1.instance.getValue('AtoCDiffYFixed'),
  ],
  [
    ggb1.instance.getValue('BtoCDiffYFixed'),
    ggb1.instance.getValue('BtoADiffYFixed'),
  ],
  [
    ggb1.instance.getValue('CtoADiffYFixed'),
    ggb1.instance.getValue('CtoBDiffYFixed'),
  ],
];

const currentLengthFixedRayArr = [
  'AtoCByCurrentLengthFixedRay',
  'BtoAByCurrentLengthFixedRay',
  'CtoBByCurrentLengthFixedRay',
];
*/
