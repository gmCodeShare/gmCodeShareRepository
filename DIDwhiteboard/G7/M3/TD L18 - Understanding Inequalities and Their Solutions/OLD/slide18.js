const { ggb1, ggb2, text1, text2, text3, text4, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

text2.updateData({ align: "center" });
text3.updateData({ align: "center" });

button1.on("click", () => {
  button1.updateData({
    disabled: true,
    text: "Submitted",
  });
  if (
    ggb1.instance.getValue("openPoint") == 0 ||
    Math.abs(ggb1.instance.getXcoord("D") - 5.2) > 0.1 ||
    ggb1.instance.getValue("blueA") == 1 ||
    ggb2.instance.getValue("openPoint") == 1 ||
    Math.abs(ggb2.instance.getXcoord("A") - 5.2) > 0.1 ||
    ggb2.instance.getValue("blueA") == 1
  ) {
    text4.updateData({ visible: true });
  }
  // console.log(
  //   ggb1.instance.getValue("openPoint") +
  //     " " +
  //     Math.abs(ggb2.instance.getXcoord("A") - 5.2) +
  //     " " +
  //     ggb1.instance.getValue("blueA") +
  //     " " +
  //     ggb2.instance.getValue("openPoint") +
  //     " " +
  //     Math.abs(ggb1.instance.getXcoord("D") - 5.2) +
  //     " " +
  //     ggb2.instance.getValue("blueA")
  // );
});

autorun(() => {
  let reup = ggb1.innerData["A"];
  let reup2 = ggb2.innerData["D"];
  let click = ggb1.innerData["blueA"];
  let click2 = ggb2.innerData["blueA"];
  let open = ggb1.innerData["openPoint"];
  let open2 = ggb2.innerData["openPoint"];
  button1.updateData({
    disabled: false,
    text: "Submit",
  });
  text4.updateData({ visible: false });
});
