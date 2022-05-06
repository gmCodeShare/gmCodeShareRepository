const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ nd: 0 });
  feedback1.updateData({ ari: 0 });
  feedback1.updateData({ oh: 0 });
  feedback1.updateData({ nh: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let northDakota = feedback1.data.nd;
  let arizona = feedback1.data.ari;
  let ohio = feedback1.data.oh;
  let newHampshire = feedback1.data.nh;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 1) {
    northDakota = 1;
  } else {
    northDakota = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 0) {
    arizona = 1;
  } else {
    arizona = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 3) {
    ohio = 1;
  } else {
    ohio = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 2) {
    newHampshire = 1;
  } else {
    newHampshire = 0;
  }
  total = northDakota + arizona + ohio + newHampshire;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
