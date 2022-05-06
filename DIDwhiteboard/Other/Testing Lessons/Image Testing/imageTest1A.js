const { ggb1, text1 } = components;

ggb1.instance.registerClientListener(client);

function client(a) {
  ggb1.instance.setVisible('button1', false);
  ggb1.instance.exportSVG((svg) => {
    ggb1.updateInnerData({
      storedImage: 'data:image/svg+xml;utf8,' + encodeURIComponent(svg),
    });
  });
  ggb1.instance.setVisible('button1', true);
  console.log('client function fired');
}
