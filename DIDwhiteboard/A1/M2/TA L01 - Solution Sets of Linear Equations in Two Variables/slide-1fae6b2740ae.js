const {
  ggb1,
  feedback1,
  cc_submit_532b72388fe8_textbox1,
  cc_submit_532b72388fe8_input1,
  cc_submit_532b72388fe8_button1: button1,
  separator1,
  cc_sharewithclass_87c25185ed53_textbox1: text2,
  cc_sharewithclass_87c25185ed53_input1: input2,
  cc_sharewithclass_87c25185ed53_button1: button2,
  cc_sharewithclass_87c25185ed53_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
  ggb1.instance.deleteObject("AHalo");
  ggb1.instance.deleteObject("BHalo");
  ggb1.instance.deleteObject("CHalo");
  ggb1.instance.deleteObject("A");
  ggb1.instance.deleteObject("B");
  ggb1.instance.deleteObject("C");
});

const defGGB = {
  innerData: false,
};

const defTable = {
  data: {
    rows: [
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
    ],
  },
};

let data = getFromSlide("slide-591b98c4c31d", "ggb1", defGGB) || defGGB;
let slide4x1;
let slide4y1;
let slide4total;
let slide4x2;
let slide4y2;
let slide4total2;
let slide4x3;
let slide4y3;
let slide4total3;

if (data.innerData) {
  slide4x1 = data.innerData["x1"];
  slide4y1 = data.innerData["y1"];
  slide4total = data.innerData["total"];
  slide4x2 = data.innerData["x2"];
  slide4y2 = data.innerData["y2"];
  slide4total2 = data.innerData["total2"];
  slide4x3 = data.innerData["x3"];
  slide4y3 = data.innerData["y3"];
  slide4total3 = data.innerData["total3"];
  if (slide4total == 6) {
    ggb1.instance.evalCommand(`Slide5A=(${slide4x1},${slide4y1})`);
    ggb1.instance.setVisible("Slide5A", true);
  }
  if (slide4total != 6) {
    ggb1.instance.setVisible("Slide5A", false);
  }
  if (slide4total2 == 6) {
    ggb1.instance.evalCommand(`Slide5B=(${slide4x2},${slide4y2})`);
    ggb1.instance.setVisible("Slide5B", true);
  }
  if (slide4total2 != 6) {
    ggb1.instance.setVisible("Slide5B", false);
  }
  if (slide4total3 == 6) {
    ggb1.instance.evalCommand(`Slide5C=(${slide4x3},${slide4y3})`);
    ggb1.instance.setVisible("Slide5C", true);
  }
  if (slide4total3 != 6) {
    ggb1.instance.setVisible("Slide5C", false);
  }
} else {
  ggb1.instance.setVisible("Slide5A", false);
  ggb1.instance.setVisible("Slide5B", false);
  ggb1.instance.setVisible("Slide5C", false);
}

let content =
  getFromSlide("slide-1a0fd993032e", "table1", defTable) || defTable;
let num = content.data.rows[0][0].value;
let num2 = content.data.rows[0][2].value;

let content2 =
  getFromSlide("slide-1a0fd993032e", "table2", defTable) || defTable;
let num3 = content2.data.rows[0][0].value;
let num4 = content2.data.rows[0][2].value;
let num5 = content2.data.rows[1][0].value;
let num6 = content2.data.rows[1][2].value;

let content3 =
  getFromSlide("slide-8e74cc3defa1", "table1", defTable) || defTable;
let num7 = content3.data.rows[0][0].value;
let num8 = content3.data.rows[0][1].value;
let num9 = content3.data.rows[1][0].value;
let num10 = content3.data.rows[1][1].value;
let num11 = content3.data.rows[2][0].value;
let num12 = content3.data.rows[2][1].value;

let total = 0;
const result = utils.math.evaluateLatex(content.data.rows[0][0].value);
const result2 = utils.math.evaluateLatex(content.data.rows[0][2].value);
total = result.value - result2.value;

let total2 = 0;
const result3 = utils.math.evaluateLatex(content2.data.rows[0][0].value);
const result4 = utils.math.evaluateLatex(content2.data.rows[0][2].value);
total2 = result3.value - result4.value;

let total3 = 0;
const result5 = utils.math.evaluateLatex(content2.data.rows[1][0].value);
const result6 = utils.math.evaluateLatex(content2.data.rows[1][2].value);
total3 = result5.value - result6.value;

let total4 = 0;
const result7 = utils.math.evaluateLatex(content3.data.rows[0][0].value);
const result8 = utils.math.evaluateLatex(content3.data.rows[0][1].value);
total4 = result7.value - result8.value;

