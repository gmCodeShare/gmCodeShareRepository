//slide-a5b1f03915b0

const { ggb1, buttonGroup1, text1, text2, media4 } = components;

slide.on("firstload", () => {
	ggb1.instance.setValue("showSTD", true);
	text1.updateData({visible: false});
	text2.updateData({visible: false});
	ggb1.updateData({visible: false});
	buttonGroup1.updateData({visible: false});
});

//sets initial x and y values of points
let x1 = ggb1.innerData["A"][0];
let y1 = ggb1.innerData["A"][1];
let x2 = ggb1.innerData["B"][0];
let y2 = ggb1.innerData["B"][1];

//if points are both moved, enable graph button and hide line
autorun(() => {
	let P1 = ggb1.innerData["A"];
	let P2 = ggb1.innerData["B"];
	if (P1[0] != x1 || P1[1] != y1 || P2[0] != x2 || P2[1] != y2) {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
		ggb1.instance.setValue("time", 0);
		ggb1.instance.setValue("showCheck", false);
		text1.updateData({visible: false});
	}
});
////////////////////  VIDEO CONTROLS  ////////////////////
media4.on("ready", ({data: vid}) => {
	//vid.play();
	vid.bind("end", () => {
		ggb1.updateData({visible: true});
		text2.updateData({visible: true});
		buttonGroup1.updateData({visible: true});

	})
});

////////////////////  BUTTON CONTROLS  ////////////////////
//graphs line
buttonGroup1.on("click:1", () => {
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	text1.updateData({ text:`You plotted an $x$-intercept point of $(${ggb1.instance.getXcoord("A")},${ggb1.instance.getYcoord("A")})$ and a $y$-intercept point of $(${ggb1.instance.getXcoord("B")},${ggb1.instance.getYcoord("B")})$. \n\n The $x$-intercept point is $(2,0)$ and the $y$-intercept point is $(0,4)$.` });
	ggb1.instance.setValue("showCheck",false);
	ggb1.instance.setAnimating("time", true);
	ggb1.instance.startAnimation();
	x1 = ggb1.innerData["A"][0];
	y1 = ggb1.innerData["A"][1];
	x2 = ggb1.innerData["B"][0];
	y2 = ggb1.innerData["B"][1];
	//ggb1.instance.setVisible("Slide4Line", true);
	setTimeout(() => {
	//	ggb1.instance.setVisible("Slide4Line", false);
		if (x1 == 2 && y1 == 0 && x2 == 0 && y2 == 4) {
			ggb1.instance.setValue("showCheck", true); 
			text1.updateData({visible: false});
		} else {
			ggb1.instance.setValue("showCheck",false);
			text1.updateData({ visible: true });
		}
	}, 2000);
});
