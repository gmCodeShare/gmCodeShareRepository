const { ggb1, buttonGroup1 } = components;

ggb1.instance.setValue("startingNumber", 1);
ggb1.instance.setValue("TotalCards", 10);
ggb1.instance.setVisible("blankCard", false);
let cardSpots = [-6,-4, -2, 0, 2, 4, 6 ];


function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
  }
  

//moves all cards offscreen and hides them
for (var i = 1; i < 121; i++) {
	ggb1.instance.setCoords("Point" + i, -13.5, 2);
	ggb1.instance.setVisible("Point" + i, false);
	ggb1.instance.setVisible("HaloPoint" + i, false);
	ggb1.instance.setVisible("q" + i, false);
	ggb1.instance.setVisible("backq" + i, false);
	ggb1.instance.setVisible("pic" + i, false);
}

buttonGroup1.on("click:1", () => {
	//moves cards to be used to visible space and sets them visible
	let randomCardSpots = shuffle(cardSpots);
	console.log(randomCardSpots);
	for (var i = 0; i < ggb1.instance.getValue("TotalCards"); i++) {
		if (i < 4 && i>0) {
			ggb1.instance.setCoords("Point" + (ggb1.instance.getValue("startingNumber") + i), randomCardSpots[i-1], 2 + Math.random());
		}
		else if(i > 4){
			ggb1.instance.setCoords("Point" + (ggb1.instance.getValue("startingNumber") + i), randomCardSpots[i-2], 2 + Math.random());
		}
		//ggb1.instance.setCoords("Point" + (ggb1.instance.getValue("startingNumber") + i), randomCardSpots[i], 2 + Math.random());
		ggb1.instance.setVisible("Point" + (ggb1.instance.getValue("startingNumber") + i), true);
		ggb1.instance.setVisible("HaloPoint" + (ggb1.instance.getValue("startingNumber") + i), true);
		ggb1.instance.setVisible("q" + (ggb1.instance.getValue("startingNumber") + i), true);
		ggb1.instance.setVisible("backq" + (ggb1.instance.getValue("startingNumber") + i), true);
		ggb1.instance.setVisible("pic" + (ggb1.instance.getValue("startingNumber") + i), true);
		ggb1.instance.setLayer("Point" + (ggb1.instance.getValue("startingNumber") + i), ggb1.instance.getValue("RandomBetween(4,9)"));
	}
	//sets visible cards on clothesline
ggb1.instance.setCoords(
	"Point" + ggb1.instance.getValue("startingNumber"),
	ggb1.instance.getXcoord("StartingPoint"),
	ggb1.instance.getYcoord("StartingPoint")
);
ggb1.instance.setCoords(
	"Point" + (ggb1.instance.getValue("startingNumber") + 4),
	ggb1.instance.getXcoord("MiddlePoint"),
	ggb1.instance.getYcoord("MiddlePoint")
);
ggb1.instance.setCoords(
	"Point" + (ggb1.instance.getValue("startingNumber") + 9),
	ggb1.instance.getXcoord("EndingPoint"),
	ggb1.instance.getYcoord("EndingPoint")
);
})




