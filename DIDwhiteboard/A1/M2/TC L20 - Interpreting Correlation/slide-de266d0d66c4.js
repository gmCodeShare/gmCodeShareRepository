const { ggb1, feedback, text1, ggb2, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

button1.updateData({ align: "right" });
ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");
ggb2.instance.setAxisLabels(1, "$\\mathit{r}$");

button1.on("click", () => {
  button1.updateData({ disabled: true, text: "Submitted" });
  ggb1.instance.setValue("enable", false);
});

ggb2.instance.registerObjectUpdateListener("enable", buttonWork);

function buttonWork() {
  if (ggb2.instance.getValue("enable")) {
    button1.updateData({ disabled: false, text: "Submit" });
  }
}

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-de266d0d66c4", {
      pointA: ggb2.innerData["A"],
      pointB: ggb2.innerData["B"],
    });
  }
});

/*
{"compTotals":{"geogebra":2,"textbox":2,"button":1},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"two col"}
*/
