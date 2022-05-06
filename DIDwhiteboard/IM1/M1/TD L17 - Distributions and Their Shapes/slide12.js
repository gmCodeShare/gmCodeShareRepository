const { text1, text2, ggb1 } = components;

text2.updateData({ align: "center" });

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData("slide-4bfb4c854b0b", {
      Answer: ggb1.innerData["Answer"],
    });
  }
});
