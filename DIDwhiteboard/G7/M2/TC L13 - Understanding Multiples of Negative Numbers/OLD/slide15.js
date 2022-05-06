const { ggb1, cc_submit_90db8dd1d5ec_button1: button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

//const string64 = getFromSlide('slide-6bd82125410e','ggb1.innerData.applet');
//ggb1.instance.setBase64(string64);

button1.updateData({ align: "right" });

let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");

for (let i = 0; i < allPenstrokes.length; i++) {
  ggb1.instance.deleteObject(allPenstrokes[i]);
}

ggb1.instance.setValue("state4", true);
ggb1.instance.showToolBar(false);
//ggb1.instance.setValue("disableScreen", true);

const sketches =
  getFromSlide("slide-10476c759aed", "ggb1.innerData.doodles", []) || [];
// console.log(sketches);

for (let i = 0; i < sketches.length; i++) {
  let name = ggb1.instance.evalCommandGetLabels(sketches[i]);
  ggb1.instance.setFixed(name, false, false);
  //console.log(name);
}

//I tried to disable the screen using a boolean, it didn't work.
//Is there a way to disable/make "not selectable" anything with "stroke" in the name? That would prevent students from being able to edit the graph.
