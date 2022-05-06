const { ggb1, ggb2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

ggb2.instance.registerObjectUpdateListener('winXVal', changeX);
ggb2.instance.registerObjectUpdateListener('winYVal', changeY);

function changeX() {
  ggb1.instance.setValue('winXVal', ggb2.instance.getValue('winXVal'));
  if (ggb1.instance.getValue('xCondition1')) {
    ggb1.instance.setValue('xVal', 0.1);
  }
  if (ggb1.instance.getValue('xCondition2')) {
    ggb1.instance.setValue('xVal', 1);
  }
  if (ggb1.instance.getValue('xCondition3')) {
    ggb1.instance.setValue('xVal', 2);
  }
}

function changeY() {
  ggb1.instance.setValue('winYVal', ggb2.instance.getValue('winYVal'));
  if (ggb1.instance.getValue('yCondition1')) {
    ggb1.instance.setValue('yVal', 0.1);
  }
  if (ggb1.instance.getValue('yCondition2')) {
    ggb1.instance.setValue('yVal', 1);
  }
  if (ggb1.instance.getValue('yCondition3')) {
    ggb1.instance.setValue('yVal', 2);
  }
}
