const {
  ggb1,
  feedback1,
  cc_submit_3e109cc75695_textbox1: submitText1,
  cc_submit_3e109cc75695_input1: submitInput1,
  cc_submit_3e109cc75695_button1: submitButton1,
  separator2,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

//blue, green, purple, red, yellow

ggb1.instance.registerClickListener(cycle);

function cycle(a) {
  switch (ggb1.instance.getColor(a)) {
    case '#FFFFFF':
      //when the square is white, change to blue
      ggb1.instance.setColor(a, 0, 127, 175);
      ggb1.instance.setTextValue(a.concat('Text'), 'blue');
      ggb1.instance.setValue(a.concat('Val'), 1);
      break;
    case '#007FAF':
      //when the square is blue, change to red
      ggb1.instance.setColor(a, 218, 41, 28);
      ggb1.instance.setTextValue(a.concat('Text'), 'red');
      ggb1.instance.setValue(a.concat('Val'), 2);
      break;
    case '#DA291C':
      //when the square is red, change to green
      ggb1.instance.setColor(a, 0, 129, 57);
      ggb1.instance.setTextValue(a.concat('Text'), 'green');
      ggb1.instance.setValue(a.concat('Val'), 3);
      break;
    case '#008139':
      //when the square is green, change to purple
      ggb1.instance.setColor(a, 130, 63, 152);
      ggb1.instance.setTextValue(a.concat('Text'), 'purple');
      ggb1.instance.setValue(a.concat('Val'), 4);
      break;
    case '#823F98':
      //when the square is purple, change to yellow
      ggb1.instance.setColor(a, 237, 178, 32);
      ggb1.instance.setTextValue(a.concat('Text'), 'yellow');
      ggb1.instance.setValue(a.concat('Val'), 5);
      break;
    case '#EDB220':
      //when the square is yellow, change to white
      ggb1.instance.setColor(a, 255, 255, 255);
      ggb1.instance.setTextValue(a.concat('Text'), 'white');
      ggb1.instance.setValue(a.concat('Val'), 0);
  }
}

submitButton1.on('click', show);

function show() {
  text1.updateData({ visible: true });
  for (let i = 1; i < 11; i++) {
    ggb1.instance.setVisible(`C${i}`, true);
    ggb1.instance.setFixed(`q${i}`, false, true);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1,"separator":1},"stage":"Learn","lessonInfo":"7 M6 TA L03 - Outcomes of Chance Experiments","teacherView":false,"layout":"two col"}
*/
