const {
  ggb1,
  feedback1,
  text3,
  cc_submit_d3b359bce850_textbox1: text1,
  cc_submit_d3b359bce850_input1: input1,
  cc_submit_d3b359bce850_button1: button1,
  separator2,
  button3,
  separator1,
  text2,
  button2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  text2.updateData({ visible: false });
  button2.updateData({ visible: false });
  button2.updateData({ align: "right" });
});
ggb1.instance.setMode(62);
button1.on("click", () => {
  text2.updateData({ visible: true });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  button2.updateData({ text: "Submitted", disabled: true });
  ggb1.instance.registerUpdateListener(update);
});

button3.on("click", () => {
  text3.updateData({
    text: `$(x-1)(3x-7)$\n\n
 $x\\color{#DA291C}{(3x-7)}$\$+(-1)\\color{#DA291C}{(3x-7)}$`,
  });
  ggb1.instance.setColor("text22", 218, 41, 28);
  ggb1.instance.setColor("text23", 218, 41, 28);
  button3.updateData({ disabled: true });
});

function update(a) {
  button2.updateData({ text: "Submit", disabled: false });
  ggb1.instance.unregisterUpdateListener(update);
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"submit":1,"separator":2,"button":2},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
