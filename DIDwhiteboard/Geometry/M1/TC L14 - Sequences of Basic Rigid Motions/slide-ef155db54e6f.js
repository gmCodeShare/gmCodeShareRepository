const {
  ggb1,
  cc_submit_72f46e0f8990_button1: submitButton1,
  cc_submit_4919f2336455_textbox1: submitText2,
  cc_submit_4919f2336455_input1: submitInput2,
  cc_submit_4919f2336455_button1: submitButton2,
  text1,
} = components;

slide.on('firstload', () => {
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
  text1.updateData({ visible: false });
});

let showList = ['LeftMove', 'RightMove', 'C1', 'C2', 'text4'];

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
  text1.updateData({ visible: true });
  ggb1.instance.setLabelVisible('B', true);
  ggb1.instance.setLabelVisible('C', true);
  ggb1.instance.setLabelVisible("A'", false);
  for (let i = 0, L = showList.length; i < L; i++) {
    ggb1.instance.setVisible(showList[i], true);
  }
});
