const { text1, ggb1, separator1, buttonGroup1, feedback1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

// utils.RTS.on('datachange', 'slide-62797c462e04', (register) => {
//   if (!register || !register.length) {
//     return;
//   }
//   const lastRegister = discardOldResponses(register);
//   lastRegister.forEach(({ data, info }) => {
//     ggb1.instance.setTextValue('text1', data.text1x);
//     ggb1.instance.setTextValue('text2', data.text2y);
//     ggb1.instance.setValue('showText', true);
//   });
// });

// function discardOldResponses(register) {
//   const devices = new Set();

//   return register
//     .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
//     .filter(({ info: { device } }) => {
//       const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
//       devices.add(device); // Mark device as appeared

//       return !deviceHasPreviousAnswer;
//     });
// }

buttonGroup1.on("click:1", () => {
  ggb1.instance.setVisible("shortenedLinear", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let slope = Math.round(ggb1.instance.getValue("linearSlope") * 1000) / 1000;
  let yInt = Math.round(ggb1.instance.getValue("linearYVal") * 1000) / 1000;

  if (ggb1.instance.getValue("linearYVal") >= 0) {
    text1.updateData({ text: `#### $y=${slope}x+${yInt}$` });
  } else {
    text1.updateData({ text: `#### $y=${slope}x${yInt}$` });
  }
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setVisible("shortenedLinear", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  text1.updateData({ text: `` });
});

const id1 = "slide-62797c462e04";

let defPrevTable1NumCol = 2;
let defPrevTable1NumRow = 10;

let defPrevTable1 = {
  data: { columns: [], rows: [] },
};

for (let i = 0; i < defPrevTable1NumCol; i++) {
  defPrevTable1.data.columns.push({ value: "" });
}

for (let i = 0; i < defPrevTable1NumRow; i++) {
  let newRow = [];
  for (let j = 0; j < defPrevTable1NumCol; j++) {
    newRow.push({ value: "" });
  }
  defPrevTable1.data.rows.push([...newRow]);
}

let prevTable1 = getFromSlide(id1, "table1", defPrevTable1) || defPrevTable1;

ggb1.instance.evalCommand("data={}");
for (var i = 0; i < 10; i++) {
  ggb1.instance.evalCommand(
    `SetValue(data,Append(data,(${prevTable1.data.rows[i][0].value},${prevTable1.data.rows[i][1].value})))`
  );
}
ggb1.instance.setVisible("data", true);

utils.RTS.on("datachange", "slide-62797c462e04", (register) => {
  if (!register || !register.length) {
    return;
  }
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    ggb1.instance.setTextValue("text1", data.text1x);
    ggb1.instance.setTextValue("text2", data.text2y);
    ggb1.instance.setValue("showText", true);
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
{"compTotals":{"textbox":2,"geogebra":1,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Print Alternate Slide Deck for Analyzing Paint Splatters","teacherView":true,"layout":"one col"}
*/
