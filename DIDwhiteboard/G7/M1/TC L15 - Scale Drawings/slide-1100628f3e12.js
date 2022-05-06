const {
  text1,
  ggb1,
  image1,
  feedback1,
  cc_sharewithclass_504fe6f1fd18_textbox1,
  cc_sharewithclass_504fe6f1fd18_input1,
  cc_sharewithclass_504fe6f1fd18_button1,
  cc_sharewithclass_504fe6f1fd18_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_504fe6f1fd18_button1.updateData({
  align: 'right',
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('picSet', 1);
    ggb1.instance.setValue('picWidth1', 5);
    ggb1.instance.setValue('scaleFactor', 3);
    ggb1.instance.setValue('clickCount', 1000);
    ggb1.instance.setValue('time', 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"uploaded-image":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M1 TC L15 - Scale Drawings","teacherView":false,"layout":"T layout"}
*/
