const {
  ggb1,
  feedback1,
  cc_sharewithclass_593bb5df692e_textbox1,
  cc_sharewithclass_593bb5df692e_input1,
  cc_sharewithclass_593bb5df692e_button1,
  cc_sharewithclass_593bb5df692e_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

id1 = 'slide-295482c1ba3e';
id2 = 'slide-b1568c6452f4';
id3 = 'slide-97f63c58abd1';

let oldTable = getFromSlide(id1, 'table1', false) || false;

let data = !oldTable.data?.rows[1][0]?.value
  ? 0
  : oldTable.data.rows[1][0].value;

ggb1.instance.setValue('data1Beats', data);

let estimation =
  getFromSlide(id2, `cc_sharewithclass_e2f97ee48127_input1.data.text`, false) ||
  false;

ggb1.instance.setValue('estimation1Beats', estimation);

let estimation2 =
  getFromSlide(id3, `cc_sharewithclass_e2f97ee48127_input1.data.text`, false) ||
  false;

ggb1.instance.setValue('estimation2Beats', estimation2);

let oldTable2 = getFromSlide(id1, 'table2', false) || false;

let data2 = !oldTable2.data?.rows[1][0]?.value
  ? 0
  : oldTable2.data.rows[1][0].value;

ggb1.instance.setValue('data2Beats', data2);

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
