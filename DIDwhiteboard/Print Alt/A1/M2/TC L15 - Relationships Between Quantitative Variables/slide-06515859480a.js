const { ggb1, feedback1, text1, separator2, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
});

const indexStartingInOne = 1;

function updateSingleButtonGroup(indexStartingInOne, data, buttonGroup1) {
  const newButtonGroupData = [];
  const bgButtons = buttonGroup1.data.buttons;
  const index = indexStartingInOne - 1;
  for (let i = 0; i < bgButtons.length; i++) {
    if (i === index) {
      newButtonGroupData[i] = { ...bgButtons[i], ...data }; // Merge the single button data with the respective button using the index
    } else {
      newButtonGroupData[i] = bgButtons[i]; // Every other button remain the same
    }
  }
  buttonGroup1.updateData({ buttons: newButtonGroupData }); // Run updateData over buttons prop
}

buttonGroup1.on("click:1", () => {
  updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  if (ggb1.instance.getValue("showDelawareHalo")) {
    ggb1.instance.setVisible("delawareSeg", false);
  }
  if (ggb1.instance.getValue("showRhodeIslandHalo")) {
    ggb1.instance.setVisible("rhodeIslandSeg", false);
  }
  if (ggb1.instance.getValue("showNewHampshireHalo")) {
    ggb1.instance.setVisible("newHampshireSeg", false);
  }
  ggb1.instance.setVisible("picAlabama", false);
  ggb1.instance.setVisible("picArizona", false);
  ggb1.instance.setVisible("picArkansas", false);
  ggb1.instance.setVisible("picCalifornia", false);
  ggb1.instance.setVisible("picColorado", false);
  ggb1.instance.setVisible("picConnecticut", false);
  ggb1.instance.setVisible("picDelaware", false);
  ggb1.instance.setVisible("picFlorida", false);
  ggb1.instance.setVisible("picGeorgia", false);
  ggb1.instance.setVisible("picIdaho", false);
  ggb1.instance.setVisible("picIllinois", false);
  ggb1.instance.setVisible("picIndiana", false);
  ggb1.instance.setVisible("picIowa", false);
  ggb1.instance.setVisible("picKentucky", false);
  ggb1.instance.setVisible("picLouisiana", false);
  ggb1.instance.setVisible("picMaine", false);
  ggb1.instance.setVisible("picMaryland", false);
  ggb1.instance.setVisible("picMassachusetts", false);
  ggb1.instance.setVisible("picMichigan", false);
  ggb1.instance.setVisible("picMinnesota", false);
  ggb1.instance.setVisible("picMississippi", false);
  ggb1.instance.setVisible("picMissouri", false);
  ggb1.instance.setVisible("picMontana", false);
  ggb1.instance.setVisible("picNebraska", false);
  ggb1.instance.setVisible("picNevada", false);
  ggb1.instance.setVisible("picNewHampshire", false);
  ggb1.instance.setVisible("picNewJersey", false);
  ggb1.instance.setVisible("picNewMexico", false);
  ggb1.instance.setVisible("picNewYork", false);
  ggb1.instance.setVisible("picNorthCarolina", false);
  ggb1.instance.setVisible("picNorthDakota", false);
  ggb1.instance.setVisible("picOhio", false);
  ggb1.instance.setVisible("picOklahoma", false);
  ggb1.instance.setVisible("picOregon", false);
  ggb1.instance.setVisible("picPennsylvania", false);
  ggb1.instance.setVisible("picRhodeIsland", false);
  ggb1.instance.setVisible("picSouthCarolina", false);
  ggb1.instance.setVisible("picSouthDakota", false);
  ggb1.instance.setVisible("picTennessee", false);
  ggb1.instance.setVisible("picTexas", false);
  ggb1.instance.setVisible("picUtah", false);
  ggb1.instance.setVisible("picVermont", false);
  ggb1.instance.setVisible("picVirginia", false);
  ggb1.instance.setVisible("picWashington", false);
  ggb1.instance.setVisible("picWestVirginia", false);
  ggb1.instance.setVisible("picWisconsin", false);
  ggb1.instance.setVisible("picWyoming", false);
});

