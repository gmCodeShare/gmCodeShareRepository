const { ggb1, select1, text1, button1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
slide.on("firstload", () => {
  text2.updateData({
    visible: false,
    text: "Error: Your domain is the empty set.",
    className: "text-danger",
  });
  button1.updateData({ disabled: true, align: "right" });
});
ggb1.instance.evalCommand("evenNum=Length(RemoveUndefined(l4))");
ggb1.instance.evalCommand("oddNum=Length(RemoveUndefined(l5))");
ggb1.instance.evalCommand("intNum=Length(RemoveUndefined(l6))");
ggb1.instance.evalCommand("ranNum=Length(RemoveUndefined(l8))");
ggb1.instance.evalCommand("mulNum=Length(RemoveUndefined(l10))");

autorun(() => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("a", false);
    ggb1.instance.setValue("b", true);
    ggb1.instance.setValue("c", false);
    ggb1.instance.setValue("d", false);
    ggb1.instance.setValue("e", false);
    ggb1.instance.setValue("h", false);
  }

  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("a", false);
    ggb1.instance.setValue("b", false);
    ggb1.instance.setValue("c", false);
    ggb1.instance.setValue("d", true);
    ggb1.instance.setValue("e", false);
    ggb1.instance.setValue("h", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setValue("a", false);
    ggb1.instance.setValue("b", false);
    ggb1.instance.setValue("c", true);
    ggb1.instance.setValue("d", false);
    ggb1.instance.setValue("e", false);
    ggb1.instance.setValue("h", false);
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setValue("a", false);
    ggb1.instance.setValue("b", false);
    ggb1.instance.setValue("c", false);
    ggb1.instance.setValue("d", false);
    ggb1.instance.setValue("e", true);
    ggb1.instance.setValue("h", false);
  }
  if (select1.data.selected.includes("4")) {
    ggb1.instance.setValue("a", true);
    ggb1.instance.setValue("b", false);
    ggb1.instance.setValue("c", false);
    ggb1.instance.setValue("d", false);
    ggb1.instance.setValue("e", false);
    ggb1.instance.setValue("h", false);
    text2.updateData({ visible: false });
  }
  if (select1.data.selected.includes("5")) {
    ggb1.instance.setValue("a", false);
    ggb1.instance.setValue("b", false);
    ggb1.instance.setValue("c", false);
    ggb1.instance.setValue("d", false);
    ggb1.instance.setValue("e", false);
    ggb1.instance.setValue("h", true);
  }
  if (
    ggb1.instance.getValue("evenNum") == 0 &&
    select1.data.selected.includes("0")
  ) {
    text2.updateData({ visible: true });
  }
  if (
    ggb1.instance.getValue("evenNum") != 0 &&
    select1.data.selected.includes("0")
  ) {
    text2.updateData({ visible: false });
  }
  if (
    ggb1.instance.getValue("oddNum") == 0 &&
    select1.data.selected.includes("2")
  ) {
    text2.updateData({ visible: true });
  }
  if (
    ggb1.instance.getValue("oddNum") != 0 &&
    select1.data.selected.includes("2")
  ) {
    text2.updateData({ visible: false });
  }
  if (
    ggb1.instance.getValue("intNum") == 0 &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({ visible: true });
  }
  if (
    ggb1.instance.getValue("intNum") != 0 &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({ visible: false });
  }
  if (
    ggb1.instance.getValue("ranNum") == 0 &&
    select1.data.selected.includes("3")
  ) {
    text2.updateData({ visible: true });
  }
  if (
    ggb1.instance.getValue("ranNum") != 0 &&
    select1.data.selected.includes("3")
  ) {
    text2.updateData({ visible: false });
  }
  if (
    ggb1.instance.getValue("mulNum") == 0 &&
    select1.data.selected.includes("5")
  ) {
    text2.updateData({ visible: true });
  }
  if (
    ggb1.instance.getValue("mulNum") != 0 &&
    select1.data.selected.includes("5")
  ) {
    text2.updateData({ visible: false });
  }
});

ggb1.instance.registerObjectUpdateListener("l4", update);

function update() {
  if (
    ggb1.instance.getValue("evenNum") == 0 &&
    select1.data.selected.includes("0")
  ) {
    text2.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
  if (
    ggb1.instance.getValue("evenNum") != 0 &&
    select1.data.selected.includes("0")
  ) {
    text2.updateData({ visible: false });
    button1.updateData({ disabled: false });
  }
  if (
    ggb1.instance.getValue("oddNum") == 0 &&
    select1.data.selected.includes("2")
  ) {
    text2.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
  if (
    ggb1.instance.getValue("oddNum") != 0 &&
    select1.data.selected.includes("2")
  ) {
    text2.updateData({ visible: false });
    button1.updateData({ disabled: false });
  }
  if (
    ggb1.instance.getValue("intNum") == 0 &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
  if (
    ggb1.instance.getValue("intNum") != 0 &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({ visible: false });
    button1.updateData({ disabled: false });
  }
  if (
    ggb1.instance.getValue("ranNum") == 0 &&
    select1.data.selected.includes("3")
  ) {
    text2.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
  if (
    ggb1.instance.getValue("ranNum") != 0 &&
    select1.data.selected.includes("3")
  ) {
    text2.updateData({ visible: false });
    button1.updateData({ disabled: false });
  }
  if (
    ggb1.instance.getValue("mulNum") == 0 &&
    select1.data.selected.includes("5")
  ) {
    text2.updateData({ visible: true });
    button1.updateData({ disabled: true });
  }
  if (
    ggb1.instance.getValue("mulNum") != 0 &&
    select1.data.selected.includes("5")
  ) {
    text2.updateData({ visible: false });
    button1.updateData({ disabled: false });
  }
  // console.log(ggb1.instance.getValue("evenNum"));
  /* if(ggb1.instance.getListtValue("l4",0)==""){
 text2.updateData({text:"Error- Your domain is the empty set."});
 }*/
}

select1.on("change", (selected) => {
  ggb1.instance.setValue("show", 1);
});

ggb1.instance.registerObjectUpdateListener("A", updateRight);
ggb1.instance.registerObjectUpdateListener("B", updateRight);

function updateRight() {
  select1.on("change", (selected) => {
    button1.updateData({ disabled: false });
  });
}

button1.on("click", () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue("show", 0);
});
