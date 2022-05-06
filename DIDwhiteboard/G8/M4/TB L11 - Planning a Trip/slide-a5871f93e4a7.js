const {
  ggb1,
  separator1,
  button1,
  feedback1,
  cc_sharewithclass_308edb860d13_textbox1: shareText1,
  cc_sharewithclass_308edb860d13_input1: shareInput1,
  cc_sharewithclass_308edb860d13_button1: shareButton1,
  cc_sharewithclass_308edb860d13_studentanswers1,
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

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

const id = 'slide-c872d475010b';
let num1 = getFromSlide(id, 'input2.data.text', '') || '';

if (!num1) {
  num1 = `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
    id
  )}\]}$`;
} else {
  num1 = `$${num1}$`; // include this else statement if you expect your prior input to be a number
}

shareText1.updateData({
  text: `You said the distance is ${num1} $\\text{mi}$. \n\n How does your solution compare to the animation? Is there anything you would change in your equation?`,
});

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (ggb1.innerData['time'] == 1) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    button1.updateData({ disabled: false });
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
