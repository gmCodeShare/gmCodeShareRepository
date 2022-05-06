const {
  text1,
  text2,
  separator1,
  text3,
  select1,
  text5,
  select3,
  text7,
  select4,
  text9,
  select5,
  feedback,
  text4,
  select2,
  text6,
  select6,
  text8,
  select7,
  text10,
  select8,
} = components;

slide.on("firstload", () => {
  select2.setVisible(false);
  select3.setVisible(false);
  select4.setVisible(false);
  select5.setVisible(false);
  select6.setVisible(false);
  select7.setVisible(false);
  select8.setVisible(false);
  text4.updateData({ visible: false });
  text5.updateData({ visible: false });
  text6.updateData({ visible: false });
  text7.updateData({ visible: false });
  text8.updateData({ visible: false });
  text9.updateData({ visible: false });
  text10.updateData({ visible: false });
});

select1.on("change", ({ selected }) => {
  if (select1.data.selected.includes("1") && select4.data.selected.length) {
    select5.setVisible(true);
    text9.updateData({ visible: true });
  } else {
    select5.setVisible(false);
    text9.updateData({ visible: false });
  }
});
select1.on("change", ({ selected }) => {
  select3.setVisible(true);
  text5.updateData({ visible: true });
});
select3.on("change", ({ selected }) => {
  select4.setVisible(true);
  text7.updateData({ visible: true });
});

select4.on("change", ({ selected }) => {
  if (select1.data.selected.includes("1") && select4.data.selected.length) {
    select5.setVisible(true);
    text9.updateData({ visible: true });
  } else {
    select2.setVisible(true);
    text4.updateData({ visible: true });
  }
});

select5.on("change", ({ selected }) => {
  select2.setVisible(true);
  text4.updateData({ visible: true });
});

select2.on("change", ({ selected }) => {
  select6.setVisible(true);
  text6.updateData({ visible: true });
  if (select2.data.selected.includes("1") && select7.data.selected.length) {
    select8.setVisible(true);
    text10.updateData({ visible: true });
  } else {
    select8.setVisible(false);
    text10.updateData({ visible: false });
  }
});

select6.on("change", ({ selected }) => {
  select7.setVisible(true);
  text8.updateData({ visible: true });
});

select7.on("change", ({ selected }) => {
  if (select2.data.selected.includes("1") && select7.data.selected.length) {
    select8.setVisible(true);
    text10.updateData({ visible: true });
  } else {
    select8.setVisible(false);
    text10.updateData({ visible: false });
  }
});

let num11;
let num12;
let num13;
let num21;
let num22;
let num23;

var first1 = [
  "-2x^2",
  "4",
  "-\\frac{7}{2}x",
  "0.4x",
  "-3",
  "x^2",
  "5x",
  "-0.1x^2",
];
var first2 = [
  "+16",
  "+\\frac{2}{3}x",
  "-1.9",
  "-x^2",
  "+7.5",
  "+2x",
  "+\\frac{1}{2}x^2",
  "-5",
];
var first3 = [
  "+3x^2",
  "-8",
  "-3.5x",
  "+\\frac{5}{4}x^2",
  "+3",
  "+x",
  "-6x^2",
  "+\\frac{3}{2}",
];
var second1 = [
  "-2x^2",
  "4",
  "-\\frac{7}{2}x",
  "0.4x",
  "-3",
  "x^2",
  "5x",
  "-0.1x^2",
];
var second2 = [
  "+16",
  "+\\frac{2}{3}x",
  "-1.9",
  "-x^2",
  "+7.5",
  "+2x",
  "+\\frac{1}{2}x^2",
  "-5",
];
var second3 = [
  "+3x^2",
  "-8",
  "-3.5x",
  "+\\frac{5}{4}x^2",
  "+3",
  "+x",
  "-6x^2",
  "+\\frac{3}{2}",
];

autorun(() => {
  let num11 = first1[select3.data.selected];
  let num12 = first2[select4.data.selected];
  let num13 = first3[select5.data.selected];
  let num21 = second1[select6.data.selected];
  let num22 = second2[select7.data.selected];
  let num23 = second3[select8.data.selected];
  if (!num11) {
    num11 = "\\Box";
  }
  if (!num12) {
    num12 = "+\\Box";
  }
  if (!num13) {
    num13 = "+\\Box";
  }
  if (!num21) {
    num21 = "\\Box";
  }
  if (!num22) {
    num22 = "+\\Box";
  }
  if (!num23) {
    num23 = "+\\Box";
  }
  if (select1.data.selected.includes("0")) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12})(\\text{2nd expression})$`,
    });
  }

  if (select1.data.selected.includes("1")) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12}${num13})(\\text{2nd expression})$`,
    });
  }
  if (
    select2.data.selected.includes("0") &&
    select1.data.selected.includes("0")
  ) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12})(${num21}${num22})$`,
    });
  }

  if (
    select2.data.selected.includes("1") &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12}${num13})(${num21}${num22}${num23})$`,
    });
  }
  if (
    select2.data.selected.includes("1") &&
    select1.data.selected.includes("0")
  ) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12})(${num21}${num22}${num23})$`,
    });
  }
  if (
    select2.data.selected.includes("0") &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12}${num13})(${num21}${num22})$`,
    });
  }
  if (
    select2.data.selected.includes("1") &&
    select1.data.selected.includes("1")
  ) {
    text2.updateData({
      text: `Your entry: $(${num11}${num12}${num13})(${num21}${num22}${num23})$`,
    });
  }
});

/*  select2.setVisible(false);
  text4.updateData({visible: false});  
  select6.setVisible(false);
  text6.updateData({visible: false}); 
  select7.setVisible(false);
  text8.updateData({visible: false}); 
  select8.setVisible(false);
  text10.updateData({visible: false}); */

/*
{"compTotals":{"textbox":11,"separator":1,"select":8},"stage":"Learn","lessonInfo":"9 M1 TA L05 - Multiplying Polynomial Expressions","teacherView":false,"layout":"T layout"}
*/
