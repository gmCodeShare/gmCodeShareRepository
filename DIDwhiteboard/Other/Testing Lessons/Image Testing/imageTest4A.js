const { ggb1, text1 } = components;

const updatableObjects = ['E', 'F', 'G', 'H', 'I', 'J', 't1', 't2'];

slide.on('firstload', () => {
  ggb1.updateData({ visible: false });
});

updatableObjects.forEach((obj) => {
  ggb1.instance.registerObjectUpdateListener(obj, svgFromListener);
});

takeSVG();

slide.on('forward', () => {
  ggb1.instance.evalCommand('SelectObjects()');
  takeSVG();
});

function svgFromListener() {
  console.log('svgFromListener');
  takeSVG();
}

function takeSVG() {
  ggb1.instance.exportSVG((svg) => {
    ggb1.instance.setTextValue(
      'storedImage',
      'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
    );
    ggb1.instance.setTextValue(
      'storedAltText',
      ggb1.instance.getValueString('status')
    );
  });
  console.log('client function fired');
  console.log('ggb1');
  console.log(ggb1);
}
