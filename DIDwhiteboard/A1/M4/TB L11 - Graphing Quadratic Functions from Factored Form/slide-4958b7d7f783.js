const {
  ggb1,
  feedback1,
  cc_sharewithclass_ec89b8d691e9_textbox1: text1,
  cc_sharewithclass_ec89b8d691e9_input1,
  cc_sharewithclass_ec89b8d691e9_button1,
  cc_sharewithclass_ec89b8d691e9_studentanswers1,
} = components;

ggb1.instance.setVisible("slider", false);
ggb1.instance.setVisible("E1", false);
ggb1.instance.setErrorDialogsActive(false);

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

const defGGB = {
  innerData: false,
};

const id = "slide-8ec8f8b16818";
let data = getFromSlide(id, "ggb1", defGGB) || defGGB;
let num;

if (!data.innerData) {
  num = `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(id)}\]}`;
} else {
  ggb1.instance.setValue("slider", data.innerData["slider"]);
  num = ggb1.instance.getValue("numOfTickets");
}

text1.updateData({
  text: `The manager expects to sell $3600$ seats at $\\$12$ per ticket.\n\nYou said the number of tickets sold decreases by $${num}$ per $\\$1$ increase in the ticket price.\n\nWrite a linear expression representing the number of tickets sold based on the change in ticket price from $\\$12$.`,
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M4 TB L11 - Graphing Quadratic Functions from Factored Form","teacherView":false,"layout":"two col"}
*/
