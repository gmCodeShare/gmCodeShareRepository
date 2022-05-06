const {
  ggb1,
  feedback1,
  text1,
  select1,
  separator2,
  cc_sharewithclass_27a64de001ed_textbox1,
  cc_sharewithclass_27a64de001ed_input1,
  cc_sharewithclass_27a64de001ed_button1,
  cc_sharewithclass_27a64de001ed_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_27a64de001ed_button1.updateData({
  align: 'right',
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('picSet', 2);
    ggb1.instance.setValue('picWidth1', 5);
    ggb1.instance.setValue('scaleFactor', 0.5);
    ggb1.instance.setValue('clickCount', -1);
    ggb1.instance.setValue('time', 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == '') {
    components.cc_sharewithclass_27a64de001ed_textbox1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_input1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_button1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_studentanswers1.updateData({
      visible: false,
    });
  } else {
    components.cc_sharewithclass_27a64de001ed_textbox1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_input1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_button1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_studentanswers1.updateData({
      visible: true,
    });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M1 TC L15 - Scale Drawings","teacherView":false,"layout":"two col"}
*/
