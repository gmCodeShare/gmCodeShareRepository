//get XML of element as a string
var xmlstring = ggbApplet.getXML("box");

//convert XML string to XML document
var parser = new DOMParser();
var xmldom = parser.parseFromString(xmlstring, "application/xml");

//naviagte the XML DOM to change the value of an attribute
xmldom.getElementsByTagName("length")[0].setAttribute("val", "3");

//convert the XML document back into a string
var serializer = new XMLSerializer();
xmlstring = serializer.serializeToString(xmldom);

//evaluate XML string to update the element in Geogebra
ggbApplet.evalXML(xmlstring);
