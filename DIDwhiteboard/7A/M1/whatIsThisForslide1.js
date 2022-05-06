const { ggb1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('B', updateText);
ggb1.instance.registerObjectUpdateListener('D', updateText);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.evalCommand('showSubtraction=false');
    ggb1.instance.evalCommand('showAddition=false');
    buttonGroup1.updateSingleButton({ disabled: true, outline: true }, 3);
    text1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('showSubtraction', true);
  updateText();
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  text1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('showAddition', true);
  updateText();
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  text1.updateData({ visible: true });
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.setValue('showAddition', false);
  ggb1.instance.setValue('showSubtraction', false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  text1.updateData({ visible: false });
});

function updateText() {
  let addend2 = ggb1.instance.getValue('addend2');
  text1.updateData({ text: `$${ggb1.instance.getXcoord('B')}-${!ggb1.instance.getValue('showSubtraction') ? `\\large \\text{⬚}` : addend2 >= 0 ? `(${-1 * addend2})` : `${-1 * addend2}`}\\normalsize=${ggb1.instance.getXcoord('D')}$\n\n$${ggb1.instance.getXcoord('B')}+${!ggb1.instance.getValue('showAddition') ? `\\large \\text{⬚}` : addend2 >= 0 ? addend2 : `(${addend2})`}\\normalsize=${ggb1.instance.getXcoord('D')}$` });
}
