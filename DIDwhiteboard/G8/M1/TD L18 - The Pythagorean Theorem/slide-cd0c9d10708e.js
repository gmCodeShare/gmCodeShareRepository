const { ggb1, feedback1, text1, input1, text3, button1, text2 } = components;

button1.updateData({ align: 'right' });
text3.updateData({ align: 'right' });
ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  text2.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);

/*if(button1.data.hasBeenClicked == undefined) {
button1.updateData({'hasBeenClicked': false});
};

button1.on("click", animate);

function animate (){
  if (button1.data.hasBeenClicked) {
    button1.updateData({"text": "Try It"});
    button1.updateData({'hasBeenClicked': false});
    ggb1.instance.setValue("studentAnswer", 1);
      ggb1.instance.setAnimating("time", false);
      ggb1.instance.setValue("time", 0);
      ggb1.instance.stopAnimation();
  }else{
  const result = utils.math.evaluateLatex(input1.data.text);
 if (!result.error){
      button1.updateData({'hasBeenClicked': true});
      button1.updateData({disabled: true, text: "Reset"});
      ggb1.instance.evalLaTeX(`studentAnswer= ${input1.data.text}`);
      ggb1.instance.setAnimating("time", false);
      ggb1.instance.setValue("time", 0);
      ggb1.instance.setAnimating("time", true);
      ggb1.instance.startAnimation();
      let num = ggb1.instance.getValue("studentAnswer");
      let num2 = ggb1.instance.getValue("squaredAnswer");
      text2.updateData({visible: true, text: `$${num}$$^2$$=${num2}$`});
   }
 }
   }
   
autorun(() => {
  let time = ggb1.innerData["time"];
  if (ggb1.innerData["time"] == 1 && button1.data.hasBeenClicked) {
      button1.updateData({"disabled": false, "text": "Reset"});
  }
});*/

button1.on('click', () => {
  let input = boundIt(input1.data.text, 0, 600);
  if (input) {
    button1.updateData({ disabled: true });
    ggb1.instance.setValue('input', input);
    ggb1.instance.evalLaTeX(`studentAnswer= ${input}`);
    ggb1.instance.setAnimating('time', false);
    ggb1.instance.setValue('time', 0);
    ggb1.instance.setAnimating('time', true);
    ggb1.instance.startAnimation();
    let num = ggb1.instance.getValue('studentAnswer');
    let num2 = ggb1.instance.getValue('squaredAnswer');
    text2.updateData({ visible: true, text: `$${num}$$^2$$=${num2}$` });
  }
});

autorun(() => {
  if (ggb1.innerData['time'] == 1) {
    ggb1.instance.stopAnimation();
    button1.updateData({ disabled: false });
  }
});

autorun(() => {
  let trigger = input1.data.text;
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue('studentAnswer', 1);
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.stopAnimation();
  button1.updateData({ disabled: false });
});

function boundIt(inp, min, max) {
  const result = utils.math.evaluateLatex(inp);
  if (result.error) {
    //input1.updateData({ text: "0" }); // what should the text do/say if students input "cabbage"?
    return 0; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    input1.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    input1.updateData({ text: `${max}` });
    return max;
  }
  return result.value;
}

/*
{"compTotals":{"geogebra":1,"textbox":4,"input":1,"button":1},"stage":"Learn","lessonInfo":"8 M1 TD L18 - The Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
