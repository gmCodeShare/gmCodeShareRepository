const {ggb1, text1, buttonGroup1,buttonGroup2} = components;
slide.on("firstload", () => {
    buttonGroup1.updateSingleButton({disabled: false}, 1);
    buttonGroup1.updateSingleButton({disabled: true}, 2);
    buttonGroup1.updateSingleButton({disabled: true}, 3);   
    ggb1.instance.setValue("speed", 0.5);
})

autorun(()=>{
let slider = ggb1.innerData['v'];
    text1.updateData({align: "center",text: `## Profit: $\\$${makeCurrency(slider)}$`});
    if (slider == 450) {
        buttonGroup2.updateSingleButton({disabled: true}, 2);
    } else {
        buttonGroup2.updateSingleButton({disabled: false}, 2);

    }
    if (slider == 0) {
        buttonGroup2.updateSingleButton({disabled: true}, 1);
    } else {
        buttonGroup2.updateSingleButton({disabled: false}, 1);

    }
})

function makeCurrency(number) {
    let numString = number.toString();
        console.log(numString.charAt(numString.length - 2));
    switch (true) {
        case !numString.includes("."):
            return (numString + ".00")
            break;
        case numString.includes(".") && numString.charAt(numString.length-2) == ".":
            return (numString + "0");
            break;
        case numString.includes(".") && numString.charAt(numString.length-3) == ".":
            return numString;
            break;
        default:
            return numString
            break;
    }
}

buttonGroup1.on("click:1", () => {
    buttonGroup1.updateSingleButton({disabled: true}, 1);
    buttonGroup1.updateSingleButton({disabled: false}, 2);
    buttonGroup1.updateSingleButton({disabled: false}, 3);
    ggb1.instance.setAnimating("v", true);
    ggb1.instance.startAnimation();
})

buttonGroup1.on("click:2", () => {
    buttonGroup1.updateSingleButton({disabled: false}, 1);
    buttonGroup1.updateSingleButton({disabled: true}, 2);
    ggb1.instance.stopAnimation();
})

buttonGroup1.on("click:3", () => {
    buttonGroup1.updateSingleButton({disabled: true}, 3);
    buttonGroup1.updateSingleButton({disabled: true}, 2);
    buttonGroup1.updateSingleButton({disabled: false}, 1);
    ggb1.instance.stopAnimation();
    ggb1.instance.setValue("v", 0);
})

buttonGroup2.on("click:1", () => {
    ggb1.instance.setValue("v", ggb1.instance.getValue("v") - 0.25);
})
buttonGroup2.on("click:2", () => {
    ggb1.instance.setValue("v", ggb1.instance.getValue("v") + 0.25);
})