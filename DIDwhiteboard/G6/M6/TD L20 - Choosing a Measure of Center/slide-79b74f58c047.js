const {
  ggb1,
  separator2,
  button1,
  feedback1,
  text1,
  cc_sharewithclass_d91cbef44b28_textbox1: shareText1,
  cc_sharewithclass_d91cbef44b28_input1: shareInput1,
  cc_sharewithclass_d91cbef44b28_button1: shareButton1,
  cc_sharewithclass_d91cbef44b28_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false, align: 'right' });
    shareAnswers1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('show', reveal);

function reveal() {
  if (ggb1.instance.getValue('show')) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
  }
}

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
{"compTotals":{"geogebra":1,"separator":1,"button":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M6 TD L20 - Choosing a Measure of Center","teacherView":false,"layout":"two col"}
*/
