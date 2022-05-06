const { media1, buttonGroup1 } = components;

buttonGroup1.updateData({ visible: false });

media1.on("ready", () => {
  buttonGroup1.updateData({ visible: true, lastButtonClicked: "" }); // last button clicked will help solve crosstime() behavior that pauses even after a button click
});

// automatically pause at the end of part 1 and display buttons
media1.on(
  "crosstime",
  () => {
    media1.pause();
    if (buttonGroup1.data.lastButtonClicked == 2) {
      // if they just clicked part 2 button to get here, play. If there are more than two parts, you will need more code here. Ask in #em-did-help
      media1.play();
    }
    buttonGroup1.updateData({ lastButtonClicked: "" });
  },
  { time: 94 }
); // Set pause time here in seconds. (currently integers work but decimals get truncated to integers)

// play part 1 button
buttonGroup1.on("click:1", () => {
  media1.skipTo(0);
  media1.play();
});
// play part 2 button
buttonGroup1.on("click:2", () => {
  buttonGroup1.updateData({ lastButtonClicked: 2 });
  media1.skipTo(94); // Set start time for part 2. Note: appropriate part 2 starting point is not necessarily the same as the pause time.
  media1.play();
});
