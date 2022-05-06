const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ mic: 0 });
  feedback1.updateData({ ver: 0 });
  feedback1.updateData({ geor: 0 });
  feedback1.updateData({ ida: 0 });
  feedback1.updateData({ tot: 0 });
});

sort1.on('change', ({ assigned }) => {
  let michigan = feedback1.data.mic;
  let vermont = feedback1.data.ver;
  let georgia = feedback1.data.geor;
  let idaho = feedback1.data.ida;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 3) {
    michigan = 1;
  } else {
    michigan = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 1) {
    vermont = 1;
  } else {
    vermont = 0;
  }
  if (assigned.category_2 && assigned.category_2[0] == 0) {
    georgia = 1;
  } else {
    georgia = 0;
  }
  if (assigned.category_3 && assigned.category_3[0] == 2) {
    idaho = 1;
  } else {
    idaho = 0;
  }
  total = michigan + vermont + georgia + idaho;
  feedback1.updateData({ tot: total });
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
