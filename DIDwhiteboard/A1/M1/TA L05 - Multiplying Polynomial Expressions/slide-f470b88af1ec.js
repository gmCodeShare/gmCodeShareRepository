const { ggb1, separator2, feedback1, textDisplay3, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("submit1a", true);
  ggb1.instance.setValue("submit", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

const id1 = `slide-9860ce21608f`;

let defPrevGGB1 = {
  innerData: { number1: 0, number2: 0, number3: 0, number4: 0 },
};

let data = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes("innerData")
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

// let data = getFromSlide(`slide-9860ce21608f`, "ggb1");
ggb1.instance.evalCommand(`number1=(${data.innerData["number1"]})`);
ggb1.instance.evalCommand(`number2=(${data.innerData["number2"]})`);
ggb1.instance.evalCommand(`number3=(${data.innerData["number3"]})`);
ggb1.instance.evalCommand(`number4=(${data.innerData["number4"]})`);

ggb1.instance.registerObjectUpdateListener("number5", update);
ggb1.instance.registerObjectUpdateListener("number6", update);
ggb1.instance.registerObjectUpdateListener("number7", update);

function update() {
  if (
    ggb1.innerData["number5"] >= 0 &&
    ggb1.innerData["number6"] >= 0 &&
    ggb1.innerData["number7"] >= 0
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
}

buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("submit2", true);
  ggb1.instance.setValue("submit2a", true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("submit2", false);
  ggb1.instance.setValue("submit2a", false);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
