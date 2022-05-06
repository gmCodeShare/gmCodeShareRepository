/* -- autoCom slideId: slide-7a1d0ec7412c - autoCom slideId -- */

const { ggb1, feedback1, text1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue('time', 0);

    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = Math.round(ggb1.innerData['time']);
  let coins = ggb1.innerData['coinCount'];
  if (time > 0) {
    text1.updateData({
      text: `A local grocery store is looking to purchase a coin sorting machine.
Click the Sort button to see how it works.
Time: $${time}$ seconds
Coins sorted: $${coins}$`,
    });
  }
});

button1.on('click', () => {
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('scrub', true);
  ggb1.instance.startAnimation('scrub');
  button1.updateData({ disabled: true });
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"geogebra":1,"button":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["A local grocery store is looking to purchase a specific coin-sorting machine.\n\nClick the Sort button to see how it works.\n\nTime: $0$ seconds\n\nCoins sorted: $0$",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"ggbInfo":{"materialId":["r6dnc6uz"],"widgetSize":["default"],"fixed":[false],"disabled":[false],"visible":[true],"position":["[0,0]"]},"buttonInfo":{"disabled":[false],"text":["Sort"],"position":["[0,1]"],"sizeConfig_value":["container"]},"imageInfo":{"imagesMissingAltText":0},"storedGGBMaterialIds":["r6dnc6uz - 2022-01-20T16:57:24.855Z"],"stage":"Learn","teacherView":false,"layout":"two col"} -- end slide search
*/
