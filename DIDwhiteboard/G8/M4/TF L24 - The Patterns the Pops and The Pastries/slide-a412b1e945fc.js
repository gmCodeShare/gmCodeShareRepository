const { text2, ggb1, Separator1, button2, text1, input1, button1, feedback1 } =
  components;

ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set the initial states
    button1.updateData({ align: 'right' });
    ggb1.updateData({ visible: false });
    button2.updateData({ visible: false });
    button2.updateData({ disabled: true });
    // create/update init variable
    ggb1.updateData({ init: true });
  }
}

/*button1.on("click", () => {
  //button1.updateData({disabled: true});
  ggb1.updateData({visible: true});
  button2.updateData({visible: true});
  ggb1.instance.evalLaTeX(`inputLine: ${input1.data.text}`);
  ggb1.instance.evalCommand("RunClickScript(tryIt)");
});*/

button1.on('click', () => {
  //button1.updateData({disabled: true});
  ggb1.instance.evalLaTeX(`dummyObjectForThisCode: ${input1.data.text}`);
  ggb1.instance.setVisible('dummyObjectForThisCode', false);
  if (ggb1.instance.getObjectType('dummyObjectForThisCode') == 'line') {
    ggb1.instance.evalLaTeX(`inputLine: ${input1.data.text}`);
    ggb1.instance.evalCommand('RunClickScript(tryIt)');
    ggb1.updateData({ visible: true });
    button2.updateData({ visible: true });
    button1.updateData({ disabled: true });
    button2.updateData({ disabled: false });
  }
  ggb1.instance.deleteObject('dummyObjectForThisCode');
});

autorun(() => {
  button1.updateData({ disabled: !input1.data.text });
});

button2.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(reset)');
  button1.updateData({ disabled: false });
  button2.updateData({ disabled: true });
});

// auto reset
/*autorun(() => {
  let text = input1.data.text;
  ggb1.instance.evalCommand("RunClickScript(reset)");
});

// auto button
autorun(() => {
  button1.updateData({disabled: ggb1.innerData["time"] != 0 && ggb1.innerData["time"] != 1 });
});*/

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"button":2,"input":1},"stage":"Learn","lessonInfo":"8 M4 T L0NaN - The Patterns, the Pops, and the Pastries","teacherView":false,"layout":"T layout"}
*/
