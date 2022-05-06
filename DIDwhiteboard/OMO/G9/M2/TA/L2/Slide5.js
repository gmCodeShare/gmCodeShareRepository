//slide-25a189f8d901

const {media5, fib1, text1, image1, fib2, text2, image2, buttonGroup1,buttonGroup2} = components;

//sets components not visible
slide.on("firstload", () => {
    fib1.setVisible(false);
    fib2.setVisible(false);
    text1.updateData({visible: false,visibilityBehavior:"hide"});
    image1.updateData({visible: false,visibilityBehavior:"hide"});
    text2.updateData({visible: false,visibilityBehavior:"hide"});
    image2.updateData({visible: false,visibilityBehavior:"hide"});
    buttonGroup1.updateData({visible: false, justify:"right"});
    buttonGroup2.updateData({visible: false,justify:"right"});
})

////////////////////  VIDEO CONTROLS  ////////////////////
//plays video when ready
media5.on("ready", ({data: vid}) => {
  //  vid.play();
    vid.bind("end", () => {
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
    let slope = fib1.getInput(0).text;
    text1.updateData({visible: false});
    text2.updateData({visible: false});
    image1.updateData({visible: false});
    image2.updateData({visible: false});
    if (slope == -2) {
        image1.updateData({visible: true});
        text1.updateData({visible: false, visibilityBehavior: "none"})
        setTimeout(() => {
            image1.updateData({visible: false,visibilityBehavior:"hide"});
            fib2.setVisible(true);
            buttonGroup2.updateData({visible: true});
        }, 1000);
    }
    if (slope != -2) {
        text1.updateData({visible: true});
    }
    buttonGroup1.updateSingleButton({disabled: true, text: "Submitted"}, 1);
})
buttonGroup2.on("click:1", () => {
    let yInt = fib2.getInput(0).text;
    text2.updateData({visible: false});
    image2.updateData({visible: false});
    if (yInt == 4) {
        text2.updateData({visible: false,visibilityBehavior:"none"});
        image2.updateData({visible: true});
        setTimeout(() => {
            image2.updateData({visible: false});
        }, 2000);
    }
    if (yInt != 4) {
        text2.updateData({visible: true,visibilityBehavior:"none"});
        image2.updateData({visible:false,visibilityBehavior:"none"})
    }
    buttonGroup2.updateSingleButton({disabled: true, text: "Submitted"}, 1);
})