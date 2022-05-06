const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ miss: 0 });
  feedback1.updateData({ ok: 0 });
  feedback1.updateData({ ri: 0 });
  feedback1.updateData({ wash: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let mississippi = feedback1.data.miss;
  let oklahoma = feedback1.data.ok;
  let rhodeIsland = feedback1.data.ri;
  let washington = feedback1.data.wash;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 3) {
    mississippi = 1;
  } else {
    mississippi = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 0) {
    oklahoma = 1;
  } else {
    oklahoma = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 1) {
    rhodeIsland = 1;
  } else {
    rhodeIsland = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 2) {
    washington = 1;
  } else {
    washington = 0;
  }
  total = mississippi + oklahoma + rhodeIsland + washington;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
