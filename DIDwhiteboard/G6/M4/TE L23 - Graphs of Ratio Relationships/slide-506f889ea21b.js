const {
  ggb1,
  feedback1,
  text1,
  text2,
  radio1,
  text3,
  radio2,
  text4,
  separator1,
  button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

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

ggb1.instance.setVisible('K', false);
ggb1.instance.setVisible('F', false);
ggb1.instance.setVisible('eq3', false);
const id1 = `slide-8d756e9a14fb`;
let num =
  getFromSlide(id1, `cc_sharewithclass_d18937bea98a_input1.data.text`, '') ||
  '';
if (!num) {
  num = `\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(id1)}\]}`;
}
text1.updateData({
  text: `You wrote the equation $${num}$ to show the relationship between your total earnings in dollars and the number of lawns mowed.`,
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setVisible('choseDepend1', false);
    ggb1.instance.setVisible('choseDepend2', false);
    ggb1.instance.setVisible('choseInDepend1', false);
    ggb1.instance.setVisible('choseInDepend2', false);
    button1.updateData({ visible: false });
    text4.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  const lawns = radio1.data.selected;
  // console.log(lawns);
  switch (lawns) {
    case '0':
      ggb1.instance.setVisible('choseInDepend1', true);
      ggb1.instance.setVisible('choseDepend2', false);
      break;
    case '1':
      ggb1.instance.setVisible('choseInDepend1', false);
      ggb1.instance.setVisible('choseDepend2', true);
  }

  const cost = radio2.data.selected;
  switch (cost) {
    case '0':
      ggb1.instance.setVisible('choseInDepend2', true);
      ggb1.instance.setVisible('choseDepend1', false);
      text4.updateData({ visible: true });
      break;
    case '1':
      ggb1.instance.setVisible('choseInDepend2', false);
      ggb1.instance.setVisible('choseDepend1', true);
      text4.updateData({ visible: true });
  }

  if (
    (radio1.data.selected == '0' && radio2.data.selected == '0') ||
    (radio1.data.selected == '1' && radio2.data.selected == '1')
  ) {
    ggb1.instance.setVisible('choseDepend1', false);
    ggb1.instance.setAxisLabels(1, '$\\mathit{}$', '$\\mathit{}$');
    ggb1.instance.setVisible('choseDepend2', false);
    ggb1.instance.setVisible('choseInDepend1', false);
    ggb1.instance.setVisible('choseInDepend2', false);
    ggb1.instance.setVisible('K', false);
    ggb1.instance.setVisible('F', false);
    ggb1.instance.setVisible('eq3', false);
  }

  if (radio1.data.selected == '0' && radio2.data.selected == '1') {
    ggb1.instance.setAxisLabels(1, '$\\mathit{n}$', '$\\mathit{t}$');
    //ggb1.instance.setVisible("K", true);
    ggb1.instance.setVisible('F', true);
    ggb1.instance.setVisible('eq3', true);
  }
  if (radio1.data.selected == '1' && radio2.data.selected == '0') {
    ggb1.instance.setAxisLabels(1, '$\\mathit{t}$', '$\\mathit{n}$');
    // ggb1.instance.setVisible("K", true);
    ggb1.instance.setVisible('F', true);
    ggb1.instance.setVisible('eq3', true);
  }
});

ggb1.instance.registerObjectUpdateListener('J', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('x(J)') > 0) {
    button1.updateData({ visible: true });
    button1.updateData({ disabled: false });
  }
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
});

/*
{"compTotals":{"geogebra":1,"textbox":5,"radiogroup":2,"separator":1,"button":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
