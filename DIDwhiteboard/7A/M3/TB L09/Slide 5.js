const { ggb1, select1 } = components;

ggb1.instance.setValue("time", "0");
ggb1.instance.setValue("time2", "0");
ggb1.instance.setVisible("f", false);
ggb1.instance.setVisible("g", false);
ggb1.instance.setVisible("i", false);
ggb1.instance.setVisible("j", false);

select1.on("change", (selected) => {
  if (select1.data.selected.includes("0")) {
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.setValue("time", "0");
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
  }
  if (select1.data.selected.includes("1")) {
    ggb1.instance.setVisible("f", true);
  } else {
    ggb1.instance.setVisible("f", false);
  }

  if (select1.data.selected.includes("2")) {
    ggb1.instance.setAnimating("time2", false);
    ggb1.instance.setValue("time2", "0");
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.startAnimation();
  }
  if (select1.data.selected.includes("3")) {
    ggb1.instance.setVisible("g", true);
  } else {
    ggb1.instance.setVisible("g", false);
  }
  if (select1.data.selected.includes("4")) {
    ggb1.instance.setAnimating("time2", false);
    ggb1.instance.setAnimating("time", false);
    ggb1.instance.setValue("time2", "0");
    ggb1.instance.setValue("time", "0");
    ggb1.instance.setAnimating("time2", true);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
    ggb1.instance.setVisible("i", true);
    ggb1.instance.setVisible("j", true);
  } else {
    ggb1.instance.setVisible("i", false);
    ggb1.instance.setVisible("j", false);
  }
});
