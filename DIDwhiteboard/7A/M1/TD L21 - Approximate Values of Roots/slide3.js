const { ggb1, ggb2, cc_submit_3a54687248a4_textbox1: submitText1, cc_submit_3a54687248a4_input1: submitInput1, cc_submit_3a54687248a4_button1: submitButton1, cc_sharewithclass_95f8eb7231ed_textbox1: shareText1, cc_sharewithclass_95f8eb7231ed_input1: shareInput1, cc_sharewithclass_95f8eb7231ed_button1: shareButton1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let id1 = 'slide-38970a3bd72b';

let hypotSquared = 8;
let roundingPlace = 5;
let studentPointColor = [130, 63, 152];

slide.on('firstload', () => {
  saveData({ initialPointList: ggb2.instance.getAllObjectNames('point') }, 'ggb2');
  ggb1.instance.setValue('timeScreenAdjust', 1);
  ggb1.instance.setFilling('squareA', 0);
  ggb1.instance.setFilling('squareB', 0);
  ggb1.instance.setVisible('sideALabel', false);
  ggb1.instance.setVisible('sideBLabel', false);
  ggb1.instance.setLineThickness('squareA', 0);
  ggb1.instance.setLineThickness('squareB', 0);
  ggb1.instance.setTextValue('sideCLabelTextHolder', `\\sqrt{${hypotSquared}}`);
  ggb1.instance.setVisible('sideCLabelShown', true);
  ggb2.instance.setVisible('DragLeft', false);
  ggb2.instance.setVisible('DragRight', false);
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

utils.RTS.on('datachange', id1, (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  // probably have an erase & replace method near here, otherwise GGB will keep duplicates of the data you pass
  let pointsToDelete = ggb2.instance.getAllObjectNames('point').filter((el) => !getData('initialPointList', 'ggb2').includes(el));
  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { points } = data; // destructuring assignment, like for components
    // allows us to refer to the passed data directly - thePoints instead of data.thePoints

    // your code here!
    // in my example, a for loop was useful here

    let newPoint = ggb2.instance.evalCommandGetLabels(`(${points[0]},${points[1]})`);
    ggb2.instance.setLabelVisible(newPoint, false);
    ggb2.instance.setFixed(newPoint, false, false);
    ggb2.instance.setColor(newPoint, studentPointColor[0], studentPointColor[1], studentPointColor[2]);
  });
  for (let i = 0, L = pointsToDelete.length; i < L; i++) {
    ggb2.instance.deleteObject(pointsToDelete[i]);
  }
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared
      return !deviceHasPreviousAnswer;
    });
}

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
