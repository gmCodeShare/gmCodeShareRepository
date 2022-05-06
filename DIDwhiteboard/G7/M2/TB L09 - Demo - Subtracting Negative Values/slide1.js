const { ggb1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('time', updateText);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 2);
    ggb1.instance.setCoords('QuestionMarkPoint', 6.7, 2.5);
    text1.updateData({ text: `$7-4=3$` });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  let clickCounterPlus1 = ggb1.instance.getValue('clickCounter') + 1;
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('clickCounter', clickCounterPlus1);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  if (clickCounterPlus1 == 9) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('time', 1);
  ggb1.instance.setValue('clickCounter', 0);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  text1.updateData({ text: `$7-4=3$` });
});

function updateText() {
  let clickCount = ggb1.instance.getValue('clickCounter');
  let time = ggb1.instance.getValue('time');
  if (time == 1) {
    switch (clickCount) {
      case 0:
        text1.updateData({ text: `$7-4=3$` });
        break;
      case 1:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$` });
        break;
      case 2:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$` });
        break;
      case 3:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$` });
        break;
      case 4:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$\n\n$7-0=7$` });
        break;
      case 5:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$\n\n$7-0=7$\n\n$\\color{DA291C}7-(?)=?$` });
        break;
      case 6:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$\n\n$7-0=7$\n\n$7-(-1)=8$` });
        break;
      case 7:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$\n\n$7-0=7$\n\n$7-(-1)=8$\n\n$7-(-2)=9$` });
        break;
      case 8:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$\n\n$7-0=7$\n\n$7-(-1)=8$\n\n$7-(-2)=9$\n\n$7-(-3)=10$` });
        break;
      case 9:
        text1.updateData({ text: `$7-4=3$\n\n$7-3=4$\n\n$7-2=5$\n\n$7-1=6$\n\n$7-0=7$\n\n$7-(-1)=8$\n\n$7-(-2)=9$\n\n$7-(-3)=10$\n\n$7-(-4)=11$` });
        break;
      default:
        console.log('error in switch statment');
    }
  }
}
