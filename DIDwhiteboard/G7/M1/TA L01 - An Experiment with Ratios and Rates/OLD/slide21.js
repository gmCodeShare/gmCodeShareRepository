const {
  text1,
  text2,
  text3,
  table1,
  select1,
  cc_sharewithclass_e9cf6bdb7413_textbox1: shareText1,
  cc_sharewithclass_e9cf6bdb7413_input1: shareInput1,
  cc_sharewithclass_e9cf6bdb7413_button1: shareButton1,
} = components;

onInit();
function onInit() {
  if (!table1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });

    table1.updateData({ init: true });
  }
}

select1.on('change', (selected) => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});
