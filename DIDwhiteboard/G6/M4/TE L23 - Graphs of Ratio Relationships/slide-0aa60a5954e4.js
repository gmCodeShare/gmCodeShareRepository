const {
  text1,
  text5,
  ggb1,
  separator2,
  button1,
  feedback1,
  text2,
  radio1,
  text3,
  radio2,
  cc_submit_0807ff1971be_textbox1: text4,
  cc_submit_0807ff1971be_input1: input4,
  cc_submit_0807ff1971be_button1: button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.updateData({ visible: false });
    text5.updateData({ visible: false });
    button1.updateData({ visible: false });
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setVisible('axisX', false);
    ggb1.instance.setVisible('axisY', false);
    text4.updateData({ visible: false });
    input4.updateData({ visible: false });
    button4.updateData({ visible: false });
    button4.updateData({ align: 'right' });
    ggb1.updateData({ init: true });
  }
}
let num;
autorun(() => {
  const lawns = radio1.data.selected;
  // console.log(lawns);
  if (radio1.data.selected != input4.data.last) {
    switch (lawns) {
      case '0':
        ggb1.instance.setValue('switch', true);
        ggb1.instance.setAxisLabels(1, '$\\mathit{n}$', '$\\mathit{m}$');
        ggb1.instance.setValue('time', 0);
        radio2.updateData({ selected: '1' });
        input4.updateData({ text: 'm=' });
        button4.updateData({ disabled: true });
        text4.updateData({ visible: true });
        input4.updateData({ visible: true });
        button4.updateData({ visible: true });
        break;
      case '1':
        ggb1.instance.setValue('switch', false);
        ggb1.instance.setAxisLabels(1, '$\\mathit{m}$', '$\\mathit{n}$');
        ggb1.instance.setValue('time', 0);
        radio2.updateData({ selected: '0' });
        input4.updateData({ text: 'n=' });
        text4.updateData({ visible: true });
        input4.updateData({ visible: true });
        button4.updateData({ visible: true });
        button4.updateData({ disabled: true });
    }
    input4.updateData({ last: radio1.data.selected });
  }
});

autorun(() => {
  const lawns2 = radio2.data.selected;
  // console.log(lawns2);
  if (radio2.data.selected != ggb1.data.last) {
    switch (lawns2) {
      case '0':
        ggb1.instance.setValue('switch', false);
        ggb1.instance.setValue('time', 0);
        radio1.updateData({ selected: '1' });
        input4.updateData({ text: 'n=' });
        button4.updateData({ disabled: true });

        break;
      case '1':
        ggb1.instance.setValue('switch', true);
        ggb1.instance.setValue('time', 0);
        radio1.updateData({ selected: '0' });
        input4.updateData({ text: 'm=' });
        button4.updateData({ disabled: true });
    }
    ggb1.updateData({ last: radio2.data.selected });
  }
});

/*  autorun(() => {
  if(input4.data.text != input4.data.last) {
    button4.updateData({text: "Submit", disabled: !input4.data.text});
    input4.updateData({last: input4.data.text});
  };
});*/
const blankBox = '';
const textStem = `m=`;
const textStem2 = `n=`;
autorun(() => {
  if (
    input4.data.text == blankBox ||
    input4.data.text == textStem ||
    input4.data.text == textStem2
  ) {
    button4.updateData({ text: 'Submitted', disabled: true });
  } else {
    button4.updateData({ text: 'Submit', disabled: false });
  }
});

ggb1.instance.registerObjectUpdateListener('J', updateRight);

function updateRight() {
  if (ggb1.instance.getValue('x(J)') > 0) {
    button1.updateData({ visible: true });
  }
}

button1.on('click', () => {
  button1.updateData({ disabled: true });
  // console.log(ggb1.instance.getValue("switch"));
  // console.log(!/[abcdegfhijklopqrstuvwxyz]/.test(input4.data.text));
  if (ggb1.instance.getValue('switch') == 1) {
    if (!/[bdeghijklopqstuvwxyz]/.test(input4.data.text) == true) {
      const rawinput = input4.data.text;
      const ggbready =
        'f:' +
        rawinput.replace(/\\/g, '\\').replace(/m/, 'y').replace(/n/g, 'x');
      ggb1.instance.evalLaTeX(ggbready, 0);
      ggb1.instance.setAnimating('time', true);
      ggb1.instance.startAnimation();
    } else {
      ggb1.instance.setAnimating('time', false);
    }
  }
  if (ggb1.instance.getValue('switch') == 0) {
    if (!/[bdeghijklopqstuvwxyz]/.test(input4.data.text) == true) {
      const rawinput = input4.data.text;
      const ggbready =
        'f:' +
        rawinput.replace(/\\/g, '\\').replace(/n/, 'y').replace(/m/g, 'x');
      ggb1.instance.evalLaTeX(ggbready, 0);
      ggb1.instance.setAnimating('time', true);
      ggb1.instance.startAnimation();
    } else {
      ggb1.instance.setAnimating('time', false);
    }
  }
});

button4.on('click', () => {
  ggb1.updateData({ visible: true });
  text5.updateData({ visible: true });
  button1.updateData({ disabled: false });
  button4.updateData({ text: 'Submitted', disabled: true });
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
});

/*
{"compTotals":{"textbox":5,"geogebra":1,"separator":1,"button":1,"radiogroup":2,"submit":1},"stage":"Learn","lessonInfo":"6 M4 TE L23 - Graphs of Ratio Relationships","teacherView":false,"layout":"T layout"}
*/
