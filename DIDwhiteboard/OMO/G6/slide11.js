//slide-c022d7a779f7
const {
	media1,
//	image1,
	image2,
	// cc_submit_2fa0113cc045_textbox1: submitText1,
	// cc_submit_2fa0113cc045_input1: submitInput1,
	// cc_submit_2fa0113cc045_button1: submitButton1,
	cc_submit_033a0f5feb0f_textbox1: submitText2,
	cc_submit_033a0f5feb0f_input1: submitInput2,
	cc_submit_033a0f5feb0f_button1: submitButton2,
	text2,
} = components;

////////////////////  SLIDELOAD  ////////////////////
slide.on("firstload", () => {
	text2.updateData({visible: false});
	submitText2.updateData({ visible: false });
	submitInput2.updateData({ visible: false });
	submitButton2.updateData({ visible: false });
//	 image1.updateData({ visible: false, visibilityBehavior: "hide" });
	 image2.updateData({ visible: false, visibilityBehavior: "hide" });
	saveData({
		q5Correct: false,
		q6Correct: false,
	});
});

////////////////////  VIDEO CONTROLS  ////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
	vid.bind("end",  () => {
			submitText2.updateData({ visible: true });
			submitInput2.updateData({ visible: true });
			submitButton2.updateData({ visible: true });
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
// //submit1
// submitButton1.on("click", () => {
// 	let studentResponse = submitInput1.data.text;
// 	let regExp = /\+|\-|\/|\\frac{\\frac{/g;
// 	const result3 = utils.math.evaluateLatex(submitInput1.data.text);
// 	console.log(result3.value);
// 		if (!result3.error && result3.value == 0.875) {
// 			switch (regExp.test(studentResponse)) {
// 				case true:
// 					saveData({ q5Correct: false });
// 					submitText1.updateData({
// 						text: `Find the product $\\frac{7}{2}×\\frac{1}{4} =\\frac{7×1}{2×4}$.`,
// 					});
// 					break;
// 				case false:
// 					saveData({ q5Correct: true });
// 					image1.updateData({ visible: true });
// 					setTimeout(() => {
// 						image1.updateData({visible: false});
// 						submitText2.updateData({ visible: true });
// 					submitInput2.updateData({ visible: true });
// 					submitButton2.updateData({ visible: true });
// 					}, 2000);
					
// 					break;
// 				default:
// 					break;
// 			}
// 		}
// 		if (!result3.error||result3.value != 0.875) {
// 			saveData({ q5Correct: false });
// 			submitText1.updateData({
// 				text: `Find the product $\\frac{7}{2}×\\frac{1}{4} =\\frac{7×1}{2×4}$.`,
// 			});
// 		}
	
// 	// if (submitInput1.data.text == "\\frac{7}{2}\\cdot\\frac{1}{4}") {
// 	// 	saveData({ q5Correct: true });
// 	// 	//show new components
// 	// 	submitText2.updateData({ visible: true });
// 	// 	submitInput2.updateData({ visible: true });
// 	// 	submitButton2.updateData({ visible: true });
// 	// }
// 	// if (submitInput1 != "\\frac{7}{2}\\cdot\\frac{1}{4}") {
// 	// 	saveData({ q5Correct: false });
// 	// 	submitText1.updateData({
// 	// 		text: `Your multiplication expression represents $${submitInput1.data.text}$. Instead, try to create a multiplication expression that represents $\\frac{7}{2}$ $\\div$ $4$.`,
// 	// 	});
//     // }
//     utils.RTS.sendData("slide-70413f4e7f20", {
//         prompt: 10,
//         slide: controls.current,
//         attempt: {
//             multExp2: submitInput1.data.text,
//         },
//     });
// });

//submit2
submitButton2.on("click", () => {
	let studentResponse = submitInput2.data.text;
	let regExp = /\+|\-|\/|\\frac{\\frac{|\\cdot/g;
	const result4 = utils.math.evaluateLatex(submitInput2.data.text);
	console.log(result4);
		if (!result4.error && result4.value == 0.875) {
			switch (regExp.test(studentResponse)) {
				case true:
					saveData({q6Correct: false});
					text2.updateData({
						visible:true, text: `Try to represent $\\frac{7}{2}\\div4$ as a multiplication expression. Then find the value.`,
					});
					break;
				case false:
					saveData({q6Correct: true});
					text2.updateData({visible: false});
					image2.updateData({ visible: true });
					// setTimeout(() => {
					// 	image2.updateData({ visible: false });
					// }, 2000);
					break;
				default:
					break;
			}
		}
		if (result4.error || result4.value != 0.875) {
			saveData({ q6Correct: false });
			text2.updateData({
				visible:true, text: `Try to represent $\\frac{7}{2}\\div4$ as a multiplication expression. Then find the value.`,
			});
	}
	
	// const result3 = utils.math.evaluateLatex(submitInput2.data.text);
	// if (!result3.error) {
	// 	if (result3.value == "0.875") {
	// 		saveData({ q6Correct: true });
	// 		// setTimeout(() => {
	// 		// 	controls.next();
	// 		// }, 2000);
	// 	}
	// 	if (result3.value != "0.875") {
	// 		saveData({ q6Correct: false });
	// 		submitText2.updateData({
	// 			text: `Find the product $\\frac{2}{5}×\\frac{1}{4} =\\frac{2×1}{5×4}$.`,
	// 		});
    //     }
        // utils.RTS.sendData("slide-70413f4e7f20", {
        //     prompt: 11,
        //     slide: controls.current,
        //     attempt: {
        //         quotient2: submitInput2.data.text,
        //     },
        // });

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
