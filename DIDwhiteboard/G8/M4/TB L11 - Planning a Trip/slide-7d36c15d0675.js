const {
  ggb1,
  text2,
  feedback1,
  textDisplay1,
  image1,
  separator1,
  text1,
  button1,
  SDzoo,
  hWood,
  stearns,
  yosemite,
  gTeton,
  mRush,
  desBG,
  arbor,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let sources = [SDzoo, hWood, stearns, yosemite, gTeton, mRush, desBG, arbor];
for (let i = 0, L = sources.length; i < L; i++) {
  sources[i].updateData({ visible: false });
}

text1.updateData({ align: 'center' });

autorun(() => {
  let dist = 0,
    city = '',
    sight = '';
  switch (ggb1.innerData['chosenText']) {
    case 'Dallas':
      image1.updateData({ visible: true, src: arbor.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 1183;
      city = 'Dallas, TX';
      sight = 'Arboretum';
      break;
    case 'Fresno':
      image1.updateData({ visible: true, src: yosemite.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 229;
      city = 'Fresno, CA';
      sight = 'Yosemite';
      break;
    case 'Jackson':
      image1.updateData({ visible: true, src: gTeton.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 736;
      city = 'Jackson, WY';
      sight = 'Grand Teton';
      break;
    case 'LosAngeles':
      image1.updateData({ visible: true, src: hWood.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 55;
      city = 'Los Angeles, CA';
      sight = 'Hollywood Sign';
      break;
    case 'Phoenix':
      image1.updateData({ visible: true, src: desBG.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 303;
      city = 'Phoenix, AZ';
      sight = 'Desert Botanical Garden';
      break;
    case 'RapidCity':
      image1.updateData({ visible: true, src: mRush.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 1019;
      city = 'Rapid City, SD';
      sight = 'Mount Rushmore';
      break;
    case 'SanDiego':
      image1.updateData({ visible: true, src: SDzoo.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 97;
      city = 'San Diego, CA';
      sight = 'San Diego Zoo';
      break;
    case 'SantaBarbara':
      image1.updateData({ visible: true, src: stearns.data.src });
      text1.updateData({ visible: true });
      button1.updateData({ visible: true });
      dist = 139;
      city = 'Santa Barbara, CA';
      sight = 'Stearns Wharf';
      break;
    default:
      image1.updateData({ visible: false });
      text1.updateData({ visible: false });
      button1.updateData({ visible: false });
      return;
  }
  text1.updateData({
    text: `${sight}, ${city}
  
  From San Bernardino, CA  
  Distance: $${dist}$ $\\text{mi}$`,
    dist,
  });
  if (text1.data.text != text1.data.last) {
    button1.updateData({ disabled: false, text: 'Confirm destination!' });
    text1.updateData({ last: text1.data.text });
  }
});

button1.on('click', () => {
  button1.updateData({ disabled: true, text: 'Confirmed' });
});

/*
{"compTotals":{"geogebra":1,"textbox":4,"bynder-image":1,"separator":1,"button":1,"uploaded-image":8},"stage":"Learn","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
