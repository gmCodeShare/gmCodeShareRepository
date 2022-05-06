const { ggb1, buttonGroup1 } = components;

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  playAnimation();
});

let grayArray = ['F', "a'''", 'rotBC', 'rotCA'];

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerObjectUpdateListener('time', showStuff);

function showStuff() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setLineStyle('anim8Seg', 0);
    for (let i = 0, L = grayArray.length; i < L; i++) {
      ggb1.instance.setColor(grayArray[i], 128, 128, 128);
    }
  } else {
    ggb1.instance.setLineStyle('anim8Seg', 1);
    for (let i = 0, L = grayArray.length; i < L; i++) {
      ggb1.instance.setColor(grayArray[i], 0, 0, 0);
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
});
