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
  cc_sharewithclass_2e66caa7fdcc_textbox1: text2,
  cc_sharewithclass_2e66caa7fdcc_input1: input2,
  cc_sharewithclass_2e66caa7fdcc_button1: button2,
  cc_sharewithclass_2e66caa7fdcc_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button2.updateData({ visible: false });
  input2.updateData({ visible: false });
  text2.updateData({ visible: false });
});

const id1 = `slide-9d7b5a11c8e1`;

let defPrevGGB1 = {
  innerData: { textinput1: "", textinput2: "", textinput3: "", textinput4: "" },
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

// let data = getFromSlide(`slide-9d7b5a11c8e1`, "ggb1");
ggb1.instance.setTextValue("textinput1", data.innerData["textinput1"]);
ggb1.instance.setTextValue("textinput2", data.innerData["textinput2"]);
ggb1.instance.setTextValue("textinput3", data.innerData["textinput3"]);
ggb1.instance.setTextValue("textinput4", data.innerData["textinput4"]);

button1.on("click", () => {
  button2.updateData({ visible: true });
  input2.updateData({ visible: true });
  text2.updateData({ visible: true });
});

button3.on("click", () => {
  text3.updateData({
    text: `$(x-1)(3x-7)$\n\n
  $\\color{#DA291C}{(x-1)}$\$(3x)+\\color{#DA291C}{(x-1)}$\$(-7)$`,
  });
  ggb1.instance.setColor("text14", 218, 41, 28);
  ggb1.instance.setColor("text21", 218, 41, 28);
  button3.updateData({ disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":2,"button":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"two col"}
*/
