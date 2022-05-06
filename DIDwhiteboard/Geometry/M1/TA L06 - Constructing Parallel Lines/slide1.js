const { ggb1, ggb2, ggb3, select1 } = components;

slide.on('firstload', () => {
  select1.selectOption('0');
  ggb2.updateData({ visible: false });
  ggb3.updateData({ visible: false });
  ggb1.instance.setValue('showCopySegment', true);
  ggb2.instance.setValue('showBisectAngle', true);
  ggb3.instance.setValue('showPerpendicularBisector', true);
});

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);
ggb3.instance.setErrorDialogsActive(false);

ggb1.instance.setCustomToolBar('0|1|53|15|27|6');
ggb2.instance.setCustomToolBar('0|10|5|53|2|27|6');
ggb3.instance.setCustomToolBar('0|10|53|5|2|27|6');

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
});
