const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ wv: 0 });
  feedback1.updateData({ ill: 0 });
  feedback1.updateData({ nev: 0 });
  feedback1.updateData({ mass: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let westVirginia = feedback1.data.wv;
  let illinois = feedback1.data.ill;
  let nevada = feedback1.data.nev;
  let massachusetts = feedback1.data.mass;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 1) {
    westVirginia = 1;
  } else {
    westVirginia = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 2) {
    illinois = 1;
  } else {
    illinois = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 3) {
    nevada = 1;
  } else {
    nevada = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 0) {
    massachusetts = 1;
  } else {
    massachusetts = 0;
  }
  total = westVirginia + illinois + nevada + massachusetts;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
