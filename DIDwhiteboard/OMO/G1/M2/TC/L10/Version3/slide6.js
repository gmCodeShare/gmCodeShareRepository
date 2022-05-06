const { ggb1, buttonGroup1 } = components;

ggb1.instance.registerClientListener(client);
ggb1.instance.registerObjectUpdateListener('jiggleTime', jiggleTimeLister);
ggb1.instance.registerObjectUpdateListener('jiggleBlank1Time', jiggleBlank1TimeLister);
ggb1.instance.registerObjectUpdateListener('jiggleBlank2Time', jiggleBlank2TimeLister);
ggb1.instance.registerObjectUpdateListener('jiggleBlank3Time', jiggleBlank3TimeLister);

let arcList = ['arcSmall1', 'arcSmall2', 'arcSmall3', 'arcSmall4', 'arcSmall5', 'arcSmall6', 'arcSmall7', 'arcSmall8', 'arcSmall9', 'arcSmall10', 'arcSmall11', 'arcSmall12', 'arcSmall13', 'arcSmall14'];

let blankNumList1 = ['blank1num1', 'blank1num2', 'blank1num3', 'blank1num4', 'blank1num5', 'blank1num6', 'blank1num7', 'blank1num8', 'blank1num9', 'blank1num10', 'blank1num11', 'blank1num12', 'blank1num13', 'blank1num14', 'blank1num15'];

let blankNumList2 = ['blank2num1', 'blank2num2', 'blank2num3', 'blank2num4', 'blank2num5', 'blank2num6', 'blank2num7', 'blank2num8', 'blank2num9', 'blank2num10', 'blank2num11', 'blank2num12', 'blank2num13', 'blank2num14', 'blank2num15'];

let blankNumList3 = ['blank3num1', 'blank3num2', 'blank3num3', 'blank3num4', 'blank3num5', 'blank3num6', 'blank3num7', 'blank3num8', 'blank3num9', 'blank3num10', 'blank3num11', 'blank3num12', 'blank3num13', 'blank3num14', 'blank3num15'];

let correctNum1 = 7;
let correctNum2 = 3;
let correctNum3 = 10;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    saveData({
      ggbXML: ggb1.instance.getXML(),
      count: 1,
      firstNum: -1,
      lastClickedGreaterNum: -1,
    });
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 2);
    ggb1.instance.setVisible(blankNumList1[correctNum1 - 1], true);
    ggb1.instance.setVisible('blank2', true);
    ggb1.instance.setVisible(blankNumList3[correctNum3 - 1], true);
    ggb1.instance.setVisible('plusTextShown', true);
    ggb1.instance.setVisible('equalTextShown', true);

    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

//submit
buttonGroup1.on('click:1', () => {
  let lastClickedGreaterNum = getData('lastClickedGreaterNum');
  console.log(lastClickedGreaterNum);
  switch (lastClickedGreaterNum) {
    case correctNum3:
      //submitted correct equation
      buttonGroup1.updateSingleButton({ disabled: true, text: 'Submitted' }, 1);
      buttonGroup1.updateSingleButton({ disabled: false }, 2);
      controls.next();
      break;
    default:
      //submits incorrect equation
      ggb1.instance.stopAnimation();
      ggb1.instance.setValue('jiggleTime', 0);
      ggb1.instance.setAnimating('jiggleTime', true);
      ggb1.instance.setValue('jiggleBlank2Time', 0);
      ggb1.instance.setAnimating('jiggleBlank2Time', true);
      ggb1.instance.setValue('jiggleBlank3Time', 0);
      ggb1.instance.setAnimating('jiggleBlank3Time', true);
      ggb1.instance.startAnimation();
      break;
  }
});

