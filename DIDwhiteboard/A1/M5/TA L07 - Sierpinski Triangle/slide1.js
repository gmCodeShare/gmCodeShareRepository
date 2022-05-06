const { ggb1, ggb2, ggb3, buttonGroup1, button1, select1 } = components;

let ggbComps = [ggb1, ggb2, ggb3];

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb2.updateData({ visible: false });
    ggb3.updateData({ visible: false });
    button1.updateData({ outline: true });
    select1.selectOption('0');
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

select1.on('change', (selected) => {
  console.log(select1.data.selected);
  for (let i = 0, L = ggbComps.length; i < L; i++) {
    ggbComps[i].updateData({ visible: false });
  }
  reset();
  ggbComps[parseInt(select1.data.selected)].updateData({ visible: true });
});

buttonGroup1.on('click:1', () => {
  ggbComps[parseInt(select1.data.selected)].instance.stopAnimation();
  ggbComps[parseInt(select1.data.selected)].instance.setValue('time1', 0);
  ggbComps[parseInt(select1.data.selected)].instance.setValue('time2', 0);
  ggbComps[parseInt(select1.data.selected)].instance.setValue(
    'show',
    ggbComps[parseInt(select1.data.selected)].instance.getValue('show') - 1
  );
});

buttonGroup1.on('click:2', () => {
  ggbComps[parseInt(select1.data.selected)].instance.setValue(
    'show',
    ggbComps[parseInt(select1.data.selected)].instance.getValue('show') + 1
  );
});

buttonGroup1.on('click:3', () => {
  ggbComps[parseInt(select1.data.selected)].instance.stopAnimation();
  ggbComps[parseInt(select1.data.selected)].instance.setValue('time1', 0);
  ggbComps[parseInt(select1.data.selected)].instance.setValue('time2', 0);
  ggbComps[parseInt(select1.data.selected)].instance.setAnimating(
    'time1',
    true
  );
  ggbComps[parseInt(select1.data.selected)].instance.setAnimating(
    'time2',
    false
  );
  ggbComps[parseInt(select1.data.selected)].instance.startAnimation();
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

button1.on('click', () => {
  reset();
});

function reset() {
  for (let i = 0, L = ggbComps.length; i < L; i++) {
    ggbComps[i].instance.stopAnimation();
    ggbComps[i].instance.setValue('time1', 0);
    ggbComps[i].instance.setValue('time2', 0);
    ggbComps[i].instance.setValue('show', 1);
  }
}

autorun(() => {
  const show = ggbComps[parseInt(select1.data.selected)].innerData['show'];
  buttonGroup1.updateSingleButton({ disabled: show <= 1 }, 1);
  buttonGroup1.updateSingleButton(
    {
      disabled:
        show >=
        ggbComps[parseInt(select1.data.selected)].instance.getValue('max'),
    },
    2
  );
  buttonGroup1.updateSingleButton(
    {
      disabled:
        show !=
        ggbComps[parseInt(select1.data.selected)].instance.getValue('max'),
    },
    3
  );
});

autorun(() => {
  let time1 = ggbComps[parseInt(select1.data.selected)].innerData['time1'];
  if (time1 == 1) {
    ggbComps[parseInt(select1.data.selected)].instance.stopAnimation();
    ggbComps[parseInt(select1.data.selected)].instance.setAnimating(
      'time1',
      false
    );
    ggbComps[parseInt(select1.data.selected)].instance.setAnimating(
      'time2',
      true
    );
    ggbComps[parseInt(select1.data.selected)].instance.startAnimation();
  }
});
