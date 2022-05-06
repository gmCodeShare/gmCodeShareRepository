const { ggb1, feedback, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const prevData =
  getFromSlide('slide-6f794219a5b6', 'ggb1.innerData', false) || false;
let prevPaint;
if (prevData) {
  prevPaint = prevData['totalPaint'] || 0;
}

if (prevPaint) {
  ggb1.updateInnerData({
    totalCyan: prevData['totalCyan'],
    totalMagenta: prevData['totalMagenta'],
    totalYellow: prevData['totalYellow'],
    totalBlack: prevData['totalBlack'],
    totalWhite: prevData['totalWhite'],
  });
  ggb1.updateInnerData({ painting: 0 });
  /*let paintArray = ["totalCyan", "totalMagenta", "totalYellow", "totalBlack", "totalWhite"];
  for(let i = 0, L = paintArray.length; i < L; i++) {
    ggb1.instance.setFixed(paintArray[i], true, false);
  };
  ggb1.instance.evalCommand("UpdateConstruction()");*/
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

autorun(() => {
  let entries = [
    table1.getCell(0, 1).value,
    table1.getCell(1, 1).value,
    table1.getCell(2, 1).value,
    table1.getCell(3, 1).value,
    table1.getCell(4, 1).value,
  ];
  //console.log(entries);
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      align: 'right',
      text: 'Submit',
      disabled: !(
        entries[0] != '%' &&
        entries[1] != '%' &&
        entries[2] != '%' &&
        entries[3] != '%' &&
        entries[4] != '%'
      ),
    });
    table1.updateData({ last: entries });
  }
});

button1.on('click', () => {
  button1.updateData({ text: 'Submitted', disabled: true });
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"7 M5 TE L22 - Making Mixtures","teacherView":false,"layout":"two col"}
*/
