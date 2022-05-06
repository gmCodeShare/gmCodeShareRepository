const { table1, button1, ggb1 } = components;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('movingCenterPoint', 30);
    ggb1.instance.setValue('xmin', 16.5);
    ggb1.instance.setValue('xmax', 43.5);
    ggb1.instance.setValue('sliderOptions', 30);
    button1.updateData({ disabled: true });

    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

ggb1.instance.registerObjectUpdateListener('sliderPoint', updateRight);

function updateRight() {
  if (ggb1.instance.getXcoord('sliderPoint') != 30 && count < 3) {
    button1.updateData({ disabled: false });
  }
}
let count = 0;
button1.on('click', () => {
  if (count <= 3) {
    count += 1;
  }
  console.log(count);
  if (count == 1) {
    if (ggb1.instance.getXcoord('sliderPoint') <= 30) {
      table1.updateCell(0, 0, {
        value: ggb1.instance.getXcoord('MovingPointPos'),
      });
    } else {
      table1.updateCell(0, 0, {
        value: ggb1.instance.getXcoord('MovingPointNeg'),
      });
    }
    table1.updateCell(0, 1, {
      value: ggb1.instance.getXcoord('sliderPoint'),
    });
  }
  if (count == 2) {
    if (ggb1.instance.getXcoord('sliderPoint') <= 30) {
      table1.updateCell(1, 0, {
        value: ggb1.instance.getXcoord('MovingPointPos'),
      });
    } else {
      table1.updateCell(1, 0, {
        value: ggb1.instance.getXcoord('MovingPointNeg'),
      });
    }
    table1.updateCell(1, 1, {
      value: ggb1.instance.getXcoord('sliderPoint'),
    });
  }
  if (count == 3) {
    if (ggb1.instance.getXcoord('sliderPoint') <= 30) {
      table1.updateCell(2, 0, {
        value: ggb1.instance.getXcoord('MovingPointPos'),
      });
    } else {
      table1.updateCell(2, 0, {
        value: ggb1.instance.getXcoord('MovingPointNeg'),
      });
    }
    table1.updateCell(2, 1, {
      value: ggb1.instance.getXcoord('sliderPoint'),
    });
    button1.updateData({ disabled: true });
  }
});

/*
{"compTotals":{"table":1,"button":1,"geogebra":1},"stage":"Launch","lessonInfo":"6 M3 TA L02 - PA Integers","teacherView":true,"layout":"one col"}
*/
