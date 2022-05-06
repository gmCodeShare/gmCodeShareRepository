const {
  ggb1,
  feedback1,
  text1,
  select1,
  button1,
  separator1,
  table2,
  select2,
  cc_submit_92807a927af6_textbox1: text2,
  cc_submit_92807a927af6_input1: input2,
  cc_submit_92807a927af6_button1: button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({ visible: false });
  text2.updateData({ visible: false });
  input2.updateData({ visible: false });
  button2.updateData({ visible: false });
});
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

const id = "slide-69d9669dc47f";
const priortable = getFromSlide(id, "table1.data.rows", false) || false;
if (!priortable || !priortable.length) {
  table2.updateCell(0, 0, {
    value: `\\text\\color{A0A0A0}{\[no input yet on slide ${getSlideNum(
      id
    )}\]}`,
  });
} else {
  table2.updateData({ rows: priortable });
}

/*ggb1.instance.registerObjectUpdateListener('flag', tableupdate);

function tableupdate() {
  if (ggb1.instance.getValue('flag')) {
    select1.unselectAll();
    select1.setVisible(true);
    button1.updateData({
      visible: true,
      text: 'Undo',
      align: 'right',
      selection: 4,
    });
    let oldRows = table1.data.rows;
    let newRow = [];
    let sampleCell = {
      math: true,
      value: ggb1.instance.getValueString('transformtext'),
    };
    newRow.push(sampleCell);
    table1.updateData({ visible: true, rows: [...oldRows, [...newRow]] });
    ggb1.instance.setValue('flag', false);
  }
}*/

select2.on("change", ({ selected }) => {
  text2.updateData({ visible: true });
  input2.updateData({ visible: true });
  button2.updateData({ visible: true });
  const answer = select2.data.selected.includes("0");
  if (answer) {
    input2.updateData({ text: "Yes, because" });
  } else {
    input2.updateData({ text: "No, because" });
  }
});

select1.on("change", ({ selected }) => {
  button1.updateData({ disabled: false });
  switch (selected[0]) {
    case "0":
      button1.updateData({
        visible: true,
        text: "Translate",
        align: "left",
        selection: 1,
      });
      ggb1.instance.evalCommand("RunClickScript(translate)");
      break;
    case "1":
      button1.updateData({
        visible: true,
        text: "Reflect",
        align: "left",
        selection: 2,
      });
      ggb1.instance.evalCommand("RunClickScript(reflect)");
      break;
    case "2":
      button1.updateData({
        visible: true,
        text: "Rotate",
        align: "left",
        selection: 3,
      });
      ggb1.instance.evalCommand("RunClickScript(rotate)");
  }
  select1.setVisible(false);
});

button1.on("click", () => {
  switch (button1.data.selection) {
    case 1:
      ggb1.instance.evalCommand("RunClickScript(animate)");
      button1.updateData({ disabled: true });
      break;
    case 2:
      ggb1.instance.evalCommand("RunClickScript(animate)");
      button1.updateData({ disabled: true });
      break;
    case 3:
      ggb1.instance.evalCommand("RunClickScript(animate)");
      button1.updateData({ disabled: true });
      break;
    case 4:
      ggb1.instance.evalCommand("RunClickScript(undo)");
      select1.unselectAll();
      // let newRows = [...table1.data.rows];
      // newRows.pop();
      // table1.updateData({ rows: newRows });
      if (ggb1.innerData["count"] == 1) {
        //table1.updateData({ visible: false });
        button1.updateData({ visible: false });
      }
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"select":1,"button":1,"separator":1,"table":1},"stage":"Learn","lessonInfo":"8 M2 TB L08 - Sequencing the Rigid Motions","teacherView":false,"layout":"two col"}
*/
