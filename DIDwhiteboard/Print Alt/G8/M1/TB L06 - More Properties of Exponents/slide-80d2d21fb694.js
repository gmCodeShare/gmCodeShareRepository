const { separator2, text1, separator4, text2, separator3, select1 } =
  components;

slide.on('firstload', () => {
  text2.updateData({ visible: false });
});
text2.updateData({ visibilityBehavior: 'hide' });
select1.on('change', ({ selected }) => {
  if (select1.data.selected.includes('0')) {
    //text1.updateData({text:`###### $\\Huge{(5^2)^6=5^{2\\cdot 6}}$`});
    text2.updateData({ visible: true });
  }
  if (select1.data.selected.includes('1')) {
    text2.updateData({ visible: false });
    //text1.updateData({text:`###### $\\Huge{(x^m)^n=x^{m\\cdot n}}$`});
  }
});

/*
{"compTotals":{"separator":3,"textbox":2,"select":1},"stage":"Learn","lessonInfo":"8 M1 TB L06 - Print Alt: More Properties of Exponents","teacherView":true,"layout":"one col"}
*/
