const { ggb1, select1, buttonGroup1 } = components;

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

function resetFlags(setToZero = false) {
  // stop animation, reset animation flags, possibly reset time values to 0
  ggb1.instance.stopAnimation();
  const times = ["timeStart", "timeConv", "time1", "time2", "time3", "time4"];
  for (let i = 0, L = times.length; i < L; i++) {
    ggb1.instance.setAnimating(times[i], false);
    if (setToZero) {
      ggb1.instance.setValue(times[i], 0);
      ggb1.instance.setValue("progress", 0); // this doesn't need to be in a loop, but oh well
    }
  }
}

select1.on("change", ({ selected }) => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  resetFlags(true);
  const bools = ["fromGallon", "fromQuart", "fromPint"];
  for (let i = 0, L = bools.length; i < L; i++) {
    ggb1.instance.setValue(bools[i], false);
  }
  ggb1.instance.setValue(bools[selected[0]], true);
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  resetFlags();
  ggb1.instance.setAnimating("timeStart", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  resetFlags(true);
});

function nextAnim(currentTime, nextTime, proceed = false) {
  // if the current time is done, animate the next time
  // at key points, quickly set some values to keep the conveyor moving forward
  const time = ggb1.innerData[currentTime];
  if (time == 1) {
    resetFlags();
    ggb1.instance.setAnimating(nextTime, true);
    if (proceed) {
      ggb1.instance.setValue(
        "progress",
        ggb1.instance.getValue("progress") + 1
      );
      ggb1.instance.setValue("timeConv", 0);
    }
    ggb1.instance.startAnimation();
  }
}

autorun(() => {
  // when timeStart is done, animate time1
  nextAnim("timeStart", "time1");
});

autorun(() => {
  nextAnim("time1", "timeConv");
});

autorun(() => {
  // after the conveyor moves, fill the next container
  const currentTime = ggb1.innerData["timeConv"];
  switch (ggb1.instance.getValue("progress")) {
    case 2:
      nextAnim("timeConv", "time4", true);
      break;
    case 1:
      nextAnim("timeConv", "time3", true);
      break;
    case 0:
      nextAnim("timeConv", "time2", true);
      break;
  }
});

autorun(() => {
  const currentTime = ggb1.innerData["time2"];
  if (ggb1.instance.getValue("fromGallon")) {
    nextAnim("time2", "timeConv");
  }
});

autorun(() => {
  const currentTime = ggb1.innerData["time3"];
  if (ggb1.instance.getValue("fromGallon")) {
    nextAnim("time3", "timeConv");
  }
});
