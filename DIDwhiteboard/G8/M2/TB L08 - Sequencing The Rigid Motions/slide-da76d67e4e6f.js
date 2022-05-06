const { ggb1, feedback1, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateData({ visible: false });
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(check)');
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(reset)');
  buttonGroup1.updateData({ visible: false });
});

ggb1.instance.registerClientListener(enablecheck);

function enablecheck(a) {
  if (a[0] == 'addPolygonComplete') {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateData({ visible: true });
    setTimeout(function () {
      ggb1.instance.setMode(0);
    }, 100);
    ggb1.instance.evalCommand('SelectObjects()');
  }
}

autorun(() => {
  if (ggb1.innerData.endq) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1},"stage":"Learn","lessonInfo":"8 M2 TB L08 - Sequencing the Rigid Motions","teacherView":false,"layout":"two col"}
*/
