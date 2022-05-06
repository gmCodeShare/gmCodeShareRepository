const { ggb1, feedback1, text1, select1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

select1.on("change", (selected) => {
  if (select1.data.selected.length > 1) {
    select1.unselectOption(select1.data.selected[0]);
  }
  button1.updateData({
    text: "Submit",
    disabled: !select1.data.selected.length,
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"select":1,"button":1},"stage":"Launch","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
