const {
  image1,
  feedback,
  text2,
  select1,
  cc_sharewithclass_769523474b8b_textbox1: shareText1,
  cc_sharewithclass_769523474b8b_input1: shareInput1,
  cc_sharewithclass_769523474b8b_button1: shareButton1,
  cc_sharewithclass_769523474b8b_studentanswers1,
} = components;

shareButton1.updateData({ align: 'right' });

onInit();
function onInit() {
  if (!image1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    image1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == '0' || select1.data.selected == '1') {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"uploaded-image":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M2 TD L17 - Understanding Negative Dividends","teacherView":false,"layout":"two col"}
*/