let total5 = 0;
const result9 = utils.math.evaluateLatex(content3.data.rows[1][0].value);
const result10 = utils.math.evaluateLatex(content3.data.rows[1][1].value);
total5 = result9.value - result10.value;

let total6 = 0;
const result11 = utils.math.evaluateLatex(content3.data.rows[2][0].value);
const result12 = utils.math.evaluateLatex(content3.data.rows[2][1].value);
total6 = result11.value - result12.value;

if (!num || content.data.rows[0][0].value == "") {
  ggb1.instance.setVisible("D", false);
}

if (total == 6) {
  num = content.data.rows[0][0].value;
  num2 = content.data.rows[0][2].value;
  ggb1.instance.evalCommand("D=(" + num + "," + num2 + ")");
  ggb1.instance.setVisible("D", true);
}

if (total != 6 && content.data.rows[0][0].value != "") {
  ggb1.instance.setVisible("D", false);
}

if (!num3 || content2.data.rows[0][0].value == "") {
  ggb1.instance.setVisible("E", false);
}

if (total2 == 6) {
  num3 = content2.data.rows[0][0].value;
  num4 = content2.data.rows[0][2].value;
  ggb1.instance.evalCommand("E=(" + num3 + "," + num4 + ")");
  ggb1.instance.setVisible("E", true);
}

if (total2 != 6 && content2.data.rows[0][0].value != "") {
  ggb1.instance.setVisible("E", false);
}

if (!num5 || content2.data.rows[1][0].value == "") {
  ggb1.instance.setVisible("F", false);
}

if (total3 == 6) {
  num5 = content2.data.rows[1][0].value;
  num6 = content2.data.rows[1][2].value;
  ggb1.instance.evalCommand("F=(" + num5 + "," + num6 + ")");
  ggb1.instance.setVisible("F", true);
}

if (total3 != 6 && content2.data.rows[1][0].value != "") {
  ggb1.instance.setVisible("F", false);
}

if (!num7 || content3.data.rows[0][0].value == "") {
  ggb1.instance.setVisible("G", false);
}

if (total4 == 6) {
  num7 = content3.data.rows[0][0].value;
  num8 = content3.data.rows[0][1].value;
  ggb1.instance.evalCommand("G=(" + num7 + "," + num8 + ")");
  ggb1.instance.setVisible("G", true);
}

if (total4 != 6 && content3.data.rows[0][0].value != "") {
  ggb1.instance.setVisible("G", false);
}

if (!num9 || content3.data.rows[1][0].value == "") {
  ggb1.instance.setVisible("H", false);
}

if (total5 == 6) {
  num9 = content3.data.rows[1][0].value;
  num10 = content3.data.rows[1][1].value;
  ggb1.instance.evalCommand("H=(" + num9 + "," + num10 + ")");
  ggb1.instance.setVisible("H", true);
}

if (total5 != 6 && content3.data.rows[1][0].value != "") {
  ggb1.instance.setVisible("H", false);
}

if (!num11 || content3.data.rows[2][0].value == "") {
  ggb1.instance.setVisible("I", false);
}

if (total6 == 6) {
  num11 = content3.data.rows[2][0].value;
  num12 = content3.data.rows[2][1].value;
  ggb1.instance.evalCommand("I=(" + num11 + "," + num12 + ")");
  ggb1.instance.setVisible("I", true);
}

if (total6 != 6 && content3.data.rows[2][0].value != "") {
  ggb1.instance.setVisible("I", false);
}

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.setVisible("pointList", true);
  ggb1.instance.setVisible("pointList2", true);
});

button2.on("click", () => {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

utils.RTS.on("datachange", "slide-1a0fd993032e", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      a,
      b,
      c,
      d,
      e,
      f,
      total,
      total2,
      total3,
    } = data;
    if (total == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + a + "," + b + ")))"
      );
    }
    if (total2 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + c + "," + d + ")))"
      );
    }
    if (total3 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList,Append(pointList,(" + e + "," + f + ")))"
      );
    }
  });
});

// Retrieving information
utils.RTS.on("datachange", "slide-8e74cc3defa1", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("pointList2={}");
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      row1Total,
      row2Total,
      row3Total,
      g,
      h,
      i,
      j,
      k,
      l,
      total4,
      total5,
      total6,
    } = data;
    if (total4 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + g + "," + h + ")))"
      );
    }
    if (total5 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + i + "," + j + ")))"
      );
    }
    if (total6 == 6) {
      ggb1.instance.evalCommand(
        "SetValue(pointList2,Append(pointList2,(" + k + "," + l + ")))"
      );
    }
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M2 TA L01 - Solution Sets of Linear Equations in Two Variables","teacherView":false,"layout":"two col"}
*/
