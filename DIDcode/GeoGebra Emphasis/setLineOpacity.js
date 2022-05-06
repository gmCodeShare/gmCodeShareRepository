// there's no GGB API for setting line opacity
// here's a way to do it with XML

function setLineOpacity(obj, opacity = 1) {
  //get XML of element as a string
  var xmlstring = ggbApplet.getXML(obj);

  //convert XML string to XML document
  var parser = new DOMParser();
  var xmldom = parser.parseFromString(xmlstring, "application/xml");

  //navigate the XML DOM to change the value of an attribute
  var GGBopacity = String(Math.ceil(255 * opacity));
  xmldom
    .getElementsByTagName("lineStyle")[0]
    .setAttribute("opacity", GGBopacity);

  //convert the XML document back into a string
  var serializer = new XMLSerializer();
  xmlstring = serializer.serializeToString(xmldom);

  //evaluate XML string to update the element in Geogebra
  ggbApplet.evalXML(xmlstring);
}
