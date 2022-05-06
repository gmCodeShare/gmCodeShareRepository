const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ ala: 0 });
  feedback1.updateData({ ark: 0 });
  feedback1.updateData({ tenn: 0 });
  feedback1.updateData({ mon: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let alaska = feedback1.data.ala;
  let arkansas = feedback1.data.ark;
  let tennessee = feedback1.data.tenn;
  let montana = feedback1.data.mon;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 2) {
    alaska = 1;
  } else {
    alaska = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 0) {
    arkansas = 1;
  } else {
    arkansas = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 1) {
    tennessee = 1;
  } else {
    tennessee = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 3) {
    montana = 1;
  } else {
    montana = 0;
  }
  total = alaska + arkansas + tennessee + montana;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
