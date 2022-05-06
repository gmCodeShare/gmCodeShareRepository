/**
 * It's often useful to keep track of created GGB objects in groups.
 * Since arrays (and global variables in general) have data persistence issues,
 * it's often necessary to keep track of these groups in other ways.
 *
 * Captions provide a convenient storage place for strings with small chunks of metadata.
 */

// example: aggregating many student responses often creates a plethora of new objects
// you can do something like this:
const newPoint = ggb1.instance.evalCommandGetLabels(
  `(${savedPoint[0]}, ${savedPoint[1]})` // your definition here!
);
ggb1.instance.setCaption(newPoint, "agg");

// there are likely many points in any GGB applet. having GGB identify which ones were created
// by aggregate could be tricky! by captioning the points on creation, we ensure that we can
// always find them again.
// for example, if we want to erase and replace points before creating new ones:
const allAggPoints = ggb1.instance
  .getAllObjectNames("point")
  .filter((point) => ggb1.instance.getCaption(point) === "agg");

for (let i = 0, L = allAggPoints.length; i < L; i++) {
  ggb1.instance.deleteObject(allAggPoints[i]);
}
