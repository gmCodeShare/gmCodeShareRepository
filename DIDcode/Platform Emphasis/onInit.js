onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states

    // create/update a dummy variable to keep track of whether the slide has initialized
    ggb1.updateData({ init: true });
  }
}

// note: if you don't need your init code to run literally before any other code on the slide,
// consider using the firstload API instead, given below onInit
// firstload is typically sufficient for most use cases!

/*
slide.on("firstload", () => {
  // set initial states
  
});
*/

// and here's onInit using saveData (pending library access, this will become the primary version)
// for now, be sure to copy and paste the most current versions of the save and get data functions!

if (!getData("initialized")) {
  // set initial states

  // save status
  saveData({ initialized: true });
}
