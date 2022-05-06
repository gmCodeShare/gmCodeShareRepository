const { ggb1, fib1, fib2, buttonGroup1, select1, select2, text1} =	components;

slide.on("firstload", () => {
	fib1.setVisible(false);
	fib2.setVisible(false);
    text1.updateData({visible: false});
    select2.setVisible(false);
    fib2.updateInput('0', {text: '0'});

	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

select1.on("change", ({ selected }) => {
	if (selectedLabels(select1).includes("Move by Using Coordinates")) {
		fib1.setVisible(true);
		fib2.setVisible(false);
        text1.updateData({visible: false});
        select2.setVisible(false);
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}
	if (selectedLabels(select1).includes("Move by Using Directions")) {
		fib1.setVisible(false);
		fib2.setVisible(true);
        text1.updateData({visible: true});
        select2.setVisible(true);
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}
});

fib1.on('change', () => {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
})
fib2.on('change', () => {
    if ((ggb1.instance.getXcoord("Point1") < fib2.getInput('0').text && selectedLabels(select2).includes('Left')) || (ggb1.instance.getYcoord('Point1') < fib2.getInput('0').text && selectedLabels(select2).includes('Down'))||(ggb1.instance.getXcoord("Point1") + utils.math.evaluateLatex(fib2.getInput('0').text).value) >15 && selectedLabels(select2).includes('Right')||(ggb1.instance.getYcoord("Point1") + utils.math.evaluateLatex(fib2.getInput('0').text).value) >15 && selectedLabels(select2).includes('Up')) {
        buttonGroup1.updateSingleButton({disabled: true}, 1);

    } else {
        buttonGroup1.updateSingleButton({ disabled: false }, 1);
    }
})

buttonGroup1.on("click:1", () => {
    if (selectedLabels(select1).includes("Move by Using Coordinates")) {
        ggb1.instance.evalCommand("RunClickScript(button3)");
        ggb1.instance.setValue("xCoor", fib1.getInput(0).text);
        ggb1.instance.setValue("yCoor", fib1.getInput(1).text);
        ggb1.instance.evalCommand("RunClickScript(button1)");
        buttonGroup1.updateSingleButton({ disabled: true }, 1);
        buttonGroup1.updateSingleButton({ disabled: false }, 2);
    }
    if (selectedLabels(select1).includes("Move by Using Directions")) {
        ggb1.instance.setValue("OffsetXCoord", 0);
        ggb1.instance.setValue("NegOffsetX", 0);
        ggb1.instance.setValue("OffsetYCoord", 0);
        ggb1.instance.setValue("NegOffsetY", 0);
        
        if (selectedLabels(select2).includes("Up")) {
          ggb1.instance.setValue("OffsetYCoord", fib2.getInput(0).text);  
        }
        if (selectedLabels(select2).includes("Down")) {
          ggb1.instance.setValue("NegOffsetY", fib2.getInput(0).text);
        }
        if (selectedLabels(select2).includes("Left")) {
            ggb1.instance.setValue("NegOffsetX", fib2.getInput(0).text);
        }
        if (selectedLabels(select2).includes("Right")) {
            ggb1.instance.setValue("OffsetXCoord", fib2.getInput(0).text);
        }
        ggb1.instance.evalCommand("RunClickScript(button1)");
        buttonGroup1.updateSingleButton({disabled: false}, 2);
    }

});

buttonGroup1.on("click:2", () => {
    console.log((ggb1.instance.getXcoord('Point1')+ fib2.getInput('0').text), selectedLabels(select2).includes('Right'));
	ggb1.instance.evalCommand("RunClickScript(button3)");
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
    buttonGroup1.updateSingleButton({disabled: true}, 2);
    fib2.updateInput('0', {text: '0'});
    
});

select2.on("change", ({selected}) => {
    if ((ggb1.instance.getXcoord("Point1") < fib2.getInput('0').text && selectedLabels(select2).includes('Left')) || (ggb1.instance.getYcoord('Point1') < fib2.getInput('0').text && selectedLabels(select2).includes('Down'))||(ggb1.instance.getXcoord("Point1") + utils.math.evaluateLatex(fib2.getInput('0').text).value) >15 && selectedLabels(select2).includes('Right')||(ggb1.instance.getYcoord("Point1") + utils.math.evaluateLatex(fib2.getInput('0').text).value) >15 && selectedLabels(select2).includes('Up')) {
        buttonGroup1.updateSingleButton({disabled: true}, 1);
    } else {
        buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}
})
 
autorun(() => {
    let kid = ggb1.innerData['Point1'];
    if (kid[0] == ggb1.instance.getXcoord('LastLocation') + ggb1.instance.getValue('xCoor')) {
        ggb1.instance.setAnimating('α', true);
        ggb1.instance.startAnimation();
    }
})

function selectedLabels(selectComponent) {
	let selected = [...selectComponent.data.selected];
	// create an array out of the labels for each element of the selected array
	let labels = selected.map(
		(index) => selectComponent.data.options[parseInt(index)].label
	);
	let options = [...selectComponent.data.options];
	// create an array out of the labels for each element of the options array
	let optionLabels = options.map((element) => element.label);
	// grab only elements from options that also appear in selected
	return optionLabels.filter((value) => labels.includes(value));
}

