const { text1, ggb1 } = components;

ggb1.instance.registerObjectUpdateListener('standardDeviation', textWork);

function textWork() {
  let num = Math.round(ggb1.instance.getValue('standardDeviation') * 100) / 100;
  text1.updateData({ text: `Standard Deviation $=${num}$` });
}
