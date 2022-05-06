const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  playAnimation();
});

let timeGrayArray = ['F', "a'''", 'rotBC', 'rotCA'];
let time2GrayArray = [
  'D',
  "c'''",
  'rotAB',
  'rotCA',
  'anim8AngleR',
  'anim8AngleRBottom',
];
let time2BlackArray = ["a'''", 'rotBC', 'F'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', showStuff);
ggb1.instance.registerObjectUpdateListener('time2', changeColors);

function showStuff() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setLineStyle('anim8Seg', 0);
    for (let i = 0, L = timeGrayArray.length; i < L; i++) {
      ggb1.instance.setColor(timeGrayArray[i], 128, 128, 128);
    }
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}

function changeColors() {
  if (ggb1.instance.getValue('time2') == 1) {
    for (let i = 0, L = time2GrayArray.length; i < L; i++) {
      ggb1.instance.setColor(time2GrayArray[i], 128, 128, 128);
    }
    for (let i = 0, L = time2BlackArray.length; i < L; i++) {
      ggb1.instance.setColor(time2BlackArray[i], 0, 0, 0);
    }
  }
}

function playAnimation() {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  playAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time2', false);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setLineStyle('anim8Seg', 1);
  for (let i = 0, L = timeGrayArray.length; i < L; i++) {
    ggb1.instance.setColor(timeGrayArray[i], 0, 0, 0);
  }
  for (let i = 0, L = time2GrayArray.length; i < L; i++) {
    ggb1.instance.setColor(time2GrayArray[i], 0, 0, 0);
  }
  ggb1.instance.setColor('anim8AngleR', 218, 41, 28);
  ggb1.instance.setColor('anim8AngleRBottom', 218, 41, 28);
});
