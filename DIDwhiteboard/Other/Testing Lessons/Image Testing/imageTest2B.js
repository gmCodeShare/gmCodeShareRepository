const { text1, image1 } = components;

const id1 = 'slide-5c3cb2b28236';

const defaultStoredImage = defaultImage();

const id1PrevGGB1 = getPrevGGB(id1, 'ggb1', {
  storedImage: defaultStoredImage,
  storedAltText:
    'The triangles are on the same side of the line and share no angles.',
});

console.log('id1PrevGGB1');
console.log(id1PrevGGB1);

// console.log('id1PrevGGB1.innerData');
// console.log(id1PrevGGB1.instance.getValueString('storedImage'));
// console.log(id1PrevGGB1.instance.getValueString('storedAltText'));
// console.log('image1.data');
// console.log(image1.data);

image1.updateData({
  src: id1PrevGGB1.innerData['storedImage'],
  alt: id1PrevGGB1.innerData['storedAltText'],
});

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error(
      'saveData error: Parameters should be an object and a string!'
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

function getPrevGGB(slideID, compName = 'ggb1', innerData, storageComp = '') {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == 'undefined' ||
      !controls.slidesNavigationData?.length
    ) {
      return 'missing slide!';
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defGGB = {
    data: {},
    innerData,
  };
  // get previous data
  let prevGGB = utils.getFromSlide(slideID, compName, false) || false;
  // check previous data
  const hasData = !prevGGB
    ? false
    : !Object.keys(prevGGB).includes('innerData')
    ? false
    : !Object.keys(prevGGB.innerData).length
    ? false
    : true;
  let returnGGB = hasData ? prevGGB : defGGB;
  // fill in other useful data
  returnGGB.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  returnGGB.data.hasData = hasData;
  returnGGB.data.slideNum = slideNum;
  // set text value
  returnGGB.data.flagText = hasData ? '' : returnGGB.data.goBackString;
  // record if there was already data so it doesn't wrongfully overwritten
  // maintain a record of whether we've had data
  const existingData = getData(`oldData${slideID + compName}`, storageComp);
  const hadData = hasData || existingData?.data?.hadData || false;
  if (hasData) {
    // if we have new data, (over)write to save it
    returnGGB.data.hadData = hadData;
    // create a dummy object to pass to updateData
    const newData = {};
    newData[`oldData${slideID + compName}`] = { ...returnGGB };
    // storageComp.updateData(newData);
    saveData(newData, storageComp);
  } else if (existingData?.data?.hasData) {
    // if we don't have new data but there is oldData, grab it
    returnGGB = { ...existingData };
  }
  return { ...returnGGB };
}

function defaultImage() {
  const defaultGGBImage =
    'data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22590%22%20height%3D%22590%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22oPcKTRVlHtbK%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22none%22%20d%3D%22%20M%200%200%20L%20590%200%20L%20590%20590%20L%200%20590%20L%200%200%20Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22scale(1%2C1)%22%20clip-path%3D%22url(%23oPcKTRVlHtbK)%22%3E%3Cg%3E%3Cpath%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20paint-order%3D%22stroke%20fill%20markers%22%20fill-rule%3D%22evenodd%22%20d%3D%22%20M%20455.9090909090909%20134.0909090909091%20L%20160.9090909090909%20429.0909090909091%20L%20455.9090909090909%20429.0909090909091%20Z%22%20fill-opacity%3D%220.2%22%2F%3E%3Cpath%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20paint-order%3D%22stroke%20fill%20markers%22%20fill-rule%3D%22evenodd%22%20d%3D%22%20M%20375.45454545454544%20214.54545454545456%20L%20187.72727272727275%20402.27272727272725%20L%20375.45454545454544%20402.27272727272725%20Z%22%20fill-opacity%3D%220.2%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(0%2C0%2C0)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20455.9090909090909%20429.0909090909091%20L%20455.9090909090909%20407.8777056553141%20L%20434.69588747349445%20407.8777056553127%20L%20434.6958874734959%20429.0909090909091%20L%20455.9090909090909%20429.0909090909091%22%20stroke-opacity%3D%220.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(0%2C0%2C0)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20375.45454545454544%20402.27272727272725%20L%20375.45454545454544%20381.05952383713225%20L%20354.241342018949%20381.0595238371308%20L%20354.24134201895043%20402.27272727272725%20L%20375.45454545454544%20402.27272727272725%22%20stroke-opacity%3D%220.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(218%2C41%2C28)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20455.9090909090909%20134.0909090909091%20L%20160.9090909090909%20429.0909090909091%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(218%2C41%2C28)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20160.9090909090909%20429.0909090909091%20L%20455.9090909090909%20429.0909090909091%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(218%2C41%2C28)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20455.9090909090909%20429.0909090909091%20L%20455.9090909090909%20134.0909090909091%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(218%2C41%2C28)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20455.9090909090909%20134.0909090909091%20L%20160.9090909090909%20429.0909090909091%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(218%2C41%2C28)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20160.9090909090909%20429.0909090909091%20L%20455.9090909090909%20429.0909090909091%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(0%2C127%2C175)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20187.72727272727275%20402.27272727272725%20L%20375.45454545454544%20402.27272727272725%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(218%2C41%2C28)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20455.9090909090909%20429.0909090909091%20L%20455.9090909090909%20134.0909090909091%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(0%2C127%2C175)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20375.45454545454544%20402.27272727272725%20L%20375.45454545454544%20214.54545454545456%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Ctext%20fill%3D%22rgb(0%2C0%2C0)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%2232343%22%20y%3D%22-30948%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3E2%20right%20triangles%20on%20a%20line.%20Each%20triangle%20has%20a%20vertical%20side%20a%20horizontal%20side%20%20and%20a%20hypotenuse%20that%20lies%20on%20the%20diagonal%20line.%20%20%20The%20triangles%20are%20on%20the%20same%20side%20of%20the%20line%20and%20share%20no%20angles.%20%20%3C%2Ftext%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgb(0%2C0%2C0)%22%20paint-order%3D%22fill%20stroke%20markers%22%20d%3D%22%20M%20-5%20595%20L%20595%20-5%22%20stroke-opacity%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%222.5%22%2F%3E%3Cpath%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20paint-order%3D%22stroke%20fill%20markers%22%20d%3D%22%20M%20166.9090909090909%20429.0909090909091%20C%20166.9090909090909%20432.40461758989386%20164.22279940807567%20435.0909090909091%20160.9090909090909%20435.0909090909091%20C%20157.59538241010614%20435.0909090909091%20154.9090909090909%20432.40461758989386%20154.9090909090909%20429.0909090909091%20C%20154.9090909090909%20425.7772005919244%20157.59538241010614%20423.0909090909091%20160.9090909090909%20423.0909090909091%20C%20164.22279940807567%20423.0909090909091%20166.9090909090909%20425.7772005919244%20166.9090909090909%20429.0909090909091%20Z%22%20fill-opacity%3D%221%22%2F%3E%3Ctext%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22139%22%20y%3D%22417%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EG%3C%2Ftext%3E%3Ctext%20fill%3D%22none%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22139%22%20y%3D%22417%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20stroke-opacity%3D%221%22%20stroke-linejoin%3D%22bevel%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%223%22%3EG%3C%2Ftext%3E%3Ctext%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22139%22%20y%3D%22417%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EG%3C%2Ftext%3E%3Cpath%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20paint-order%3D%22stroke%20fill%20markers%22%20d%3D%22%20M%20193.72727272727275%20402.27272727272725%20C%20193.72727272727275%20405.586435771712%20191.04098122625751%20408.27272727272725%20187.72727272727275%20408.27272727272725%20C%20184.41356422828798%20408.27272727272725%20181.72727272727275%20405.586435771712%20181.72727272727275%20402.27272727272725%20C%20181.72727272727275%20398.9590187737425%20184.41356422828798%20396.27272727272725%20187.72727272727275%20396.27272727272725%20C%20191.04098122625751%20396.27272727272725%20193.72727272727275%20398.9590187737425%20193.72727272727275%20402.27272727272725%20Z%22%20fill-opacity%3D%221%22%2F%3E%3Ctext%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22172%22%20y%3D%22393%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EE%3C%2Ftext%3E%3Ctext%20fill%3D%22none%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22172%22%20y%3D%22393%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20stroke-opacity%3D%221%22%20stroke-linejoin%3D%22bevel%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%223%22%3EE%3C%2Ftext%3E%3Ctext%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22172%22%20y%3D%22393%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EE%3C%2Ftext%3E%3Cpath%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20paint-order%3D%22stroke%20fill%20markers%22%20d%3D%22%20M%20461.9090909090909%20134.0909090909091%20C%20461.9090909090909%20137.40461758989386%20459.2227994080756%20140.0909090909091%20455.9090909090909%20140.0909090909091%20C%20452.59538241010614%20140.0909090909091%20449.9090909090909%20137.40461758989386%20449.9090909090909%20134.0909090909091%20C%20449.9090909090909%20130.77720059192433%20452.59538241010614%20128.0909090909091%20455.9090909090909%20128.0909090909091%20C%20459.2227994080756%20128.0909090909091%20461.9090909090909%20130.77720059192433%20461.9090909090909%20134.0909090909091%20Z%22%20fill-opacity%3D%221%22%2F%3E%3Ctext%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22440%22%20y%3D%22122%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EF%3C%2Ftext%3E%3Ctext%20fill%3D%22none%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22440%22%20y%3D%22122%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20stroke-opacity%3D%221%22%20stroke-linejoin%3D%22bevel%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%223%22%3EF%3C%2Ftext%3E%3Ctext%20fill%3D%22rgb(218%2C41%2C28)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22440%22%20y%3D%22122%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EF%3C%2Ftext%3E%3Cpath%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20paint-order%3D%22stroke%20fill%20markers%22%20d%3D%22%20M%20381.45454545454544%20214.54545454545456%20C%20381.45454545454544%20217.85916304443933%20378.7682539535302%20220.54545454545456%20375.45454545454544%20220.54545454545456%20C%20372.1408369555607%20220.54545454545456%20369.45454545454544%20217.85916304443933%20369.45454545454544%20214.54545454545456%20C%20369.45454545454544%20211.2317460464698%20372.1408369555607%20208.54545454545456%20375.45454545454544%20208.54545454545456%20C%20378.7682539535302%20208.54545454545456%20381.45454545454544%20211.2317460464698%20381.45454545454544%20214.54545454545456%20Z%22%20fill-opacity%3D%221%22%2F%3E%3Ctext%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22363%22%20y%3D%22198%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EH%3C%2Ftext%3E%3Ctext%20fill%3D%22none%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22363%22%20y%3D%22198%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20stroke-opacity%3D%221%22%20stroke-linejoin%3D%22bevel%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%223%22%3EH%3C%2Ftext%3E%3Ctext%20fill%3D%22rgb(0%2C127%2C175)%22%20stroke%3D%22none%22%20font-family%3D%22geogebra-sans-serif%2C%20sans-serif%22%20font-size%3D%2218px%22%20font-style%3D%22normal%22%20font-weight%3D%22normal%22%20text-decoration%3D%22normal%22%20x%3D%22363%22%20y%3D%22198%22%20text-anchor%3D%22start%22%20dominant-baseline%3D%22alphabetic%22%20fill-opacity%3D%221%22%3EH%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  return defaultGGBImage;
}
