//slide-f4b7543b931a

const {media11, select1, text1, cc_submit_3d06fa3dcabd_textbox1: text2, cc_submit_3d06fa3dcabd_input1: input1, cc_submit_3d06fa3dcabd_button1: button1} = components;

slide.on("firstload", () => {
  text1.updateData({visible: false});
  text2.updateData({visible: false});
  input1.updateData({visible: false});
  button1.updateData({visible: false});
  select1.setVisible(false);
})

media11.on("ready", ({data: vid}) => {
  vid.bind("betweentimes", 26, 27, (withinInterval) => { 
    if (withinInterval) {
      text1.updateData({visible: true});
      select1.setVisible(true);
}
  })
});
////////////////////  DATA MANAGEMENT  ////////////////////
const id1 = "slide-128102c8d164";

const id1PrevSelect1 = getPrevSelect(id1, "select1");

select1.on("change", ({selected}) => { 
  text2.updateData({visible: true});
  input1.updateData({visible: true});
  button1.updateData({visible: true});
 })
let chosenText = id1PrevSelect1.data.chosenLabels[0];

text1.updateData({
  text: `You chose to use ${chosenText}. Would you change your strategy?`,
});

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
  prevSelect.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
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