const {
  ggb1,
  feedback1,
  text2,
  separator4,
  text1,
  separator1,
  cc_submit_edb04424cad4_textbox1: submitText1,
  cc_submit_edb04424cad4_input1: submitInput1,
  cc_submit_edb04424cad4_button1: submitButton1,
  separator5,
  cc_submit_7ad059321160_textbox1: submitText2,
  cc_submit_7ad059321160_input1: submitInput2,
  cc_submit_7ad059321160_button1: submitButton2,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false });
  submitText2.updateData({ visible: false });
  submitInput2.updateData({ visible: false });
  submitButton2.updateData({ visible: false });
});

autorun(() => {
  let trigger1 = ggb1.innerData["DragPoint"];
  let case1 = ggb1.instance.getValue("showFifty");
  let case2 = ggb1.instance.getValue("showFourteen");

  if (!ggb1.data.init) {
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  } else if ((ggb1.data.init && case1 == true) || case2 == true) {
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    ggb1.updateData({ init: true });
  }

  if (case1 == true) {
    text1.updateData({
      visible: true,
      text: `###### You found a hint! 
  
  ###### The sum of the squares is $169$.`,
    });
  } else if (case2 == true) {
    text1.updateData({
      visible: true,
      text: `###### You found a hint! 
  
  ###### The sum of the squares is $110$.`,
    });
  } else {
    text1.updateData({
      visible: false,
      visibilityBehavior: "hide",
      text: `###### You found a hint! 
  
  ###### The sum of the squares is $110$.`,
    });
  }
});

submitButton1.on("click", () => {
  submitText2.updateData({ visible: true });
  submitInput2.updateData({ visible: true });
  submitButton2.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":3,"submit":2},"stage":"Learn","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"two col"}
*/
