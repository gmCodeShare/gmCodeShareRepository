const { ggb1, cc_sharewithclass_4bd8959226d1_input1: shareInput1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareInput1.updateData({
      text: `Context 1 goes with 
  
Context 2 goes with `,
    });
    ggb1.updateData({ init: true });
  }
}
