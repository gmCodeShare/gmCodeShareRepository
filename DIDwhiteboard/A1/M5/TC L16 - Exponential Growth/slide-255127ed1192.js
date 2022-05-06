const {
  ggb1,
  sep,
  table1,
  feedback,
  text1,
  fib1,
  button1,
  separator6,
  fib2,
  button2,
  separator3,
  text3,
  select1,
  cc_sharewithclass_ab56fd00d43a_textbox1: text2,
  cc_sharewithclass_ab56fd00d43a_input1: input3,
  cc_sharewithclass_ab56fd00d43a_button1: button3,
  cc_sharewithclass_ab56fd00d43a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  select1.updateData({ visible: false });
  text2.updateData({ visible: false });
  text3.updateData({ visible: false });
  input3.updateData({ visible: false });
  button1.updateData({ align: "right", disabled: true });
  button2.updateData({ align: "right", disabled: true });
  button3.updateData({ align: "right", visible: false });
  table1.updateCol(0, { math: true, editable: false });
  table1.updateCol(1, { math: true, editable: false });
  table1.updateCol(2, { math: true, editable: false });
  //input1.updateData({text:"f(x)=", visible: true});
  //input2.updateData({text:"g(x)=", visible: true});
});

const blankBox = "";
const textStemF = `f(x)=`;
const textStemG = `g(x)=`;

fib1.on("change", ({ values }) => {
  button1.updateData({
    disabled: !values.every(({ text }) => !!text),
  });
});

fib2.on("change", ({ values }) => {
  button2.updateData({
    disabled: !values.every(({ text }) => !!text),
  });
});