buttonGroup1.on("click:2", () => {
  updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
  updateSingleButtonGroup(2, { disabled: true }, buttonGroup1);
  ggb1.instance.setVisible("picAlabama", true);
  ggb1.instance.setVisible("picArizona", true);
  ggb1.instance.setVisible("picArkansas", true);
  ggb1.instance.setVisible("picCalifornia", true);
  ggb1.instance.setVisible("picColorado", true);
  ggb1.instance.setVisible("picConnecticut", true);
  ggb1.instance.setVisible("picDelaware", true);
  ggb1.instance.setVisible("picFlorida", true);
  ggb1.instance.setVisible("picGeorgia", true);
  ggb1.instance.setVisible("picIdaho", true);
  ggb1.instance.setVisible("picIllinois", true);
  ggb1.instance.setVisible("picIndiana", true);
  ggb1.instance.setVisible("picIowa", true);
  ggb1.instance.setVisible("picKentucky", true);
  ggb1.instance.setVisible("picLouisiana", true);
  ggb1.instance.setVisible("picMaine", true);
  ggb1.instance.setVisible("picMaryland", true);
  ggb1.instance.setVisible("picMassachusetts", true);
  ggb1.instance.setVisible("picMichigan", true);
  ggb1.instance.setVisible("picMinnesota", true);
  ggb1.instance.setVisible("picMississippi", true);
  ggb1.instance.setVisible("picMissouri", true);
  ggb1.instance.setVisible("picMontana", true);
  ggb1.instance.setVisible("picNebraska", true);
  ggb1.instance.setVisible("picNevada", true);
  ggb1.instance.setVisible("picNewHampshire", true);
  ggb1.instance.setVisible("picNewJersey", true);
  ggb1.instance.setVisible("picNewMexico", true);
  ggb1.instance.setVisible("picNewYork", true);
  ggb1.instance.setVisible("picNorthCarolina", true);
  ggb1.instance.setVisible("picNorthDakota", true);
  ggb1.instance.setVisible("picOhio", true);
  ggb1.instance.setVisible("picOklahoma", true);
  ggb1.instance.setVisible("picOregon", true);
  ggb1.instance.setVisible("picPennsylvania", true);
  ggb1.instance.setVisible("picRhodeIsland", true);
  ggb1.instance.setVisible("picSouthCarolina", true);
  ggb1.instance.setVisible("picSouthDakota", true);
  ggb1.instance.setVisible("picTennessee", true);
  ggb1.instance.setVisible("picTexas", true);
  ggb1.instance.setVisible("picUtah", true);
  ggb1.instance.setVisible("picVermont", true);
  ggb1.instance.setVisible("picVirginia", true);
  ggb1.instance.setVisible("picWashington", true);
  ggb1.instance.setVisible("picWestVirginia", true);
  ggb1.instance.setVisible("picWisconsin", true);
  ggb1.instance.setVisible("picWyoming", true);
  ggb1.instance.setVisible("checkPinAlabama", false);
  ggb1.instance.setVisible("checkPinArizona", false);
  ggb1.instance.setVisible("checkPinArkansas", false);
  ggb1.instance.setVisible("checkPinCalifornia", false);
  ggb1.instance.setVisible("checkPinColorado", false);
  ggb1.instance.setVisible("checkPinConnecticut", false);
  ggb1.instance.setVisible("checkPinDelaware", false);
  ggb1.instance.setVisible("checkPinFlorida", false);
  ggb1.instance.setVisible("checkPinGeorgia", false);
  ggb1.instance.setVisible("checkPinIdaho", false);
  ggb1.instance.setVisible("checkPinIllinois", false);
  ggb1.instance.setVisible("checkPinIndiana", false);
  ggb1.instance.setVisible("checkPinIowa", false);
  ggb1.instance.setVisible("checkPinKentucky", false);
  ggb1.instance.setVisible("checkPinLouisiana", false);
  ggb1.instance.setVisible("checkPinMaine", false);
  ggb1.instance.setVisible("checkPinMaryland", false);
  ggb1.instance.setVisible("checkPinMassachusetts", false);
  ggb1.instance.setVisible("checkPinMichigan", false);
  ggb1.instance.setVisible("checkPinMinnesota", false);
  ggb1.instance.setVisible("checkPinMississippi", false);
  ggb1.instance.setVisible("checkPinMissouri", false);
  ggb1.instance.setVisible("checkPinMontana", false);
  ggb1.instance.setVisible("checkPinNebraska", false);
  ggb1.instance.setVisible("checkPinNevada", false);
  ggb1.instance.setVisible("checkPinNewHampshire", false);
  ggb1.instance.setVisible("checkPinNewJersey", false);
  ggb1.instance.setVisible("checkPinNewMexico", false);
  ggb1.instance.setVisible("checkPinNewYork", false);
  ggb1.instance.setVisible("checkPinNorthCarolina", false);
  ggb1.instance.setVisible("checkPinNorthDakota", false);
  ggb1.instance.setVisible("checkPinOhio", false);
  ggb1.instance.setVisible("checkPinOklahoma", false);
  ggb1.instance.setVisible("checkPinOregon", false);
  ggb1.instance.setVisible("checkPinPennsylvania", false);
  ggb1.instance.setVisible("checkPinRhodeIsland", false);
  ggb1.instance.setVisible("checkPinSouthCarolina", false);
  ggb1.instance.setVisible("checkPinSouthDakota", false);
  ggb1.instance.setVisible("checkPinTennessee", false);
  ggb1.instance.setVisible("checkPinTexas", false);
  ggb1.instance.setVisible("checkPinUtah", false);
  ggb1.instance.setVisible("checkPinVermont", false);
  ggb1.instance.setVisible("checkPinVirginia", false);
  ggb1.instance.setVisible("checkPinWashington", false);
  ggb1.instance.setVisible("checkPinWestVirginia", false);
  ggb1.instance.setVisible("checkPinWisconsin", false);
  ggb1.instance.setVisible("checkPinWyoming", false);
  ggb1.instance.setValue("showAlabamaHalo", true);
  ggb1.instance.setValue("showArizonaHalo", true);
  ggb1.instance.setValue("showArkansasHalo", true);
  ggb1.instance.setValue("showCaliforniaHalo", true);
  ggb1.instance.setValue("showColoradoHalo", true);
  ggb1.instance.setValue("showConnecticutHalo", true);
  ggb1.instance.setValue("showDelawareHalo", true);
  ggb1.instance.setValue("showFloridaHalo", true);
  ggb1.instance.setValue("showGeorgiaHalo", true);
  ggb1.instance.setValue("showIdahoHalo", true);
  ggb1.instance.setValue("showIllinoisHalo", true);
  ggb1.instance.setValue("showIndianaHalo", true);
  ggb1.instance.setValue("showIowaHalo", true);
  ggb1.instance.setValue("showKentuckyHalo", true);
  ggb1.instance.setValue("showLouisianaHalo", true);
  ggb1.instance.setValue("showMaineHalo", true);
  ggb1.instance.setValue("showMarylandHalo", true);
  ggb1.instance.setValue("showMassachusettsHalo", true);
  ggb1.instance.setValue("showMichiganHalo", true);
  ggb1.instance.setValue("showMinnesotaHalo", true);
  ggb1.instance.setValue("showMississippiHalo", true);
  ggb1.instance.setValue("showMissouriHalo", true);
  ggb1.instance.setValue("showMontanaHalo", true);
  ggb1.instance.setValue("showNebraskaHalo", true);
  ggb1.instance.setValue("showNevadaHalo", true);
  ggb1.instance.setValue("showNewHampshireHalo", true);
  ggb1.instance.setValue("showNewJerseyHalo", true);
  ggb1.instance.setValue("showNewMexicoHalo", true);
  ggb1.instance.setValue("showNewYorkHalo", true);
  ggb1.instance.setValue("showNorthCarolinaHalo", true);
  ggb1.instance.setValue("showNorthDakotaHalo", true);
  ggb1.instance.setValue("showOhioHalo", true);
  ggb1.instance.setValue("showOklahomaHalo", true);
  ggb1.instance.setValue("showOregonHalo", true);
  ggb1.instance.setValue("showPennsylvaniaHalo", true);
  ggb1.instance.setValue("showRhodeIslandHalo", true);
  ggb1.instance.setValue("showSouthCarolinaHalo", true);
  ggb1.instance.setValue("showSouthDakotaHalo", true);
  ggb1.instance.setValue("showTennesseeHalo", true);
  ggb1.instance.setValue("showTexasHalo", true);
  ggb1.instance.setValue("showUtahHalo", true);
  ggb1.instance.setValue("showVermontHalo", true);
  ggb1.instance.setValue("showVirginiaHalo", true);
  ggb1.instance.setValue("showWashingtonHalo", true);
  ggb1.instance.setValue("showWestVirginiaHalo", true);
  ggb1.instance.setValue("showWisconsinHalo", true);
  ggb1.instance.setValue("showWyomingHalo", true);
  ggb1.instance.setFixed("picAlabama", true, true);
  ggb1.instance.setFixed("picArizona", true, true);
  ggb1.instance.setFixed("picArkansas", true, true);
  ggb1.instance.setFixed("picCalifornia", true, true);
  ggb1.instance.setFixed("picColorado", true, true);
  ggb1.instance.setFixed("picConnecticut", true, true);
  ggb1.instance.setFixed("picDelaware", true, true);
  ggb1.instance.setFixed("picFlorida", true, true);
  ggb1.instance.setFixed("picGeorgia", true, true);
  ggb1.instance.setFixed("picIdaho", true, true);
  ggb1.instance.setFixed("picIllinois", true, true);
  ggb1.instance.setFixed("picIndiana", true, true);
  ggb1.instance.setFixed("picIowa", true, true);
  ggb1.instance.setFixed("picKentucky", true, true);
  ggb1.instance.setFixed("picLouisiana", true, true);
  ggb1.instance.setFixed("picMaine", true, true);
  ggb1.instance.setFixed("picMaryland", true, true);
  ggb1.instance.setFixed("picMassachusetts", true, true);
  ggb1.instance.setFixed("picMichigan", true, true);
  ggb1.instance.setFixed("picMinnesota", true, true);
  ggb1.instance.setFixed("picMississippi", true, true);
  ggb1.instance.setFixed("picMissouri", true, true);
  ggb1.instance.setFixed("picMontana", true, true);
  ggb1.instance.setFixed("picNebraska", true, true);
  ggb1.instance.setFixed("picNevada", true, true);
  ggb1.instance.setFixed("picNewHampshire", true, true);
  ggb1.instance.setFixed("picNewJersey", true, true);
  ggb1.instance.setFixed("picNewMexico", true, true);
  ggb1.instance.setFixed("picNewYork", true, true);
  ggb1.instance.setFixed("picNorthCarolina", true, true);
  ggb1.instance.setFixed("picNorthDakota", true, true);
  ggb1.instance.setFixed("picOhio", true, true);
  ggb1.instance.setFixed("picOklahoma", true, true);
  ggb1.instance.setFixed("picOregon", true, true);
  ggb1.instance.setFixed("picPennsylvania", true, true);
  ggb1.instance.setFixed("picRhodeIsland", true, true);
  ggb1.instance.setFixed("picSouthCarolina", true, true);
  ggb1.instance.setFixed("picSouthDakota", true, true);
  ggb1.instance.setFixed("picTennessee", true, true);
  ggb1.instance.setFixed("picTexas", true, true);
  ggb1.instance.setFixed("picUtah", true, true);
  ggb1.instance.setFixed("picVermont", true, true);
  ggb1.instance.setFixed("picVirginia", true, true);
  ggb1.instance.setFixed("picWashington", true, true);
  ggb1.instance.setFixed("picWestVirginia", true, true);
  ggb1.instance.setFixed("picWisconsin", true, true);
  ggb1.instance.setFixed("picWyoming", true, true);
  ggb1.instance.setVisible("delawareSeg", true);
  ggb1.instance.setVisible("newHampshireSeg", true);
  ggb1.instance.setVisible("rhodeIslandSeg", true);
  ggb1.instance.setValue("count", 0);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
});

