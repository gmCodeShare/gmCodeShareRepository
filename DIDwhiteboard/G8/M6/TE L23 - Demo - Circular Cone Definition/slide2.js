const { ggb1, text1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  select1.selectOption('0');
});

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('cone', true);
    text1.updateData({ text: `Volume: $8\\pi\\approx25.13$ cubic units` });
  } else {
    ggb1.instance.setValue('cone', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('pyramid', true);
    text1.updateData({ text: `Volume: $32$ cubic units` });
  } else {
    ggb1.instance.setValue('pyramid', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('prism', true);
    text1.updateData({ text: `Volume: $96$ cubic units` });
  } else {
    ggb1.instance.setValue('prism', false);
  }
});
