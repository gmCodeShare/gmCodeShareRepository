/* -- autoCom slideId: slide-c6e764d51f97 - autoCom slideId -- */

const {
  image1,
  feedback1,
  text1,
  radio1,
  cc_submit_bc57ee5aceb8_textbox1: shareText1,
  cc_submit_bc57ee5aceb8_input1: shareInput1,
  cc_submit_bc57ee5aceb8_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!text1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });

    text1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ['Yes because ', 'No because '];
  if (radio1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (radio1.data.selected != radio1.data.last) {
      let chosen = radio1.data.options[parseInt(radio1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      shareInput1.updateData({
        text: optionArray[radio1.data.selected],
      });
      radio1.updateData({ last: radio1.data.selected });
    }
  }
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"radiogroup":1,"image":1,"submit":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Sally wants to find the unit rate for the relationship of the number of coins sorted to the number of seconds by dividing the number of seconds by the number of coins sorted.\n\nIs that correct?",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"submitInfo":{"submitTextInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Why did you choose that? What strategy did you use?"],"visible":[true],"position":["[0,1]"],"sizeConfig_value":["container"]},"submitInputInfo":{"disabled":[false],"inputType":["text"],"math":[false],"text":[""],"type":["multiline"],"position":["[0,1]"],"sizeConfig_value":["container"]},"submitButtonInfo":{"align":["right"],"disabled":[false],"position":["[0,1]"],"sizeConfig_value":["container"]}},"imageInfo":{"inImageComp":{"imageSrcUpload":["https://prod-dp-digital-lessons-authoring-backend-media.s3.amazonaws.com/c274dc1a-3319-40e2-83ba-4fd829f15a9e"],"imageAltTextUpload":["WARNING: NO ALT TEXT FOR THIS IMAGE"],"imageSrcBynder":[],"imageAltTextBynder":[]},"imagesMissingAltText":1},"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
