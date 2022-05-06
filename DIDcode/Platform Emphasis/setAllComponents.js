// provides a way to set properties for platform components en masse

const allTheSingleButtons = Object.keys(components).filter(
  (comp) => comp.includes("button") && !comp.includes("Group") // change this line to define which components you want to target
);

for (let i = 0, L = allTheSingleButtons.length; i < L; i++) {
  components[allTheSingleButtons[i]].updateData({ visible: false });
}

// note for later:
// (comp) => components[comp].name?.includes("button")
