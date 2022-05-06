const {
  image1,
  separator2,
  text1,
  feedback1,
  text2,
  select1,
  separator1,
  cc_sharewithclass_a160f9cebf7b_textbox1: shareText1,
  cc_sharewithclass_a160f9cebf7b_input1: shareInput1,
  cc_sharewithclass_a160f9cebf7b_button1: shareButton1,
  cc_sharewithclass_a160f9cebf7b_studentanswers1,
} = components;

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  text1.updateData({ align: 'center' });
});

const id = 'slide-7d36c15d0675';
const prevImage = getFromSlide(id, 'image1.data.src', '') || '';
const prevText = getFromSlide(id, 'text1.data.text', '') || '';

if (prevImage) {
  image1.updateData({ src: prevImage });
}

if (!prevText) {
  text1.updateData({
    text: `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}$`,
  });
} else {
  text1.updateData({ text: prevText });
}

autorun(() => {
  if (select1.data.selected.length) {
    let chosen =
      select1.data.options[
        parseInt(select1.data.selected[0])
      ].label.toLowerCase();
    shareText1.updateData({
      visible: true,
      text: `Why do you think you should ${chosen}?`,
    });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected[0] != text1.data.last) {
      shareInput1.updateData({ text: `I think I should ${chosen} because ` });
      text1.updateData({ last: select1.data.selected[0] });
    }
  }
});

/*
{"compTotals":{"bynder-image":1,"separator":2,"textbox":3,"select":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
