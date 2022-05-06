const {
  ggb1,
  feedback1,
  text1,
  select1,
  button1,
  separator1,
  table1,
  cc_sharewithclass_57e66e67ff4e_textbox1,
  cc_sharewithclass_57e66e67ff4e_input1,
  cc_sharewithclass_57e66e67ff4e_button1,
  cc_sharewithclass_57e66e67ff4e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

var transform = 'translatetext';

slide.on('firstload', () => {
  button1.updateData({
    visible: true,
    text: 'Translate',
    align: 'left',
    selection: 1,
  });
  ggb1.instance.evalCommand('RunClickScript(translate)');
  ggb1.instance.setCoords('Q', 6, 0);
  transform = 'translatetext';
  select1.setVisible(false);
  table1.updateData({ visible: false });
  ggb1.instance.setValue('haloq', false);
  ggb1.instance.setFixed('P', true, false);
  ggb1.instance.setFixed('Q', true, false);
  ggb1.instance.setFixed('u', true, false);
});

ggb1.instance.registerObjectUpdateListener('flag', tableupdate);

function tableupdate() {
  if (ggb1.instance.getValue('flag')) {
    select1.unselectAll();
    select1.setVisible(true);
    button1.updateData({
      visible: true,
      text: 'Undo',
      align: 'right',
      selection: 4,
    });
    let oldRows = table1.data.rows;
    let newRow = [];
    let sampleCell = {
      math: false,
      value: ggb1.instance.getValueString(transform),
    };
    newRow.push(sampleCell);
    table1.updateData({ visible: true, rows: [...oldRows, [...newRow]] });
    ggb1.instance.setValue('flag', false);
  }
}

select1.on('change', ({ selected }) => {
  button1.updateData({ disabled: false });
  switch (selected[0]) {
    case '0':
      button1.updateData({
        visible: true,
        text: 'Translate',
        align: 'left',
        selection: 1,
      });
      ggb1.instance.evalCommand('RunClickScript(translate)');
      transform = 'translatetext';
      break;
    case '1':
      button1.updateData({
        visible: true,
        text: 'Reflect',
        align: 'left',
        selection: 2,
      });
      ggb1.instance.evalCommand('RunClickScript(reflect)');
      transform = 'reflecttext';
      break;
    case '2':
      button1.updateData({
        visible: true,
        text: 'Rotate',
        align: 'left',
        selection: 3,
      });
      ggb1.instance.evalCommand('RunClickScript(rotate)');
      transform = 'rotatetext';
  }
  select1.setVisible(false);
});

button1.on('click', () => {
  switch (button1.data.selection) {
    case 1:
      ggb1.instance.evalCommand('RunClickScript(animate)');
      button1.updateData({ disabled: true });
      break;
    case 2:
      ggb1.instance.evalCommand('RunClickScript(animate)');
      button1.updateData({ disabled: true });
      break;
    case 3:
      ggb1.instance.evalCommand('RunClickScript(animate)');
      button1.updateData({ disabled: true });
      break;
    case 4:
      ggb1.instance.evalCommand('RunClickScript(undo)');
      select1.unselectAll();
      let newRows = [...table1.data.rows];
      newRows.pop();
      table1.updateData({ rows: newRows });
      if (ggb1.innerData['count'] <= 2) {
        table1.updateData({ visible: false });
        button1.updateData({ visible: false });
      }
  }
});

/*

components.feedback1.updateData({visible: false});

var transform = "translatetext";

slide.on('firstload', () => {
  table1.updateData({visible: false});
  button1.updateData({visible: false, align: 'center'});
  select1.selectOption('0');
  select1.setVisible(false);
  ggb1.instance.evalCommand("RunClickScript(translate)");
  ggb1.instance.evalCommand("RunClickScript(animate)");
});

ggb1.instance.registerObjectUpdateListener("flag",tableupdate);

function tableupdate(){
  if(ggb1.instance.getValue("flag")){
  select1.setVisible(true);
  if(ggb1.innerData["count"] > 1){
    button1.updateData({visible: true, text: "Undo", align: "right", selection: 4});
  };
  select1.unselectAll();
  let oldRows = table1.data.rows;
  let newRow = [];
  let sampleCell = { math: false, value: ggb1.instance.getValueString(transform) };
  newRow.push(sampleCell);
  table1.updateData({ visible: true, rows: [...oldRows, [...newRow]] });
  ggb1.instance.setValue("flag",false);
};
};

select1.on('change', ({selected})=>{
switch(selected[0]){
  case "0":
  button1.updateData({visible: true, text: "Translate", align: "left", selection: 1});
  ggb1.instance.evalCommand("RunClickScript(translate)");
  transform = "translatetext";
  break;
  case "1":
  button1.updateData({visible: true, text: "Reflect", align: "left", selection: 2});
  ggb1.instance.evalCommand("RunClickScript(reflect)");
  transform = "reflecttext";
  break;
  case "2":
  button1.updateData({visible: true, text: "Rotate", align: "left", selection: 3});
  ggb1.instance.evalCommand("RunClickScript(rotate)");
  transform = "rotatetext";
};
select1.setVisible(false);
});

button1.on('click', ()=>{
switch(button1.data.selection){
  case 1:
    ggb1.instance.evalCommand("RunClickScript(animate)");
  break;
  case 2:
    ggb1.instance.evalCommand("RunClickScript(animate)");
  break;
  case 3:
    ggb1.instance.evalCommand("RunClickScript(animate)");
    break;
  case 4:
    ggb1.instance.evalCommand("RunClickScript(undo)");
    select1.unselectAll();
    let newRows = [...table1.data.rows];
    newRows.pop();
    table1.updateData({ rows: newRows });
    if(ggb1.innerData["count"] <= 2){
      button1.updateData({visible: false});
    };
};
});

*/

/*
{"compTotals":{"geogebra":1,"textbox":2,"select":1,"button":1,"separator":1,"table":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M2 TB L08 - Sequencing the Rigid Motions","teacherView":false,"layout":"two col"}
*/
