const { ggb1, button1 } = components;

if (!getData('initialized')) {
  saveData({ initXML: ggb1.instance.getXML() });
  saveData({ initialized: true });
}

let squares = [
  'q11',
  'q12',
  'q13',
  'q14',
  'q21',
  'q22',
  'q23',
  'q24',
  'q31',
  'q32',
  'q33',
  'q34',
  'q41',
  'q42',
  'q43',
  'q44',
];

let focusIndicators = [
  'focusQ11',
  'focusQ12',
  'focusQ13',
  'focusQ14',
  'focusQ21',
  'focusQ22',
  'focusQ23',
  'focusQ24',
  'focusQ31',
  'focusQ32',
  'focusQ33',
  'focusQ34',
  'focusQ41',
  'focusQ42',
  'focusQ43',
  'focusQ44',
];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerClickListener(cycle);

ggb1.instance.registerClientListener(displayFocus);

function cycle(a) {
  switch (ggb1.instance.getColor(a)) {
    case '#FFFFFF':
      ggb1.instance.setColor(a, 130, 63, 152);
      ggb1.instance.setValue(
        a.concat('Val'),
        ggb1.instance.getValue('purpleVal')
      );
      break;
    case '#823F98':
      ggb1.instance.setColor(a, 0, 129, 57);
      ggb1.instance.setValue(
        a.concat('Val'),
        ggb1.instance.getValue('greenVal')
      );
      break;
    case '#008139':
      ggb1.instance.setColor(a, 255, 255, 255);
      ggb1.instance.setValue(
        a.concat('Val'),
        ggb1.instance.getValue('whiteVal')
      );
  }
}

function displayFocus(a) {
  if (a.type == 'select') {
    for (let i = 0, L = squares.length; i < L; i++) {
      if (a.target == squares[i]) {
        ggb1.instance.setVisible(focusIndicators[i], true);
      } else {
        ggb1.instance.setVisible(focusIndicators[i], false);
      }
    }
  }
  if (a.type == 'deselect') {
    for (let i = 0, L = focusIndicators.length; i < L; i++) {
      ggb1.instance.setVisible(focusIndicators[i], false);
    }
  }
}

button1.on('click', () => {
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
