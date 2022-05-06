/* -- autoCom slideId: slide-352909c8c370 - autoCom slideId -- */

const { ggb1, feedback1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);

autorun(() => {
  let time = ggb1.innerData['time'];
  let coins = ggb1.innerData['coinCount'];
  if (time > 0) {
    text1.updateData({
      text: `Sort the coins for $10$ seconds!
  
Time: $${time}$ seconds
  
Coins sorted: $${coins}$`,
    });
  }
});

/*
start slide search -- {"lessonInfo":"7 M1 TA L01 - An Experiment with Ratios and Rates","compTotals":{"textbox":2,"geogebra":1},"textboxInfo":{"align":["left"],"disabled":[false],"labelForRelation":[],"style_theme":["default"],"text":["Sort the coins for $10$ seconds!\n  \nTime: $0$ seconds\n  \nCoins sorted: $0$",""],"visible":[true,false],"position":["[0,1]","[0,0]"],"sizeConfig_value":["container"]},"ggbInfo":{"materialId":["vrjckjwp"],"widgetSize":["default"],"fixed":[false],"disabled":[false],"visible":[true],"position":["[0,0]"]},"imageInfo":{"imagesMissingAltText":0},"storedGGBMaterialIds":["vrjckjwp - 2022-01-20T16:57:24.855Z"],"stage":"Launch","teacherView":false,"layout":"two col"} -- end slide search
*/
