const {
  ggb1,
  feedback1,
  cc_submit_b91641056d96_textbox1: text1,
  cc_submit_b91641056d96_input1: inpu1,
  cc_submit_b91641056d96_button1: button1,
  separator1,
  cc_sharewithclass_5b55d24a5fbc_textbox1: text2,
  cc_sharewithclass_5b55d24a5fbc_input1: input2,
  cc_sharewithclass_5b55d24a5fbc_button1: button2,
  cc_sharewithclass_5b55d24a5fbc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});

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

const id1 = "slide-fa863e2a26e0";

let defPrevTable1NumCol = 3;
let defPrevTable1NumRow = 5;

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
for (var i = 0; i < 5; i++) {
  ggb1.instance.evalCommand(
    `SetValue(data,Append(data,(${prevTable1.data.rows[i][1].value},${prevTable1.data.rows[i][2].value})))`
  );
}
ggb1.instance.setVisible("data", true);

button1.on("click", () => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M6 TA L01 - Analyzing Paint Splatters","teacherView":false,"layout":"two col"}
*/
