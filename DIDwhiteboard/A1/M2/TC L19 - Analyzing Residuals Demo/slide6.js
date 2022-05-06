const { ggb1, ggb2, text1, select1, table1, table2, table3, table4 } =
  components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  table2.updateData({ visible: false });
  table1.updateData({ visible: true });
  table3.updateData({ visible: false });
  table4.updateData({ visible: false });
  ggb2.updateData({ visible: false });
});

autorun(() => {
  if (!select1.data.selected.length) {
    ggb1.instance.setValue('lineOfBestFit', false);
    ggb1.instance.setValue('residuals', false);
    ggb1.instance.setValue('equation', false);
    ggb1.instance.setValue('r', false);
    ggb2.instance.setValue('residualPlot', false);
  }
  if (select1.data.selected.includes('0')) {
    ggb1.instance.setValue('lineOfBestFit', true);
  } else {
    ggb1.instance.setValue('lineOfBestFit', false);
  }
  if (select1.data.selected.includes('1')) {
    ggb1.instance.setValue('lineOfBestFit', true);
    ggb1.instance.setValue('residuals', true);
  } else {
    ggb1.instance.setValue('residuals', false);
  }
  if (select1.data.selected.includes('2')) {
    ggb1.instance.setValue('equation', true);
  } else {
    ggb1.instance.setValue('equation', false);
  }
  if (select1.data.selected.includes('3')) {
    ggb1.instance.setValue('r', true);
  } else {
    ggb1.instance.setValue('r', false);
  }
  if (select1.data.selected.includes('4')) {
    ggb2.instance.setValue('residualPlot', true);
    ggb2.updateData({ visible: true });
  } else {
    ggb2.instance.setValue('residualPlot', false);
    ggb2.updateData({ visible: false });
  }
});

autorun(() => {
  if (select1.data.selected.includes('1')) {
    if (ggb1.instance.getValue('fake')) {
      table2.updateData({ visible: true });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: false });
    } else {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: true });
    }
  }
  if (!select1.data.selected.includes('1')) {
    if (ggb1.instance.getValue('fake')) {
      table2.updateData({ visible: false });
      table1.updateData({ visible: true });
      table3.updateData({ visible: false });
      table4.updateData({ visible: false });
    } else {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: true });
      table4.updateData({ visible: false });
    }
  }
});

utils.RTS.on('datachange', 'slide-d6ce052ba84a', (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand('SetValue(data,{})');
  for (var i = 0, L = table3.data.rows.length; i < L; i++) {
    table3.deleteRow(0);
  }
  for (var i = 0, L = table4.data.rows.length; i < L; i++) {
    table4.deleteRow(0);
  }
  const lastRegister = discardOldResponses(register).reverse();
  lastRegister.forEach(({ data, info }) => {
    const {
      num,
      num2,
      num3,
      num4,
      num5,
      num6,
      num7,
      num8,
      num9,
      num10,
      num11,
      num12,
      num13,
      num14,
      num15,
      num16,
      num17,
      num18,
      num19,
      num20,
      num21,
      num22,
      num23,
      num24,
      num25,
      num26,
      num27,
      num28,
      num29,
      num30,
      num31,
      num32,
      num33,
      num34,
      num35,
      num36,
      num37,
      num38,
      num39,
      num40,
    } = data;
    if (num > 0 && num2 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num + ',' + num2 + ')))'
      );
    }
    if (num3 > 0 && num4 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num3 + ',' + num4 + ')))'
      );
    }
    if (num5 > 0 && num6 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num5 + ',' + num6 + ')))'
      );
    }
    if (num7 > 0 && num8 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num7 + ',' + num8 + ')))'
      );
    }
    if (num9 > 0 && num10 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num9 + ',' + num10 + ')))'
      );
    }
    if (num11 > 0 && num12 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num11 + ',' + num12 + ')))'
      );
    }
    if (num13 > 0 && num14 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num13 + ',' + num14 + ')))'
      );
    }
    if (num15 > 0 && num16 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num15 + ',' + num16 + ')))'
      );
    }
    if (num17 > 0 && num18 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num17 + ',' + num18 + ')))'
      );
    }
    if (num19 > 0 && num20 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num19 + ',' + num20 + ')))'
      );
    }
    if (num21 > 0 && num22 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num21 + ',' + num22 + ')))'
      );
    }
    if (num23 > 0 && num24 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num23 + ',' + num24 + ')))'
      );
    }
    if (num25 > 0 && num26 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num25 + ',' + num26 + ')))'
      );
    }
    if (num27 > 0 && num28 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num27 + ',' + num28 + ')))'
      );
    }
    if (num29 > 0 && num30 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num29 + ',' + num30 + ')))'
      );
    }
    if (num31 > 0 && num32 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num31 + ',' + num32 + ')))'
      );
    }
    if (num33 > 0 && num34 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num33 + ',' + num34 + ')))'
      );
    }
    if (num35 > 0 && num36 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num35 + ',' + num36 + ')))'
      );
    }
    if (num37 > 0 && num38 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num37 + ',' + num38 + ')))'
      );
    }
    if (num39 > 0 && num40 > 0) {
      ggb1.instance.evalCommand(
        'SetValue(data,Append(data,(' + num39 + ',' + num40 + ')))'
      );
    }
    ggb1.instance.setValue('fake', false);
    ggb2.instance.setValue('fake', false);
    table1.updateData({ visible: false });
    table2.updateData({ visible: false });
    table3.updateData({ visible: true });
    if (select1.data.selected.includes('1')) {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: false });
      table4.updateData({ visible: true });
    }
    if (!select1.data.selected.includes('1')) {
      table2.updateData({ visible: false });
      table1.updateData({ visible: false });
      table3.updateData({ visible: true });
      table4.updateData({ visible: false });
    }
  });
  for (var i = 1; i < 41; i++) {
    if (ggb1.instance.getValue('x' + i) > 0) {
      table3.addRow();
      table4.addRow();
      ggb2.instance.setValue('x' + i, ggb1.instance.getValue('x' + i));
      ggb2.instance.setValue(
        'resVal' + i,
        ggb1.instance.getValue('resVal' + i)
      );
      table3.updateCell(i - 1, 0, {
        value: `${ggb1.instance.getValue('x' + i)}`,
        editable: false,
      });
      table3.updateCell(i - 1, 1, {
        value: `${ggb1.instance.getValue('y' + i)}`,
        editable: false,
      });
      table4.updateCell(i - 1, 0, {
        value: `${ggb1.instance.getValue('x' + i)}`,
        editable: false,
      });
      table4.updateCell(i - 1, 1, {
        value: `${ggb1.instance.getValue('y' + i)}`,
        editable: false,
      });
      table4.updateCell(i - 1, 2, {
        value: `${
          Math.round(ggb1.instance.getValue('resVal' + i) * 1000) / 1000
        }`,
        editable: false,
      });
    }
  }
  if (ggb1.instance.getValue('maxX') > 2700) {
    ggb1.instance.setValue('xMax', ggb1.instance.getValue('maxX') + 500);
  } else {
    ggb1.instance.setValue('xMax', 2700);
  }
  if (ggb1.instance.getValue('maxY') > 430) {
    ggb1.instance.setValue('yMax', ggb1.instance.getValue('maxY') + 500);
  } else {
    ggb1.instance.setValue('yMax', 430);
  }
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}
