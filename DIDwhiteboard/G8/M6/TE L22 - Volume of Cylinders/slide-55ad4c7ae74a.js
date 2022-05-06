const {
  ggb1,
  feedback1,
  text1,
  select1,
  cc_sharewithclass_58ce0b20ede7_textbox1: shareText1,
  cc_sharewithclass_58ce0b20ede7_input1: shareInput1,
  cc_sharewithclass_58ce0b20ede7_button1: shareButton1,
  cc_sharewithclass_58ce0b20ede7_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false, disabled: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

//ggb1.instance.evalCommand("SetSpinSpeed(1)");

//Why does this code not work?
//https://greatminds.atlassian.net/wiki/spaces/DP/pages/177242113/Button+Group
/*select1.on('click:1', () => {
  shareText1.updateData({visible: true});
  shareInput1.updateData({visible: true});
  shareButton1.updateData({visible: true});
});*/

/*autorun(() => {
  if (select1.data.selected !== '') {
  shareText1.updateData({visible: true});
  shareInput1.updateData({visible: true});
  shareButton1.updateData({visible: true});
  };
  if(shareInput1.data.text !== "") {
      shareButton1.updateData({disabled: false});
      } else {
      shareButton1.updateData({disabled: true});
  };
});*/

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      //let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      shareInput1.updateData({ text: chosen + ', because ' });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

autorun(() => {
  if (shareInput1.data.text !== '') {
    shareButton1.updateData({ disabled: false });
  } else {
    shareButton1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
