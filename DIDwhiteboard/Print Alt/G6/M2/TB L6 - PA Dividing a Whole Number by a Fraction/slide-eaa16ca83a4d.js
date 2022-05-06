const {
  buttonGroup1,
  separator2,
  text1,
  separator3,
  text2,
  separator4,
  text3,
  separator5,
  text4,
} = components;

slide.on('firstload', () => {
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  text4.updateData({ visible: false });
});
var count = 0;

buttonGroup1.on('click:1', () => {
  count += 1;
  console.log(count);
  if (count <= 3) {
    if (count == 1) {
      text2.updateData({ visible: true });
    }
    if (count == 2) {
      text3.updateData({ visible: true });
    }
    if (count == 3) {
      text4.updateData({ visible: true });
      buttonGroup1.updateSingleButton({ disabled: true }, 1);
    }
  }
  if (count > 2) {
    count = 0;
  }
});

/*
{"compTotals":{"buttongroup":1,"separator":4,"textbox":4},"stage":"Learn","lessonInfo":"6 M2 TB L06 - PA Dividing a Whole Number by a Fraction","teacherView":false,"layout":"one col"}
*/
