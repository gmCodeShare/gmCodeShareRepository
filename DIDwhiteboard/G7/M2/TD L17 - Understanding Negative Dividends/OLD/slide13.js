const { ggb4 } = components;

ggb4.instance.setErrorDialogsActive(false);

const id1 = 'slide-23d0b3dfe8c3';

const id1PrevInput1 = getPrevInput(id1, 'cc_submit_6eb7b98cdbf5_input1');

for (let i = 0, L = 5; i < L; i++) {
  ggb4.instance.setValue(`val${i}`, id1PrevInput1.data.text);
}

/**
 * STEP 4: copy the getPrevInput function and paste into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */

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

/**
 * ADVANCED FUNCTIONALITY
 *
 * The function returns useful info within the object's data property:
 *
 * * text - string: input from source slide, otherwise LaTeX "no input yet..." string
 *
 * * goBackString - string: LaTeX-styled "no input yet..."
 *
 * * hasData - boolean: whether the previous data retrieval was successful
 *
 * * slideNum - integer: slide number of source slide
 *
 * * flagText - string: automated, empty if hasData, goBackString otherwise
 *    - useful if it's not obvious that there's missing data (i.e., numbers and points)
 *    - EX: "The instructions say, 'Here is your point from slide 1', but I skipped slide
 *      1 and so there are no points on the current slide."
 *       BECOMES
 *      "The instructions say, 'Here is your point from slide 1', but I skipped slide 1.
 *      There is a textbox above the GGB on this slide that says 'no input yet...'. When
 *      I put a point on slide 1 and return here, that textbox is gone but my point is here!"
 */
