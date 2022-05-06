//code pairs applet with associated canvas element
//use for assigning the accessible aria-label of the canvas element and for implementing hover code
//change the value of the arialabel variable to describe your applet ensuring it ends in Interactive

function ggbOnInit(name, ggbObject) {
    var arialabel = "Hover Interactive";
    var ggbcanvasarray = document.querySelectorAll("canvas");
    for (i = 0; i < ggbcanvasarray.length; i++) {
        var parameterID = ggbcanvasarray[i].closest("div.appletParameters,div.notranslate").getAttribute("id");
        var canvasID = "canvas" + parameterID;
        ggbcanvasarray[i].setAttribute("id", canvasID);
    };
    var id = "canvas" + name;
    var ggbcanvas = document.getElementById(id);
    if (ggbcanvas) {
        ggbcanvas.setAttribute("aria-label", arialabel);
    }
}
