const { ggb1, ggb2, text1, select1, table1, table2 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

autorun(() => {
  if (!select1.data.selected.length) {
    ggb1.instance.setVisible('lineOfBestFit', false);
    ggb1.instance.setValue('residuals', false);
    ggb1.instance.setVisible('equationText', false);
    ggb1.instance.setVisible('text2', false);
    ggb2.instance.setValue('residualPlot', false);
  }
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setVisible('lineOfBestFit', true);
  } else {
    ggb1.instance.setVisible('lineOfBestFit', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('residuals', true);
    ggb1.instance.setVisible('lineOfBestFit', true);
    table1.updateData({ visible: false });
    table2.updateData({ visible: true });
  } else {
    ggb1.instance.setValue('residuals', false);
    table1.updateData({ visible: true });
    table2.updateData({ visible: false });
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setVisible('equationText', true);
  } else {
    ggb1.instance.setVisible('equationText', false);
  }
  if (select1.data.selected.includes('3')) {
    ggb1.instance.setVisible('text2', true);
  } else {
    ggb1.instance.setVisible('text2', false);
  }
  if (select1.data.selected.includes('4')) {
    ggb2.instance.setValue('residualPlot', true);
    ggb2.updateData({ visible: true });
  } else {
    ggb2.instance.setValue('residualPlot', false);
    ggb2.updateData({ visible: false });
  }
});
