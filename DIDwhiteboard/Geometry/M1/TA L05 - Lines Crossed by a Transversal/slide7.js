const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

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
