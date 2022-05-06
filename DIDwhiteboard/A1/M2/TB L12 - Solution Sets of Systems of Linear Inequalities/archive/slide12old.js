const {
  ggb1,
  separator1,
  text1,
  text2,
  text11,
  //text12,
  text13,
  text14,
  text15,
  text16,
  text17,
  text18,
  text21,
  text22,
  text23,
  text24,
  input11,
  input12,
  select1,
  buttonGroup1,
  buttonGroup11,
  //buttonGroup12,
  buttonGroup13,
  buttonGroup14,
  buttonGroup21,
  buttonGroup22,
  buttonGroup23,
} = components;

let finalAnswer1;
let finalAnswer2;

//set inital state
slide.on('firstload', () => {
  setInitialState();
});

function setInitialState() {
  //change this here if desired behavior is hide/none
  let buttonGroupVisibilityBehavior = 'hide';

  //all the rest of the initial settings
  ggb1.updateData({ visible: false });
  select1.unselectAll();
  select1.setVisible(true);
  text11.updateData({ visible: true });
  separator1.updateData({ size: '0px' });

  //set specific ggb values and line behaviors
  ggb1.instance.setErrorDialogsActive(false);
  ggb1.instance.setValue('showLine1', false);
  ggb1.instance.setValue('showLine3', false);
  ggb1.instance.setValue('line1Greater', true);
  ggb1.instance.setValue('line3Greater', true);
  ggb1.instance.setValue('line1OrEqual', true);
  ggb1.instance.setValue('line3OrEqual', false);
  ggb1.instance.setCoords('FrogPoint', 3, 0);
  ggb1.instance.setCoords('Cheese1Point', -2, -6);
  ggb1.instance.setCoords('Cheese2Point', 7, -4);
  ggb1.instance.setCoords('Cheese3Point', -6, 3);
  ggb1.instance.setValue('showCheese1', true);
  ggb1.instance.setValue('showCheese2', true);
  ggb1.instance.setValue('showCheese3', true);
  ggb1.instance.setValue('showFrog', true);
  ggb1.instance.setValue('allowLineControls', true);
  ggb1.instance.setCoords('P1A', -9, 7);
  ggb1.instance.setCoords('P1B', -7, 9);
  ggb1.instance.setCoords('P3A', 7, 9);
  ggb1.instance.setCoords('P3B', 9, 7);
  ggb1.instance.setFixed('P1A', false, true);
  ggb1.instance.setFixed('P1B', false, true);
  ggb1.instance.setFixed('P3A', false, true);
  ggb1.instance.setFixed('P3B', false, true);
  ggb1.instance.setValue('showStudentInequality1', false);
  ggb1.instance.setValue('showStudentInequality2', false);

  ggb1.instance.setFixed('frogSVG', false, true);
  ggb1.instance.setFixed('cheese1SVG', false, true);
  ggb1.instance.setFixed('cheese2SVG', false, true);
  ggb1.instance.setFixed('cheese3SVG', false, true);

  //sets points to be locked to grid
  ggb1.instance.setPointCapture(1, 2);

  //set basic components to be visible: false
  text2.updateData({ visible: false, text: '' });
  text11.updateData({ visible: false });
  //text12.updateData({ visible: false });
  text13.updateData({ visible: false });
  text14.updateData({ visible: false, text: '' });
  text15.updateData({ visible: false });
  text16.updateData({ visible: false });
  text17.updateData({ visible: false, text: '' });
  text18.updateData({ visible: false, text: '' });
  text21.updateData({ visible: false });
  text22.updateData({ visible: false });
  text23.updateData({ visible: false });
  text24.updateData({ visible: false });

  input11.updateData({ visible: false, text: '' });
  input12.updateData({ visible: false, text: '' });

  //set all buttonGroup visibility and visibility behavior
  buttonGroup11.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  // buttonGroup12.updateData({
  //   visible: false,
  //   visibilityBehavior: buttonGroupVisibilityBehavior,
  // });
  buttonGroup13.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup14.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup21.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup22.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });
  buttonGroup23.updateData({
    visible: false,
    visibilityBehavior: buttonGroupVisibilityBehavior,
  });

  //set buttons which will have outlines
  buttonGroup11.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup12.updateSingleButton(
    {
      outline: true,
    },
    3
  );
  buttonGroup13.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup14.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup21.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup22.updateSingleButton(
    {
      outline: true,
    },
    2
  );
  buttonGroup23.updateSingleButton(
    {
      outline: true,
    },
    2
  );

  //disable initial buttons until student chooses to write or graph a system
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
}

