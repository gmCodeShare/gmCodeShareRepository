const { sort1, feedback1 } = components;

slide.on('firstload', () => {
  feedback1.updateData({ nm: 0 });
  feedback1.updateData({ kent: 0 });
  feedback1.updateData({ tot: 0 });
});

let slide1Points =
  getFromSlide('slide-35f9b23d1a09', 'feedback1.data.tot', 0) || 0;
let slide2Points =
  getFromSlide('slide-c662bc4df24b', 'feedback1.data.tot', 0) || 0;
let slide3Points =
  getFromSlide('slide-12cb27d98c36', 'feedback1.data.tot', 0) || 0;
let slide4Points =
  getFromSlide('slide-843f74ed559e', 'feedback1.data.tot', 0) || 0;
let slide5Points =
  getFromSlide('slide-c2d635e7285f', 'feedback1.data.tot', 0) || 0;
let slide6Points =
  getFromSlide('slide-e500abd6c76f', 'feedback1.data.tot', 0) || 0;
let slide7Points =
  getFromSlide('slide-1cb4e7a9697a', 'feedback1.data.tot', 0) || 0;
let slide8Points =
  getFromSlide('slide-5dd8b9793ef0', 'feedback1.data.tot', 0) || 0;
let slide9Points =
  getFromSlide('slide-e08c0cae6b87', 'feedback1.data.tot', 0) || 0;
let slide10Points =
  getFromSlide('slide-8e4556404c46', 'feedback1.data.tot', 0) || 0;
let slide11Points =
  getFromSlide('slide-9eb3acc74f53', 'feedback1.data.tot', 0) || 0;
let slide12Points =
  getFromSlide('slide-bb739a0cde9d', 'feedback1.data.tot', 0) || 0;
let slideTotal =
  slide1Points +
  slide2Points +
  slide3Points +
  slide4Points +
  slide5Points +
  slide6Points +
  slide7Points +
  slide8Points +
  slide9Points +
  slide10Points +
  slide11Points +
  slide12Points;

sort1.on('change', ({ assigned }) => {
  let newMexico = feedback1.data.nm;
  let kentucky = feedback1.data.kent;
  let total = feedback1.data.tot;
  if (assigned.category_0 && assigned.category_0[0] == 1) {
    newMexico = 1;
  } else {
    newMexico = 0;
  }
  if (assigned.category_1 && assigned.category_1[0] == 0) {
    kentucky = 1;
  } else {
    kentucky = 0;
  }
  total = newMexico + kentucky + slideTotal;
  feedback1.updateData({ tot: total });
});

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-2f5efef9be15', { total: feedback1.data.tot });
  }
});

/*
{"compTotals":{"categorization":1,"textbox":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - More Practice with Box Plots","teacherView":false,"layout":"one col"}
*/
