const { ggb1, button1, text1, text2 } = components;

ggb1.instance.setErrorDialogsActive(false);

text1.updateData({ align: "center" });
text2.updateData({ align: "center" });
ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
ggb1.instance.setFixed("h", false, false);

button1.on("click", () => {
  //  let feedback = ggb1.innerData["feedback2"];
  ggb1.updateInnerData({ time2: 0, feedBack: true });
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  //  text2.updateData({text: feedback});
  button1.updateData({ disabled: true });
});

autorun(() => {
  let feedBack = ggb1.innerData["feedBack"];
  let time = ggb1.innerData["time2"];
  let feedback = ggb1.innerData["feedback2"];
  if (feedBack == false) {
    text2.updateData({ text: "" });
    button1.updateData({ disabled: false });
  }
  if (time > 1.3 && feedBack) {
    text2.updateData({ text: feedback });
  }
});
