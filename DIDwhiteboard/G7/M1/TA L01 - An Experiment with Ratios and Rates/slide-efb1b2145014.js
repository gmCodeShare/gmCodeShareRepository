/* -- autoCom slideId: slide-efb1b2145014 - autoCom slideId -- */

const { image1, feedback1, text1, select1, button1 } = components;

slide.on('firstload', () => {
  button1.updateData({
    align: 'right',
    disabled: 'true',
  });
});

select1.on('change', (selected) => {
  button1.updateData({
    text: 'Submit',
    disabled: !!selected.length,
  });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"select":1,"button":1,"image":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Suppose there are four more machines.\n\nBased on the tables provided, select all that sort coins at a constant rate.",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"selectInfo":{"columns":[""],"disabled":[false],"expandButton":["hidden"],"inline":[false],"options_length":[4],"options_label":[],"type":["multiple"],"position":["[0,1]"],"sizeConfig_value":["container"]},"buttonInfo":{"disabled":[false],"text":["Submit"],"position":["[0,1]"],"sizeConfig_value":["container"]},"imageInfo":{"inImageComp":{"imageSrcUpload":["https://prod-dp-digital-lessons-authoring-backend-media.s3.amazonaws.com/a70dc740-8b5d-4c08-8a2b-cb0c6ee12d31"],"imageAltTextUpload":["WARNING: NO ALT TEXT FOR THIS IMAGE"],"imageSrcBynder":[],"imageAltTextBynder":[]},"inSelectComp":{"imageSrcUpload":[],"imageAltTextUpload":[],"imageSrcBynder":[],"imageAltTextBynder":[]},"imagesMissingAltText":1},"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
