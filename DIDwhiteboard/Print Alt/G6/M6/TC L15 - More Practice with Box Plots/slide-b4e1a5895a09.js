const { buttonGroup1, ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

let runTime;
let timeDiff;
let myInterval;
let pauseTime = 0;

buttonGroup1.on('click:1', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 3);
  let buttonClickTime = new Date().getTime();
  myInterval = setInterval(() => {
    runTime = new Date().getTime();
    timeDiff =
      (Math.round((runTime - buttonClickTime) / 1000) * 1) / 1 + pauseTime;
    //let smoothTime = (runTime - buttonClickTime) / 1000;
    ggb1.instance.evalCommand(`countdown1=60 - ${timeDiff}`);
    ggb1.instance.evalCommand(`countdown2=120 - ${timeDiff}`);
    ggb1.instance.evalCommand(`actualSeconds=120 - ${timeDiff}`);
  }, 1000);
  setTimeout(() => {
    clearInterval(myInterval);
  }, 130000);
});

buttonGroup1.on('click:2', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  clearInterval(myInterval);
  pauseTime = timeDiff;
});

buttonGroup1.on('click:3', () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: true }, 3);
  clearInterval(myInterval);
  pauseTime = 0;
  ggb1.instance.evalCommand(`countdown1=60`);
  ggb1.instance.evalCommand(`countdown2=120`);
  ggb1.instance.evalCommand(`actualSeconds=120`);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1},"stage":"Launch","lessonInfo":"6 M6 TC L15 - Print Alt: More Practice with Box Plots","teacherView":true,"layout":"one col"}
*/
