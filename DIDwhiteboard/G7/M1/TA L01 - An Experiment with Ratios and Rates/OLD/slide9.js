const { ggb1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("time", 0);

    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = Math.round(ggb1.innerData["time"]);
  let coins = ggb1.innerData["coinCount"];
  if (time > 0) {
    text1.updateData({
      text: `A local grocery store is looking to purchase a coin sorting machine.

Click the Sort button to see how it works.

Time: $${time}$ seconds

Coins sorted: $${coins}$`,
    });
  }
});

button1.on("click", () => {
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("scrub", true);
  ggb1.instance.startAnimation("scrub");
  button1.updateData({ disabled: true });
});
