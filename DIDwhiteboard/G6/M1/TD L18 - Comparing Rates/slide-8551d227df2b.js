const { text1, select1, feedback1 } = components;

let choiceVal;

autorun(() => {
  if (select1.data.selected) {
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      select1.updateData({ last: select1.data.selected });
    }
  }
  if (select1.data.selected == 0) {
    choiceVal = 1;
  }
  if (select1.data.selected == 1) {
    choiceVal = 2;
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-8551d227df2b', {
      choiceVal,
    });
  }
});

/*
{"compTotals":{"textbox":2,"radiogroup":1},"stage":"Launch","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"one col"}
*/
