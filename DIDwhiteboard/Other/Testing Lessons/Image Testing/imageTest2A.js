const { ggb1, text1 } = components;

slide.on('forward', () => {
  ggb1.instance.evalCommand('SelectObjects()');
  takeSVG();
});

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
  console.log(ggb1);
  console.log('controls');
  console.log(controls);
  console.log('components');
  console.log(components);
  console.log('slides');
  console.log(slides);
}
