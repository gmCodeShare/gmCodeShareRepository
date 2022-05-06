const {
  ggb1,
  separator1,
  button1,
  feedback1,
  cc_sharewithclass_031a91ebc5da_textbox1,
  cc_sharewithclass_031a91ebc5da_input1,
  cc_sharewithclass_031a91ebc5da_button1,
  cc_sharewithclass_031a91ebc5da_studentanswers1,
} = components;

if (!getData('initialized')) {
  // set initial states
  saveData({ initXML: ggb1.instance.getXML() });
  // save status
  saveData({ initialized: true });
}

button1.on('click', () => {
  ggb1.instance.setXML(getData('initXML'));
  ggb1.instance.evalCommand('ReadText(AAppletStatus)');
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
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Choosing a Measure of Center","teacherView":false,"layout":"two col"}
*/
