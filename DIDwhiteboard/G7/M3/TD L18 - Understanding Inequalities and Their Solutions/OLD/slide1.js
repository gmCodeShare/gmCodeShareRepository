const { ggb1, text1, text2, buttonGroup1, checkbox1 } = components;

ggb1.instance.setErrorDialogsActive(false);

//hide feedback box
checkbox1.updateData({ visible: false, checked: false });

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.updateData({ balloonNum: 0, pumpNumbers: [] });
    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

// const pumpNumbers = [];

//click through to pump button
buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

//click through to new balloon button
buttonGroup1.on("click:2", () => {
  let pumpNumbers = [...ggb1.data.pumpNumbers];
  pumpNumbers.push(ggb1.instance.getValue("pumpCount"));
  ggb1.instance.evalCommand("RunClickScript(button2)");
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.updateData({ balloonNum: ggb1.data.balloonNum + 1 });
  ggb1.instance.setValue("balloonNum", ggb1.data.balloonNum);
  ggb1.updateData({ pumpNumbers });
});

//align text above GGB
text1.updateData({ align: "center" });

//update text above GGB
let now = controls.current;
autorun(() => {
  if (controls.current != now) {
    let pumpNumbers = [...ggb1.data.pumpNumbers];
    pumpNumbers.push(ggb1.instance.getValue("pumpCount"));
    ggb1.updateData({ pumpNumbers });
    utils.RTS.sendData("slide-a60c06cd5664_num1", {
      pumpNumbers,
    });
  }
});

/*autorun(()=>{
if(checkbox1.data.checked==true){
    pumpNumbers.push(ggb1.instance.getValue("pumpCount"));
    console.log(pumpNumbers);
    utils.RTS.sendData('slide-a60c06cd5664_num1', {pumpNumbers: pumpNumbers});
      }
 });
      */
autorun(() => {
  let num = ggb1.innerData["pumpCount"];
  let timer = ggb1.innerData["timeStep"];
  if (timer == 1 && num < 5) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
  text1.updateData({ text: `Number of pumps: $${num}$` });
});