//reset
buttonGroup1.on('click:2', () => {
  for (let i = 0, L = blankNumList2.length; i < L; i++) {
    ggb1.instance.setVisible(blankNumList2[i], false);
  }
  for (let i = 0, L = arcList.length; i < L; i++) {
    ggb1.instance.setVisible(arcList[i], false);
  }
  buttonGroup1.updateSingleButton({ disabled: true, text: 'Submit' }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.deleteObject('circle1');
  saveData({ count: 1 });
});

//governs number path operations
function client(a) {
  switch (a[0]) {
    case 'mouseDown':
      let num = ggb1.instance.getValue('followLocation');
      let count = getData('count');
      let firstNum = getData('firstNum');
      switch (num) {
        case -1:
          console.log('start num switch case -1');
          break;
        default:
          console.log('default num switch');
          switch (count) {
            case 1:
              console.log('start count switch case 1');
              switch (num) {
                case correctNum1:
                  console.log('start num switch case correctNum1');
                  ggb1.instance.evalCommand('circle1=Circle((' + num + '-0.5,0.5),0.5)');
                  ggb1.instance.setFixed('circle1', true, false);
                  saveData({ count: count + 1, firstNum: num, lastClickedGreaterNum: num });
                  break;
                default:
                  //shake correctNum1 in equation
                  console.log('default for switch num');
                  ggb1.instance.stopAnimation();
                  ggb1.instance.setValue('jiggleBlank1Time', 0);
                  ggb1.instance.setAnimating('jiggleBlank1Time', true);
                  ggb1.instance.startAnimation();
                  break;
              }
              break;
            default:
              console.log('default for switch count');
              let comparison = firstNum - num < 0 ? 1 : firstNum - num > 0 ? -1 : 0;
              switch (comparison) {
                case 1:
                  console.log('start comparison switch case 1');
                  //show addened
                  let addend = num - firstNum;
                  for (let i = 0, L = blankNumList2.length; i < L; i++) {
                    ggb1.instance.setVisible(blankNumList2[i], false);
                  }
                  ggb1.instance.setVisible(blankNumList2[addend - 1], true);
                  //show arcs
                  for (let i = 0, L = arcList.length; i < L; i++) {
                    ggb1.instance.setVisible(arcList[i], false);
                  }
                  for (let i = 0, L = num - firstNum; i < L; i++) {
                    ggb1.instance.setVisible(arcList[firstNum + i - 1], true);
                  }
                  saveData({ lastClickedGreaterNum: num });
                  buttonGroup1.updateSingleButton({ disabled: false, text: 'Submit' }, 1);
                  break;
                case -1:
                  console.log('start comparison switch case -1');
                  break;
                default:
                  console.log('default for switch comparison');
                  break;
              }
          }
          buttonGroup1.updateSingleButton({ disabled: false }, 2);
      }
      break;
  }
}

//turn off animating when time ends
function jiggleTimeLister() {
  if (ggb1.instance.getValue('jiggleTime') == 1) {
    ggb1.instance.setAnimating('jiggleTime', false);
  }
}

function jiggleBlank1TimeLister() {
  if (ggb1.instance.getValue('jiggleBlank1Time') == 1) {
    ggb1.instance.setAnimating('jiggleBlank1Time', false);
  }
}

function jiggleBlank2TimeLister() {
  if (ggb1.instance.getValue('jiggleBlank2Time') == 1) {
    ggb1.instance.setAnimating('jiggleBlank2Time', false);
    for (let i = 0, L = blankNumList2.length; i < L; i++) {
      ggb1.instance.setVisible(blankNumList2[i], false);
    }
    for (let i = 0, L = arcList.length; i < L; i++) {
      ggb1.instance.setVisible(arcList[i], false);
    }
  }
}

function jiggleBlank3TimeLister() {
  if (ggb1.instance.getValue('jiggleBlank3Time') == 1) {
    ggb1.instance.setAnimating('jiggleBlank3Time', false);
  }
}

/////////////////////  SAVE AND GET DATA  /////////////////////
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
  components[tarComp].storage = {
    ...components[tarComp].storage,
    ...dataObj,
  };
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
