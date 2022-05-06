const { text1, text2, ggb1 } = components;

text2.updateData({ align: "center" });

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-4ef6031b9218", {
      Answer2: ggb1.innerData["Answer2"],
    });
  }
});
