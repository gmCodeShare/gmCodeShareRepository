const {
  ggb1,
  feedback,
  cc_sharewithclass_3e9fc0209643_textbox1,
  cc_sharewithclass_3e9fc0209643_input1: shareInput1,
  cc_sharewithclass_3e9fc0209643_button1: shareButton1,
  cc_sharewithclass_3e9fc0209643_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setSize(590, 590);
shareButton1.updateData({ align: 'right' });

const id1 = 'slide-bcd29a068199';
const id2 = 'slide-684a38e253ee';
const id3 = 'slide-a790d5267a64';

let defPrevGGB1 = {
  innerData: { addend1: 0, addend2: 0, addendSum: 0 },
};

let previous1 = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !previous1
  ? false
  : !Object.keys(previous1).includes('innerData')
  ? false
  : !Object.keys(previous1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  previous1 = defPrevGGB1;
}

let previous2 = getFromSlide(id2, 'ggb1', false) || false; // don't forget to change slide id

let id2HasData = !previous2
  ? false
  : !Object.keys(previous2).includes('innerData')
  ? false
  : !Object.keys(previous2.innerData).length
  ? false
  : true;

if (!id2HasData) {
  previous2 = defPrevGGB1;
}

let previous3 = getFromSlide(id3, 'ggb1', false) || false; // don't forget to change slide id

let id3HasData = !previous3
  ? false
  : !Object.keys(previous3).includes('innerData')
  ? false
  : !Object.keys(previous3.innerData).length
  ? false
  : true;

if (!id3HasData) {
  previous3 = defPrevGGB1;
}

ggb1.instance.setValue('g1Addend', previous1.innerData['addend1']);
ggb1.instance.setValue('g1Sum', previous1.innerData['addendSum']);
ggb1.instance.setValue('g2Addend', previous2.innerData['addend1']);
ggb1.instance.setValue('g2Sum', previous2.innerData['addendSum']);
ggb1.instance.setValue('g3Addend', previous3.innerData['addend1']);
ggb1.instance.setValue('g3Sum', previous3.innerData['addendSum']);

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"7 M2 TA L02 - Adding Integers","teacherView":false,"layout":"two col"}
*/