//let user click "Onward!" after making choice on which adventure to pursue
select1.on('change', ({ selected }) => {
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
});

//hides select component and shows initial steps for their chosen adventure
buttonGroup1.on('click:1', () => {
  separator1.updateData({ size: '8px' });
  select1.setVisible(false);
  ggb1.updateData({ visible: true });

  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );

  //actions dependent on whether student chooses to write or graph the system
  if (select1.data.selected[0] == 0) {
    //for "Write the System"
    text2.updateData({
      visible: true,
      text: 'You chose to write a system of inequalities.',
    });
    text11.updateData({ visible: true });
    buttonGroup11.updateData({ visible: true });
  } else if (select1.data.selected[0] == 1) {
    //for "Graph the System"
    text2.updateData({
      visible: true,
      text: 'You chose to graph a system of inequalities.',
    });
    text21.updateData({ visible: true });
  }
});

//resets screen, allows student to choose different adventure
buttonGroup1.on('click:2', () => {
  setInitialState();
});

//clicking "Lock it in!" for placement of frog and cheese
buttonGroup11.on('click:1', () => {
  text11.updateData({ visible: false });
  buttonGroup11.updateData({ visible: false });
  //text12.updateData({ visible: true });
  //buttonGroup12.updateData({ visible: true });
  ggb1.instance.setFixed('frogSVG', true, false);
  ggb1.instance.setFixed('cheese1SVG', true, false);
  ggb1.instance.setFixed('cheese2SVG', true, false);
  ggb1.instance.setFixed('cheese3SVG', true, false);
});

//clicking "Go back" for placement of frog and cheese
buttonGroup11.on('click:2', () => {
  setInitialState();
});

// //clicking "Graph the lines"
// buttonGroup12.on('click:1', () => {
//   text12.updateData({ visible: false });
//   buttonGroup12.updateData({ visible: false });
//   text13.updateData({ visible: true });
//   buttonGroup13.updateData({ visible: true });
//   text14.updateData({ visible: true, text: '' });
//   ggb1.instance.setValue('showLine1', true);
//   ggb1.instance.setValue('showLine3', true);
// });

// //clicking "Go right to writing inequalities"
// buttonGroup12.on('click:2', () => {
//   text12.updateData({ visible: false });
//   buttonGroup12.updateData({ visible: false });
//   text15.updateData({ visible: true });
//   input11.updateData({ visible: true });
//   text16.updateData({ visible: true });
//   text17.updateData({
//     visible: true,
//     text: `Your system:\n\n$\\begin{cases}
//     ${input11.data.text} \\\\
//     ${input12.data.text}
//   \\end{cases}$`,
//   });
//   text18.updateData({ visible: true });
//   input12.updateData({ visible: true });
//   buttonGroup14.updateData({ visible: true });
//   buttonGroup14.updateSingleButton(
//     {
//       disabled: false,
//     },
//     1
//   );
// });

// //clicking "Go back"
// buttonGroup12.on('click:3', () => {
//   text12.updateData({ visible: false });
//   buttonGroup12.updateData({ visible: false });
//   text11.updateData({ visible: true });
//   buttonGroup11.updateData({ visible: true });
//   ggb1.instance.setFixed('frogSVG', false, true);
//   ggb1.instance.setFixed('cheese1SVG', false, true);
//   ggb1.instance.setFixed('cheese2SVG', false, true);
//   ggb1.instance.setFixed('cheese3SVG', false, true);
// });

