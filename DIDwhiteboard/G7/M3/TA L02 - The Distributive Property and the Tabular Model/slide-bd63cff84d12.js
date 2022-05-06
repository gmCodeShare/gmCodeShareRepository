const {
  text1,
  ggb1,
  text3,
  ggb2,
  text2,
  radio1,
  cc_sharewithclass_0bbf4326a4fb_textbox1,
  cc_sharewithclass_0bbf4326a4fb_input1,
  cc_sharewithclass_0bbf4326a4fb_button1,
  cc_sharewithclass_0bbf4326a4fb_studentanswers1,
  feedback,
} = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    cc_sharewithclass_0bbf4326a4fb_button1.updateData({ align: 'right' });
    cc_sharewithclass_0bbf4326a4fb_button1.updateData({ visible: false });
    cc_sharewithclass_0bbf4326a4fb_input1.updateData({ visible: false });
    cc_sharewithclass_0bbf4326a4fb_textbox1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ['Yes because ', 'No because '];
  if (radio1.data.selected) {
    cc_sharewithclass_0bbf4326a4fb_textbox1.updateData({ visible: true });
    cc_sharewithclass_0bbf4326a4fb_input1.updateData({ visible: true });
    cc_sharewithclass_0bbf4326a4fb_button1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      cc_sharewithclass_0bbf4326a4fb_input1.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
{"compTotals":{"textbox":4,"geogebra":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
