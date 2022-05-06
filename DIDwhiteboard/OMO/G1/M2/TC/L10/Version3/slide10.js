const { ggbLink, button1 } = components;

slide.on("firstload", () => {
  ggbLink.updateData({ visible: false });
  ggbLink.instance.setTextValue(
    "url",
    "https://forms.office.com/Pages/ResponsePage.aspx?id=7ZsxNFdi1Ei3epSLNgLsqA5VLtxw1mhGgFcDCGlLbkJUMlFIS1pPNVdNVkUzU0JTQjFCNDRTNEg3TS4u"
  );
});

button1.on("click", () => {
  ggbLink.instance.evalCommand("RunClickScript(link)");
});
