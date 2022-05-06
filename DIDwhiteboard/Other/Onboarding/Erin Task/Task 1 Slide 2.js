const { 
    ggb1, select1, buttonGroup1,
    cc_sharewithclass_649fe106e18e_textbox1: shareText1,
    cc_sharewithclass_649fe106e18e_input1: shareInput1,
    cc_sharewithclass_649fe106e18e_button1: shareButton1,
    } = components;


    slide.on("firstload", () => {
        select1.selectOption('1');
        ggb1.instance.setValue("time", 0);
        ggb1.instance.setVisible("VectorPoint", true)
        shareText1.updateData({visible: false});
        shareInput1.updateData({visible: false});
        shareButton1.updateData({visible: false});
        buttonGroup1.updateSingleButton({ disabled: true }, 2);

      });
select1.on('change', (selected) => {
        if (select1.data.selected.includes('0')) {
            ggb1.instance.setVisible("vector", true)
        }
        if (select1.data.selected.includes('1')) {
            ggb1.instance.setVisible("vector", false)
        }
      });

      ggb1.instance.registerObjectUpdateListener("time",startPause);
      ggb1.instance.registerObjectUpdateListener("pause",restartTime);
      
      function startPause(){
        if (ggb1.instance.getValue("time")==1){
          ggb1.instance.setAnimating("pause", false);
          ggb1.instance.setValue("pause", 0);
          ggb1.instance.setAnimating("pause", true);
          ggb1.instance.startAnimation()
        }
      }
      
      function restartTime(){
        if (ggb1.instance.getValue("pause")==1){
          ggb1.instance.setAnimating("time", false);
          ggb1.instance.setValue("time", 0);
          ggb1.instance.setAnimating("time", true);
          ggb1.instance.startAnimation()
        }
      }
      
      //translate
      buttonGroup1.on('click:1', () => {
        ggb1.instance.setVisible("timeZeroTriangle", false)
        ggb1.instance.setVisible("TimeZeroB'", false)
        ggb1.instance.setVisible("TimeZeroC'", false)
        ggb1.instance.setVisible("VectorPoint", false)
        ggb1.instance.setAnimating("time", false);
        ggb1.instance.setValue("time", 0);
        ggb1.instance.setAnimating("time", true);
        ggb1.instance.startAnimation()
        shareText1.updateData({visible: true});
        shareInput1.updateData({visible: true});
        shareButton1.updateData({visible: true});
        buttonGroup1.updateSingleButton({ disabled: true }, 1);
        buttonGroup1.updateSingleButton({ disabled: false }, 2);
      });
      
      
      //stop
      buttonGroup1.on('click:2', () => {
        ggb1.instance.stopAnimation();
        ggb1.instance.setValue("time", 0);
        ggb1.instance.setVisible("timeZeroTriangle", true)
        ggb1.instance.setVisible("translatedTriangle", false)
        ggb1.instance.setVisible("VectorPoint", true)
        ggb1.instance.setVisible("TimeZeroB'", true)
        ggb1.instance.setVisible("TimeZeroC'", true)
        buttonGroup1.updateSingleButton({ disabled: false }, 1);
        buttonGroup1.updateSingleButton({ disabled: true }, 2);
    
      });