button1.on("click", () => {
  const valueLaTeXf = fib1.getInput(0).text;
  const valueLaTeXg = fib2.getInput(0).text;
  ggb1.instance.evalLaTeX(`f(x) = ${valueLaTeXf}`, 0);
  ggb1.instance.setValue("showFunctionF", true);
  if (ggb1.instance.getValue("showFunctionG") == false) {
    // table1.updateData({columns: ["Generation",`$${valueLaTeXf}$`,"$g(x)$"]});
    table1.updateHeader(0, { value: "Generation" });
    table1.updateHeader(1, { value: `$f(x) = ${valueLaTeXf}$` });
    table1.updateHeader(2, { value: "$g(x)$" });
    table1.updateData({
      rows: [
        [
          { value: table1.data.rows[0][0].value },
          { value: ggb1.instance.getValue("Element(fList,1)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[1][0].value },
          { value: ggb1.instance.getValue("Element(fList,2)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[2][0].value },
          { value: ggb1.instance.getValue("Element(fList,3)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[3][0].value },
          { value: ggb1.instance.getValue("Element(fList,4)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[4][0].value },
          { value: ggb1.instance.getValue("Element(fList,5)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[5][0].value },
          { value: ggb1.instance.getValue("Element(fList,6)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[6][0].value },
          { value: ggb1.instance.getValue("Element(fList,7)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[7][0].value },
          { value: ggb1.instance.getValue("Element(fList,8)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[8][0].value },
          { value: ggb1.instance.getValue("Element(fList,9)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[9][0].value },
          { value: ggb1.instance.getValue("Element(fList,10)") },
          { value: "" },
        ],
        [
          { value: table1.data.rows[10][0].value },
          { value: ggb1.instance.getValue("Element(fList,11)") },
          { value: "" },
        ],
      ],
    });
    table1.updateCol(0, { math: true, editable: false });
    table1.updateCol(1, { math: true, editable: false });
    table1.updateCol(2, { math: true, editable: false });
  } else {
    // table1.updateData({columns: ["Generation",`$${valueLaTeXf}$`,`$${valueLaTeXg}$`]});
    table1.updateHeader(0, { value: "Generation" });
    table1.updateHeader(1, { value: `$f(x) = ${valueLaTeXf}$` });
    table1.updateHeader(2, { value: `$g(x) = ${valueLaTeXg}$` });
    table1.updateData({
      rows: [
        [
          { value: table1.data.rows[0][0].value },
          { value: ggb1.instance.getValue("Element(fList,1)") },
          { value: ggb1.instance.getValue("Element(gList,1)") },
        ],
        [
          { value: table1.data.rows[1][0].value },
          { value: ggb1.instance.getValue("Element(fList,2)") },
          { value: ggb1.instance.getValue("Element(gList,2)") },
        ],
        [
          { value: table1.data.rows[2][0].value },
          { value: ggb1.instance.getValue("Element(fList,3)") },
          { value: ggb1.instance.getValue("Element(gList,3)") },
        ],
        [
          { value: table1.data.rows[3][0].value },
          { value: ggb1.instance.getValue("Element(fList,4)") },
          { value: ggb1.instance.getValue("Element(gList,4)") },
        ],
        [
          { value: table1.data.rows[4][0].value },
          { value: ggb1.instance.getValue("Element(fList,5)") },
          { value: ggb1.instance.getValue("Element(gList,5)") },
        ],
        [
          { value: table1.data.rows[5][0].value },
          { value: ggb1.instance.getValue("Element(fList,6)") },
          { value: ggb1.instance.getValue("Element(gList,6)") },
        ],
        [
          { value: table1.data.rows[6][0].value },
          { value: ggb1.instance.getValue("Element(fList,7)") },
          { value: ggb1.instance.getValue("Element(gList,7)") },
        ],
        [
          { value: table1.data.rows[7][0].value },
          { value: ggb1.instance.getValue("Element(fList,8)") },
          { value: ggb1.instance.getValue("Element(gList,8)") },
        ],
        [
          { value: table1.data.rows[8][0].value },
          { value: ggb1.instance.getValue("Element(fList,9)") },
          { value: ggb1.instance.getValue("Element(gList,9)") },
        ],
        [
          { value: table1.data.rows[9][0].value },
          { value: ggb1.instance.getValue("Element(fList,10)") },
          { value: ggb1.instance.getValue("Element(gList,10)") },
        ],
        [
          { value: table1.data.rows[10][0].value },
          { value: ggb1.instance.getValue("Element(fList,11)") },
          { value: ggb1.instance.getValue("Element(gList,11)") },
        ],
      ],
    });
    table1.updateCol(0, { math: true, editable: false });
    table1.updateCol(1, { math: true, editable: false });
    table1.updateCol(2, { math: true, editable: false });
  }
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("clickCount1", 1);
  // console.log(ggb1.instance.getValue("clickCount1"));
});

button2.on("click", () => {
  const valueLaTeXf = fib1.getInput(0).text;
  const valueLaTeXg = fib2.getInput(0).text;
  ggb1.instance.evalLaTeX(`g(x) = ${valueLaTeXg}`, 0);
  // console.log(`g(x) = ${valueLaTeXg}`);
  ggb1.instance.setValue("showFunctionG", true);
  if (ggb1.instance.getValue("showFunctionF") == false) {
    // table1.updateData({columns: ["Generation","$f(x)$", `$${valueLaTeXg}$`]});
    table1.updateHeader(0, { value: "Generation" });
    table1.updateHeader(1, { value: "$f(x)$" });
    table1.updateHeader(2, { value: `$g(x) = ${valueLaTeXg}$` });
    table1.updateData({
      rows: [
        [
          { value: table1.data.rows[0][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,1)") },
        ],
        [
          { value: table1.data.rows[1][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,2)") },
        ],
        [
          { value: table1.data.rows[2][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,3)") },
        ],
        [
          { value: table1.data.rows[3][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,4)") },
        ],
        [
          { value: table1.data.rows[4][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,5)") },
        ],
        [
          { value: table1.data.rows[5][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,6)") },
        ],
        [
          { value: table1.data.rows[6][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,7)") },
        ],
        [
          { value: table1.data.rows[7][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,8)") },
        ],
        [
          { value: table1.data.rows[8][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,9)") },
        ],
        [
          { value: table1.data.rows[9][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,10)") },
        ],
        [
          { value: table1.data.rows[10][0].value },
          { value: "" },
          { value: ggb1.instance.getValue("Element(gList,11)") },
        ],
      ],
    });
    table1.updateCol(0, { math: true, editable: false });
    table1.updateCol(1, { math: true, editable: false });
    table1.updateCol(2, { math: true, editable: false });
  } else {
    // table1.updateData({columns: ["Generation",`$${valueLaTeXf}$`,`$${valueLaTeXg}$`]});
    table1.updateHeader(0, { value: "Generation" });
    table1.updateHeader(1, { value: `$f(x) = ${valueLaTeXf}$` });
    table1.updateHeader(2, { value: `$g(x) = ${valueLaTeXg}$` });
    table1.updateData({
      rows: [
        [
          { value: table1.data.rows[0][0].value },
          { value: ggb1.instance.getValue("Element(fList,1)") },
          { value: ggb1.instance.getValue("Element(gList,1)") },
        ],
        [
          { value: table1.data.rows[1][0].value },
          { value: ggb1.instance.getValue("Element(fList,2)") },
          { value: ggb1.instance.getValue("Element(gList,2)") },
        ],
        [
          { value: table1.data.rows[2][0].value },
          { value: ggb1.instance.getValue("Element(fList,3)") },
          { value: ggb1.instance.getValue("Element(gList,3)") },
        ],
        [
          { value: table1.data.rows[3][0].value },
          { value: ggb1.instance.getValue("Element(fList,4)") },
          { value: ggb1.instance.getValue("Element(gList,4)") },
        ],
        [
          { value: table1.data.rows[4][0].value },
          { value: ggb1.instance.getValue("Element(fList,5)") },
          { value: ggb1.instance.getValue("Element(gList,5)") },
        ],
        [
          { value: table1.data.rows[5][0].value },
          { value: ggb1.instance.getValue("Element(fList,6)") },
          { value: ggb1.instance.getValue("Element(gList,6)") },
        ],
        [
          { value: table1.data.rows[6][0].value },
          { value: ggb1.instance.getValue("Element(fList,7)") },
          { value: ggb1.instance.getValue("Element(gList,7)") },
        ],
        [
          { value: table1.data.rows[7][0].value },
          { value: ggb1.instance.getValue("Element(fList,8)") },
          { value: ggb1.instance.getValue("Element(gList,8)") },
        ],
        [
          { value: table1.data.rows[8][0].value },
          { value: ggb1.instance.getValue("Element(fList,9)") },
          { value: ggb1.instance.getValue("Element(gList,9)") },
        ],
        [
          { value: table1.data.rows[9][0].value },
          { value: ggb1.instance.getValue("Element(fList,10)") },
          { value: ggb1.instance.getValue("Element(gList,10)") },
        ],
        [
          { value: table1.data.rows[10][0].value },
          { value: ggb1.instance.getValue("Element(fList,11)") },
          { value: ggb1.instance.getValue("Element(gList,11)") },
        ],
      ],
    });
    table1.updateCol(0, { math: true, editable: false });
    table1.updateCol(1, { math: true, editable: false });
    table1.updateCol(2, { math: true, editable: false });
  }
  button2.updateData({ disabled: true });
  ggb1.instance.setValue("clickCount2", 1);
  // console.log(ggb1.instance.getValue("clickCount2"));
  // console.log(ggb1.instance.getValue("clickCount"));
  if (ggb1.instance.getValue("clickCount") > 1) {
    text3.updateData({ visible: true });
    select1.updateData({ visible: true });
  } else {
    select1.updateData({ visible: false });
    text3.updateData({ visible: false });
  }
});

autorun(() => {
  if (select1.data.selected) {
    text2.updateData({ visible: true });
    input3.updateData({ visible: true });
    button3.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in the example, choices were sentences
      let sentStartNoMath = sentStart.replaceAll("$", "").replaceAll("\\", "");
      input3.updateData({ text: sentStartNoMath + " because " });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"geogebra":1,"separator":3,"table":1,"textbox":3,"fillblank":2,"button":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M5 TC L16 - Exponential Growth","teacherView":false,"layout":"two col"}
*/
