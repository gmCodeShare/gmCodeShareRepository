const { 
  ggb1,
  buttonGroup1,
  cc_submit_c7c9709cb2f1_button1:submitButton1, 
  cc_sharewithclass_12758fe5db21_textbox1:shareText1,
  cc_sharewithclass_12758fe5db21_input1:shareInput1,
  cc_sharewithclass_12758fe5db21_button1:shareButton1,
  } = components;

slide.on("firstload", () => {
  // set initial states
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  shareText1.updateData({visible:false});
  shareInput1.updateData({visible:false});
  shareButton1.updateData({visible:false});
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});
//make next section visible when submit button is pressed
submitButton1.on('click', () => {
  shareText1.updateData({visible:true});
  shareInput1.updateData({visible:true});
  shareButton1.updateData({visible:true});
});

//animation loop
ggb1.instance.registerObjectUpdateListener("time", startPause);
ggb1.instance.registerObjectUpdateListener("pause", restartTime);

function startPause(){
  if(ggb1.instance.getValue("time")==1) {
  ggb1.instance.setAnimating("pause", false);
  ggb1.instance.setValue("pause", 0);
  ggb1.instance.setAnimating("pause", true);
  ggb1.instance.startAnimation();
  }
}

function restartTime(){
  if(ggb1.instance.getValue("pause")==1) {
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  }
}

//play
buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

//stop
buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  ggb1.instance.stopAnimation();

});

