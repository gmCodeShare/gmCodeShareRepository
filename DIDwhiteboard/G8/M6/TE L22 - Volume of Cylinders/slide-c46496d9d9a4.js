const {
  ggb1,
  Separator1,
  button1,
  feedback1,
  text1,
  ggb2,
  text2,
  buttonGroup1,
  separator2,
  cc_sharewithclass_ccdb117fee37_textbox1: shareText1,
  cc_sharewithclass_ccdb117fee37_input1: shareInput1,
  cc_sharewithclass_ccdb117fee37_button1: shareButton1,
  cc_sharewithclass_ccdb117fee37_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let n = ggb2.instance.getValue('n');

ggb2.instance.registerObjectUpdateListener('n', update);
button1.updateData({ visible: false });

function update() {
  ggb1.instance.setValue('n', ggb2.instance.getValue('n'));
  let num = ggb1.instance.getValue('n');
  // console.log(num);
  text2.updateData({ text: `Number of Smaller Cylinders: $${num}$` });
}

/*button1.on("click", () => {
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount",clickCount+1);
  let toggle = ggb1.instance.getValue("toggle");
if(toggle == 0) {
  button1.updateData({ text: "Reset it!"});
  //button1.updateData({color: "secondary"});
  ggb1.updateInnerData({ time: 0 });
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb2.updateData({disabled: true});
  clickCount ++;
  console.log("clickCount = " + clickCount);
  let toggle = clickCount % 2;
  console.log("toggle = " + toggle);
  } 
if(toggle == 1) {
  button1.updateData({text: "Lean it!"});
  button1.updateData({color: "primary"});
  ggb1.updateInnerData({ time: 0 });
  ggb1.instance.setAnimating("time", false);
  ggb2.updateData({disabled: false});
  clickCount ++;
  console.log("second clickCount = " + clickCount);
  let toggle = clickCount % 2;
  console.log("second toggle = " + toggle);
  }
});*/

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  let toggle = ggb1.instance.getValue('toggle');
  if (toggle == 0) {
    //button1.updateData({ text: "Reset it!"});
    //button1.updateData({color: "secondary"});
    ggb1.updateInnerData({ time: 0 });
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    ggb2.updateData({ disabled: true });
    clickCount++;
    // console.log('clickCount = ' + clickCount);
    let toggle = clickCount % 2;
    // console.log('toggle = ' + toggle);
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  let toggle = ggb1.instance.getValue('toggle');
  if (toggle == 1) {
    //button1.updateData({text: "Lean it!"});
    //button1.updateData({color: "primary"});
    ggb1.updateInnerData({ time: 0 });
    ggb1.instance.setAnimating('time', false);
    ggb2.updateData({ disabled: false });
    clickCount++;
    // console.log('second clickCount = ' + clickCount);
    let toggle = clickCount % 2;
    // console.log('second toggle = ' + toggle);
  }
});

autorun(() => {
  // console.log(ggb1.innerData.time);
  let clickCount = ggb1.instance.getValue('clickCount');
  if ((ggb1.innerData.time >= 1 && clickCount >= 2) || clickCount >= 3) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  } else {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
  }
  if (shareInput1.data.text !== '') {
    shareButton1.updateData({ disabled: false });
  } else {
    shareButton1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"geogebra":2,"separator":2,"button":1,"textbox":3,"buttongroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
