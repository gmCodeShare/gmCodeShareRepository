const {
  ggb1,
  separator4,
  text2,
  separator5,
  button1,
  feedback1,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let balloonNum = 0;

ggb1.instance.evalCommand('RunClickScript(button2)');
const pumpNumbers = [];

//click through to new balloon button
button1.on('click', () => {
  pumpNumbers.push(ggb1.instance.getValue('pumpDisplayVal'));
  ggb1.instance.evalCommand('RunClickScript(button2)');
  ggb1.updateInnerData('distanceTraveled', 0);
  ggb1.instance.setCoords('L', 1.5, 4.5);
  balloonNum++;
  ggb1.instance.setValue('balloonNum', balloonNum);
  ggb1.updateInnerData('lastYVal', 4.5);
});

//align text above GGB
text2.updateData({ align: 'center' });

let now = controls.current;

//update text above GGB
autorun(() => {
  if (controls.current == now + 1) {
    pumpNumbers.push(ggb1.instance.getValue('pumpDisplayVal'));
    utils.RTS.sendData('slide-5ac2dc875d26_num1', { pumpNumbers: pumpNumbers });
  }
});

//update text above GGB
autorun(() => {
  let num = ggb1.innerData['pumpDisplayVal'];
  let timer = ggb1.innerData['timeStep'];
  if (timer == 1 && num < 5) {
    button1.updateData({ disabled: false });
  }
  text2.updateData({ text: `Number of pumps: $${num}$` });
});

/*
{"compTotals":{"geogebra":1,"separator":2,"textbox":3,"button":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
