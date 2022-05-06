const {
  ggb1,
  Separator1,
  Button2,
  feedback,
  Textbox4,
  table1,
  Button1,
  separator3,
  text1,
  text2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

Button2.updateData({ visible: false });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    text2.updateData({ visible: false });
    table1.updateData({ step: 0 });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let step = table1.data.step;
  if (step < 3) {
    let newCyan = table1.getCell(step, 0).value,
      newMagenta = table1.getCell(step, 1).value,
      newYellow = table1.getCell(step, 2).value;
    Button1.updateData({ disabled: !(newCyan || newMagenta || newYellow) });
    ggb1.updateInnerData({
      timeOut: 0,
      time1: 0,
      time2: 0,
      time3: 0,
      timeBack: 0,
    });
  }
});

function hasDuplicates(array) {
  return new Set(array).size != array.length;
}

Button1.on('click', () => {
  Button1.updateData({ disabled: true });
  text2.updateData({ visible: false });
  ggb1.updateInnerData({
    timeOut: 0,
    time1: 0,
    time2: 0,
    time3: 0,
    timeBack: 0,
  });
  let repeated = 0;
  let step = table1.data.step;
  if (step < 3) {
    for (let j = 0; j < 3; j++) {
      // check to see whether student has inputted these values already
      let checkArray = [];
      for (let i = 0; i < step + 1; i++) {
        checkArray.push(table1.getCell(i, j).value);
      }
      if (hasDuplicates(checkArray)) {
        repeated++;
      }
    } // end j loop
    if (repeated < 3) {
      text1.updateData({ text: '' });
      ggb1.updateInnerData({
        totalCyan: table1.getCell(step, 0).value,
        totalMagenta: table1.getCell(step, 1).value,
        totalYellow: table1.getCell(step, 2).value,
      });
      ggb1.instance.setAnimating('timeOut', true);
      ggb1.instance.setAnimating('time1', false);
      ggb1.instance.setAnimating('time2', false);
      ggb1.instance.setAnimating('time3', false);
      ggb1.instance.setAnimating('timeBack', false);
      ggb1.instance.startAnimation();
      table1.updateRow(table1.data.step, { editable: false });
      if (!ggb1.instance.getValue('checkSum')) {
        //table1.updateRow(step, {editable: false});
        table1.updateData({ step: step + 1 });
        //table1.updateRow(table1.data.step, {editable: true});
      }
    } else {
      text1.updateData({ text: 'Try a new mixture!' });
    }
  }
});

autorun(() => {
  if (ggb1.innerData['timeOut'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeOut', false);
    ggb1.instance.setAnimating('time1', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['time1'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time1', false);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['time2'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setAnimating('time3', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['time3'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('time3', false);
    ggb1.instance.setAnimating('timeBack', true);
    ggb1.instance.startAnimation();
  }
});

autorun(() => {
  if (ggb1.innerData['timeBack'] == 1) {
    ggb1.instance.stopAnimation();
    ggb1.instance.setAnimating('timeBack', false);
    if (!ggb1.instance.getValue('checkSum')) {
      let statement = '';
      switch (table1.data.step) {
        case 1:
          statement =
            'Great! Give two other mixtures that result in the same color paint.';
          table1.updateRow(table1.data.step, { editable: true });
          break;
        case 2:
          statement =
            'Great! Give another mixture that results in the same color paint.';
          table1.updateRow(table1.data.step, { editable: true });
          break;
        case 3:
          statement = 'Great!';
      }
      text1.updateData({ text: '' });
      text2.updateData({ visible: true, text: statement });
      table1.updateData({ visible: true });
    } else {
      table1.updateRow(table1.data.step, { editable: true });
      let advice = ggb1.instance.getValueString('wrongest') + '';
      let direction = ggb1.instance.getValue(advice + 'Delta');
      if (direction < 0) {
        text1.updateData({ text: `Uh oh. Looks like too little ${advice}.` });
      } else {
        text1.updateData({ text: `Uh oh. Looks like too much ${advice}.` });
      }
    }
  }
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":2,"textbox":4,"table":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
