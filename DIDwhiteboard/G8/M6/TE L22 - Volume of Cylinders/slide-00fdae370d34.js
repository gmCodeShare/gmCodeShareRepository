const {
  ggb1,
  separator2,
  button1,
  feedback1,
  text1,
  buttonGroup1,
  separator3,
  cc_sharewithclass_35ed6db27104_textbox1: shareText1,
  cc_sharewithclass_35ed6db27104_input1: shareInput1,
  cc_sharewithclass_35ed6db27104_button1: shareButton1,
  cc_sharewithclass_35ed6db27104_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false, align: 'right' });
    button1.updateData({ disabled: true });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*button1.on("click", () => {
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount",clickCount+1);
  if (clickCount == 0) {
    ggb1.instance.setValue("time1", 0);
    ggb1.instance.setAnimating("time1", true);
    ggb1.instance.startAnimation();
    //button1.updateData({color: "secondary"});
    button1.updateData({text:"Let's see the cylinder!"});
  }
  if(clickCount == 1) {
    ggb1.instance.setValue("time2", 0);
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
    button1.updateData({disabled:true});
    shareText1.updateData({visible:true});
    shareButton1.updateData({visible:true});
    shareInput1.updateData({visible:true});
  }
});*/

ggb1.instance.registerObjectUpdateListener('time1', enableButton);

function enableButton() {
  if (ggb1.instance.getValue('time1') > 0) {
    button1.updateData({ disabled: false });
  } else {
    button1.updateData({ disabled: true });
  }
  if (ggb1.instance.getValue('time1') == 1) {
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
}

/*autorun(() => {
  button1.updateData({disabled: !(ggb1.innerData["timeSum"] == 0 || ggb1.innerData["timeSum"] == 1)});
});*/

button1.on('click', () => {
  ggb1.updateInnerData({ time1: 0, time2: 0, clickCount: 0 });
  //button1.updateData({text:"Let's see the base!", disabled: false});
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setAnimating('time1', true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue('time2', 0);
  ggb1.instance.setAnimating('time2', true);
  ggb1.instance.startAnimation();
  shareText1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":1,"textbox":2,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
