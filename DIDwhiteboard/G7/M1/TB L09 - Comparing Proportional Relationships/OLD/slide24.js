const { ggb1, table1, text1, button1 } = components;

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

button1.updateData({ disabled: true });

const id1 = `slide-6348990482f9`;

let num1 = utils.math.evaluateLatex(
  getFromSlide(id1, `cc_submit_7a8157be9a31_input1.data.text`, "").replace(
    "\\%",
    "*0.01"
  ) || ""
).value;

if (num1 < 27.4) {
  text1.updateData({
    text: `You said the new panda eats $${num1}$ pounds of bamboo a day. That seems a little low. Go back and try again.  

With that information, complete the table below for the new panda.`,
  });
}

if (num1 > 27.4) {
  text1.updateData({
    text: `You said the new panda eats $${num1}$ pounds of bamboo a day. That seems a little high. Go back and try again.  

With that information, complete the table below for the new panda.`,
  });
}

if (num1 == 27.4) {
  text1.updateData({
    text: `You said the new panda eats $${num1}$ pounds of bamboo a day.  

With that information, complete the table below for the new panda.`,
  });
}

if (!num1) {
  num1 = `$\\color{A0A0A0}\\text{\[no input yet on slide ${getSlideNum(
    id1
  )}\]}$`;
  text1.updateData({
    text: `You said the new panda eats $${num1}$ pounds of bamboo a day.  With that information, complete the table below for the new panda.`,
  });
}

let cell03;
let cell13;
let cell23;
let cell33;
let cell41;
let cell43;

autorun(() => {
  cell03 = utils.math.evaluateLatex(
    table1.getCell(0, 1).value.replace("\\%", "*0.01")
  ).value;
  cell13 = utils.math.evaluateLatex(
    table1.getCell(1, 1).value.replace("\\%", "*0.01")
  ).value;
  cell23 = utils.math.evaluateLatex(
    table1.getCell(2, 1).value.replace("\\%", "*0.01")
  ).value;
  cell33 = utils.math.evaluateLatex(
    table1.getCell(3, 1).value.replace("\\%", "*0.01")
  ).value;
  cell41 = utils.math.evaluateLatex(
    table1.getCell(4, 1).value.replace("\\%", "*0.01")
  ).value;
  cell43 = utils.math.evaluateLatex(
    table1.getCell(5, 1).value.replace("\\%", "*0.01")
  ).value;
  if (
    cell03 == null ||
    cell13 == null ||
    cell23 == null ||
    cell33 == null ||
    cell41 == null ||
    cell43 == null
  ) {
    button1.updateData({ disabled: true });
  } else {
    button1.updateData({ disabled: false });
  }
});

button1.on("click", () => {
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setCoords("Point1", 0, cell03);
  ggb1.instance.setFixed("Point1", false, false);
  ggb1.instance.setCoords("Point2", 1, cell13);
  ggb1.instance.setFixed("Point2", false, false);
  ggb1.instance.setCoords("Point3", 2, cell23);
  ggb1.instance.setFixed("Point3", false, false);
  ggb1.instance.setCoords("Point4", 3, cell33);
  ggb1.instance.setFixed("Point4", false, false);
  ggb1.instance.setCoords("Point5", 4, cell41);
  ggb1.instance.setFixed("Point5", false, false);
  ggb1.instance.setCoords("Point6", 5, cell43);
  ggb1.instance.setFixed("Point6", false, false);
  button1.updateData({ disabled: true });
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

/*button1.on('click', () => {
ggb1.instance.setValue("time", 0);
ggb1.instance.setCoords("Point1",0,`${table1.getCell(0,1).value}`);
ggb1.instance.setFixed("Point1",false,false);
ggb1.instance.setCoords("Point2",1,`${table1.getCell(1,1).value}`);
ggb1.instance.setFixed("Point2",false,false);
ggb1.instance.setCoords("Point3",2,`${table1.getCell(2,1).value}`);
ggb1.instance.setFixed("Point3",false,false);
ggb1.instance.setCoords("Point4",3,`${table1.getCell(3,1).value}`);
ggb1.instance.setFixed("Point4",false,false);
ggb1.instance.setCoords("Point5",4,`${table1.getCell(4,1).value}`);
ggb1.instance.setFixed("Point5",false,false);
ggb1.instance.setCoords("Point6",5,`${table1.getCell(5,1).value}`);
ggb1.instance.setFixed("Point6",false,false);
button1.updateData({disabled: true});
ggb1.instance.setAnimating("time",true);
ggb1.instance.startAnimation();
});*/
/*autorun(() => {
  let cell03 = table1.getCell(0, 1).value;
  let cell13 = table1.getCell(1, 1).value;
  let cell23 = table1.getCell(2, 1).value;
  let cell33 = table1.getCell(3, 1).value;
  let cell41 = table1.getCell(4, 1).value;
  let cell43 = table1.getCell(5, 1).value;
  if (cell03 == "" || cell13 == "" || cell23 == "" || cell33 == "" || cell41 == "" || cell43 == "") {
    button1.updateData({disabled: true});
  } else {
    button1.updateData({disabled: false});
  }
});*/
