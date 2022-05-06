const {
  ggb1,
  cc_submit_34dbca62b9da_button1: button1,
  cc_sharewithclass_f4a62547cd19_textbox1: shareText1,
  cc_sharewithclass_f4a62547cd19_input1: shareInput1,
  cc_sharewithclass_f4a62547cd19_button1: shareButton1,
  cc_submit_34dbca62b9da_textbox1: text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let ID1 = "slide-352909c8c370";

function getSlideNum(slideId) {
  if (
    typeof controls == "undefined" ||
    !controls.slidesNavigationData?.length
  ) {
    return "missing slide!";
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });

    ggb1.updateData({ init: true });
  }
}

let data = getFromSlide(ID1, "ggb1", false) || false;

let coins =
  typeof data.innerData == "undefined"
    ? `$\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(ID1)}\]}$`
    : data.innerData["coinCount"];

text1.updateData({
  text: `You sorted $${coins}$ coins in $10$ seconds.

How many do you think you could sort in $30$ seconds?`,
});

button1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
