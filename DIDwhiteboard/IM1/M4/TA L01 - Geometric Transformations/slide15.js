const { select1, ggb1 } = components;

select1.on("change", ({ selected }) => {
  const showSeg = selected.includes("0"); // true or false
  const showLine = selected.includes("1"); // true or false
  ggb1.instance.setValue("showSeg", showSeg);
  ggb1.instance.setValue("showLine", showLine);
});
