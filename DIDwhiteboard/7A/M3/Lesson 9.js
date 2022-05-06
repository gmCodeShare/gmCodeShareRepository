const { ggb1, select1 } = components;

ggb1.instance.setValue("time", "0");
ggb1.instance.setValue("time2", "0");
ggb1.instance.setVisible("f", false);
ggb1.instance.setVisible("g", false);
ggb1.instance.setVisible("i", false);
ggb1.instance.setVisible("j", false);

select1.on("change", (selected) => {
  switch (selected[0]) {
    case "0":
      ggb1.instance.setAnimating("time", false);
      ggb1.instance.setValue("time", "0");
      ggb1.instance.setAnimating("time", true);
      ggb1.instance.startAnimation();
      break;
    case "1":
      ggb1.instance.setVisible("f", false);
      break;
    case "2":
      ggb1.instance.setAnimating("time2", false);
      ggb1.instance.setValue("time2", "0");
      ggb1.instance.setAnimating("time2", true);
      ggb1.instance.startAnimation();
      break;
    case "3":
      ggb1.instance.setVisible("g", false);
      break;
    case "4":
      ggb1.instance.setAnimating("time2", false);
      ggb1.instance.setAnimating("time1", false);
      ggb1.instance.setValue("time2", "0");
      ggb1.instance.setValue("time1", "0");
      ggb1.instance.setAnimating("time2", true);
      ggb1.instance.setAnimating("time1", true);
      ggb1.instance.startAnimation();
  }
});
