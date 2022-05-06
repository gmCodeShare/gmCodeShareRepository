const { ggb1, buttonGroup1, feedback } = components;

//buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);
ggb1.instance.setVisible('fraction', false);
//ggb1.instance.registerObjectUpdateListener("fraction", updateRight);

/*function updateRight() {
buttonGroup1.updateSingleButton({ disabled: false}, 1);
if(ggb1.instance.getValue("fraction")==5&&ggb1.instance.getValue("showRecs")==true){
buttonGroup1.updateSingleButton({ disabled: false}, 2);
}else{
buttonGroup1.updateSingleButton({ disabled: true }, 2);
}
}*/

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('fraction', 5);
  ggb1.instance.evalCommand('RunClickScript(button1)');
  ggb1.instance.setVisible('fraction', false);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  ggb1.instance.setVisible('fraction', false);
});
buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  ggb1.instance.setVisible('fraction', false);
});

/*
{"compTotals":{"geogebra":1,"buttongroup":1,"textbox":1},"stage":"Learn","lessonInfo":"6 M2 TE L17 - PA Partial Quotients","teacherView":false,"layout":"one col"}
*/
