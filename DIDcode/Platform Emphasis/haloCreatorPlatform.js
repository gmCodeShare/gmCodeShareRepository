//Use this to create a halo from the platform.  This is most useful when you're carrying forward a point and need a halo around it.  
//Paste the function into the platform.  When you're ready to make the halo, type the name of the point as a string in the argument - e.g. halo("BirdPoint");
//You only need to have the function once and can call the function as often as you want.

function halo(point) {
    var haloSize = 10;
        var HexyColor = "\"" + ggb1.instance.getColor(point) + "\"";
        ggb1.instance.setPointStyle(point, 10);
        ggb1.instance.evalCommand(point + "Halo:(x - x(" + point + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + point + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
        ggb1.instance.evalCommand("SetColor(" + point + "Halo," + HexyColor + ")");
        ggb1.instance.setFilling(point + "Halo", 0.25);
        ggb1.instance.setLineThickness(point + "Halo", 0);
        ggb1.instance.setFixed(point + "Halo", false, false);
}
