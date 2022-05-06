const {ggb1, text1} = components;
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

halo("A");
halo("B");

autorun(()=>{
let H = Math.abs(ggb1.innerData["Height"]);
let L = Math.abs(ggb1.innerData["Length"]);
let P = Math.abs(ggb1.innerData["Product"]);
text1.updateData({text: `$${H} × ${L}$ $=$ $${P}$`});
})