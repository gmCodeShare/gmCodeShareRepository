const {
  image1,
  feedback1,
  cc_sharewithclass_84ea71a5907e_textbox1: shareText1,
  cc_sharewithclass_84ea71a5907e_input1: shareInput1,
  cc_sharewithclass_84ea71a5907e_button1: shareButton1,
  cc_sharewithclass_84ea71a5907e_studentanswers1,
} = components;

const id1 = 'slide-a60c06cd5664';

let defPrevGGB1 = {
  innerData: { balloonNum: 0 },
};

let data = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes('innerData')
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

let balloonNumFromOne = data.innerData['balloonNum'];
if (balloonNumFromOne < 2) {
  shareText1.updateData({
    text: 'Please go back and pump up at least three balloons.',
  });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  image1.updateData({ visible: false });
} else {
  shareText1.updateData({
    text: `Next, you will see a graph on the number line. It will show the numbers of pumps you and your classmates used to fill the balloons without popping them.
  
What do you predict the graph will look like?`,
  });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  image1.updateData({ visible: true });
}

/*
{"compTotals":{"uploaded-image":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M3 TD L18 - Understanding Inequalities and Their Solutions","teacherView":false,"layout":"two col"}
*/
