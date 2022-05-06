const { ggb1, text1 } = components;

const updatableObjects = ggb1.instance.getAllObjectNames();
console.log('updatableObjects 1');
console.log(updatableObjects);
updatableObjects.splice(updatableObjects.indexOf('storedImage'), 1);
updatableObjects.splice(updatableObjects.indexOf('storedAltText'), 1);

console.log('updatableObjects 2');
console.log(updatableObjects);

let objSelected = '';

ggb1.instance.registerClientListener(client);

updatableObjects.forEach((obj) => {
  ggb1.instance.registerObjectUpdateListener(obj, svgFromListener);
});

takeSVG();

slide.on('forward', () => {
  ggb1.instance.evalCommand('SelectObjects()');
  takeSVG();
});

function client(a) {
  console.log('client');
  console.log(a);
  switch (a[0]) {
    case 'select':
      console.log('selected');
      objSelected = a[1];
      console.log('objSelected');
      console.log(objSelected);
      break;
    case 'deselect':
      console.log('deselected');
      break;
    default:
      break;
  }
}

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
}
