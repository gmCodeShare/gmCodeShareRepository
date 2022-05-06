const { ggb1, table1, text1 } = components;

let xnum = ggb1.instance.getXcoord("A");
let ynum = ggb1.instance.getYcoord("A");
slide.on("firstload", () => {
  ggb1.instance.setValue("day1", true);
  ggb1.instance.setValue("day2", true);
  ggb1.instance.setValue("day3", true);
  ggb1.instance.setValue("day4", true);
  table1.updateCell(0, 0, { value: xnum, math: true, editable: false });
  table1.updateCell(0, 1, { value: ynum, math: true, editable: false });
  table1.updateCell(1, 0, { value: xnum * 2, math: true, editable: false });
  table1.updateCell(1, 1, { value: ynum * 2, math: true, editable: false });
  table1.updateCell(2, 0, { value: xnum * 3, math: true, editable: false });
  table1.updateCell(2, 1, { value: ynum * 3, math: true, editable: false });
  table1.updateCell(3, 0, { value: xnum * 4, math: true, editable: false });
  table1.updateCell(3, 1, { value: ynum * 4, math: true, editable: false });
});

ggb1.instance.registerObjectUpdateListener("A", update);

function update() {
  let xnum = ggb1.instance.getXcoord("A");
  let ynum = ggb1.instance.getYcoord("A");
  table1.updateCell(0, 0, { value: xnum, math: true, editable: false });
  table1.updateCell(0, 1, { value: ynum, math: true, editable: false });
  table1.updateCell(1, 0, { value: xnum * 2, math: true, editable: false });
  table1.updateCell(1, 1, { value: ynum * 2, math: true, editable: false });
  table1.updateCell(2, 0, { value: xnum * 3, math: true, editable: false });
  table1.updateCell(2, 1, { value: ynum * 3, math: true, editable: false });
  table1.updateCell(3, 0, { value: xnum * 4, math: true, editable: false });
  table1.updateCell(3, 1, { value: ynum * 4, math: true, editable: false });
  text1.updateData({ text: `$y=${ynum}x$` });
}
