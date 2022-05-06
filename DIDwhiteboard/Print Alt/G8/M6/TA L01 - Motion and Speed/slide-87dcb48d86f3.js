const { ggb1, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

let studentInput1;
let studentInput2;
let studentInput3;
let studentInput4;

ggb1.instance.setValue("studentInput1", 0);
ggb1.instance.setValue("studentInput2", 0);
ggb1.instance.setValue("studentInput3", 0);
ggb1.instance.setValue("studentInput4", 0);

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(4, 1).value,
    table1.getCell(6, 1).value,
  ];
  if (!arrayEquals(entries, table1.data.last)) {
    buttonGroup1.updateSingleButton(
      { disabled: !entries.every((value) => !!value) },
      1
    );
    table1.updateData({ last: entries });
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setValue("clickCount", 0);
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.stopAnimation();
  }
  let studentInput1 = table1.data.rows[0][1].value;
  let studentInput2 = table1.data.rows[2][1].value;
  let studentInput3 = table1.data.rows[4][1].value;
  let studentInput4 = table1.data.rows[6][1].value;
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  //buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setValue("check", true);
  let studentInput1 = table1.data.rows[0][1].value; // t = 0.5
  let studentInput2 = table1.data.rows[2][1].value; // t = 1.5
  let studentInput3 = table1.data.rows[4][1].value; // t = 2.5
  let studentInput4 = table1.data.rows[6][1].value; // t = 3.5
  const inputs = [studentInput1, studentInput2, studentInput3, studentInput4];
  const checkedInputs = inputs.map((input) => utils.math.evaluateLatex(input));
  const notVisVal = -200;
  ggb1.instance.setValue(
    "studentInput1",
    checkedInputs[0].error ? notVisVal : checkedInputs[0].value
  );
  ggb1.instance.setValue(
    "studentInput2",
    checkedInputs[1].error ? notVisVal : checkedInputs[1].value
  );
  ggb1.instance.setValue(
    "studentInput3",
    checkedInputs[2].error ? notVisVal : checkedInputs[2].value
  );
  ggb1.instance.setValue(
    "studentInput4",
    checkedInputs[3].error ? notVisVal : checkedInputs[3].value
  );
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("clickCount", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  table1.updateCell(0, 1, { value: `4` });
  table1.updateCell(2, 1, { value: `36` });
  table1.updateCell(4, 1, { value: `100` });
  table1.updateCell(6, 1, { value: `196` });
});

/*
{"compTotals":{"geogebra":1,"table":1,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M6 TA L01 - Print Alt: Motion and Speed","teacherView":true,"layout":"two col"}
*/
