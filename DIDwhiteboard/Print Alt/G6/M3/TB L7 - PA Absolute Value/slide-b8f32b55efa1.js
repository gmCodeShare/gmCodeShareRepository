const { text2, ggb1, feedback1, text3 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 6);
    // create/update a dummy variable to keep track of whether the screen has initialized
    let num = ggb1.instance.getValue('val1');
    let num2 = ggb1.instance.getValue('absVal1');
    let num3 = ggb1.instance.getValue('val2');
    let num4 = ggb1.instance.getValue('absVal2');
    text2.updateData({
      text: `$\\huge{|${num}|=${num2}\\text{ and } |${num3}|=${num4}}$`,
    });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('val1', update);
ggb1.instance.registerObjectUpdateListener('val2', update);

function update() {
  let num = ggb1.instance.getValue('val1');
  let num2 = ggb1.instance.getValue('absVal1');
  let num3 = ggb1.instance.getValue('val2');
  let num4 = ggb1.instance.getValue('absVal2');
  text2.updateData({
    text: `$\\huge{|${num}|=${num2}\\text{ and } |${num3}|=${num4}}$`,
  });
}

/*function update2() {
        let num3 = ggb1.instance.getValue("val2");
        let num4 = ggb1.instance.getValue("absVal2");
        text3.updateData({text: `$|${num3}|=${num4}$`});
        text3.updateData({visible: true});
}*/

/*
{"compTotals":{"textbox":3,"geogebra":1},"stage":"Learn","lessonInfo":"6 M3 TB L07 - PA Absolute Value","teacherView":true,"layout":"one col"}
*/
