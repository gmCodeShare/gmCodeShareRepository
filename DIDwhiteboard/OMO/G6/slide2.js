//slide-ea2cfb6ed2bf

const {
	media1,
	cc_submit_62451621684d_textbox1: submitText1,
	cc_submit_62451621684d_input1: submitInput1,
	cc_submit_62451621684d_button1: submitButton1,
	cc_submit_20e57118970c_textbox1: submitText2,
	cc_submit_20e57118970c_input1: submitInput2,
	cc_submit_20e57118970c_button1: submitButton2,
} = components;

////////////////////  SLIDELOAD  ////////////////////
slide.on("firstload", () => {
	submitText1.updateData({ visible: false });
	submitInput1.updateData({ visible: false });
	submitButton1.updateData({ visible: false });
	submitText2.updateData({ visible: false });
	submitInput2.updateData({ visible: false });
	submitButton2.updateData({ visible: false });
});

////////////////////  VIDEO CONTROLS  ////////////////////
media1.on("ready", ({ data: vid }) => {
	vid.play();
	let firstPause;
	vid.bind("end", () => {
			submitText1.updateData({ visible: true });
			submitInput1.updateData({ visible: true });
			submitButton1.updateData({ visible: true });
	});
});

////////////////////  BUTTON CONTROLS  ////////////////////
//submit1
submitButton1.on("click", () => {
	submitText2.updateData({ visible: true });
	submitInput2.updateData({ visible: true });
    submitButton2.updateData({visible: true});
    submitButton2.on("click",()=>{
        utils.RTS.sendData("slide-70413f4e7f20", {
            prompt: 2,
            slide: controls.current,
            attempt: {
                explain: submitInput1.data.text,
            },
        });
    })
});
//submit2
submitButton2.on("click",()=>{
    utils.RTS.sendData("slide-70413f4e7f20", {
        prompt: 3,
        slide: controls.current,
        attempt: {
            quotient: submitInput2.data.text,
        },
    });
})