const {
  ggb1,
  feedback,
  cc_submit_2b42466594bc_textbox1: submitText1,
  cc_submit_2b42466594bc_input1: submitInput1,
  cc_submit_2b42466594bc_button1: submitButton1,
  separator2,
  cc_sharewithclass_d9e91aa3f2cf_textbox1: shareText1,
  cc_sharewithclass_d9e91aa3f2cf_input1: shareInput1,
  cc_sharewithclass_d9e91aa3f2cf_button1: shareButton1,
  cc_sharewithclass_d9e91aa3f2cf_studentanswers1,
} = components;

/*
see assigning to new variable names with destructuring assignments: https://mzl.la/35z78LM
*/

ggb1.instance.setErrorDialogsActive(false);

submitButton1.updateData({ align: "right" });
shareButton1.updateData({ align: "right" });

let defPrevGGB1 = {
  innerData: {},
  default: true,
};

for (let i = 1; i < 64; i++) {
  defPrevGGB1.innerData[`P${i}`] = [-9.85, -9.85];
}

let prevGGB1 = getFromSlide("slide-dfe7eaa5d603", "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !prevGGB1
  ? false
  : !Object.keys(prevGGB1).includes("innerData")
  ? false
  : !Object.keys(prevGGB1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  prevGGB1 = defPrevGGB1;
}

// let data = getFromSlide("slide-dfe7eaa5d603", "ggb1");

if (!prevGGB1.default) {
  for (var i = 1; i < 64; i++) {
    // innerData is an array. innerData contains an array for each point. The array's first three elements are x, y, and z. So to get the x value use this [0], etc.
    ggb1.instance.setCoords(
      "P" + i,
      prevGGB1.innerData["P" + i][0],
      prevGGB1.innerData["P" + i][1]
    );
  }
}

for (var i = 1; i < 64; i++) {
  if (
    ggb1.instance.getXcoord("P" + i) == -9.85 &&
    ggb1.instance.getYcoord("P" + i) == -9.85 &&
    i >= 33
  ) {
    ggb1.instance.setVisible("backCritter'_{" + (i - 33) + "}", false);
    ggb1.instance.setVisible("P" + i, false);
  }
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

submitButton1.on("click", () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
