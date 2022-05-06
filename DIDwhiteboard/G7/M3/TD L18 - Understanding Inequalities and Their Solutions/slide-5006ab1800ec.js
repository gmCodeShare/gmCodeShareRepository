const {
  ggb1,
  separator1,
  button1,
  feedback1,
  text1,
  buttonGroup1,
  buttonGroup2,
  buttonGroup3,
  text2,
  select1,
  cc_sharewithclass_127e1aa6645a_textbox1: shareText1,
  cc_sharewithclass_127e1aa6645a_input1: shareInput1,
  cc_sharewithclass_127e1aa6645a_button1: shareButton1,
  cc_sharewithclass_127e1aa6645a_studentanswers1: shareAnswers1,
} = components;

//previous ggb file was g82ys9vc

ggb1.instance.setErrorDialogsActive(false);

let pointSelected = '';

slide.on('firstload', () => {
  //hide feedback
  ggb1.instance.setVisible('text8', false);
  ggb1.instance.setVisible('text2', true);

  //hide yes/no buttons and text
  text2.updateData({ visible: false });
  select1.updateData({ visible: false });
});

//reset button script - enables buttons and resets color
button1.on('click', () => {
  ggb1.instance.setVisible('text8', false);
  ggb1.instance.setVisible('text2', true);
  pointSelected = '';
  ggb1.instance.setValue('shownVal', '?');
  ggb1.instance.evalCommand('SelectObjects()');
  select1.updateData({ selected: '', visible: false });
  text2.updateData({ visible: false });
  for (let i = 1; i <= 12; i++) {
    ggb1.instance.setVisible('S' + i, false);
  }
  buttonGroup1.updateSingleButton({ disabled: false, color: 'primary' }, 1);
  buttonGroup1.updateSingleButton({ disabled: false, color: 'primary' }, 2);
  buttonGroup1.updateSingleButton({ disabled: false, color: 'primary' }, 3);
  buttonGroup1.updateSingleButton({ disabled: false, color: 'primary' }, 4);
  buttonGroup2.updateSingleButton({ disabled: false, color: 'primary' }, 1);
  buttonGroup2.updateSingleButton({ disabled: false, color: 'primary' }, 2);
  buttonGroup2.updateSingleButton({ disabled: false, color: 'primary' }, 3);
  buttonGroup2.updateSingleButton({ disabled: false, color: 'primary' }, 4);
  buttonGroup3.updateSingleButton({ disabled: false, color: 'primary' }, 1);
  buttonGroup3.updateSingleButton({ disabled: false, color: 'primary' }, 2);
  buttonGroup3.updateSingleButton({ disabled: false, color: 'primary' }, 3);
  buttonGroup3.updateSingleButton({ disabled: false, color: 'primary' }, 4);
  for (let i = 0, L = ggb1.instance.getValue('plottedListLength'); i < L; i++) {
    ggb1.instance.setListValue('plottedList', i, 'false');
  }
});

function buttonClickFunction() {
  ggb1.instance.setCoords(
    'text1',
    ggb1.instance.getXcoord(pointSelected) - 0.5,
    ggb1.instance.getYcoord(pointSelected) + 1.5
  );
  ggb1.instance.setVisible('text1', true);
  text2.updateData({ visible: true });
  select1.updateData({ visible: true });
  ggb1.instance.evalCommand('SelectObjects()');
  ggb1.instance.setVisible('text2', false);
  ggb1.instance.setVisible('text8', true);
}

//first line of buttons
buttonGroup1.on('click:1', () => {
  pointSelected = 'S1';
  setButtonColor();
  buttonGroup1.updateSingleButton({ color: 'warning' }, 1);
  ggb1.instance.setValue('shownVal', -3);
  buttonClickFunction();
});
buttonGroup1.on('click:2', () => {
  pointSelected = 'S2';
  setButtonColor();
  buttonGroup1.updateSingleButton({ color: 'warning' }, 2);
  ggb1.instance.setValue('shownVal', -2);
  buttonClickFunction();
});
buttonGroup1.on('click:3', () => {
  pointSelected = 'S3';
  setButtonColor();
  buttonGroup1.updateSingleButton({ color: 'warning' }, 3);
  ggb1.instance.setValue('shownVal', -1);
  buttonClickFunction();
});
buttonGroup1.on('click:4', () => {
  pointSelected = 'S4';
  setButtonColor();
  buttonGroup1.updateSingleButton({ color: 'warning' }, 4);
  ggb1.instance.setValue('shownVal', 0);
  buttonClickFunction();
});

//second line of buttons
buttonGroup2.on('click:1', () => {
  pointSelected = 'S5';
  setButtonColor();
  buttonGroup2.updateSingleButton({ color: 'warning' }, 1);
  ggb1.instance.setValue('shownVal', 0.5);
  buttonClickFunction();
});
buttonGroup2.on('click:2', () => {
  pointSelected = 'S6';
  setButtonColor();
  buttonGroup2.updateSingleButton({ color: 'warning' }, 2);
  ggb1.instance.setValue('shownVal', 0.9);
  buttonClickFunction();
});
buttonGroup2.on('click:3', () => {
  pointSelected = 'S7';
  setButtonColor();
  buttonGroup2.updateSingleButton({ color: 'warning' }, 3);
  ggb1.instance.setValue('shownVal', 1);
  buttonClickFunction();
});
buttonGroup2.on('click:4', () => {
  pointSelected = 'S8';
  setButtonColor();
  buttonGroup2.updateSingleButton({ color: 'warning' }, 4);
  ggb1.instance.setValue('shownVal', 1.1);
  buttonClickFunction();
});

