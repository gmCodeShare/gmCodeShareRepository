const {
  ggb1,
  cc_submit_2f07b2b14dfa_button1: submitButton1,
  cc_sharewithclass_2f9bab63c07b_textbox1: shareText1,
  cc_sharewithclass_2f9bab63c07b_input1: shareInput1,
  cc_sharewithclass_2f9bab63c07b_button1: shareButton1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*ggb1.instance.setVisible('text1', false);

ggb1.instance.registerObjectUpdateListener('Point1', update);

function update() {
  var angleA = ggb1.instance.getValue('angle1') * 57.2795;
  var angleB = ggb1.instance.getValue('angle2') * 57.2795;
  //var answer =(ggb1.instance.getValue("angle1")*57.2795+ggb1.instance.getValue("angle2")*57.2795).toFixed(0)
  var answer = Math.round(angleA) + Math.round(angleB);
  var difference = Math.abs(answer - 180);
  if (answer == 180) {
    ggb1.instance.setTextValue('text1', 'Parallel');
  } else {
    ggb1.instance.setTextValue('text1', 'Intersecting');
  }
}*/
