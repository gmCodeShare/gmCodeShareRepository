const {
  ggb1,
  image1,
  separator1,
  cc_submit_bd68b90d5013_textbox1: submitText1,
  cc_submit_bd68b90d5013_input1: submitInput1,
  cc_submit_bd68b90d5013_button1: submitButton1,
  separator2,
  cc_sharewithclass_c13c2159228a_textbox1: shareText1,
  cc_sharewithclass_c13c2159228a_input1: shareInput1,
  cc_sharewithclass_c13c2159228a_button1: shareButton1,
  cc_sharewithclass_c13c2159228a_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let id1 = 'slide-9e610d0e21fb';

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  submitInput1.updateData({
    text: `Cat Cost:\n\Dog Cost:\n\Rabbit Cost:\n\Parrot Cost:`,
  });
  ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
});

let data = getFromSlide(id1, 'ggb1', false) || false;

if (data.innerData) {
  ggb1.instance.setCoords(
    'CatPoint',
    data.innerData['CatPoint'][0],
    data.innerData['CatPoint'][1]
  );
  ggb1.instance.setCoords(
    'DogPoint',
    data.innerData['DogPoint'][0],
    data.innerData['DogPoint'][1]
  );
  ggb1.instance.setCoords(
    'ParrotPoint',
    data.innerData['ParrotPoint'][0],
    data.innerData['ParrotPoint'][1]
  );
  ggb1.instance.setCoords(
    'RabbitPoint',
    data.innerData['RabbitPoint'][0],
    data.innerData['RabbitPoint'][1]
  );
}
ggb1.instance.setColor('CatPoint', 130, 63, 152);
ggb1.instance.setPointStyle('CatPoint', 3);
ggb1.instance.setColor('DogPoint', 0, 127, 175);
ggb1.instance.setPointStyle('DogPoint', 1);
ggb1.instance.setColor('RabbitPoint', 0, 129, 57);
ggb1.instance.setPointStyle('RabbitPoint', 4);
ggb1.instance.setColor('ParrotPoint', 218, 41, 28);
ggb1.instance.setPointStyle('ParrotPoint', 6);

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"uploaded-image":1,"separator":2,"submit":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
