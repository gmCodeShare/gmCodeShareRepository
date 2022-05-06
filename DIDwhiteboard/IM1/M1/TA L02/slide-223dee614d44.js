const { ggb1, table1, select1 } = components;

slide.on("firstload", () => {
  select1.selectOption("0");
});

select1.on("change", ({ selected }) => {
  ggb1.updateData({ visible: selected.includes("0") });
  table1.updateData({ visible: selected.includes("1") });
});
