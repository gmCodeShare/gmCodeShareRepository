const { text1, ggb2, feedback1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb2.instance.setErrorDialogsActive(false);

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    utils.RTS.sendData('slide-e209cf1e7a95', {
      thePoints: [
        // sending multiple points as an array of arrays (aka 2D matrix) tends to be nice and usable
        [...ggb1.innerData['A']],
        [...ggb1.innerData['B']],
      ],
    });
  }
});

/*
{"compTotals":{"textbox":2,"geogebra":2},"stage":"Launch","lessonInfo":"7 M1 TB L09 - Comparing Proportional Relationships​","teacherView":false,"layout":"T layout"}
*/
