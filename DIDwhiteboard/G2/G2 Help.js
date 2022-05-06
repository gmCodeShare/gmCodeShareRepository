const { textDisplay9, textDisplay1, textDisplay2, textDisplay3, textDisplay4, textDisplay5, textDisplay6, textDisplay7, textDisplay8, buttonGroup1 } =
  components;
let numOfImages = 8;
onInit();
function onInit() {
  if (!textDisplay9.data.init) {
    // set initial states
    textDisplay9.updateData({ count: 0 });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    textDisplay1.updateData({ visible: true });
    textDisplay2.updateData({ visible: false });
    textDisplay3.updateData({ visible: false });
    textDisplay4.updateData({ visible: false, visibilityBehavior: "hide" });
    textDisplay5.updateData({ visible: false });
    textDisplay6.updateData({ visible: false, visibilityBehavior: "hide" });
    textDisplay7.updateData({ visible: false });
    textDisplay8.updateData({ visible: false, visibilityBehavior: "hide" });
    // create/update a dummy variable to keep track of whether the slide has initialized
    textDisplay9.updateData({ init: true });
  }
  
}
buttonGroup1.on("click:1", () => {
  let count = textDisplay9.data.count;
  // console.log(count);
  count = count + 1;
  // console.log(count);
  textDisplay9.updateData({ count: count });
  textDisplay1.updateData({ visible: count + 1 == 1 });
  textDisplay2.updateData({ visible: count + 1 == 2 || count + 1 == 3 || count + 1 == 4 || count + 1 == 5 || count + 1 == 6 || count + 1 == 7 || count + 1 == 8});
  textDisplay3.updateData({ visible: count + 1 == 3 });
  textDisplay4.updateData({ visible: count + 1 == 4 || count + 1 == 5 || count + 1 == 6 || count + 1 == 7 || count + 1 == 8}); 
  textDisplay5.updateData({ visible: count + 1 == 5 }); 
  textDisplay6.updateData({ visible: count + 1 == 6 || count + 1 == 7 || count + 1 == 8 }); 
  textDisplay7.updateData({ visible: count + 1 == 7 }); 
  textDisplay8.updateData({ visible: count + 1 == 8 }); 
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
 if (count == numOfImages - 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
     }
   if (count == 0 || count == 1 || count == 2 || count == 3) {
    textDisplay4.updateData({ visibilityBehavior: "hide" });
  } else {
    textDisplay4.updateData({ visibilityBehavior: "none" });
  }
  if (count == 0 || count == 1 || count == 2 || count == 3 || count == 4 || count ==5) {
    textDisplay6.updateData({ visibilityBehavior: "hide" });
  } else {
    textDisplay6.updateData({ visibilityBehavior: "none" });
  }
  if (count == 0 || count == 1 || count == 2 || count == 3 || count == 4 || count ==5 || count == 6 || count == 7) {
    textDisplay8.updateData({ visibilityBehavior: "hide" });
  } else {
    textDisplay8.updateData({ visibilityBehavior: "none" });
  }
});
buttonGroup1.on("click:2", () => {
  let count = 0;
  textDisplay9.updateData({ count: count });
  textDisplay1.updateData({ visible: true });
  textDisplay2.updateData({ visible: false });
  textDisplay3.updateData({ visible: false });
  textDisplay4.updateData({ visible: false });
  textDisplay5.updateData({ visible: false });
  textDisplay6.updateData({ visible: false });
  textDisplay7.updateData({ visible: false });
  textDisplay8.updateData({ visible: false, visibilityBehavior: "hide" });
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});