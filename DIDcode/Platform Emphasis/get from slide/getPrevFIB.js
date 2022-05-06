/**
 * Get fill in the blank data from an earlier slide
 *
 * OUTLINE
 * * STEP 1: declare slide id variable
 * * STEP 2: declare previous table variable
 * * STEP 3: do your coding
 * * STEP 4: copy/paste function
 * * ADVANCED FUNCTIONALITY
 */

const { text1 } = components;

/**
 * STEP 1: declare your earlier slide id as a variable
 * (optional, but a good practice)
 */

const id1 = "slide-5523a522ba51";

/**
 * STEP 2: create a variable for your previous FIB
 *
 * * use getPrevFIB instead of getFromSlide
 *
 * * getPrevFIB takes three parameters/arguments:
 *    1. slide id
 *    2. component name on previous slide as a string
 *    3. [OPTIONAL] number of inputs in your previous FIB
 */

const id1FIB = getPrevFIB(id1, "fib1", 1);

/**
 * STEP 3: use data from your previous table in your code
 */

let fibInput = id1Table.getInput(0).value;

text1.updateData({
  text: `You said $${fibInput}$.`,
});

/**
 * STEP 4: copy the getPrevFIB function and paste into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */

function getPrevFIB(slideID, compName = "fib1", inputs = 0) {
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
  let defFib = {
    data: { values: [] },
  };
  const prelimFib = getFromSlide(slideID, compName, defFib) || defFib;
  const numInputs = !!prelimFib.data?.values?.length
    ? prelimFib.data.values.length
    : inputs;
  for (let i = 0; i < numInputs; i++) {
    defFib.data.values.push({ text: "", inputType: "text" });
  }
  // get previous data
  let prevFib = getFromSlide(slideID, compName, defFib) || defFib;
  // check previous data, fill in useful data
  prevFib.data.hasData = prevFib.data.values.some(
    ({ text, inputType }) => !!text
  );
  prevFib.data.isComplete = prevFib.data.values.every(
    ({ text, inputType }) => !!text
  );
  prevFib.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevFib.data.slideNum = slideNum;
  prevFib.data.flagText = prevFib.data.isComplete
    ? ""
    : prevFib.data.goBackString;
  // add some useful methods
  prevFib.getInput = function (position, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    let text = this.data?.values?.[position]?.text
      ? this.data.values[position].text
      : emptyVal;
    return { ...this.data.values[position], text };
  };
  return { ...prevFib };
}

/**
 * ADVANCED FUNCTIONALITY
 *
 * The function returns useful info within the object's data property:
 *
 * * goBackString - string: LaTeX-styled "no input yet..."
 *
 * * hasData - boolean: whether the previous data retrieval was successful
 *
 * * isComplete - boolean: whether the previous table was completely filled
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
 * The function also provides a method within the object itself
 *
 * * getInput - parameters: input position, optional leave blank boolean
 *    - works like dev API getInput
 *    - by default, input value returned will be converted to the "no input yet..." string
 *      if it is falsy; setting the leave blank boolean to true cancels this effect
 *
 */
