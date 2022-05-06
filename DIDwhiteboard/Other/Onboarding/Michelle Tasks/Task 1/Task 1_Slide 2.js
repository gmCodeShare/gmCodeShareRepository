const { 
    ggb1, 
    select1,
    buttonGroup1,
    cc_sharewithclass_aa237c792bed_textbox1:shareText1,
    cc_sharewithclass_aa237c792bed_input1:shareInput1,
    cc_sharewithclass_aa237c792bed_button1:shareButton1,
 } = components;

 slide.on("firstload", () => {
    // set initial states
    select1.selectOption('1');
    shareButton1.updateData({visible:false});
    shareInput1.updateData({visible:false});
    shareText1.updateData({visible:false});
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setValue("draggable", true);
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.stopAnimation();
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
 });

//show/hide vector
select1.on('change', ({selected}) => {
  if(select1.data.selected.includes('0')){
        ggb1.instance.setVisible("vector", true);
  } else {
        ggb1.instance.setVisible("vector", false);
      }
});

buttonGroup1.on('click:1', () => {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
        //translate
        runTime();
        ggb1.instance.setValue("draggable",false);
        //make next section visible when translate button is pressed
        shareText1.updateData({visible:true});
        shareInput1.updateData({visible:true});
        shareButton1.updateData({visible:true});
        //
        ggb1.instance.setVisible("figure'", false);
    });

//animation loop
ggb1.instance.registerObjectUpdateListener("time", startPause);
ggb1.instance.registerObjectUpdateListener("pause", restartTime);

function runTime(){
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
}

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
    runTime();
  }
}
  
  //stop
  buttonGroup1.on('click:2', () => {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue("draggable",true)
    ggb1.instance.setValue("time", 0);
  });