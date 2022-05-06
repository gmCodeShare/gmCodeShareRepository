//slide-70ac2be19788

const { ggbLink, button1 } = components;

slide.on("firstload", () => {
  ggbLink.updateData({ visible: false });
  ggbLink.instance.setTextValue(
    "url",
    "https://www.surveymonkey.com/r/XXWCDFZ"
  );
});

button1.on("click", () => {
  ggbLink.instance.evalCommand("RunClickScript(link)");
});
