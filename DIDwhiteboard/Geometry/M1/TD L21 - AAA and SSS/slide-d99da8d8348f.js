const {
  ggb1,
  ggb2,
  select1,
  cc_sharewithclass_cf81d1ea1399_textbox1: shareText1,
  cc_sharewithclass_cf81d1ea1399_input1: shareInput1,
  cc_sharewithclass_cf81d1ea1399_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  ggb2.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectClickListener('xBox', backToGGB1);
ggb1.instance.registerObjectClickListener('q1ExpandBox', expandQ1);
ggb1.instance.registerObjectClickListener('q2ExpandBox', expandQ2);
ggb1.instance.registerObjectClickListener('q3ExpandBox', expandQ3);
ggb1.instance.registerObjectClickListener('q4ExpandBox', expandQ4);

ggb1.instance.registerClientListener(focusIndicatorsGGB1);
ggb2.instance.registerClientListener(focusIndicatorGGB2);

select1.on('change', (selected) => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

function focusIndicatorsGGB1(a) {
  if (a.type == 'select') {
    if (a.target == 'q1ExpandBox') {
      ggb1.instance.setVisible('q1FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q1FocusIndicator', false);
    }
    if (a.target == 'q2ExpandBox') {
      ggb1.instance.setVisible('q2FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q2FocusIndicator', false);
    }
    if (a.target == 'q3ExpandBox') {
      ggb1.instance.setVisible('q3FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q3FocusIndicator', false);
    }
    if (a.target == 'q4ExpandBox') {
      ggb1.instance.setVisible('q4FocusIndicator', true);
    } else {
      ggb1.instance.setVisible('q4FocusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    ggb1.instance.setVisible('q1FocusIndicator', false);
    ggb1.instance.setVisible('q2FocusIndicator', false);
    ggb1.instance.setVisible('q3FocusIndicator', false);
    ggb1.instance.setVisible('q4FocusIndicator', false);
  }
}

function focusIndicatorGGB2(a) {
  if (a.type == 'select') {
    if (a.target == 'xBox') {
      ggb2.instance.setVisible('focusIndicator', true);
    } else {
      ggb2.instance.setVisible('focusIndicator', false);
    }
  }
  if (a.type == 'deselect') {
    turnOffExpandIndicators();
  }
}

function backToGGB1() {
  turnOffExpandIndicators();
  ggb2.updateData({ visible: false });
  ggb1.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', false);
}

function expandQ1() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', true);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', false);
}

function expandQ2() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', true);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', false);
}

function expandQ3() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', true);
  ggb2.instance.setValue('showQ4', false);
}

function expandQ4() {
  turnOffExpandIndicators();
  ggb1.updateData({ visible: false });
  ggb2.updateData({ visible: true });
  ggb2.instance.setValue('showQ1', false);
  ggb2.instance.setValue('showQ2', false);
  ggb2.instance.setValue('showQ3', false);
  ggb2.instance.setValue('showQ4', true);
}

function turnOffExpandIndicators() {
  ggb1.instance.setVisible('q1FocusIndicator', false);
  ggb1.instance.setVisible('q2FocusIndicator', false);
  ggb1.instance.setVisible('q3FocusIndicator', false);
  ggb1.instance.setVisible('q4FocusIndicator', false);
  ggb2.instance.setVisible('focusIndicator', false);
}
