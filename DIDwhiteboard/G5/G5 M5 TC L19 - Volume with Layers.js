const {ggb1, fib1, fib2, fib3, buttonGroup1} = components;
ggb1.instance.setValue("defaultView", true);
fib1.updateInput("0",{text:"10"});
fib2.updateInput('0',{text:"10"});
fib3.updateInput('0',{text:"10"});
    setTimeout(()=>{ggb1.instance.setValue("defaultView", true)},3000);
//set the length of the prism to the value entered into FIB component
fib1.on("change", () => {
    ggb1.instance.setValue("Length", fib1.getInput('0').text);
    ggb1.instance.evalCommand("CenterView(A+(Length/2,Width/2,5))")
        setTimeout(()=>{ggb1.instance.setValue("defaultView", true)},3000);
})
//set the width of the prism to the value entered into FIB component
fib2.on("change", () => {
    ggb1.instance.setValue("Width", fib2.getInput('0').text);
    ggb1.instance.evalCommand("CenterView(A+(Length/2,Width/2,5))")
        setTimeout(()=>{ggb1.instance.setValue("defaultView", true)},3000);
})
//set the height of the prism to the value entered into FIB component
fib3.on("change", () => {
    ggb1.instance.setValue("Height", fib3.getInput('0').text);
    ggb1.instance.evalCommand("CenterView(A+(Length/2,Width/2,5))")
        setTimeout(()=>{ggb1.instance.setValue("defaultView", true)},3000);
})

ggb1.instance.registerClientListener(homeView);

function homeView(action) {
    console.log(action.type, ggb1.instance.getValue("defaultView"));    
    if (action.type == "viewChanged3D") {
        ggb1.instance.setValue("defaultView", false);
        buttonGroup1.updateSingleButton({disabled: false}, 3);
    }
}

//
buttonGroup1.on("click:1", () => {
    let cubeSize = ggb1.instance.getValue("cubeSize");
    ggb1.instance.setValue("time2",cubeSize)
    ggb1.instance.setValue("time3",cubeSize)
    ggb1.instance.setValue("time1",cubeSize)
    ggb1.instance.setAnimating("time1", true);
    ggb1.instance.startAnimation();
    ggb1.instance.setValue("play", !ggb1.instance.getValue("play"));
    buttonGroup1.updateSingleButton({disabled: true}, 1);
    buttonGroup1.updateSingleButton({disabled: false}, 2);
})

buttonGroup1.on("click:2", () => {
    ggb1.instance.setValue("time1", 0);
    ggb1.instance.setValue("cubeSize", 1);
    ggb1.instance.setValue("play", !ggb1.instance.getValue("play"));
    buttonGroup1.updateSingleButton({disabled: false}, 1);
    buttonGroup1.updateSingleButton({disabled: true}, 2);
})

buttonGroup1.on("click:3", () => {
    ggb1.instance.evalCommand("SetViewDirection(Vector((5,-5,4.5),(-5,2.65,0)))");
    ggb1.instance.setCoordSystem(-6, 6, -6, 6, -2, 10, false);
    buttonGroup1.updateSingleButton({disabled: true}, 3);
    setTimeout(()=>{ggb1.instance.setValue("defaultView", true)},3000);
})