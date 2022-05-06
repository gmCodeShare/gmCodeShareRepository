/**
 * Get GGB data from an earlier slide
 *
 * OUTLINE
 * * STEP 1: declare slide id variable
 * * STEP 2: declare previous GGB variable
 * * STEP 3: add default values
 * * STEP 4: do your coding
 * * STEP 5: copy/paste function
 * * ADVANCED FUNCTIONALITY
 */

const { text1 } = components;

/**
 * STEP 1: declare your earlier slide id as a variable
 * (optional, but a good practice)
 */

const id1 = "slide-354edc24a14a";

/**
 * STEP 2: create a variable for your previous GGB
 *
 * * use getPrevGGB instead of getFromSlide
 *
 * * getPrevGGB takes four parameters/arguments:
 *    1. slide id
 *    2. component name on previous slide as a string
 *    3. an object (curly braces) - see STEP 3
 *    4. [OPTIONAL] the name of a component we can attach some data to, as a string
 *      - recommend against including a fourth argument unless you have a strong
 *        preference for which component gets used, for some reason
 *
 *
 * STEP 3: add default values for any data you need to reference inside the object
 *  from STEP 2
 *
 * * anything from the previous GGB that you need on this slide MUST have a default
 *    value in case the platform can't access the earlier slide
 */

const id1PrevGGB1 = getPrevGGB(id1, "ggb1", { sliderNum: 0 });

/**
 * STEP 4: use data from your previous GGB in your code
 */

text1.updateData({
  text: `Your number is $${id1PrevGGB1.innerData["sliderNum"]}$.`,
});

/**
 * STEP 5: copy the getPrevGGB, saveData, and getData functions, paste into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */

function getPrevGGB(slideID, compName = "ggb1", innerData, storageComp = "") {
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
  let defGGB = {
    data: {},
    innerData,
  };
  // get previous data
  let prevGGB = getFromSlide(slideID, compName, false) || false;
  // check previous data
  const hasData = !prevGGB
    ? false
    : !Object.keys(prevGGB).includes("innerData")
    ? false
    : !Object.keys(prevGGB.innerData).length
    ? false
    : true;
  let returnGGB = hasData ? prevGGB : defGGB;
  // fill in other useful data
  returnGGB.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  returnGGB.data.hasData = hasData;
  returnGGB.data.slideNum = slideNum;
  // set text value
  returnGGB.data.flagText = hasData ? "" : returnGGB.data.goBackString;
  // record if there was already data so it doesn't wrongfully overwritten
  // maintain a record of whether we've had data
  const existingData = getData(`oldData${slideID + compName}`, storageComp);
  const hadData = hasData || existingData?.data?.hadData || false;
  if (hasData) {
    // if we have new data, (over)write to save it
    returnGGB.data.hadData = hadData;
    // create a dummy object to pass to updateData
    const newData = {};
    newData[`oldData${slideID + compName}`] = { ...returnGGB };
    // storageComp.updateData(newData);
    saveData(newData, storageComp);
  } else if (existingData?.data?.hasData) {
    // if we don't have new data but there is oldData, grab it
    returnGGB = { ...existingData };
  }
  return { ...returnGGB };
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
 * * hadData - boolean: whether there has been a successful data retrieval, even if the
 *    most recent attempt wasn't successful
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
