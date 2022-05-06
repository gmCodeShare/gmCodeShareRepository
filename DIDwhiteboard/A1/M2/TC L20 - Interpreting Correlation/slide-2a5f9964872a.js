const {
  select1,
  feedback,
  text1,
  cc_sharewithclass_5945554ff6a5_textbox1: shareText1,
  cc_sharewithclass_5945554ff6a5_input1: shareInput1,
  cc_sharewithclass_5945554ff6a5_button1: shareButton1,
  cc_sharewithclass_5945554ff6a5_studentanswers1,
} = components;

shareText1.updateData({ visible: false });
shareInput1.updateData({ visible: false });
shareButton1.updateData({ visible: false });

/*select1.on("change", (selected) => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
});*/

autorun(() => {
  let explain = select1.data.selected == "0" || select1.data.selected == "1";
  let disableButton = shareInput1.data.text == "";
  // explain
  shareText1.updateData({ visible: explain });
  shareInput1.updateData({ visible: explain });
  shareButton1.updateData({ visible: explain });
  // disableButton
  //button1.updateData({disabled: disableButton});
}); // end autorun

autorun(() => {
  var optionArray = ["A, because ", "B, because "];
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in this example, the choices ended with periods
      shareInput1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

/*
{"compTotals":{"radiogroup":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M2 TC L20 - Interpreting Correlation","teacherView":false,"layout":"two col"}
*/
