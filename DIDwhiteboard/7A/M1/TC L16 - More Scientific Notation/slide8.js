const { ggb1, text1, fib1, buttonGroup1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    buttonGroup1.updateSingleButton(
      {
        align: 'right',
        disabled: 'true',
      },
      1
    );
    ggb1.instance.setVisible('u', false);
    ggb1.instance.setVisible('text1', false);
    // buttonGroup2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

const id1 = 'slide-8bb437026246';

const id1PrevFib2 = getPrevFib(id1, 'fib2');

text1.updateData({
  text: `You said you were able to pump $${
    id1PrevFib2.data.isComplete && isNaN(id1PrevFib2.data.inputArray[0])
      ? `$\\color{A0A0A0}\\text{\[enter a number on slide ${id1PrevFib2.data.slideNum}\]}$`
      : id1PrevFib2.data.inputArray[0]
  }$ cubic meters of air in $1$ minute.\n\nHow many cubic kilometers of air is that in $1$ minute?`,
});

fib1.on('change', ({ values }) => {
  console.log('typed in fib1');
  buttonGroup1.updateSingleButton(
    {
      text: 'Submit',
      disabled: !values.every(({ text }) => !!text),
    },
    1
  );
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton(
    {
      text: 'Submitted',
      disabled: true,
    },
    1
  );
});

function getPrevFib(slideID, compName = 'fib1') {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == 'undefined' ||
      !controls.slidesNavigationData?.length
    ) {
      return 'missing slide!';
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defFib = {
    data: {
      values: [],
    },
  };
  // get previous data
  let prevFib = getFromSlide(slideID, compName, defFib) || defFib;
  // fill in other useful data
  prevFib.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevFib.data.hasData = prevFib.data.values.some((value) => value.text != '');
  prevFib.data.isComplete = prevFib.data.values.every(
    (value) => value.text != ''
  );
  prevFib.data.slideNum = slideNum;
  // set text values
  prevFib.data.inputArray = [];
  for (let i = 0, L = prevFib.data.values.length; i < L; i++) {
    prevFib.data.inputArray.push(
      prevFib.data.values[i].text != ''
        ? prevFib.data.values[i].text
        : prevFib.data.goBackString
    );
  }
  prevFib.data.flagText = prevFib.data.hasData ? '' : prevFib.data.goBackString;
  return { ...prevFib };
}
