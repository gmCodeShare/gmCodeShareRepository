const {
  ggb1,
  cc_submit_364e66401007_button1: submitButton1,
  cc_submit_1f7c6c8cade2_textbox1: submitText2,
  cc_submit_1f7c6c8cade2_input1: submitInput2,
  cc_submit_1f7c6c8cade2_button1: submitButton2,
  cc_submit_5822cd5eacca_textbox1: submitText3,
  cc_submit_5822cd5eacca_input1: submitInput3,
  cc_submit_5822cd5eacca_button1: submitButton3,
  text1,
} = components;

slide.on('firstload', () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  submitText3.updateData({ visible: false });
  submitInput3.updateData({ visible: false });
  submitButton3.updateData({ visible: false });
  text1.updateData({ visible: false });
});

let showList = [
  'LeftMove',
  'RightMove',
  'C1',
  'C2',
  'text1',
  'text2',
  'text4',
  'text6',
];

let hideList = ["A'", "B'", "C'", "A''"];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClientListener(showPurpleBoxes);

function showPurpleBoxes(a) {
  if (a.type == 'select') {
    if (a.target == 'LeftMove') {
      ggb1.instance.setVisible('leftFocusIndicator', true);
      ggb1.instance.setVisible('rightFocusIndicator', false);
    } else if (a.target == 'RightMove') {
      ggb1.instance.setVisible('leftFocusIndicator', false);
      ggb1.instance.setVisible('rightFocusIndicator', true);
    }
    ggb1.instance.setValue('showLandingSpots', true);
  }
  if (a.type == 'dragEnd' || a.type == 'deselect') {
    ggb1.instance.setValue('showLandingSpots', false);
    ggb1.instance.setVisible('leftFocusIndicator', false);
    ggb1.instance.setVisible('rightFocusIndicator', false);
  }
}

submitButton1.on('click', () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

submitButton2.on('click', () => {
  submitText3.updateData({ visible: true });
  submitInput3.updateData({ visible: true });
  submitButton3.updateData({ visible: true });
});

submitButton3.on('click', () => {
  text1.updateData({ visible: true });
  for (let i = 0, L = hideList.length; i < L; i++) {
    ggb1.instance.setLabelVisible(hideList[i], false);
  }
  for (let i = 0, L = showList.length; i < L; i++) {
    ggb1.instance.setVisible(showList[i], true);
  }
});
