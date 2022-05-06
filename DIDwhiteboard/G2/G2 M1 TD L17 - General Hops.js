const { ggb1, button1, button2, button3, button4, fillInTheBlank1 } = components;

slide.on("firstload", () => {
    button2.updateData({visible: false});
    button3.updateData({visible: false});
    button4.updateData({visible: false});
})

button1.on("click", () => {
    ggb1.instance.setValue("FirstNum", fillInTheBlank1.getInput(0).text);
    ggb1.instance.setValue("SecondNum", fillInTheBlank1.getInput(1).text);
    button1.updateData({visible: false});
    button2.updateData({visible: true});
    ggb1.instance.evalCommand("RunClickScript(button1)");
})

button2.on("click", ()=>{
    button2.updateData({visible: false});
    button3.updateData({visible: true});
    ggb1.instance.evalCommand("RunClickScript(button2)");
})

button3.on("click", ()=>{
    button3.updateData({visible: false});
    button4.updateData({visible: true});
    ggb1.instance.setValue("time",-1);
    ggb1.instance.setValue("time2",-0.5);
    ggb1.instance.evalCommand("RunClickScript(button3)");
})

button4.on("click", ()=>{
    button4.updateData({visible: false});
    button1.updateData({visible: true});
    ggb1.instance.evalCommand("RunClickScript(button4)");
})