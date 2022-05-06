const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ neb: 0 });
  feedback1.updateData({ haw: 0 });
  feedback1.updateData({ ny: 0 });
  feedback1.updateData({ sd: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let nebraska = feedback1.data.neb;
  let hawaii = feedback1.data.haw;
  let newYork = feedback1.data.ny;
  let southDakota = feedback1.data.sd;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 1) {
    nebraska = 1;
  } else {
    nebraska = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 3) {
    hawaii = 1;
  } else {
    hawaii = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 2) {
    newYork = 1;
  } else {
    newYork = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 0) {
    southDakota = 1;
  } else {
    southDakota = 0;
  }
  total = nebraska + hawaii + newYork + southDakota;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
