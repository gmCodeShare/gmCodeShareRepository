const {
  ggb1,
  cc_sharewithclass_4bd8959226d1_input1: shareInput1,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  text1.updateData({ visible: false });
  let repSum = ggb1.innerData['repSum'];
  if (ggb1.instance.getValue('repSum') == 9) {
    text1.updateData({ visible: true, visibilityBehavior: 'hide' });
  } else {
    text1.updateData({ visible: false });
  }
});
