const { select1 } = components;

// generates an array with the names of each selected element in original order
function selectedLabels(selectComponent) {
  let selected = [...selectComponent.data.selected];
  // create an array out of the labels for each element of the selected array
  let labels = selected.map(
    (index) => selectComponent.data.options[parseInt(index)].label
  );
  let options = [...selectComponent.data.options];
  // create an array out of the labels for each element of the options array
  let optionLabels = options.map((element) => element.label);
  // grab only elements from options that also appear in selected
  return optionLabels.filter((value) => labels.includes(value));
}

// generates an array with the names of each selected element in order chosen by user
function selectedLabelsOrdered(selectComponent) {
  let selected = [...selectComponent.data.selected];
  // create an array out of the labels for each element of the selected array
  return selected.map(
    (index) => selectComponent.data.options[parseInt(index)].label
  );
}

select1.on("change", ({ selected }) => {
  console.log("select1", selected);
  console.log("selectedLabels", selectedLabels(select1));
});

/**
 * > INFO
 *
 * By default, the select component has a selected array, which contains string numbers that represent
 * the choices that are currently selected.
 *
 * These helper functions attempt to simplify utility by grabbing the labels of each choice instead.
 *
 *
 * > HOW TO USE
 * You can check to see if something is selected with code like this:
 *
 *  let chosenMammals = selectedLabels(select1);
 *  if (chosenMammals.includes("Lizard")) {
 *    console.log("Lizards are reptiles!");
 *  }
 *
 *
 */
