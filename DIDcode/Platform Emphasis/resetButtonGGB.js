/**
 * reset a GGB file to its true initial state (because GGB's native reset doesn't)
 * BE SURE TO GRAB THE SAVE AND GET DATA FUNCTIONS AS WELL!!
 */

const { ggb1, button1 } = components;

if (!getData("initialized")) {
  // set initial states
  saveData({ initXML: ggb1.instance.getXML() });
  // save status
  saveData({ initialized: true });
}

button1.on("click", () => {
  ggb1.instance.setXML(getData("initXML"));
});
