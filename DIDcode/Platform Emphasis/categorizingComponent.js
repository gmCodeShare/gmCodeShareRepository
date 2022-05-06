const { cat1 } = components;

// SEE FAR BELOW FOR HOW TO USE (and commentary)
// generates an object that mirrors the assigned object, but all categories are defined
function assignedSafe(catComponent) {
  const allCategoryValues = catComponent.data.categories.map(
    (category) => category.value
  );
  const tempObject = {};
  allCategoryValues.forEach((value) => {
    tempObject[value] = [];
  });
  return { ...tempObject, ...catComponent.data.assigned };
}

// generates an object with categories' and sorted items' names
function assignedLabels(catComponent) {
  let categories = [...catComponent.data.categories];
  let items = [...catComponent.data.items];
  // get all the categories' labels
  let allCategoryLabels = categories.map((category) => category.label);
  let returnObject = {};
  for (let i = 0, L = allCategoryLabels.length; i < L; i++) {
    let newProp = allCategoryLabels[i];
    // stash each property label as a property in the return object
    // this ensures that no category property is ever undefined
    returnObject[newProp] = [];
  }
  // this is a special for loop; it runs once for each property of the given object
  // it also snags the name of each property as "key" and its value as "value"
  for (const [key, value] of Object.entries(catComponent.data.assigned)) {
    // keep only the categories whose keys match the current category (should be exactly one)
    let relevantCategoryArr = categories.filter(
      (category) => category.value == key
    );
    let categoryLabel;
    // of the categories we kept (which should just be one), grab their labels
    if (relevantCategoryArr?.length) {
      let categoryLabels = relevantCategoryArr.map(
        (category) => category.label
      );
      categoryLabel = categoryLabels[0];
    }
    let assignedItems = [...value];
    // keep only items that match something that was sorted into this category
    let relevantItems = items.filter((item) =>
      assignedItems.includes(item.value)
    );
    let itemLabels;
    // of the items we kept, grab their labels
    if (relevantItems?.length) {
      itemLabels = relevantItems.map((item) => item.label);
    }
    // if we've made it this far, store our labels into our return object
    if (categoryLabel && itemLabels?.length) {
      returnObject[categoryLabel] = [...itemLabels];
    }
  }
  return returnObject;
}

cat1.on("change", ({ assigned }) => {
  // note: passing the assigned object in the line above is only necessary if you
  // want to reference the assigned object directly; see below for details
  console.log("assigned", assigned);
  console.log("assignedSafe", assignedSafe(cat1));
  console.log("assignedLabels", assignedLabels(cat1));
});

/**
 * > INFO
 *
 * By default, the categorizing component has an assigned object, which contains info of the
 * following form:
 *
 *  {
 *    category_0: ["0", "2"],
 *    category_1: ["1"],
 *  }
 *
 * Each sort category receives a value which becomes a property in the assigned object.
 * Each item to be sorted receives a string number to represent it; when it is sorted, its index
 * gets pushed into the appropriate property of the assigned object.
 *
 *
 * > WARNING
 *
 * By default, the assigned object does not have a category property if there is nothing sorted
 * into that category. This means that there is some risk associated with coding to check what is
 * currently sorted. This is one of the issues addressed by the above helper function.
 *
 * Example of risky code:
 *
 *  cat1.on("change", ({ assigned }) => {
 *    if (assigned["category_0"].includes("1")) {
 *      // remember: category_0 is undefined if nothing is sorted into it!
 *      console.log("Lizards are reptiles!");
 *    }
 *  });
 *
 * Example of safe code by way of the helper functions:
 *
 *  cat1.on("change", () => {
 *    let sortedCritters = assignedSafe(cat1);
 *    if (sortedCritters["category_0"].includes("1")) {
 *      // this is safer because the assignedSafe object ALWAYS has EVERY category stored as a property
 *      console.log("Lizards are reptiles!");
 *    }
 *  })
 *
 *  cat1.on("change", () => {
 *    let sortedCritters = assignedLabels(cat1);
 *    if (sortedCritters["Mammal"].includes("Lizard")) {
 *      // this is safer because the assignedLabels object ALWAYS has EVERY category stored as a property
 *      console.log("Lizards are reptiles!");
 *    }
 *  })
 *
 * Notice that code with the assignedLabels function is also more legible. Cash money!
 *
 *
 * > HOW TO USE
 *
 * // 1. Copy the assignedSafe function into your coding layer.
 *
 * // 2. Create a variable with your categorization component name as the function's argument.
 * const sortResult = assignedSafe(categorizing1);
 *
 * // 3. Treat that object just like you'd expect to treat the component's assigned object.
 * // For example, to check if the first item is sorted into the second category:
 * if (sortResult["category_1"].includes("0")) {
 *   // do stuff
 * }
 *
 *
 */
