const { ggb1, ggb2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  less();
  ggb2.instance.setValue('xmax', ggb2.instance.getValue('xmax') + 1);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  reset();
  ggb1.instance.evalCommand('pointList={500}');
  ggb1.instance.evalCommand('clickList={0}');
  pointList = [];
  pointsNum = ggb1.instance.getValue('points');
  for (var i = 0; i < pointsNum; i++) {
    ggb1.instance.evalCommand('P' + i + '=PointIn(box)');
    ggb1.instance.setCoords(
      'P' + i,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10
    );
    ggb1.instance.setColor('P' + i, 130, 63, 152);
    ggb1.instance.setFixed('P' + i, false, false);
    pointList.push('P' + i);
  }
  ggb1.instance.startAnimation();
});

ggb1.instance.registerObjectUpdateListener('clickCount', graph);
ggb1.instance.registerObjectUpdateListener('noPoints', off);

pointList = []; //Don't forget this! It won't create a list of points if you don't define the array.

//function createPoints() {
/*
This function creates points that are contained in a defined region, "box" in this case.
It then sets the coordinates of those points to random values. The random function only 
selects from 0<#<1.  I wanted the coordinates to go from -10 < x < 10 and -10 < y < 10
so I multiplied the random number by 20 (thus giving me numbers from 0 to 20) then
subtracted 10 from the result, shifting the numbers back 10 (resulting in -10 to 10).
This function also disables the button that creates the points and displays the buttons
for increasing or decreasing. Note that this function calls the reset function right away.
*/
reset();
var pointsNum = ggb1.instance.getValue('points');
for (var i = 0; i < pointsNum; i++) {
  ggb1.instance.evalCommand('P' + i + '=PointIn(box)');
  ggb1.instance.setCoords(
    'P' + i,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10
  );
  pointList.push('P' + i);
}
ggb1.instance.startAnimation();
//}

function more() {
  /*
This function adds the number of points defined by the number of existing points 
(pointList.length gives this) multiplied by the percent (as a decimal).  The Floor function is 
used to bring the value of "difference" to an integer. This also disables the button for 
decreasing and changes the color of the points that were added.
*/
  for (var i = 0; i < pointList.length; i++) {
    ggb1.instance.setColor('P' + i, 0, 127, 175);
  }
  ggb1.instance.evalCommand('SetActiveView(1)');
  var difference = Math.floor(
    pointList.length * ggb1.instance.getValue('percent')
  );
  var startingPoint = pointList.length;
  for (var i = startingPoint; i < difference + startingPoint; i++) {
    ggb1.instance.evalCommand('P' + i + '=PointIn(box)');
    ggb1.instance.setCoords(
      'P' + i,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10
    );
    ggb1.instance.setColor('P' + i, 130, 63, 152);
    pointList.push('P' + i);
  }
  ggb1.instance.setVisible('button3', false);
  ggb1.instance.setValue(
    'clickCount',
    ggb1.instance.getValue('clickCount') + 1
  );
  ggb1.instance.evalCommand('SetValue(clickList,Append(clickList,clickCount))');
  ggb1.instance.evalCommand(
    'SetValue(pointList,Append(pointList,' + pointList.length + '))'
  );
}

function less() {
  /*
This function deletes points defined by the number of existing points 
(pointList.length gives this) multiplied by the percent (as a decimal).  The Ceiling function is 
used to bring the value of "difference" to an integer. This also disables the button for increasing.
*/
  ggb1.instance.evalCommand('SetActiveView(1)');
  var difference = Math.ceil(
    pointList.length * ggb1.instance.getValue('percent')
  );
  for (var i = 0; i < difference; i++) {
    ggb1.instance.deleteObject(pointList[0]);
    pointList.shift();
  }
  ggb1.instance.setValue(
    'clickCount',
    ggb1.instance.getValue('clickCount') + 1
  );
  ggb2.instance.setValue(
    'clickCount',
    ggb2.instance.getValue('clickCount') + 1
  );
  ggb1.instance.evalCommand('SetValue(clickList,Append(clickList,clickCount))');
  ggb1.instance.evalCommand(
    'SetValue(pointList,Append(pointList,' + pointList.length + '))'
  );
  off();
}

function reset() {
  /*
This function deletes all of the points, resets list back to empty, and enables the Create Points
button while disabeling both increase and decrease buttons.
*/
  ggb1.instance.evalCommand('SetActiveView(1)');
  var cutPoints = pointList.length;
  for (var i = 0; i < cutPoints; i++) {
    ggb1.instance.deleteObject('P' + i);
  }
  pointList = [];
  ggb1.instance.setValue('clickCount', 0);
  ggb2.instance.setValue('clickCount', 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb2.instance.setValue('xmax', 3);
  ggb2.instance.setValue('ymax', 550);
}

function graph() {
  if (ggb1.instance.getValue('clickCount') > 0) {
    var xmax = 3 + ggb1.instance.getValue('clickCount');
    ggb1.instance.setValue('xmax', xmax);
    var xmin = -0.1 * xmax;
    ggb1.instance.setValue('xmin', xmin);
  }
}

function off() {
  if (ggb1.instance.getValue('noPoints') < 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
}
