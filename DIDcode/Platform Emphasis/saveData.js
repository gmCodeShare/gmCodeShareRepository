/**
 * Save data with data persistence
 *
 * SEE BELOW FUNCTIONS FOR EXAMPLES
 */

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

/**
 * EXAMPLES OF USE
 *
 * 1. Simple storage
 *   - "I just need to save something; I don't care where it's saved"
 */

// example 1A

saveData({ clickCount: 1 });

let currentCount = getData("clickCount");

// example 1B

saveData({ oldResponse: "Hello there", newResponse: "General Kenobi!" });

if (getData("oldResponse") != getData("newResponse")) {
  console.log("Get ready for a fight with lots of lightsabers");
}

/**
 * 2. Positioned storage
 *   - "I want to save something onto a specific component"
 *   - "I'm going to need to pull the info I'm saving to a later slide"
 */

// example 2A

saveData({ initialState: "bigLongBase64GeogebraString" }, "ggb1");

let originalGGB = getData("initialState", "ggb1");
