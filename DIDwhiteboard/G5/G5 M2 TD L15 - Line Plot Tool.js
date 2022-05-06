const {ggb1, ggb2, buttonGroup1} = components;

ggb1.instance.registerClientListener(xMarksTheSpot);
ggb1.instance.registerObjectUpdateListener("Slider", mischiefManaged);

buttonGroup1.on("click:1", () => {
    ggb1.instance.evalCommand("RunClickScript(left)");
    ggb2.instance.setValue("Slider", 1);
})

buttonGroup1.on("click:2", () => {
    ggb1.instance.evalCommand("RunClickScript(right)");
    ggb2.instance.setValue("Slider", 1);
})

buttonGroup1.on("click:3", () => {
    ggb1.instance.evalCommand("RunClickScript(zoomIn)");
    ggb2.instance.setValue("Slider", 1);
})

buttonGroup1.on("click:4", () => {
    ggb1.instance.evalCommand("RunClickScript(zoomOut)");
    ggb2.instance.setValue("Slider", 1);
})

buttonGroup1.on("click:5", () => {
    ggb1.instance.setValue("xmin", 2/3);
    ggb1.instance.setValue("xmax", 19/3);
    ggb2.instance.setValue("Slider", 1);
})

autorun(() => {
    let leftBound = ggb1.innerData["xmin"];
    let rightBound = ggb1.innerData["xmax"];
    let slider = ggb2.innerData["Slider"];
    ggb1.instance.setValue("Slider", slider);
    console.log(leftBound, rightBound);
    if (leftBound <= 0) {
        buttonGroup1.updateSingleButton({disabled: true}, 1);
    } else {
        buttonGroup1.updateSingleButton({disabled: false}, 1);
    }
    if (rightBound >= 50) {
        buttonGroup1.updateSingleButton({disabled: true}, 2);
    } else {
        buttonGroup1.updateSingleButton({disabled: false}, 2);
    }
    if (rightBound-leftBound <= 1) {
        buttonGroup1.updateSingleButton({disabled: true}, 3);
    } else {
        buttonGroup1.updateSingleButton({disabled: false}, 3);
    }
    if (rightBound-leftBound >= 25||rightBound>=50||leftBound<=0) {
        buttonGroup1.updateSingleButton({disabled: true}, 4);
    } else {
        buttonGroup1.updateSingleButton({disabled: false}, 4);
    }
})

function xMarksTheSpot(a) {
    switch (a.type) {
        case "mouseDown":
            if (a.hits[0] == "l2") {
                ggb1.instance.evalCommand("SetValue(data,Remove(data,{" + Math.round(slider * a.x) / slider + "}))");
                // setTimeout(deselect, 2);
            } else {
                if (a.hits[0] != "Slider" && a.y > -1) {
                    ggb1.instance.setListValue("data", ggb1.instance.getValue("length") + 1, Math.round(slider * a.x) / slider);
                    ggb1.instance.setPointStyle("l2", 1);
                    ggb1.instance.setVisible("list", false);
                    // setTimeout(deselect, 2);
                }
            }
            break;
        case "select":
            setTimeout(deselect, 2);
            
            break;
    }
}

function mischiefManaged() {
	ggb1.instance.evalCommand("data={}");
	slider = ggb1.instance.getValue("Slider");
}

function deselect() {
	ggb1.instance.evalCommand("SelectObjects()");
}