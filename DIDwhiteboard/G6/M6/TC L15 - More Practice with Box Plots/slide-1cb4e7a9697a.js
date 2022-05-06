const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ con: 0 });
  feedback1.updateData({ flo: 0 });
  feedback1.updateData({ wis: 0 });
  feedback1.updateData({ penn: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let connecticut = feedback1.data.con;
  let florida = feedback1.data.flo;
  let wisconsin = feedback1.data.wis;
  let pennsylvania = feedback1.data.penn;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 0) {
    connecticut = 1;
  } else {
    connecticut = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 2) {
    florida = 1;
  } else {
    florida = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 1) {
    wisconsin = 1;
  } else {
    wisconsin = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 3) {
    pennsylvania = 1;
  } else {
    pennsylvania = 0;
  }
  total = connecticut + florida + wisconsin + pennsylvania;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
