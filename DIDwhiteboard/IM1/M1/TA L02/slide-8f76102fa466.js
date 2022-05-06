const { ggb1, select1, button1, text2, table1, button2 } = components;

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
  text2.updateData({ visible: false });
  table1.updateData({ visible: false });
  ggb1.updateData({ disabled: true });
  button2.updateData({ visible: false, align: "right" });
});

select1.on("change", ({ selected }) => {
  button1.updateData({
    text: "Submit",
    disabled: !selected.length,
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
  text2.updateData({ visible: true });
  table1.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.updateData({ disabled: false });
});

autorun(() => {
  // this example checked these 5 cells; you’ll have to make adjustments
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button2.updateData({
      text: "Submit",
      disabled: !entries.every((value) => !!value), // use this for enabling only after all cells are filled
      //disabled: !entries.some((value) => !!value), // use this for enabling after any cell is filled
    });
    table1.updateData({ last: [...entries] });
  }
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
