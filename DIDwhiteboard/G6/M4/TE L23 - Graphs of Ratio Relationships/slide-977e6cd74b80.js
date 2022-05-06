const {
  text3,
  ggb1,
  feedback1,
  cc_submit_20f21875afb9_textbox1: text1,
  cc_submit_20f21875afb9_input1: input1,
  cc_submit_20f21875afb9_button1: button1,
  separator5,
  cc_sharewithclass_f5292fc8c223_textbox1: text2,
  cc_sharewithclass_f5292fc8c223_input1: input2,
  cc_sharewithclass_f5292fc8c223_button1: button2,
  cc_sharewithclass_f5292fc8c223_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

text2.updateData({ visible: false });
input2.updateData({ visible: false });
button2.updateData({ visible: false });
input1.updateData({ text: `t=` });

button1.on('click', () => {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  if (!/[bdeghijklmnopqsuvxyz]/.test(input1.data.text) == true) {
    const rawinput = input1.data.text;
    const ggbready =
      'f:' + rawinput.replace(/\\w/, '\\').replace(/t/, 'y').replace(/w/, 'x');
    ggb1.instance.evalLaTeX(ggbready, 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    text2.updateData({ visible: true });
    input2.updateData({ visible: true });
    button2.updateData({ visible: true });
  } else {
    ggb1.instance.setAnimating('time', false);
  }
});

/*
{"compTotals":{"textbox":2,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"T layout"}
*/
