const {
  select1,
  text2,
  feedback1,
  text1,
  cc_sharewithclass_0abac7ce146f_textbox1: shareText1,
  cc_sharewithclass_0abac7ce146f_input1: shareInput1,
  cc_sharewithclass_0abac7ce146f_button1: shareButton1,
  cc_sharewithclass_0abac7ce146f_studentanswers1,
} = components;

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  text2.updateData({ visible: false });
});

select1.on('change', (selected) => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    text2.updateData({ visible: true });
    switch (select1.data.selected[0]) {
      case '0':
        text2.updateData({
          text: `Priority check-in: Reduces airport time before boarding by $30~\\text{min}$`,
        });
        break;
      case '1':
        text2.updateData({
          text: 'Headwind: Reduces plane speed by $25$ $\\text{mph}$',
        });
        break;
      case '2':
        text2.updateData({
          text: 'Tailwind: Increases plane speed by $25$ $\\text{mph}$',
        });
        break;
      case '3':
        text2.updateData({
          text: 'Improved roads: Increases car speed by $5$ $\\text{mph}$',
        });
        break;
      case '4':
        text2.updateData({
          text: 'Flat tire: Increases driving time by $30$ $\\text{min}$',
        });
        break;
      case '5':
        text2.updateData({
          text: 'Lots of traffic: Reduces car speed by $5$ $\\text{mph}$',
        });
    }
  }
});

/*
{"compTotals":{"select":1,"textbox":3,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
