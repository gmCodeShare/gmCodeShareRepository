const { ggb1, ggb2, ggb3, ggb4, select1 } = components;

slide.on('firstload', () => {
  select1.selectOption('0');
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: false });
  ggb4.updateData({ visible: false });
});

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);
ggb4.instance.setErrorDialogsActive(false);

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.updateData({ visible: true });
  } else {
    ggb1.updateData({ visible: false });
  }
  if (select1.data.selected.includes('1')) {
    ggb2.updateData({ visible: true });
  } else {
    ggb2.updateData({ visible: false });
  }
  if (select1.data.selected.includes('2')) {
    ggb3.updateData({ visible: true });
  } else {
    ggb3.updateData({ visible: false });
  }
  if (select1.data.selected.includes('3')) {
    ggb4.updateData({ visible: true });
  } else {
    ggb4.updateData({ visible: false });
  }
});
