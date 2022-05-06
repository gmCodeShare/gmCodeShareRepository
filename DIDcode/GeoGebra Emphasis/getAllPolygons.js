function getAllPolyNames() {
  const polyTypes = ["polygon", "triangle", "quadrilateral", "pentagon", "hexagon"];
  return ggbApplet.getAllObjectNames().filter(function (thing) {
    return polyTypes.includes(ggbApplet.getObjectType(thing));
  });
}

