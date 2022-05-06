const { 
    cc_submit_c89b3a130dc4_button1: submitButton1,
    cc_submit_7f9d38442d9a_textbox1: submitTextbox2,
    cc_submit_7f9d38442d9a_input1: submitInput2,
    cc_submit_7f9d38442d9a_button1: submitButton2,
    } = components;


    slide.on("firstload", () => {
        submitTextbox2.updateData({visible: false});
        submitInput2.updateData({visible: false});
        submitButton2.updateData({visible: false});

    });

    submitButton1.on('click', () => {
        submitTextbox2.updateData({visible: true});
        submitInput2.updateData({visible: true});
        submitButton2.updateData({visible: true});
      });

    

