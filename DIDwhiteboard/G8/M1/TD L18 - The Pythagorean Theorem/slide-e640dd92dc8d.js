const { text1, ggb1, feedback1, text2, ggb2 } = components;

let data = getFromSlide('slide-c3780ec607dc', 'ggb1', false) || false;

if (data.innerData) {
  ggb1.instance.setCoords(
    `DummyPoint`,
    data.innerData['blCornerX'],
    data.innerData['blCornerY']
  );
  ggb1.instance.setCoords(
    `TopDummy`,
    data.innerData['topVertexX'],
    data.innerData['topVertexY']
  );
}

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setErrorDialogsActive(false);
    ggb2.instance.setErrorDialogsActive(false);
    ggb1.instance.setValue('state', 2);

    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

// receive data section:
utils.RTS.on('datachange', 'slide-c3780ec607dc', (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }

  const lastRegister = discardOldResponses(register).reverse(); // reversing so older responses are first

  // probably have an erase & replace method near here, otherwise GGB will keep duplicates of the data you pass

  ggb2.instance.setValue('rightCount', 0);

  // think of this forEach as "for each student's input, do the following"
  lastRegister.forEach(({ data, info }) => {
    const { isSelf } = info;
    const { vecBl, vecTop } = data;
    if (!isSelf) {
      let index = (ggb2.instance.getValue('rightCount') % 6) + 1;
      ggb2.instance.setCoords(
        'C' + index + 'BlCorner',
        ggb2.instance.getXcoord('C' + index + 'BrCorner') + vecBl[0],
        ggb2.instance.getYcoord('C' + index + 'BrCorner') + vecBl[1]
      );
      ggb2.instance.setCoords(
        'C' + index + 'TopVertex',
        ggb2.instance.getXcoord('C' + index + 'BrCorner') + vecTop[0],
        ggb2.instance.getYcoord('C' + index + 'BrCorner') + vecTop[1]
      );
      ggb2.instance.setValue(
        'rightCount',
        ggb2.instance.getValue('rightCount') + 1
      );
    }
  });
});

// use this function as is
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

/*
{"compTotals":{"textbox":3,"geogebra":2},"stage":"Learn","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
