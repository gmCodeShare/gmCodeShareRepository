const {
  text5,
  text6,
  button1,
  image1,
  separator3,
  input1,
  separator2,
  text3,
  button2,
  text4,
  ggb1,
  feedback1,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text5.updateData({ align: "center" });
    text6.updateData({ align: "center" });
    text4.updateData({ align: "center" });
    text3.updateData({ align: "center" });
    image1.updateData({ visible: false });
    input1.updateData({ visible: false });
    text3.updateData({ visible: false });
    text4.updateData({ visible: false });
    ggb1.updateData({ visible: false });
    text3.updateData({ visible: false });
    ggb1.instance.setValue("time", 30);
    ggb1.instance.setValue("time1", 45);
    button2.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

const originText =
  "reomdibrntiogorfkleisfhionilnebemseoynmaoagtngloidfnreabwnodfwlo";

// Match the text entered with the provided text
let textEnteredLengthAnswer;
autorun(() => {
  let textEnteredLengthAnswer;
  let textEntered = input1.data.text;
  // //console.log(textEntered);
  let originTextMatch = originText.substring(0, textEntered.length);

  let textEnteredLength = input1.data.text.length;
  //   // Matches the lists and give number og letters in order
  if (textEntered == originTextMatch) {
    let textEnteredLengthAnswer = textEnteredLength;
    //     console.log(textEnteredLengthAnswer);
    text4.updateData({ text: `Your score: $${textEnteredLengthAnswer}$` });
    utils.RTS.sendData("slide-3f75850fe6b3", {
      myData: textEnteredLengthAnswer,
    });
    text4.updateData({ text: `Your score: $${textEnteredLengthAnswer}$` });
  }
});

ggb1.instance.registerObjectUpdateListener("time", updateTime);
ggb1.instance.registerObjectUpdateListener("time1", updateRight);

function updateTime() {
  let seconds = ggb1.instance.getValue("time");
  text3.updateData({ text: `Time: $${seconds}$ seconds` });
  //console.log(ggb1.instance.getValue("time"));
  if (ggb1.instance.getValue("time") == 0) {
    input1.updateData({ visible: false });
    text4.updateData({ visible: true });
    text6.updateData({ visible: false });
    ggb1.instance.setAnimating("time", false);
    // console.log("answer" + textEnteredLengthAnswer);
  }
  // console.log(textEnteredLengthAnswer);
}
function updateRight() {
  if (ggb1.instance.getValue("time1") == 0) {
    image1.updateData({ visible: false });
    // text7.updateData({ text: "" });
    text3.updateData({ visible: true });
    button1.updateData({ visible: true });
    //input1.updateData({ visible: true });
    ggb1.instance.setAnimating("time1", false);
    text6.updateData({ visible: true });
    text6.updateData({
      text: "When you are ready, click Go to enter the letters you remember.",
    });
  }
  let seconds1 = ggb1.instance.getValue("time1");
  text3.updateData({ text: `Time: $${seconds1}$ seconds` });
}

count = 0;
button1.on("click", () => {
  count += 1;
  if (count == 1) {
    image1.updateData({ visible: true });
    //text7.updateData({ text: `${originText}` });
    ggb1.instance.setAnimating("time1", true);
    ggb1.instance.startAnimation();
    button1.updateData({ visible: false });
    text6.updateData({ visible: false });
    let seconds1 = ggb1.instance.getValue("time1");
    text3.updateData({ text: `Time: $${seconds1}$ seconds` });
    text3.updateData({ visible: true });
  }
  if (count == 2) {
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
    button1.updateData({ visible: false });
    input1.updateData({ visible: true });
    button2.updateData({ visible: true });
  }
});

button2.on("click", () => {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  button2.updateData({ visible: false });
});

/*
{"compTotals":{"textbox":5,"button":2,"uploaded-image":1,"separator":2,"input":1,"geogebra":1},"stage":"Launch","lessonInfo":"9 M1 TD L18 - Distributions and Their Shapes","teacherView":false,"layout":"T layout"}
*/