//clicking "lock it in" when graphing lines before writing the inequalities
buttonGroup13.on('click:1', () => {
  //for when frog is successfully captured
  if (
    ggb1.instance.getValue('frogCompletelyInInequality1') &&
    ggb1.instance.getValue('frogCompletelyInInequality3') &&
    !(
      ggb1.instance.getValue('cheese1InInequality1') &&
      ggb1.instance.getValue('cheese1InInequality3')
    ) &&
    !(
      ggb1.instance.getValue('cheese2InInequality1') &&
      ggb1.instance.getValue('cheese2InInequality3')
    ) &&
    !(
      ggb1.instance.getValue('cheese3InInequality1') &&
      ggb1.instance.getValue('cheese3InInequality3')
    )
  ) {
    ggb1.instance.setFixed('P1A', true, false);
    ggb1.instance.setFixed('P1B', true, false);
    ggb1.instance.setFixed('P3A', true, false);
    ggb1.instance.setFixed('P3B', true, false);
    ggb1.instance.setValue('allowLineControls', false);
    text13.updateData({ visible: false });
    buttonGroup13.updateData({ visible: false });
    text14.updateData({ visible: false, text: '' });
    text15.updateData({ visible: true });
    input11.updateData({ visible: true, text: '' });
    text16.updateData({ visible: true });
    input12.updateData({ visible: true, text: '' });
    buttonGroup14.updateData({ visible: true });
    text17.updateData({
      visible: true,
      text: `Your system:\n\n$\\begin{cases}
      ${input11.data.text} \\\\
      ${input12.data.text}
    \\end{cases}$`,
    });
    text18.updateData({ visible: true });
  }
  //if frog not successfully captured
  else {
    text14.updateData({
      text:
        'Keep trying! Be sure that the frog is captured in both inequalities and that it is the only object captured in both inequalities.',
    });
  }
});

//clicking "Go back" when graphing lines before writing the inequalities
buttonGroup13.on('click:2', () => {
  text13.updateData({ visible: false });
  buttonGroup13.updateData({ visible: false });
  // text12.updateData({ visible: true });
  // buttonGroup12.updateData({ visible: true });
  ggb1.instance.setValue('showLine1', false);
  ggb1.instance.setValue('showLine3', false);
});

//clicking "Check it" when writing inequalities
buttonGroup14.on('click:1', () => {
  buttonGroup14.updateSingleButton(
    {
      disabled: true,
    },
    1
  );

  finalAnswer1 = formatInput(input11.data.text);
  ggb1.instance.evalCommand('studentInequality1: ' + finalAnswer1);

  finalAnswer2 = formatInput(input12.data.text);
  ggb1.instance.evalCommand('studentInequality2: ' + finalAnswer2);

  ggb1.instance.setValue('showStudentInequality1', true);
  ggb1.instance.setValue('showStudentInequality2', true);

  //for when student does successfully capture frog with written inequalities
  if (
    ggb1.instance.getValue('frogCompletelyInStudentInequality1') &&
    ggb1.instance.getValue('frogCompletelyInStudentInequality2') &&
    !(
      ggb1.instance.getValue('cheese1InStudentInequality1') &&
      ggb1.instance.getValue('cheese1InStudentInequality2')
    ) &&
    !(
      ggb1.instance.getValue('cheese2InStudentInequality1') &&
      ggb1.instance.getValue('cheese2InStudentInequality2')
    ) &&
    !(
      ggb1.instance.getValue('cheese3InStudentInequality1') &&
      ggb1.instance.getValue('cheese3InStudentInequality2')
    )
  ) {
    text18.updateData({
      text: 'Great! You wrote a system of inequalities that captures the frog!',
    });
    utils.RTS.sendData('slide-8086146665c9', {
      //package schema: [0: 0 for writeSystem or 1 for graphSystem, 1: [frogX, frogY], 2: [cheese1X, cheese1Y], 3: [cheese2X, cheese2Y], 4: [cheese3X, cheese3Y], 5: finalAnswer1, 6: finalAnswer2]
      thePackage: [
        [
          select1.data.selected[0],
          [
            ggb1.instance.getXcoord('FrogPoint'),
            ggb1.instance.getYcoord('FrogPoint'),
          ],
          [
            ggb1.instance.getXcoord('Cheese1Point'),
            ggb1.instance.getYcoord('Cheese1Point'),
          ],
          [
            ggb1.instance.getXcoord('Cheese2Point'),
            ggb1.instance.getYcoord('Cheese2Point'),
          ],
          [
            ggb1.instance.getXcoord('Cheese3Point'),
            ggb1.instance.getYcoord('Cheese3Point'),
          ],
          finalAnswer1,
          finalAnswer2,
        ],
      ],
    });
  }
  //for when student does not successfully capture frog with written inequalities
  else {
    text18.updateData({
      text:
        'Keep trying! Be sure that the frog is captured in both inequalities and that it is the only object captured in both inequalities.',
    });
  }
});

