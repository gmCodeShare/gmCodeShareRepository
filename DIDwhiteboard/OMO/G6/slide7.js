const {
	media1,
	cat1,
	cc_submit_47b621f81152_textbox1: text1,
	cc_submit_47b621f81152_input1: input1,
	cc_submit_47b621f81152_button1: button1,
	image1,
	text2,
	text3,
	buttonGroup1,
} = components;

////////////////////  SLIDELOAD  ////////////////////
slide.on("firstload", () => {
	cat1.setVisible(false);
	text1.updateData({ visible: false });
	input1.updateData({ visible: false });
	button1.updateData({ visible: false });
	buttonGroup1.updateData({ visible: false });
	image1.updateData({ visible: false });
    text2.updateData({visible: false});
    text3.updateData({visible: false});
    saveData({catCorrect: false});
});

////////////////////  VIDEO CONTROLS  ////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end", () => {
		cat1.setVisible(true);
        buttonGroup1.updateData({visible: true});
  //      media1.updateData({visible: false});
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
//categorization submit
buttonGroup1.on("click:1", () => {
    if (getData("catCorrect") == true) {
        text1.updateData({ visible: true });
        input1.updateData({visible: true});
        button1.updateData({visible: true});
        text3.updateData({visible: false})
    } else {
        text1.updateData({ visible: false });
        input1.updateData({visible: false});
        button1.updateData({visible: false});
        text3.updateData({visible: true})
    }
    buttonGroup1.updateSingleButton({disabled: true, text: "Submitted"}, 1);
});

//blank card submit
button1.on('click', () => {
    if (input1.data.text == "\\frac{3}{4}\\cdot\\frac{1}{7}") {
        image1.updateData({visible: true});
        text2.updateData({visible: false});
    } else {
        image1.updateData({visible: false});
        text2.updateData({visible: true});
    }

});

////////////////////  CAT UPDATES  ////////////////////
cat1.on('change', ({assigned}) => {
    buttonGroup1.updateSingleButton({disabled: false, text: "Submit"}, 1);
    if (assigned.category_1 && assigned.category_2) {
        if (assigned.category_1.includes("1") && assigned.category_2.includes("0")) {
            saveData({catCorrect: true});
        } else {
            saveData({catCorrect: false});
        }
    }
  });

  ////////////////////  SAVE/GET DATA  ////////////////////
function saveData(dataObj = {}, target = "") {
	const allComps = Object.keys(components).sort();
	const firstComp = allComps[0];
	if (!firstComp) {
		return;
	} // make sure at least 1 comp exists
	if (typeof target !== "string" || typeof dataObj !== "object") {
		console.error(
			"saveData error: Parameters should be an object and a string!"
		);
	}
	let tarComp = !!target ? target : firstComp;
	if (!components[tarComp]?.storage) {
		components[tarComp].storage = {};
	}
	components[tarComp].storage = {
		...components[tarComp].storage,
		...dataObj,
	};
}

function getData(dataName, target = "") {
	const allComps = Object.keys(components).sort();
	const firstComp = allComps[0];
	if (!firstComp) {
		return;
	} // make sure at least 1 comp exists
	if (typeof target !== "string" || typeof dataName !== "string") {
		console.error("getData error: Parameters should both be strings!");
	}
	let tarComp = !!target ? target : firstComp;
	return components[tarComp]?.storage?.[dataName];
}