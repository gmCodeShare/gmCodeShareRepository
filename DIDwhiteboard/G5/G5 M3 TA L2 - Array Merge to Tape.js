const {ggb1, buttonGroup1} = components;

buttonGroup1.updateSingleButton({disabled: false}, 1);
buttonGroup1.updateSingleButton({disabled: true}, 2);
buttonGroup1.updateSingleButton({disabled: true}, 3);
buttonGroup1.updateSingleButton({disabled: true}, 4);
buttonGroup1.updateSingleButton({disabled: true}, 5);

autorun(() => {
    let timer = ggb1.innerData["t1"];
    if (timer == 6) {
        buttonGroup1.updateSingleButton({disabled: false}, 2);
    }
})

buttonGroup1.on("click:1", () => {
    ggb1.instance.setValue("PointBool", true);
    ggb1.instance.setAnimating("t1", true);
    ggb1.instance.startAnimation();
    buttonGroup1.updateSingleButton({disabled: true}, 1);

})

buttonGroup1.on("click:2", () => {
    ggb1.instance.setValue("SegBool", true);
    ggb1.instance.setAnimating("t1", true);
    ggb1.instance.startAnimation();
    buttonGroup1.updateSingleButton({disabled: true}, 2);
    buttonGroup1.updateSingleButton({disabled: false}, 3);
})

buttonGroup1.on("click:3", () => {
    ggb1.instance.setValue("TapeBool", true);
    ggb1.instance.setAnimating("t1", true);
    ggb1.instance.startAnimation();
    buttonGroup1.updateSingleButton({disabled: true}, 3);
    buttonGroup1.updateSingleButton({disabled: false}, 4);
})

buttonGroup1.on("click:4", () => {
    ggb1.instance.setValue("PointBool", false);
    ggb1.instance.setAnimating("t1", false);
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue("t1", 0);
    buttonGroup1.updateSingleButton({disabled: true}, 4);
    buttonGroup1.updateSingleButton({disabled: false}, 5);
})

buttonGroup1.on("click:5", () => {
    ggb1.instance.setValue("PointBool", false);
    ggb1.instance.setValue("TapeBool", false);
    ggb1.instance.setValue("SegBool", false);
    ggb1.instance.setAnimating("t1", false);
    ggb1.instance.stopAnimation();
    buttonGroup1.updateSingleButton({disabled: true}, 5);
    buttonGroup1.updateSingleButton({disabled: false}, 1);
})