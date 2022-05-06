const { ggb1, select1 } = components;

ggb1.instance.registerObjectUpdateListener("Compose", composeUpdate);
//ggb1.instance.registerClientListener();

function composeUpdate() {
  if (ggb1.instance.getValue("Compose")) {
    ggb1.instance.setValue("Speed", -10);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
  } else {
    ggb1.instance.setValue("Speed", 10);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
  }
}

// select1.selectOption("1");
// select1.on("change", () => {
//     if (select1.data.selected[0] == "1") {
//         console.log("compose");
//         ggb1.instance.setValue("Speed", 10);
//         ggb1.instance.setAnimating("time", true);
//         ggb1.instance.startAnimation();
//     }
//     if (select1.data.selected[0] == "0") {
//         console.log("decompose");
//         ggb1.instance.setValue("Speed", -10);
//         ggb1.instance.setAnimating("time", true);
//         ggb1.instance.startAnimation();
//     }
// })

// function halo(point) {
//     var haloSize = 10;
//         var HexyColor = "\"" + ggb1.instance.getColor(point) + "\"";
//         ggb1.instance.setPointStyle(point, 10);
//         ggb1.instance.evalCommand(point + "Halo:(x - x(" + point + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + point + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
//         ggb1.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
//         ggb1.instance.setFilling(point + "Halo", 0.25);
//         ggb1.instance.setLineThickness(point + "Halo", 0);
//         ggb1.instance.setFixed(point + "Halo", false, false);
// }
// halo("E");
// halo("F");
