const { ggb1, button1, text1, button2, table1, text3, text2 } = components;
slide.on("firstload", () => {
  ggb1.instance.setErrorDialogsActive(false);
  button2.updateData({ visible: false });
  table1.updateData({ visible: false });
  text3.updateData({ visible: false });
  text2.updateData({ visible: false });
});
let xnum;
let ynum;

button1.on("click", () => {
  text3.updateData({ visible: true });
  ggb1.instance.setValue("showValue", true);
  button1.updateData({ disabled: true });

  ggb1.instance.setValue("day1", true);
  ggb1.instance.setValue("clickCount", 1);

  let xnum = ggb1.instance.getXcoord("A");
  let ynum = ggb1.instance.getYcoord("A");
  console.log(xnum, ynum);
  if (xnum == 1 && ynum == 30) {
    text3.updateData({
      text: `Great! Your unit rate triangle that shows a panda eating $30$ pounds of bamboo a day. `,
    });
    table1.updateData({ visible: true });
    button2.updateData({ visible: true });
    text2.updateData({ visible: true });
    table1.updateCell(0, 0, { value: xnum, math: true });
    table1.updateCell(0, 1, { value: ynum, math: true });
    ggb1.instance.setVisible("A", false);
    ggb1.instance.setVisible("eq1", false);
  }
  if (xnum != 1 || ynum != 30) {
    text3.updateData({
      text: `That's not quite right. Your triangle that shows a panda eating $${ynum}$ pounds of bamboo in $${xnum}$ day(s). `,
    });
  }
});

ggb1.instance.registerObjectUpdateListener("H", update);

function update() {
  button1.updateData({ disabled: false });
  //text3.updateData({visible:false});
}

button2.on("click", () => {
  button1.updateData({ disabled: true });
  let xnum = ggb1.instance.getXcoord("A");
  let ynum = ggb1.instance.getYcoord("A");

  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount", clickCount + 1);

  if (ggb1.instance.getValue("clickCount") == 2) {
    table1.addRow(1, { math: true, editable: false });
    table1.updateCell(1, 0, { value: xnum * 2, math: true, editable: false });
    table1.updateCell(1, 1, { value: ynum * 2, math: true, editable: false });
    ggb1.instance.setValue("day2", true);
  }
  if (ggb1.instance.getValue("clickCount") == 3) {
    table1.addRow(2, { math: true, editable: false });
    table1.updateCell(2, 0, { value: xnum * 3, math: true, editable: false });
    table1.updateCell(2, 1, { value: ynum * 3, math: true, editable: false });
    ggb1.instance.setValue("day3", true);
  }
  if (ggb1.instance.getValue("clickCount") == 4) {
    table1.addRow(3, { math: true, editable: false });
    table1.updateCell(3, 0, { value: xnum * 4, math: true, editable: false });
    table1.updateCell(3, 1, { value: ynum * 4, math: true, editable: false });
    ggb1.instance.setValue("day4", true);
    button2.updateData({ disabled: true });
  }
});
