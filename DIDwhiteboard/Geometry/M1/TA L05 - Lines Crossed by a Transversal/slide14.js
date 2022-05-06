const {
  ggb1,
  buttonGroup1,
  buttonGroup2,
  text2,
  select1,
  cc_sharewithclass_dfad3ed1d459_textbox1: shareText1,
  cc_sharewithclass_dfad3ed1d459_input1: shareInput1,
  cc_sharewithclass_dfad3ed1d459_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  text2.updateData({ visible: false });
  select1.setVisible(false);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

let angleArray = ['angle1', 'angle2', 'angle3', 'angle4'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectClickListener('angle1', changeAngle1);
ggb1.instance.registerObjectClickListener('angle2', changeAngle2);
ggb1.instance.registerObjectClickListener('angle3', changeAngle3);
ggb1.instance.registerObjectClickListener('angle4', changeAngle4);

function changeAngle1() {
  allNoFill();
  ggb1.instance.setFilling('angle1', 0.35);
  ggb1.instance.evalCommand('copyAngleMeasure=angle1');
}

function changeAngle2() {
  allNoFill();
  ggb1.instance.setFilling('angle2', 0.35);
  ggb1.instance.evalCommand('copyAngleMeasure=angle2');
}

function changeAngle3() {
  allNoFill();
  ggb1.instance.setFilling('angle3', 0.35);
  ggb1.instance.evalCommand('copyAngleMeasure=angle3');
}

function changeAngle4() {
  allNoFill();
  ggb1.instance.setFilling('angle4', 0.35);
  ggb1.instance.evalCommand('copyAngleMeasure=angle4');
}

function allNoFill() {
  for (i = 0, J = angleArray.length; i < J; i++) {
    ggb1.instance.setFilling(angleArray[i], 0.001);
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue('showLines', true);
  text2.updateData({ visible: true });
  select1.setVisible(true);
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.setValue('showLines', false);
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
});

buttonGroup2.on('click:1', () => {
  buttonGroup2.updateSingleButton({ disabled: true }, 1);
  buttonGroup2.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

buttonGroup2.on('click:2', () => {
  buttonGroup2.updateSingleButton({ disabled: false }, 1);
  buttonGroup2.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});

select1.on('change', () => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    let chosen = select1.data.options[parseInt(select1.data.selected[0])].label;
    let sentStart = chosen.replace('.', ','); // in the example, choices were sentences
    shareInput1.updateData({ text: sentStart + ' because ' });
  }
});
