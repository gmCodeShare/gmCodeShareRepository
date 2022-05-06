/**
 * Get select data from an earlier slide
 *
 * OUTLINE
 * * STEP 1: declare slide id variable
 * * STEP 2: declare previous select variable
 * * STEP 3: do your coding
 * * STEP 4: copy/paste function
 * * ADVANCED FUNCTIONALITY
 */

const { text1 } = components;

/**
 * STEP 1: declare your earlier slide id as a variable
 * (optional, but a good practice)
 */

const id1 = "slide-354edc24a14a";

/**
 * STEP 2: create a variable for your previous select
 *
 * * use getPrevSelect instead of getFromSlide
 *
 * * getPrevSelect takes two parameters/arguments:
 *    1. slide id
 *    2. component name on previous slide as a string
 */

const id1PrevSelect1 = getPrevSelect(id1, "select1");

/**
 * STEP 3: use data from your previous select in your code
 */

let chosenText = id1PrevSelect1.data.chosenLabels[0];

text1.updateData({
  text: `You chose $${chosenText}$.`,
});

/**
 * STEP 4: copy the getPrevSelect function and paste into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */

function getPrevSelect(slideID, compName = "select1") {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defSelect = {
    data: {
      selected: [""],
      options: [{ label: "", value: "0" }],
    },
  };
  // get previous data
  let prevSelect = getFromSlide(slideID, compName, defSelect) || defSelect;
  let selLabels = prevSelect.data.options
    .map((opt) => {
      if (prevSelect.data.selected.includes(opt.value)) {
        return opt.label;
      }
    })
    .filter((label) => !!label);
  // fill in other useful data
  prevSelect.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevSelect.data.hasData = !!prevSelect.data.selected.length;
  prevSelect.data.chosen =
    prevSelect.data.type == "single"
      ? parseInt(prevSelect.data.selected[0])
      : prevSelect.data.selected.map((stringNum) => parseInt(stringNum));
  prevSelect.data.chosenSingle = parseInt(prevSelect.data.selected[0]);
  prevSelect.data.chosenMult = prevSelect.data.selected.map((stringNum) =>
    parseInt(stringNum)
  );
  prevSelect.data.chosenLabels = selLabels.length
    ? [...selLabels]
    : [prevSelect.data.goBackString];
  prevSelect.data.slideNum = slideNum;
  // set text values
  prevSelect.data.flagText = prevSelect.data.hasData
    ? ""
    : prevSelect.data.goBackString;
  return { ...prevSelect };
}

/**
 * ADVANCED FUNCTIONALITY
 *
 * The function returns useful info within the object's data property:
 *
 * * chosenLabels - array of string(s): selection labels from source slide,
 *     otherwise LaTeX "no input yet..." string
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
 *
 * * chosen - integer or array of integers: index or array of indices from selection
 *
 * * chosenSingle - integer: index of first choice from selection, otherwise NaN
 *
 * * chosenMult - array of integers: indices of of choices from selection
 */
