const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator2,
  text2,
  select1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('state', 2);
    ggb1.instance.setValue('song1Beats', 100);
    ggb1.instance.setValue('song2Beats', 80);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    select1.updateData({ visible: false });
    text2.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setAnimating('time1', false);
  ggb1.instance.setValue('time1', 0);
});

autorun(() => {
  let time = ggb1.innerData['time1'];
  if (time > 2) {
    select1.updateData({ visible: true });
    text2.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"buttongroup":1,"separator":1,"radiogroup":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
