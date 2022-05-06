const { ggb1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

text1.updateData({ align: "center" });

components.text1.updateData({ align: "center" });

components.cc_sharewithclass_504fe6f1fd18_button1.updateData({
  align: "right",
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue("picSet", 1);
    ggb1.instance.setValue("picWidth1", 5);
    ggb1.instance.setValue("scaleFactor", 3);
    ggb1.instance.setValue("clickCount", 1000);
    ggb1.instance.setValue("time", 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}
