//slide-e897c94a9a85

const {media3, text3, text4, fib1, text1, image1, fib2, text2, image2, buttonGroup1,buttonGroup2} = components;

//sets components not visible
slide.on("firstload", () => {
    text3.updateData({visible: false});
    text4.updateData({visible: false});
    fib1.setVisible(false);
    fib2.setVisible(false);
    text1.updateData({visible: false,visibilityBehavior:"hide"});
    image1.updateData({visible: false,visibilityBehavior:"none"});
    text2.updateData({visible: false,visibilityBehavior:"hide"});
    image2.updateData({visible: false,visibilityBehavior:"none"});
    buttonGroup1.updateData({visible: false,justify:"right"});
    buttonGroup2.updateData({visible: false,justify:"right"});
})

////////////////////  VIDEO CONTROLS  ////////////////////
//plays video when ready
media3.on("ready", ({data: vid}) => {
   // vid.play();
    vid.bind("end", () => {
        text3.updateData({visible: true});
        fib1.setVisible(true);
        buttonGroup1.updateData({visible: true});

    })
});
fib1.on("change", () => { 
    buttonGroup1.updateSingleButton({disabled: false, text: "Submit"}, 1);
    image1.updateData({visible: false,visibilityBehavior:"none"});
    text1.updateData({visible: false,visibilityBehavior:"hide"});
})
fib2.on("change", () => { 
    buttonGroup2.updateSingleButton({disabled: false, text: "Submit"}, 1);
    image2.updateData({visible: false,visibilityBehavior:"none"});
    text2.updateData({visible: false,visibilityBehavior:"hide"});
})

////////////////////  BUTTON CONTROLS  ////////////////////
buttonGroup1.on("click:1", () => {
    buttonGroup1.updateSingleButton({disabled: true, text: "Submitted"}, 1);
    let xInt = fib1.getInput(0).text;
    let yInt = fib2.getInput(0).text;
    console.log(xInt, typeof yInt);
    text1.updateData({visible: false});
    text2.updateData({visible: false});
    image1.updateData({visible: false});
    image2.updateData({visible: false});
    if (xInt == 2) {
        image1.updateData({visible: true});
        text1.updateData({visible:false,visibilityBehavior:"none"})
        setTimeout(() => {
            image1.updateData({visible: false, visibilityBehavior: "hide"});
            fib2.setVisible(true);
            text4.updateData({visible: true});
            buttonGroup2.updateData({visible: true});
        }, 1000);
    }
    if (xInt != 2) {
        text1.updateData({visible: true});
           }
})
buttonGroup2.on("click:1", () => {
    buttonGroup2.updateSingleButton({disabled: true, text: "Submitted"}, 1);
    let yInt = fib2.getInput(0).text;
    text1.updateData({visible: false});
    text2.updateData({visible: false});
    image1.updateData({visible: false});
    image2.updateData({visible: false});
    if (yInt == 4) {
        image2.updateData({visible: true});
        text2.updateData({visible:false,visibilityBehavior:"none"})
        // setTimeout(() => {
        //     image2.updateData({visible: false,visibilityBehavior:"hide"});
        // }, 2000);
    }
    if ( yInt != 4) {
        text2.updateData({visible: true});
    }
})