const { ggb1, text1, text2, button1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ align: "center" });
text2.updateData({ align: "center", visible: false });

autorun(() => {
  let size = ggb1.innerData["sizeOfGroup"]; //this just makes it so the autorun fires when the point is moved - there may be a better way
  if (
    table1.getCell(0, 1).value != 0 ||
    table1.getCell(1, 1).value != 3 ||
    table1.getCell(2, 1).value != 6 ||
    table1.getCell(3, 1).value != 9
  ) {
    text2.updateData({ visible: false });
    button1.updateData({ disabled: false });
    // console.log("running");
    // console.log(size);
  }
});

button1.on("click", () => {
  let product = ggb1.instance.getValue("product");
  let multiplicand = ggb1.innerData["multiplicand"];
  switch (multiplicand) {
    case 0:
      table1.updateCell(0, 1, { value: product.toString() });
      break;
    case 1:
      table1.updateCell(1, 1, { value: product.toString() });
      break;
    case 2:
      table1.updateCell(2, 1, { value: product.toString() });
      break;
    case 3:
      table1.updateCell(3, 0, { value: `3\\cdot${multiplicand}` });
      table1.updateCell(3, 1, { value: product.toString() });
      break;
  }
  if (
    table1.getCell(0, 1).value == 0 &&
    table1.getCell(1, 1).value == 3 &&
    table1.getCell(2, 1).value == 6 &&
    table1.getCell(3, 1).value == 9
  ) {
    button1.updateData({ disabled: true });
  }
  if (
    table1.getCell(0, 1).value != 0 ||
    table1.getCell(1, 1).value != 3 ||
    table1.getCell(2, 1).value != 6 ||
    table1.getCell(3, 1).value != 9
  ) {
    text2.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
});
