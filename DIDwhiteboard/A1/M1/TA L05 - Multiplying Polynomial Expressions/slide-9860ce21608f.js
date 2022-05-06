const { ggb1, separator1, feedback1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});
ggb1.instance.registerObjectUpdateListener("number1", update);
ggb1.instance.registerObjectUpdateListener("number2", update);
ggb1.instance.registerObjectUpdateListener("number3", update);
ggb1.instance.registerObjectUpdateListener("number4", update);

function update() {
  if (
    ggb1.innerData["number1"] >= 0 &&
    ggb1.innerData["number2"] >= 0 &&
    ggb1.innerData["number3"] >= 0 &&
    ggb1.innerData["number4"] >= 0
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
}
/*autorun(() => {
if (
    ggb1.innerData["number1"] >= 0 &&
    ggb1.innerData["number2"] >= 0 &&
    ggb1.innerData["number3"] >= 0 &&
    ggb1.innerData["number4"] >= 0 
      ) {
   buttonGroup1.updateSingleButton({ disabled: false }, 1);
    }
    });*/

buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("submit1a", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("submit1a", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
