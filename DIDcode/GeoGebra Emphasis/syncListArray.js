//methods for syncing Geogebra list with Javascript array, listToArray and arrayToList
//includes example of adding and removing points from Geogebra list named list and Javascript array named points

function ggbOnInit(name, ggbObject) {

    //example of JS array method with sync to GGB list
    function plop(a) {
        if (ggbObject.getObjectType(a) == "point") {
            points.push(a);
            arrayToList("list", points);
        };
    }

    //example of JS array method with sync to GGB list
    function fizz(a) {
        var index = points.indexOf(a);
        points.splice(index, 1);
        arrayToList("list", points);
    }

    //write GGB list to JS array
    function listToArray(l) {
        var xmlstring = ggbObject.getXML(l);
        var parser = new DOMParser();
        var xmldom = parser.parseFromString(xmlstring, "application/xml");
        var list = xmldom.getElementsByTagName("expression")[0].getAttribute("exp");
        var clean = list.replace(/\"| /g, "");
        return clean.substring(1).slice(0, -1).split(",");
    }

    //sync GGB list with JS array
    function arrayToList(l, a) {
        var string = "{\"" + a.join("\",\"") + "\"}";
        var xmlstring = ggbObject.getXML(l);
        var parser = new DOMParser();
        var xmldom = parser.parseFromString(xmlstring, "application/xml");
        xmldom.getElementsByTagName("expression")[0].setAttribute("exp", string);
        var serializer = new XMLSerializer();
        xmlstring = serializer.serializeToString(xmldom);
        ggbObject.evalXML(xmlstring);
    }

    //initialize points array using GGB list
    var points = listToArray("list");

    ggbObject.registerAddListener(plop);
    ggbObject.registerRemoveListener(fizz);
}



//DEPRECATED
// read from JS array and write to GGB list
for (var i = 0; i < points.length; i++) {
    ggbApplet.evalCommand("SetValue(list," + (i + 1) + ",\"" + points[i] + "\")");
}

// read from GGB list and write to JS array
var length = ggbApplet.getValue("Length(list)");
for (var i = 0; i < length; i++) {
    var element = ggbApplet.evalCommandGetLabels("list(" + (i + 1) + ")");
    points2.push(ggbApplet.getValueString(element));
    ggbApplet.deleteObject(element);
};

// courtesy of Richard
