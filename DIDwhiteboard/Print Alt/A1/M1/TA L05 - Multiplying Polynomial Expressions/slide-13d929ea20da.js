const { ggb1, separator1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

select1.on("change", (selected) => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setValue("showOnes", true);
  } else {
    ggb1.instance.setValue("showOnes", false);
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setValue("showTens", true);
  } else {
    ggb1.instance.setValue("showTens", false);
  }
  if (select1.data.selected.includes("2")) {
    ggb1.instance.setValue("showHundreds", true);
  } else {
    ggb1.instance.setValue("showHundreds", false);
  }
});

/*
{"compTotals":{"geogebra":1,"separator":1,"select":1},"stage":"Learn","lessonInfo":"9 M1 TA L05 - PA Slide Deck Multiplying Polynomial Expressions","teacherView":true,"layout":"one col"}
*/
