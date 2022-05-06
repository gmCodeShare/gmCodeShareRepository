// helper functions for Geogebra side object management:

function pushvalue(a, b) {
    ggbApplet.evalCommand("SetValue(" + a + ", Append(" + a + ", \"" + b + "\"))");
}

function popvalue(a) {
    ggbApplet.evalCommand("SetValue(" + a + ", Remove(" + a + ", {" + a + "(Length(" + a + "))}))");
}

function pushrow(a, b) {
    ggbApplet.evalCommand("SetValue(" + a + ",Append(" + a + "," + b + "))");
}

function poprow(a) {
    ggbApplet.evalCommand("SetValue(" + a + ",Remove(" + a + ", {" + a + "(Length(" + a + "))}))");
}

//get the last element of the 1D GGB list and execute a method on the element
function setvalue(a) {
    var len = ggbApplet.getValue("Length(" + a + ")");
    var temp = ggbApplet.evalCommandGetLabels("Element(" + a + "," + len + ")");
    var poly = ggbApplet.getValueString(temp);
    //perform some method on the last element
    ggbApplet.setColor(poly, 255, 0, 0);
    ggbApplet.deleteObject(temp);
}

//get the last row of the 2D GGB list and execute a method on each element
//here 4 is the dimension of each sublist
function setrow(a){
for (var i = 0; i < 4; i++) {
    var len = ggbApplet.getValue("Length("+a+")");
    var temp = ggbApplet.evalCommandGetLabels("Element("+a+"," + len + "," + (i + 1) + ")");
    var point = ggbApplet.getValueString(temp);
    //perform some method on the subelement
    ggbApplet.setColor(point, 0, 255, 0);
    ggbApplet.deleteObject(temp);
};
}
