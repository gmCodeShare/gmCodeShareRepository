const { text1, separator1, text2, ggb1, feedback1 } = components;

text2.updateData({ align: "center" });

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-4ef6031b9218", {
      Answer2: ggb1.innerData["Answer2"],
    });
  }
});

/*
{"compTotals":{"textbox":3,"separator":1,"geogebra":1},"stage":"Learn","lessonInfo":"9 M1 TD L18 - Distributions and Their Shapes","teacherView":false,"layout":"one col"}
*/
