const { ggb1, separator1, buttongroup1, feedback1, text1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

if (!getData('initialized')) {
  // set initial states
  saveData({ initXML: ggb1.instance.getXML() });
  // save status
  saveData({ initialized: true });
}

// ggb1.instance.registerStoreUndoListener(() => {
//   ggb1.updateData({ save64: ggb1.instance.getBase64() });
// });

/*buttongroup1.on('click:1', () => {
ggb1.instance.evalCommand("RunClickScript(markIt)");
buttongroup1.updateSingleButton({ disabled: false }, 2);
});*/

buttongroup1.on('click:1', () => {
  ggb1.instance.setXML(getData('initXML'));
});

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error(
      'saveData error: Parameters should be an object and a string!'
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":2,"table":1},"stage":"Learn","lessonInfo":"8 M2 TC L13 - Angle Sum of a Triangle","teacherView":false,"layout":"two col"}
*/
