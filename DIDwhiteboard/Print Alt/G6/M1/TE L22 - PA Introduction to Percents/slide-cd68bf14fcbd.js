const { ggb1, separator1, buttonGroup1, table1 } = components;

ggb1.instance.setErrorDialogsActive(false);

table1.updateCol(0, { math: true, editable: false });

/*autorun(() => {
if(table1.getCell(0,1).value !=="" && table1.getCell(0,2).value !=="" && table1.getCell(0,3).value !=="" && table1.getCell(1,1).value !=="" && table1.getCell(1,2).value !=="" && table1.getCell(1,3).value !=="" && table1.getCell(2,1).value !==""&& table1.getCell(2,2).value !=="" && table1.getCell(2,3).value !==""  && table1.getCell(3,1).value !=="" && table1.getCell(3,2).value !=="" && table1.getCell(3,3).value !=="" && table1.getCell(4,1).value !=="" && table1.getCell(4,2).value !==""&& table1.getCell(4,3).value !==""  ){
button1.updateData({disabled: false});
button1.updateData({text: "Submit"});
}
});*/

buttonGroup1.on('click:1', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  if (ggb1.instance.getValue('showOneTenth') == true) {
    buttonGroup1.updateSingleButton({ color: 'secondary' }, 1);
  } else {
    buttonGroup1.updateSingleButton({ color: 'primary' }, 1);
  }
  buttonGroup1.updateSingleButton({ color: 'primary' }, 2);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 3);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 4);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 5);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 6);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.evalCommand('RunClickScript(button2)');
  if (ggb1.instance.getValue('showOneFourth') == true) {
    buttonGroup1.updateSingleButton({ color: 'secondary' }, 2);
  } else {
    buttonGroup1.updateSingleButton({ color: 'primary' }, 2);
  }
  buttonGroup1.updateSingleButton({ color: 'primary' }, 1);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 3);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 4);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 5);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 6);
});

buttonGroup1.on('click:3', () => {
  ggb1.instance.evalCommand('RunClickScript(button3)');
  if (ggb1.instance.getValue('showThreeFifths') == true) {
    buttonGroup1.updateSingleButton({ color: 'secondary' }, 3);
  } else {
    buttonGroup1.updateSingleButton({ color: 'primary' }, 3);
  }
  buttonGroup1.updateSingleButton({ color: 'primary' }, 2);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 1);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 4);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 5);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 6);
});

buttonGroup1.on('click:4', () => {
  ggb1.instance.evalCommand('RunClickScript(button4)');
  if (ggb1.instance.getValue('showSevenTwentiths') == true) {
    buttonGroup1.updateSingleButton({ color: 'secondary' }, 4);
  } else {
    buttonGroup1.updateSingleButton({ color: 'primary' }, 4);
  }
  buttonGroup1.updateSingleButton({ color: 'primary' }, 2);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 3);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 1);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 5);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 6);
});

buttonGroup1.on('click:5', () => {
  ggb1.instance.evalCommand('RunClickScript(button5)');
  if (ggb1.instance.getValue('showSixTeenTwentyFifths') == true) {
    buttonGroup1.updateSingleButton({ color: 'secondary' }, 5);
  } else {
    buttonGroup1.updateSingleButton({ color: 'primary' }, 5);
  }
  buttonGroup1.updateSingleButton({ color: 'primary' }, 2);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 3);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 4);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 1);
  buttonGroup1.updateSingleButton({ color: 'primary' }, 6);
});

buttonGroup1.on('click:6', () => {
  ggb1.instance.evalCommand('RunClickScript(buttonGrid)');
  if (ggb1.instance.getValue('gridLines') == true) {
    buttonGroup1.updateSingleButton({ color: 'secondary' }, 6);
  } else {
    buttonGroup1.updateSingleButton({ color: 'primary' }, 6);
  }
});

/*select1.on('change', (selected) => {
select2.unselectAll();
select3.unselectAll();
select4.unselectAll();
select5.unselectAll();
select6.unselectAll();
if(select1.data.selected.includes("0")){
ggb1.instance.evalCommand("RunClickScript(button1)");
}
if(select1.data.selected.includes("1")&&ggb1.instance.getValue("showOneTenth")==true){
ggb1.instance.evalCommand("RunClickScript(button1)");
}
});

select2.on('change', (selected) => {
select1.unselectAll();
select3.unselectAll();
select4.unselectAll();
select5.unselectAll();
select6.unselectAll();
if(select2.data.selected.includes("0")){
ggb1.instance.evalCommand("RunClickScript(button2)");
}
if(select2.data.selected.includes("1")&&ggb1.instance.getValue("showOneFourth")==true){
ggb1.instance.evalCommand("RunClickScript(button2)");
}
});

select3.on('change', (selected) => {
select1.unselectAll();
select2.unselectAll();
select4.unselectAll();
select5.unselectAll();
select6.unselectAll();
if(select3.data.selected.includes("0")){
ggb1.instance.evalCommand("RunClickScript(button3)");
}
if(select3.data.selected.includes("1")&&ggb1.instance.getValue("showThreeFifths")==true){
ggb1.instance.evalCommand("RunClickScript(button3)");
}
});

select4.on('change', (selected) => {
select1.unselectAll();
select2.unselectAll();
select3.unselectAll();
select5.unselectAll();
select6.unselectAll();
if(select4.data.selected.includes("0")){
ggb1.instance.evalCommand("RunClickScript(button4)");
}
if(select4.data.selected.includes("1")&&ggb1.instance.getValue("showSevenTwentiths")==true){
ggb1.instance.evalCommand("RunClickScript(button4)");
}
});

select5.on('change', (selected) => {
select1.unselectAll();
select2.unselectAll();
select4.unselectAll();
select3.unselectAll();
select6.unselectAll();
if(select5.data.selected.includes("0")){
ggb1.instance.evalCommand("RunClickScript(button5)");
}
if(select5.data.selected.includes("1")&&ggb1.instance.getValue("showSixTeenTwentyFifths")==true){
ggb1.instance.evalCommand("RunClickScript(button5)");
}
});

select6.on('change', (selected) => {
select1.unselectAll();
select2.unselectAll();
select4.unselectAll();
select5.unselectAll();
select3.unselectAll();
if(select6.data.selected.includes("0")){
ggb1.instance.evalCommand("RunClickScript(buttonGrid)");
}
if(select6.data.selected.includes("1")&&ggb1.instance.getValue("gridLines")==true){
ggb1.instance.evalCommand("RunClickScript(buttonGrid)");
}
});*/

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"table":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - PA Introduction to Percents","teacherView":true,"layout":"two col"}
*/
