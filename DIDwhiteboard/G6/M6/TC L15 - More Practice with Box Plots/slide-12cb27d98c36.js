const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ kan: 0 });
  feedback1.updateData({ tex: 0 });
  feedback1.updateData({ vir: 0 });
  feedback1.updateData({ mar: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let kansas = feedback1.data.kan;
  let texas = feedback1.data.tex;
  let virginia = feedback1.data.vir;
  let maryland = feedback1.data.mar;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 2) {
    kansas = 1;
  } else {
    kansas = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 3) {
    texas = 1;
  } else {
    texas = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 1) {
    virginia = 1;
  } else {
    virginia = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 0) {
    maryland = 1;
  } else {
    maryland = 0;
  }
  total = kansas + texas + virginia + maryland;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
