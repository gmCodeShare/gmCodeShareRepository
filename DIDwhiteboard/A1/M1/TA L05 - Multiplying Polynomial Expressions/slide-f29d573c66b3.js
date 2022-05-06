const {
  ggb1,
  feedback1,
  cc_submit_928462325fd6_textbox1,
  cc_submit_928462325fd6_input1,
  cc_submit_928462325fd6_button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("submit1a", true);
  ggb1.instance.setValue("submit", true);
});

const id0 = `slide-9860ce21608f`;
const id1 = `slide-f470b88af1ec`;

let defPrevGGB1 = {
  innerData: {
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    number6: 0,
    number7: 0,
  },
};

let data = getFromSlide(id0, "ggb1", false) || false; // don't forget to change slide id

let id0HasData = !data
  ? false
  : !Object.keys(data).includes("innerData")
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id0HasData) {
  data = defPrevGGB1;
}

let data1 = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !data1
  ? false
  : !Object.keys(data1).includes("innerData")
  ? false
  : !Object.keys(data1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data1 = defPrevGGB1;
}

// let data = getFromSlide(`slide-9860ce21608f`, "ggb1");
ggb1.instance.evalCommand(`number1=(${data.innerData["number1"]})`);
ggb1.instance.evalCommand(`number2=(${data.innerData["number2"]})`);
ggb1.instance.evalCommand(`number3=(${data.innerData["number3"]})`);
ggb1.instance.evalCommand(`number4=(${data.innerData["number4"]})`);

// let data1 = getFromSlide(`slide-f470b88af1ec`, "ggb1");
ggb1.instance.evalCommand(`number5=(${data1.innerData["number5"]})`);
ggb1.instance.evalCommand(`number6=(${data1.innerData["number6"]})`);
ggb1.instance.evalCommand(`number7=(${data1.innerData["number7"]})`);

ggb1.instance.setValue("submit2", true);
ggb1.instance.setValue("submit2a", true);

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