ggb1.instance.registerObjectUpdateListener("count", update);

function update() {
  if (ggb1.instance.getValue("count") > 0) {
    updateSingleButtonGroup(2, { disabled: false }, buttonGroup1);
  }
  if (ggb1.instance.getValue("count") < 3) {
    updateSingleButtonGroup(1, { disabled: true }, buttonGroup1);
  }
  if (ggb1.instance.getValue("count") == 3) {
    updateSingleButtonGroup(1, { disabled: false }, buttonGroup1);
    ggb1.instance.setValue("showAlabamaHalo", false);
    ggb1.instance.setValue("showArizonaHalo", false);
    ggb1.instance.setValue("showArkansasHalo", false);
    ggb1.instance.setValue("showCaliforniaHalo", false);
    ggb1.instance.setValue("showColoradoHalo", false);
    ggb1.instance.setValue("showConnecticutHalo", false);
    ggb1.instance.setValue("showFloridaHalo", false);
    ggb1.instance.setValue("showGeorgiaHalo", false);
    ggb1.instance.setValue("showIdahoHalo", false);
    ggb1.instance.setValue("showIllinoisHalo", false);
    ggb1.instance.setValue("showIndianaHalo", false);
    ggb1.instance.setValue("showIowaHalo", false);
    ggb1.instance.setValue("showKentuckyHalo", false);
    ggb1.instance.setValue("showLouisianaHalo", false);
    ggb1.instance.setValue("showMaineHalo", false);
    ggb1.instance.setValue("showMarylandHalo", false);
    ggb1.instance.setValue("showMassachusettsHalo", false);
    ggb1.instance.setValue("showMichiganHalo", false);
    ggb1.instance.setValue("showMinnesotaHalo", false);
    ggb1.instance.setValue("showMississippiHalo", false);
    ggb1.instance.setValue("showMissouriHalo", false);
    ggb1.instance.setValue("showMontanaHalo", false);
    ggb1.instance.setValue("showNebraskaHalo", false);
    ggb1.instance.setValue("showNevadaHalo", false);
    ggb1.instance.setValue("showNewJerseyHalo", false);
    ggb1.instance.setValue("showNewMexicoHalo", false);
    ggb1.instance.setValue("showNewYorkHalo", false);
    ggb1.instance.setValue("showNorthCarolinaHalo", false);
    ggb1.instance.setValue("showNorthDakotaHalo", false);
    ggb1.instance.setValue("showOhioHalo", false);
    ggb1.instance.setValue("showOklahomaHalo", false);
    ggb1.instance.setValue("showOregonHalo", false);
    ggb1.instance.setValue("showPennsylvaniaHalo", false);
    ggb1.instance.setValue("showSouthCarolinaHalo", false);
    ggb1.instance.setValue("showSouthDakotaHalo", false);
    ggb1.instance.setValue("showTennesseeHalo", false);
    ggb1.instance.setValue("showTexasHalo", false);
    ggb1.instance.setValue("showUtahHalo", false);
    ggb1.instance.setValue("showVermontHalo", false);
    ggb1.instance.setValue("showVirginiaHalo", false);
    ggb1.instance.setValue("showWashingtonHalo", false);
    ggb1.instance.setValue("showWestVirginiaHalo", false);
    ggb1.instance.setValue("showWisconsinHalo", false);
    ggb1.instance.setValue("showWyomingHalo", false);
    ggb1.instance.setFixed("picAlabama", true, false);
    ggb1.instance.setFixed("picArizona", true, false);
    ggb1.instance.setFixed("picArkansas", true, false);
    ggb1.instance.setFixed("picCalifornia", true, false);
    ggb1.instance.setFixed("picColorado", true, false);
    ggb1.instance.setFixed("picConnecticut", true, false);
    ggb1.instance.setFixed("picFlorida", true, false);
    ggb1.instance.setFixed("picGeorgia", true, false);
    ggb1.instance.setFixed("picIdaho", true, false);
    ggb1.instance.setFixed("picIllinois", true, false);
    ggb1.instance.setFixed("picIndiana", true, false);
    ggb1.instance.setFixed("picIowa", true, false);
    ggb1.instance.setFixed("picKentucky", true, false);
    ggb1.instance.setFixed("picLouisiana", true, false);
    ggb1.instance.setFixed("picMaine", true, false);
    ggb1.instance.setFixed("picMaryland", true, false);
    ggb1.instance.setFixed("picMassachusetts", true, false);
    ggb1.instance.setFixed("picMichigan", true, false);
    ggb1.instance.setFixed("picMinnesota", true, false);
    ggb1.instance.setFixed("picMississippi", true, false);
    ggb1.instance.setFixed("picMissouri", true, false);
    ggb1.instance.setFixed("picMontana", true, false);
    ggb1.instance.setFixed("picNebraska", true, false);
    ggb1.instance.setFixed("picNevada", true, false);
    ggb1.instance.setFixed("picNewJersey", true, false);
    ggb1.instance.setFixed("picNewMexico", true, false);
    ggb1.instance.setFixed("picNewYork", true, false);
    ggb1.instance.setFixed("picNorthCarolina", true, false);
    ggb1.instance.setFixed("picNorthDakota", true, false);
    ggb1.instance.setFixed("picOhio", true, false);
    ggb1.instance.setFixed("picOklahoma", true, false);
    ggb1.instance.setFixed("picOregon", true, false);
    ggb1.instance.setFixed("picPennsylvania", true, false);
    ggb1.instance.setFixed("picSouthCarolina", true, false);
    ggb1.instance.setFixed("picSouthDakota", true, false);
    ggb1.instance.setFixed("picTennessee", true, false);
    ggb1.instance.setFixed("picTexas", true, false);
    ggb1.instance.setFixed("picUtah", true, false);
    ggb1.instance.setFixed("picVermont", true, false);
    ggb1.instance.setFixed("picVirginia", true, false);
    ggb1.instance.setFixed("picWashington", true, false);
    ggb1.instance.setFixed("picWestVirginia", true, false);
    ggb1.instance.setFixed("picWisconsin", true, false);
    ggb1.instance.setFixed("picWyoming", true, false);
  }
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"separator":1,"buttongroup":1},"stage":"Learn","lessonInfo":"9 M2 TC L15 - Print Alternate Slide Deck for Relationships Between Quantitative Variables","teacherView":true,"layout":"two col"}
*/
