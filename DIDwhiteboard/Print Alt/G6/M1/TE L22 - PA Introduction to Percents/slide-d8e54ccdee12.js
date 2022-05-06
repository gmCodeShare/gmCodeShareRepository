const { textDisplay3, ggb1, feedback1 } = components;

components.feedback1.updateData({ visible: false });

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('numberOfPennies', update);

function update() {
  let num = ggb1.instance.getValue('numberOfPennies');
  console.log(num);
  textDisplay3.updateData({
    text: `#### $\\large{\\text{Number of Pennies: ${num}}}$`,
  });
}

/*
{"compTotals":{"textbox":2,"geogebra":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - PA Introduction to Percents","teacherView":true,"layout":"one col"}
*/
