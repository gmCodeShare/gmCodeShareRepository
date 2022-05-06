const {
  text1,
  feedback,
  text2,
  select1,
  cc_sharewithclass_4b5b6f021b1e_textbox1: shareText1,
  cc_sharewithclass_4b5b6f021b1e_input1: shareInput1,
  cc_sharewithclass_4b5b6f021b1e_button1: shareButton1,
  cc_sharewithclass_4b5b6f021b1e_studentanswers1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    // set initial states
    shareButton1.updateData({ visible: false, align: 'right' });
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    text1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == '') {
    shareButton1.updateData({ visible: false, align: 'right' });
    shareInput1.updateData({ visible: false });
    shareText1.updateData({ visible: false });
  }
  if (select1.data.selected == '0') {
    shareButton1.updateData({ visible: true, align: 'right' });
    shareInput1.updateData({
      visible: true,
      text: `The meaning of 0 in 0-15-15-15 = 45 is `,
    });
    shareText1.updateData({ visible: true });
  }
  if (select1.data.selected == '1') {
    shareButton1.updateData({ visible: true, align: 'right' });
    shareInput1.updateData({
      visible: true,
      text: `The meaning of -15 in 0-15-15-15 = 45 is `,
    });
    shareText1.updateData({ visible: true });
  }
  if (select1.data.selected == '2') {
    shareButton1.updateData({ visible: true, align: 'right' });
    shareInput1.updateData({
      visible: true,
      text: `The meaning of -45 in 0-15-15-15 = 45 is `,
    });
    shareText1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"textbox":3,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