buttonGroup14.on('click:2', () => {
  text15.updateData({ visible: false });
  input11.updateData({ visible: false });
  text16.updateData({ visible: false });
  input12.updateData({ visible: false });
  buttonGroup14.updateData({ visible: false });
  text17.updateData({ visible: false, text: '' });
  text18.updateData({ visible: false, text: '' });
  // text12.updateData({ visible: true });
  // buttonGroup12.updateData({ visible: true });
  ggb1.instance.setFixed('P1A', false, true);
  ggb1.instance.setFixed('P1B', false, true);
  ggb1.instance.setFixed('P3A', false, true);
  ggb1.instance.setFixed('P3B', false, true);
  ggb1.instance.setValue('allowLineControls', true);
  ggb1.instance.setVisible('studentInequality1', false);
  ggb1.instance.setVisible('studentInequality2', false);
});

function formatInput(a) {
  let frac = a.replace(/\\frac{/, '('); //replaces \frac{
  let fracMid = frac.replace(/\}\{/, ')/('); //replaces }{ from \frac{}{}
  let leftParen = fracMid.replace(/\\left/g, ''); //replaces \left part of parens
  let rightParen = leftParen.replace(/\\right/g, ''); //replaces \right part of parens
  let absLeft = rightParen.replace(/\|/, 'abs('); //replaces left bar for absolute value
  let absRight = absLeft.replace(/\|/, ')'); //replaces right bar for absolute value
  let squirtLeft = absRight.replace(/\\sqrt\{/, 'sqrt('); //replaces \sqrt for square root function
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, 'cbrt('); //replaces \sqrt[3]{} for cube root function
  let brackRight = cbrtLeft.replace(/\}/g, ')'); //replaces the right side brackets
  let brackLeft = brackRight.replace(/\{/g, '('); //replaces any remaining left side brackets
  let lessThan = brackLeft.replace(/\\le/g, '<='); //replaces less than
  let greaterThan = lessThan.replace(/\\ge/g, '>='); //replaces greater than
  let finalAnswer = greaterThan; /*.replace(//,"");*/ //empty in case of additions
  return finalAnswer;
}

//update system display as students enter their inequalities
autorun(() => {
  let inputInequality1 = input11.data.text;
  let inputInequality2 = input12.data.text;
  buttonGroup14.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  ggb1.instance.setValue('showStudentInequality1', false);
  ggb1.instance.setValue('showStudentInequality2', false);
  text17.updateData({
    text: `Your system:\n\n$\\begin{cases}
      ${inputInequality1} \\\\
      ${inputInequality2}
      \\end{cases}$`,
  });
});
