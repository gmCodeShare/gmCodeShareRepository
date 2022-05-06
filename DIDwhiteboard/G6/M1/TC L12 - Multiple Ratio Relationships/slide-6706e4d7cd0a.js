const {
  ggb1,
  table1,
  buttonGroup1,
  cc_sharewithclass_e955bfe624e1_textbox1: shareText1,
  cc_sharewithclass_e955bfe624e1_input1: shareInput1,
  cc_sharewithclass_e955bfe624e1_button1: shareButton1,
  cc_sharewithclass_e955bfe624e1_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-042033649309';
let id2 = 'slide-53add29a6595';

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

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('d', true);
    ggb1.instance.setVisible('e', true);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setVisible('textBluePart', false);
    ggb1.instance.setVisible('textRedPart', false);
    ggb1.instance.setVisible('textBluePart2', false);
    ggb1.instance.setVisible('textRedPart2', false);
    ggb1.instance.setVisible('textMix1', false);
    ggb1.instance.setVisible('textMix2', false);
    buttonGroup1.updateSingleButton({ disabled: true }, 3);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

const rowsContent = getFromSlide(id2, 'table1.data.rows', false) || false;

for (let j = 1, L1 = table1.data.columns.length; j < L1; j++) {
  for (let i = 0, L2 = rowsContent.length; i < L2; i++) {
    let val = !!rowsContent[i][j].value
      ? rowsContent[i][j].value
      : `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
          id1
        )}\]}$`;
    table1.updateCell(i, j, {
      value: val,
      math: true,
      editable: false,
    });
  }
}

let data = getFromSlide(id1, `ggb1`, false) || false;

if (typeof data.innerData !== 'undefined') {
  ggb1.instance.setValue('bluePart', data.innerData['bluePart']);
  ggb1.instance.setValue('redPart', data.innerData['redPart']);
  ggb1.instance.setValue('bluePart2', data.innerData['bluePart2']);
  ggb1.instance.setValue('redPart2', data.innerData['redPart2']);
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time2', false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

/*
{"compTotals":{"geogebra":1,"table":1,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TC L12 - Multiple Ratio Relationships","teacherView":false,"layout":"two col"}
*/
