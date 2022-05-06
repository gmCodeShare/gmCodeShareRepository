const { ggb1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setValue("state4", true);
ggb1.instance.setMode(62);

button1.updateData({ align: "right" });

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();

function getDoodles() {
  let doodleArray = [];
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb1.instance.getCommandString(allPenstrokes[i]));
  }
  ggb1.updateData({ doodles: [...doodleArray] });
  //console.log(doodleArray);
}
