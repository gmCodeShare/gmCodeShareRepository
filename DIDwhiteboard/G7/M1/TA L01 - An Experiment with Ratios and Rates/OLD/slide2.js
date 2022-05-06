const { ggb1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  let time = ggb1.innerData["time"];
  let coins = ggb1.innerData["coinCount"];
  if (time > 0) {
    text1.updateData({
      text: `Practice sorting $5$ coins to start.
  
Time: $${time}$ seconds
  
Coins sorted: $${coins}$`,
    });
  }
});
