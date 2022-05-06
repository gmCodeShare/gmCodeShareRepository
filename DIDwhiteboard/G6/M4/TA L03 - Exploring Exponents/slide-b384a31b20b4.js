const {
  text1,
  text2,
  text3,
  separator1,
  text4,
  separator2,
  button1,
  feedback1,
  image1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    text3.updateData({ visible: false });
    text4.updateData({ visible: false });
    button1.updateData({ disabled: false });
    text1.updateData({ init: true });
  }
}

count = 0;

button1.on('click', () => {
  count += 1;
  if (count == 1) {
    text3.updateData({ visible: true });
  }
  if (count == 2) {
    text4.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"textbox":5,"separator":2,"button":1,"uploaded-image":1},"stage":"Learn","lessonInfo":"6 M4 TA L03 - Exploring Exponents","teacherView":false,"layout":"two col"}
*/
