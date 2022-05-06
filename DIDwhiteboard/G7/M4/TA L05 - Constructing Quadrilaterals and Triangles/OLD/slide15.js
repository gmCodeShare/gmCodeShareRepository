components.cc_sharewithclass_b65af030006d_button1.updateData({
  align: "right",
});

const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

const prevXML =
  getFromSlide("slide-995090d0f5d9", "ggb1.data.saveXML", "") || "";

if (prevXML) {
  ggb1.instance.setXML(prevXML, configApp);
}
configApp();

function configApp() {
  ggb1.updateInnerData({ editing: 0 });
  let polys = ggb1.instance.getAllObjectNames("quadrilateral");
  if (polys.length != 0) {
    ggb1.instance.setFixed(polys[polys.length - 1], false, false);
  }
}
