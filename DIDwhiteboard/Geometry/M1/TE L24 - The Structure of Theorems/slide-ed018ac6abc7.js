const {
  ggb1,
  select1,
  cc_submit_804197899eb6_textbox1: submitText1,
  cc_submit_804197899eb6_input1: submitInput1,
  cc_submit_804197899eb6_button1: submitButton1,
  cc_submit_0ca7e6c04043_textbox1: submitText2,
  cc_submit_0ca7e6c04043_input1: submitInput2,
  cc_submit_0ca7e6c04043_button1: submitButton2,
} = components;

slide.on('firstload', () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

let squaresList = ['q13', 'q23', 'q33', 'q43'];
let textList = ['q13Text', 'q23Text', 'q33Text', 'q43Text'];
let displayTextList = [
  'q13DisplayText',
  'q23DisplayText',
  'q33DisplayText',
  'q43DisplayText',
];
let focusIndicators = ['focusQ13', 'focusQ23', 'focusQ33', 'focusQ43'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClickListener(cycle);
ggb1.instance.registerClientListener(displayFocus);

function displayFocus(a) {
  if (a.type == 'select') {
    for (let i = 0, L = squaresList.length; i < L; i++) {
      if (a.target == squaresList[i]) {
        ggb1.instance.setVisible(focusIndicators[i], true);
      } else {
        ggb1.instance.setVisible(focusIndicators[i], false);
      }
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusIndicators.length; i < L; i++) {
      ggb1.instance.setVisible(focusIndicators[i], false);
    }
  }
}

function cycle(a) {
  switch (ggb1.instance.getColor(a)) {
    case '#FFFFFF':
      ggb1.instance.setColor(a, 130, 63, 152);
      ggb1.instance.setTextValue(a.concat('Text'), 'purple');
      ggb1.instance.setColor(a.concat('DisplayText'), 255, 255, 255);
      break;
    case '#823F98':
      ggb1.instance.setColor(a, 0, 129, 57);
      ggb1.instance.setTextValue(a.concat('Text'), 'green');
      ggb1.instance.setColor(a.concat('DisplayText'), 255, 255, 255);
      break;
    case '#008139':
      ggb1.instance.setColor(a, 255, 255, 255);
      ggb1.instance.setTextValue(a.concat('Text'), 'white');
      ggb1.instance.setColor(a.concat('DisplayText'), 0, 0, 0);
  }
}

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    for (let i = 0, L = squaresList.length; i < L; i++) {
      ggb1.instance.setFixed(squaresList[i], false, false);
      ggb1.instance.setColor(displayTextList[i], 255, 255, 255);
    }
    ggb1.instance.setColor('q13', 0, 129, 57);
    ggb1.instance.setColor('q23', 0, 129, 57);
    ggb1.instance.setColor('q33', 130, 63, 152);
    ggb1.instance.setColor('q43', 255, 255, 255);
    ggb1.instance.setTextValue('q13Text', 'green');
    ggb1.instance.setTextValue('q23Text', 'green');
    ggb1.instance.setTextValue('q33Text', 'purple');
    ggb1.instance.setTextValue('q43Text', 'white');
    ggb1.instance.setColor('q43DisplayText', 0, 0, 0);
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    submitText2.updateData({ visible: false });
    submitInput2.updateData({ visible: false });
    submitButton2.updateData({ visible: false });
  }
  if (select1.data.selected.includes('1')) {
    for (let i = 0, L = squaresList.length; i < L; i++) {
      ggb1.instance.setFixed(squaresList[i], false, true);
      ggb1.instance.setColor(squaresList[i], 255, 255, 255);
      ggb1.instance.setColor(displayTextList[i], 0, 0, 0);
      ggb1.instance.setTextValue(textList[i], 'white');
    }
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    submitText2.updateData({ visible: true });
    submitInput2.updateData({ visible: true });
    submitButton2.updateData({ visible: true });
  }
});
