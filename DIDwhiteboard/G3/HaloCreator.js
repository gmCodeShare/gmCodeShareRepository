/*orderSetColorBlue {"SetColor(" + namedObject + ", 0/255, 127/255, 175/255 )"}
orderSetPointStyle {"SetPointStyle(" + (namedObject ", 10)")}
orderMakeHalo {"" + namedObject + "Halo:(x - x(" + namedObject + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + namedObject + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² = haloSize²"}
orderMakeVisibleInView1 {"SetVisibleInView(" + namedObject + "Halo, 1, true)"}
orderMakeNotVisibleInView2 {"SetVisibleInView(" + namedObject + "Halo, 2, false)"}
orderSetHaloBlue {"SetColor(" + namedObject + "Halo, 0/255, 127/255, 175/255 )"}
orderSetFilling {"SetFilling(" + namedObject + "Halo, .25)"}
orderRemoveCircleOutline {"SetLineThickness(" + namedObject + "Halo, 0)"}
orderMakeUnclickable {"SetFixed(" + namedObject + "Halo, false, false)"}
*/



function halo() {
  for (var i = 1; i < ggbApplet.getValue("Length(HaloList)"); i++) {
    ggbApplet.setColor("HaloList" [i], 0, 127, 175);
    ggbApplet.setPointStyle(clickedPoint, 10);
    ggbApplet.evalCommand(clickedPoint + "Halo:(x - x(" + namedObject + "))² (x(Corner(5))/(x(Corner(3)) - x(Corner(1))))^2 + (y - y(" + namedObject + "))² (y(Corner(5)) / (y(Corner(3)) - y(Corner(1))))² = haloSize²");
    ggbApplet.setColor(clickedPoint + "Halo", 0, 127, 175);
    ggbApplet.setFilling(clickedPoint + "Halo", 0.25);
    ggbApplet.setLineThickness(clickedPoint + "Halo", 0);
    ggbApplet.setFixed(clickedPoint + "Halo", false, false);
  }
}