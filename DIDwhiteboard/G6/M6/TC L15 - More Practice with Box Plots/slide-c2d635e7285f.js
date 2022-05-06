const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ sc: 0 });
  feedback1.updateData({ ore: 0 });
  feedback1.updateData({ lou: 0 });
  feedback1.updateData({ cal: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let southCarolina = feedback1.data.sc;
  let oregon = feedback1.data.ore;
  let louisiana = feedback1.data.lou;
  let california = feedback1.data.cal;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 1) {
    southCarolina = 1;
  } else {
    southCarolina = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 2) {
    oregon = 1;
  } else {
    oregon = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 3) {
    louisiana = 1;
  } else {
    louisiana = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 0) {
    california = 1;
  } else {
    california = 0;
  }
  total = southCarolina + oregon + louisiana + california;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
