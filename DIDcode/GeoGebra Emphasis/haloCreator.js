//This goes on a button click and is best if doing a lot of points at once
function halo() {
    var HaloList = ["B", "C", "D", "F", "G", "H", "I", "J"];  //put the names of the points that require halos into this list
    var haloSize = 10;
    for (var i = 0; i < HaloList.length; i++) {
        var HexyColor = "\"" + ggbApplet.getColor(HaloList[i]) + "\"";
        ggbApplet.setPointStyle(HaloList[i], 10);
        ggbApplet.evalCommand(HaloList[i] + "Halo:(x - x(" + HaloList[i] + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + HaloList[i] + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² =" + haloSize + "^2");
        ggbApplet.evalCommand("SetColor(" + HaloList[i] + "Halo," + HexyColor + ")");
        ggbApplet.setFilling(HaloList[i] + "Halo", 0.25);
        ggbApplet.setLineThickness(HaloList[i] + "Halo", 0);
        ggbApplet.setFixed(HaloList[i] + "Halo", false, false);
    }
}
halo();
