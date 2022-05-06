const { ggb1, text1 } = components;

autorun(() => {
  const trigger = ggb1.innerData["B"];
  const slopeString = `$${ggb1.instance.getValueString(
    "text1"
  )}$ \n\n $${ggb1.instance.getValueString("text2").replaceAll(" ", "")}$`;
  text1.updateData({ text: slopeString });
});
