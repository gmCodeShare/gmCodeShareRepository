const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ ut: 0 });
  feedback1.updateData({ io: 0 });
  feedback1.updateData({ ala: 0 });
  feedback1.updateData({ miss: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let utah = feedback1.data.ut;
  let iowa = feedback1.data.io;
  let alabama = feedback1.data.ala;
  let missouri = feedback1.data.miss;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 3) {
    utah = 1;
  } else {
    utah = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 1) {
    iowa = 1;
  } else {
    iowa = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 0) {
    alabama = 1;
  } else {
    alabama = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 2) {
    missouri = 1;
  } else {
    missouri = 0;
  }
  total = utah + iowa + alabama + missouri;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
