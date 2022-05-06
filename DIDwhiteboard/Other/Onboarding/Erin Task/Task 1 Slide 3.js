const { 
    ggb1, select1, textDisplay1,
    cc_submit_f0aa36f156fb_button1: submitButton1,
    cc_sharewithclass_8c5261a6a3f6_textbox1: shareTextbox1,
    cc_sharewithclass_8c5261a6a3f6_input1: shareInput1,
    cc_sharewithclass_8c5261a6a3f6_button1: shareButton1,
    } = components;


    slide.on("firstload", () => {
        select1.selectOption('1');
        ggb1.instance.setGridVisible(false)
        ggb1.instance.setAxesVisible(false, false)
        shareTextbox1.updateData({visible: false});
        shareInput1.updateData({visible: false});
        shareButton1.updateData({visible: false});

    });

    submitButton1.on('click', () => {
        shareTextbox1.updateData({visible: true});
        shareInput1.updateData({visible: true});
        shareButton1.updateData({visible: true});
      });

    select1.on('change', (selected) => {
        if (select1.data.selected.includes('0')) {
            ggb1.instance.setGridVisible(true)
            ggb1.instance.setAxesVisible(true, true)
   
        }
        if (select1.data.selected.includes('1')) {
            ggb1.instance.setGridVisible(false)
            ggb1.instance.setAxesVisible(false, false)
        }
      });
 


const id1 = "slide-7411c7a53022";

const id1PrevInput1 = getPrevInput(id1, "cc_sharewithclass_649fe106e18e_input1");

textDisplay1.updateData({
  text: `Here is your description of the translation:
   >${id1PrevInput1.data.text}`,
});

function getPrevInput(slideID, compName = "input1") {
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
  let defInput = {
    data: {
      text: "",
    },
  };
  // get previous data
  let prevInput = getFromSlide(slideID, compName, defInput) || defInput;
  // fill in other useful data
  prevInput.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevInput.data.hasData = !!prevInput.data.text;
  prevInput.data.slideNum = slideNum;
  // set text values
  prevInput.data.text = prevInput.data.hasData
    ? prevInput.data.text
    : prevInput.data.goBackString;
  prevInput.data.flagText = prevInput.data.hasData
    ? ""
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
