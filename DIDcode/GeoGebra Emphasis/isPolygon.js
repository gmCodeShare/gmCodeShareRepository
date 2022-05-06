function isPoly(thing) {
  const polyTypes = ["polygon", "triangle", "quadrilateral", "pentagon", "hexagon"];
  return polyTypes.includes(ggbApplet.getObjectType(thing));
}
