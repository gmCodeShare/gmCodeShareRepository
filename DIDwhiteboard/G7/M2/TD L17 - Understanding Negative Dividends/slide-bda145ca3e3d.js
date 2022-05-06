const { ggb4, feedback, Textbox3 } = components;

ggb4.instance.setErrorDialogsActive(false);

const id1 = 'slide-23d0b3dfe8c3';

const id1PrevInput1 = getPrevInput(id1, 'cc_submit_6eb7b98cdbf5_input1');

for (let i = 0, L = 5; i < L; i++) {
  ggb4.instance.setValue(`val${i}`, id1PrevInput1.data.text);
}

function getPrevInput(slideID, compName = 'input1') {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == 'undefined' ||
      !controls.slidesNavigationData?.length
    ) {
      return 'missing slide!';
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defInput = {
    data: {
      text: '',
    },
  };
  // get previous data
  let prevInput = getFromSlide(slideID, compName, defInput) || defInput;
  // fill in other useful data
  prevInput.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevInput.data.hasData = !!prevInput.data.text;
  prevInput.data.slideNum = slideNum;
  // set text values
  prevInput.data.text = prevInput.data.hasData
    ? prevInput.data.text
    : prevInput.data.goBackString;
  prevInput.data.flagText = prevInput.data.hasData
    ? ''
    : prevInput.data.goBackString;
  return { ...prevInput };
}

/*
{"compTotals":{"geogebra":1,"textbox":2},"stage":"Learn","lessonInfo":"7 M2 TD L17 - Understanding Negative Dividends","teacherView":false,"layout":"two col"}
*/
