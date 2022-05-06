const {
  select1,
  cc_sharewithclass_eead1b6ed932_textbox1: shareText1,
  cc_sharewithclass_eead1b6ed932_input1: shareInput1,
  cc_sharewithclass_eead1b6ed932_button1: shareButton1,
  cc_sharewithclass_eead1b6ed932_studentanswers1,
} = components;

let choiceVal;

select1.on('change', () => {
  var optionArray = [
    'I chose the cat because ',
    'I chose the dog because ',
    'I chose the parrot because ',
    'I chose the rabbit because ',
  ];
  if (select1.data.selected.length) {
    let chosen = select1.data.options[parseInt(select1.data.selected[0])].label;
    let sentStart = chosen.replace('.', ','); // in the example, choices were sentences
    shareInput1.updateData({ text: optionArray[select1.data.selected] });
  }
  if (select1.data.selected.includes('0')) {
    choiceVal = 1;
  }
  if (select1.data.selected.includes('1')) {
    choiceVal = 2;
  }
  if (select1.data.selected.includes('2')) {
    choiceVal = 3;
  }
  if (select1.data.selected.includes('3')) {
    choiceVal = 4;
  }
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-e8a367e5dc02', {
      choiceVal,
    });
  }
});

/*
{"compTotals":{"select":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
