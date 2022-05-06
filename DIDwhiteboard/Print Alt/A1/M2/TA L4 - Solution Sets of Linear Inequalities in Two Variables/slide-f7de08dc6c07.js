const { ggb1, ggb2, text1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);
slide.on("firstload", () => {
  ggb1.instance.setVisible("eq3", false);
  ggb1.instance.setVisible("eq4", false);
  ggb1.instance.setValue("points", true);
  ggb1.instance.setVisible("text2", false);
  ggb1.instance.setVisible("u", false);
});

select1.on("change", (selected) => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setVisible("eq3", true);
    ggb1.instance.setVisible("eq4", false);
    ggb1.instance.setVisible("text2", true);
    ggb1.instance.setVisible("u", true);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setVisible("eq3", false);
    ggb1.instance.setVisible("eq4", true);
    ggb1.instance.setVisible("text2", true);
    ggb1.instance.setVisible("u", true);
  }
});

const sketches =
  getFromSlide("slide-1b5181ef8c83", "ggb1.innerData.doodles", []) || [];

for (let i = 0; i < sketches.length; i++) {
  let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
  ggb1.instance.setFixed(name, false, false);
  ggb1.instance.setColor(name, 0, 127, 175);
  ggb1.instance.setLineThickness(name, 5);
  ggb1.instance.setCaption(name, "ignore");
  //console.log(name);
}
const id1 = "slide-933371c6cc8f"; //put in your slideID

const id1prevTable = getPrevTable(id1, "table1");
/**
 * STEP 3: use data from your previous select in your code
 */
/**
 * STEP 4: copy the getPrevTable function and paste into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */
function getPrevTable(slideID, compName = "table1") {
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
  let defTable = {
    data: {
      rows: [
        {
          0: { value: "" },
          1: { value: "" },
          2: { value: "" },
          length: 3,
        },
      ],
      columns: [{ 0: { value: "" }, 1: { value: "" }, length: 2 }],
    },
  };
  // get previous data
  let prevTable = getFromSlide(slideID, compName, defTable) || defTable;
  // fill in other useful data
  prevTable.data.goBackString = `\\text{\[no input yet on slide ${slideNum}\]}`;
  prevTable.data.hasData = !!prevTable.data.rows.length;
  prevTable.data.slideNum = slideNum;
  // set text values
  prevTable.data.flagText = prevTable.data.hasData
    ? ""
    : prevTable.data.goBackString;
  return { ...prevTable };
}
console.log(id1prevTable.data.goBackString);
for (let i = 0, L1 = id1prevTable.data.rows.length; i < L1; i++) {
  ggb1.instance.evalCommand(
    `Point${i}=(${id1prevTable.data.rows[i][0].value},${id1prevTable.data.rows[i][1].value})`
  );
  ggb1.instance.setLabelVisible(`Point${i}`, false);
  ggb1.instance.setFixed(`Point${i}`, true, false);
}

/*
{"compTotals":{"geogebra":2,"textbox":1,"select":1},"stage":"Learn","lessonInfo":"9 M2 TA L04 - Print Alternate Slide Deck for Solution Sets of Linear Inequalities in Two Variables.","teacherView":true,"layout":"two col"}
*/
