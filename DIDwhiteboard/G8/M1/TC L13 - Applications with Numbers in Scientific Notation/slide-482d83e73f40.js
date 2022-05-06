const { image1, feedback, textDisplay1, separator1, select1, button1 } =
  components;

slide.on('firstload', () => {
  button1.updateData({
    align: 'right',
    disabled: 'true',
  });
});

select1.on('change', (selected) => {
  button1.updateData({
    text: 'Submit',
    disabled: !!selected.length,
  });
  button1.updateData({ selection: [...selectedLabelsOrdered(select1)] });
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

function selectedLabelsOrdered(selectComponent) {
  let selected = [...selectComponent.data.selected];
  // create an array out of the labels for each element of the selected array
  return selected.map(
    (index) => selectComponent.data.options[parseInt(index)].label
  );
}

/*
{"compTotals":{"uploaded-image":1,"textbox":2,"separator":1,"select":1,"button":1},"stage":"Launch","lessonInfo":"8 M1 TC L13 - Applications with Numbers in Scientific Notation","teacherView":false,"layout":"two col"}
*/
