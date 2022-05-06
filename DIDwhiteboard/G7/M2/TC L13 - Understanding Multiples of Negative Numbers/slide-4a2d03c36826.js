const {
  ggb1,
  feedback,
  cc_submit_90db8dd1d5ec_textbox1,
  cc_submit_90db8dd1d5ec_input1,
  cc_submit_90db8dd1d5ec_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

submitButton1.updateData({ align: 'right' });

let allPenstrokes = ggb1.instance.getAllObjectNames('penstroke');

for (let i = 0; i < allPenstrokes.length; i++) {
  ggb1.instance.deleteObject(allPenstrokes[i]);
}

ggb1.instance.setValue('state4', true);
ggb1.instance.showToolBar(false);

const sketches =
  getFromSlide('slide-10476c759aed', 'ggb1.innerData.doodles', []) || [];

for (let i = 0; i < sketches.length; i++) {
  let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
  ggb1.instance.setFixed(name, false, false);
}

//I tried to disable the screen using a boolean, it didn't work.
//Is there a way to disable/make "not selectable" anything with "stroke" in the name? That would prevent students from being able to edit the graph.

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1},"stage":"Learn","lessonInfo":"7 M2 TC L13 - Understanding Multiples of Negative Numbers","teacherView":false,"layout":"two col"}
*/
