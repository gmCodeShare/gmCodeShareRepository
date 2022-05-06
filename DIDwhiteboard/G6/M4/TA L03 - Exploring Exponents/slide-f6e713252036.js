const {
  check1,
  check2,
  cc_sharewithclass_00d92c52a127_textbox1: shareText1,
  cc_sharewithclass_00d92c52a127_input1: shareInput1,
  cc_sharewithclass_00d92c52a127_button1: shareButton1,
  cc_sharewithclass_00d92c52a127_studentanswers1,
  feedback1,
} = components;

let choiceVal2;

/*check1.updateData({
  checked: getFromSlide(`slide-a0fa91df758d`, 'check1.data.checked'),
});

check2.updateData({
  checked: getFromSlide(`slide-a0fa91df758d`, 'check2.data.checked'),
});*/

autorun(() => {
  if (check2.data.checked) {
    check1.updateData({ checked: false });
    choiceVal2 = 2;
  }
});

autorun(() => {
  if (check1.data.checked) {
    check2.updateData({ checked: false });
    choiceVal2 = 1;
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-f6e713252036', {
      choiceVal2,
    });
  }
});

/*
{"compTotals":{"checkbox":2,"sharewithclass":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"one col"}
*/
