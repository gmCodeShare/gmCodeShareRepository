const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ nj: 0 });
  feedback1.updateData({ wy: 0 });
  feedback1.updateData({ ma: 0 });
  feedback1.updateData({ nc: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let newJersey = feedback1.data.nj;
  let wyoming = feedback1.data.wy;
  let maine = feedback1.data.ma;
  let northCarolina = feedback1.data.nc;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 3) {
    newJersey = 1;
  } else {
    newJersey = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 2) {
    wyoming = 1;
  } else {
    wyoming = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 1) {
    maine = 1;
  } else {
    maine = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 0) {
    northCarolina = 1;
  } else {
    northCarolina = 0;
  }
  total = newJersey + wyoming + maine + northCarolina;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
