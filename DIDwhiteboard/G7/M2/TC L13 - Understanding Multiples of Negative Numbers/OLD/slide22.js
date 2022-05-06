const {
  button0,
  button1,
  text2,
  input1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  line1,
  line2,
  line3,
  line4,
  line5,
  why1,
  why2,
  why3,
  why4,
  input2,
  text3,
} = components;

button1.updateData({ align: "left" });
button11.updateData({ align: "right" });
input1.updateData({ align: "right" });

onInit();
function onInit() {
  if (!input1.data.init) {
    text2.updateData({ visible: false, align: "right" });
    button2.updateData({ align: "right", visible: false });
    button3.updateData({ align: "right", visible: false });
    button4.updateData({ align: "right", visible: false });
    button5.updateData({ align: "right", visible: false });
    button6.updateData({ align: "right", visible: false });
    button7.updateData({ align: "right", visible: false });
    button8.updateData({ align: "right", visible: false });
    button9.updateData({ align: "right", visible: false });
    button10.updateData({ align: "right", visible: false });
    line1.updateData({ align: "left", visible: false });
    line2.updateData({ align: "left", visible: false });
    line3.updateData({ align: "left", visible: false });
    line4.updateData({ align: "left", visible: false });
    line5.updateData({ align: "left", visible: false });
    why1.updateData({ align: "left", visible: false });
    why2.updateData({ align: "left", visible: false });
    why3.updateData({ align: "left", visible: false });
    why4.updateData({ align: "left", visible: false });
    input2.updateData({ visible: false, text: "" });
    button11.updateData({ align: "left", visible: false });
    text3.updateData({ align: "left", visible: false });
    button0.updateData({ disabled: true, align: "right" });
    //the line below is only for the onInit
    input1.updateData({ init: true });
  }
}

autorun(() => {
  if (input1.data.text) {
    button1.updateData({ disabled: false });
  }
});

button1.on("click", () => {
  text2.updateData({
    visible: true,
    text: `Conjecture: $3\⋅(-5)$ $= ${input1.data.text}$`,
  });
  button1.updateData({ disabled: true });
  button2.updateData({ visible: true });
  button0.updateData({ disabled: false });
});

button2.on("click", () => {
  line1.updateData({ visible: true });
  button3.updateData({ visible: true });
  button2.updateData({ disabled: true });
});

button3.on("click", () => {
  why1.updateData({ visible: true });
  button4.updateData({ visible: true });
  button3.updateData({ disabled: true });
});

button4.on("click", () => {
  line2.updateData({ visible: true });
  button5.updateData({ visible: true });
  button4.updateData({ disabled: true });
});

button5.on("click", () => {
  why2.updateData({ visible: true });
  button6.updateData({ visible: true });
  button5.updateData({ disabled: true });
});

button6.on("click", () => {
  line3.updateData({ visible: true });
  button7.updateData({ visible: true });
  button6.updateData({ disabled: true });
});

button7.on("click", () => {
  why3.updateData({ visible: true });
  button8.updateData({ visible: true });
  button7.updateData({ disabled: true });
});

button8.on("click", () => {
  line4.updateData({ visible: true });
  button9.updateData({ visible: true });
  button8.updateData({ disabled: true });
});

button9.on("click", () => {
  why4.updateData({ visible: true });
  button10.updateData({ visible: true });
  button9.updateData({ disabled: true });
});

button10.on("click", () => {
  line5.updateData({ visible: true });
  button11.updateData({ visible: true });
  input2.updateData({ visible: true });
  button10.updateData({ disabled: true });
});

button11.on("click", () => {
  text3.updateData({ visible: true });
  button11.updateData({ disabled: true });
});

button0.on("click", () => {
  text2.updateData({ visible: false, align: "right" });
  button2.updateData({ align: "right", visible: false, disabled: false });
  button3.updateData({ align: "right", visible: false, disabled: false });
  button4.updateData({ align: "right", visible: false, disabled: false });
  button5.updateData({ align: "right", visible: false, disabled: false });
  button6.updateData({ align: "right", visible: false, disabled: false });
  button7.updateData({ align: "right", visible: false, disabled: false });
  button8.updateData({ align: "right", visible: false, disabled: false });
  button9.updateData({ align: "right", visible: false, disabled: false });
  button10.updateData({ align: "right", visible: false, disabled: false });
  line1.updateData({ align: "left", visible: false });
  line2.updateData({ align: "left", visible: false });
  line3.updateData({ align: "left", visible: false });
  line4.updateData({ align: "left", visible: false });
  line5.updateData({ align: "left", visible: false });
  why1.updateData({ align: "left", visible: false });
  why2.updateData({ align: "left", visible: false });
  why3.updateData({ align: "left", visible: false });
  why4.updateData({ align: "left", visible: false });
  input2.updateData({ visible: false, text: "" });
  button11.updateData({ align: "left", visible: false, disabled: false });
  text3.updateData({ align: "left", visible: false });
  button1.updateData({ disabled: false });
  button0.updateData({ disabled: true });
});

autorun(() => {
  if (input2.data.text) {
    button11.updateData({ disabled: false });
  } else {
    button11.updateData({ disabled: true });
  }
});

autorun(() => {
  if (input1.data.text) {
    button1.updateData({ disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
});