//third line of buttons
buttonGroup3.on('click:1', () => {
  pointSelected = 'S9';
  setButtonColor();
  buttonGroup3.updateSingleButton({ color: 'warning' }, 1);
  ggb1.instance.setValue('shownVal', 1.5);
  buttonClickFunction();
});
buttonGroup3.on('click:2', () => {
  pointSelected = 'S10';
  setButtonColor();
  buttonGroup3.updateSingleButton({ color: 'warning' }, 2);
  ggb1.instance.setValue('shownVal', 2);
  buttonClickFunction();
});
buttonGroup3.on('click:3', () => {
  pointSelected = 'S11';
  setButtonColor();
  buttonGroup3.updateSingleButton({ color: 'warning' }, 3);
  ggb1.instance.setValue('shownVal', 3);
  buttonClickFunction();
});
buttonGroup3.on('click:4', () => {
  pointSelected = 'S12';
  setButtonColor();
  buttonGroup3.updateSingleButton({ color: 'warning' }, 4);
  ggb1.instance.setValue('shownVal', 4);
  buttonClickFunction();
});

autorun(() => {
  //runs button script for yes/no
  //if yes...
  if (select1.data.selected == '0') {
    let buttonNum = parseInt(pointSelected.substring(1));
    ggb1.instance.setListValue('plottedList', buttonNum, 'true');
    ggb1.instance.setVisible('text1', false);
    ggb1.instance.setVisible(pointSelected, true);
    ggb1.instance.setPointStyle(pointSelected, 10);
    ggb1.instance.setColor(pointSelected, 0, 127, 175);
    ggb1.instance.evalCommand('SelectObjects()');
    select1.updateData({ selected: '', visible: false });
    text2.updateData({ visible: false });
  }
  //if no...
  if (select1.data.selected == '1') {
    let buttonNum = parseInt(pointSelected.substring(1));
    ggb1.instance.setListValue('plottedList', buttonNum, 'true');
    ggb1.instance.setVisible('text1', false);
    ggb1.instance.setVisible(pointSelected, true);
    ggb1.instance.setPointStyle(pointSelected, 1);
    ggb1.instance.setColor(pointSelected, 218, 41, 28);
    ggb1.instance.evalCommand('SelectObjects()');
    select1.updateData({ selected: '', visible: false });
    text2.updateData({ visible: false });
  }

  //register variables determining how many yes/no buttons selected and which number chosen
  let count = ggb1.innerData['counter'];
  let num = ggb1.innerData['shownVal'];

  //if all numbers have been selected, show share button.  If not, hide it.
  if (
    ggb1.instance.getVisible('S1') == true &&
    ggb1.instance.getVisible('S2') == true &&
    ggb1.instance.getVisible('S3') == true &&
    ggb1.instance.getVisible('S4') == true &&
    ggb1.instance.getVisible('S5') == true &&
    ggb1.instance.getVisible('S6') == true &&
    ggb1.instance.getVisible('S7') == true &&
    ggb1.instance.getVisible('S8') == true &&
    ggb1.instance.getVisible('S9') == true &&
    ggb1.instance.getVisible('S10') == true &&
    ggb1.instance.getVisible('S11') == true &&
    ggb1.instance.getVisible('S12') == true
  ) {
    shareText1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
  } else {
    shareText1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareAnswers1.updateData({ visible: false });
  }
});

function setButtonColor() {
  buttonGroup1.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 1)
        ? 'warning'
        : 'primary',
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 2)
        ? 'warning'
        : 'primary',
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 3)
        ? 'warning'
        : 'primary',
    },
    3
  );
  buttonGroup1.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 4)
        ? 'warning'
        : 'primary',
    },
    4
  );
  buttonGroup2.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 5)
        ? 'warning'
        : 'primary',
    },
    1
  );
  buttonGroup2.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 6)
        ? 'warning'
        : 'primary',
    },
    2
  );
  buttonGroup2.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 7)
        ? 'warning'
        : 'primary',
    },
    3
  );
  buttonGroup2.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 8)
        ? 'warning'
        : 'primary',
    },
    4
  );
  buttonGroup3.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 9)
        ? 'warning'
        : 'primary',
    },
    1
  );
  buttonGroup3.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 10)
        ? 'warning'
        : 'primary',
    },
    2
  );
  buttonGroup3.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 11)
        ? 'warning'
        : 'primary',
    },
    3
  );
  buttonGroup3.updateSingleButton(
    {
      color: ggb1.instance.getListValue('plottedList', 12)
        ? 'warning'
        : 'primary',
    },
    4
  );
}

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":3,"buttongroup":3,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
