const { text1, text2, text3, text4, buttonGroup1 } = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    // set initial states
    saveData({ currentVal: 0 });
    text3.updateData({ visibilityBehavior: 'hide' });
    buttonGroup1.updateSingleButton({ outline: true, disabled: true }, 5);
    // create/update a dummy variable to keep track of whether the slide has initialized
    text1.updateData({ init: true });
  }
}

let currentVal = getData('currentVal');

buttonGroup1.on('click:1', () => {
  currentVal = currentVal + 1;
  saveData({ currentVal: currentVal });
  text3.updateData({ visible: true, text: `You clicked: ${buttonGroup1.data.buttons[0].text}` });
  text4.updateData({ text: `Current val: $${currentVal}$` });
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
});

buttonGroup1.on('click:2', () => {
  currentVal = currentVal + 10;
  saveData({ currentVal: currentVal });
  text3.updateData({ visible: true, text: `You clicked: ${buttonGroup1.data.buttons[1].text}` });
  text4.updateData({ text: `Current val: $${currentVal}$` });
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
});

buttonGroup1.on('click:3', () => {
  currentVal = currentVal + 100;
  saveData({ currentVal: currentVal });
  text3.updateData({ text: `You clicked: ${buttonGroup1.data.buttons[2].text}` });
  text4.updateData({ text: `Current val: $${currentVal}$` });
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
});

buttonGroup1.on('click:4', () => {
  currentVal = currentVal + 1000;
  saveData({ currentVal: currentVal });
  text3.updateData({ visible: true, text: `You clicked: ${buttonGroup1.data.buttons[3].text}` });
  text4.updateData({ text: `Current val: $${currentVal}$` });
  buttonGroup1.updateSingleButton({ disabled: false }, 5);
});

buttonGroup1.on('click:5', () => {
  currentVal = 0;
  saveData({ currentVal: currentVal });
  text3.updateData({ visible: true, text: `You clicked: ${buttonGroup1.data.buttons[4].text}` });
  text4.updateData({ text: `Current val: $${currentVal}$` });
  buttonGroup1.updateSingleButton({ disabled: true }, 5);
});

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error('saveData error: Parameters should be an object and a string!');
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
