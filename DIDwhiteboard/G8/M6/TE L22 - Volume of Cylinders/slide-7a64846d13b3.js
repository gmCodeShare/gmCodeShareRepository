const {
  ggb1,
  feedback1,
  ggb2,
  text1,
  buttonGroup1,
  separator1,
  text2,
  select1,
  cc_sharewithclass_5850789f996a_textbox1: shareText1,
  cc_sharewithclass_5850789f996a_input1: shareInput1,
  cc_sharewithclass_5850789f996a_button1: shareButton1,
  cc_sharewithclass_5850789f996a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let n = ggb2.instance.getValue('n');
let studentInput = shareInput1.data.text;

ggb2.instance.registerObjectUpdateListener('n', update);

onInit();
function onInit() {
  if (!select1.data.init) {
    // set initial states
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    text2.updateData({ visible: false });
    select1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    select1.updateData({ init: true });
  }
}

function update() {
  ggb1.instance.setValue('n', ggb2.instance.getValue('n'));
  let num = ggb1.instance.getValue('n');
  //console.log(num);
  text1.updateData({ text: `Number of Smaller Prisms: $${num}$` });
}

/*button1.on("click", () => {
  let clickCount = ggb1.instance.getValue("clickCount");
  ggb1.instance.setValue("clickCount",clickCount+1);
  let toggle = ggb1.instance.getValue("toggle");
  text2.updateData({visible: true});
  select1.updateData({visible: true});
if(toggle == 0) {
  button1.updateData({ text: "Reset it!"});
  //button1.updateData({color: "secondary"});
  ggb1.updateInnerData({ time: 0 });
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  ggb2.updateData({disabled: true});
  clickCount ++;
  //console.log("clickCount = " + clickCount);
  let toggle = clickCount % 2;
  //console.log("toggle = " + toggle);
  } 
if(toggle == 1) {
  button1.updateData({text: "Lean it!"});
  //button1.updateData({color: "primary"});
  ggb1.updateInnerData({ time: 0 });
  ggb1.instance.setAnimating("time", false);
  ggb2.updateData({disabled: false});
  clickCount ++;
  //console.log("second clickCount = " + clickCount);
  let toggle = clickCount % 2;
  //console.log("second toggle = " + toggle);
  }
});*/

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  let toggle = ggb1.instance.getValue('toggle');
  text2.updateData({ visible: true });
  select1.updateData({ visible: true });
  if (toggle == 0) {
    ggb1.updateInnerData({ time: 0 });
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    ggb2.updateData({ disabled: true });
    clickCount++;
    let toggle = clickCount % 2;
  }
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  let clickCount = ggb1.instance.getValue('clickCount');
  ggb1.instance.setValue('clickCount', clickCount + 1);
  let toggle = ggb1.instance.getValue('toggle');
  text2.updateData({ visible: true });
  select1.updateData({ visible: true });
  if (toggle == 1) {
    ggb1.updateInnerData({ time: 0 });
    ggb1.instance.setAnimating('time', false);
    ggb2.updateData({ disabled: false });
    clickCount++;
    let toggle = clickCount % 2;
  }
});

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      shareInput1.updateData({ text: sentStart + ', because ' });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*autorun(() => {
  if (select1.data.selected) {
  shareText1.updateData({visible:true});
  shareInput1.updateData({visible:true});
  shareButton1.updateData({visible:true});
  }
  if (select1.data.selected == 0) {
  shareInput1.updateData({text:"Yes, because "});
  }
  if (select1.data.selected == 1) {
  shareInput1.updateData({text:"No, because "});
  }
});

const blankBox = "";
const selectNo = "No, because ";
const selectYes = "Yes, because "; */

/*
{"compTotals":{"geogebra":2,"textbox":3,"buttongroup":1,"separator":1,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M6 TE L0NaN - Volume of Cylinders","teacherView":false,"layout":"two col"}
*/
