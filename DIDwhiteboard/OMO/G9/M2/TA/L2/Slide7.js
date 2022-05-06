//slide-e423fe2dbc3d

const {media7, text2, select1, cc_submit_11eb3a6d2e52_textbox1: text1, cc_submit_11eb3a6d2e52_input1: input1, cc_submit_11eb3a6d2e52_button1: button1} = components;
slide.on("firstload", () => {
    text1.updateData({visible: false});
    text2.updateData({visible: false});
    input1.updateData({visible: false});
    button1.updateData({visible: false});
    select1.setVisible(false);
})
media7.on("ready", ({data: vid}) => {
    vid.bind("end", () => {
        select1.setVisible(true);
        text2.updateData({visible: true});
    })

});

select1.on("change", ({selected}) => {
    text1.updateData({visible: true});
    input1.updateData({visible: true});
    button1.updateData({visible: true});
    if (selected.includes("0")) {
        input1.updateData({text: `I chose the x-intercept and y-intercept because `});
    }
    if (selected.includes("1")) {
        input1.updateData({text: `I chose the slope and y-intercept because `});
    }
 })