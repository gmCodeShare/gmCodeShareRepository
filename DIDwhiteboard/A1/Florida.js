const { ggb1, text1, select1, table1 } = components;

text1.updateData({ align: "center" });
table1.updateData({ visible: false });
table2.updateData({ visible: false });
table3.updateData({ visible: false });
table4.updateData({ visible: false });
table5.updateData({ visible: false });

let choiceData = getFromSlide(`slide-c5c9a9ea9bab`, "select1");
let choiceNum = choiceData.data.selected;

if (!choiceNum) {
	text1.updateData({
		text: "$\\text\\color{A0A0A0}{[no input yet on slide 6]}$",
	});
	table1.updateData({ visible: false });
}
if (choiceNum === "0") {
	text1.updateData({
		text:
			"This data set shows the ages of a variety of craters and the diameter of the impact area.\n\n*What is the approximate diameter of a crater that is $8000$ years old?*",
	});
	ggb1.instance.setValue("craters", true);
	ggb1.instance.setValue("cars", false);
	ggb1.instance.setValue("crawling", false);
	ggb1.instance.setValue("baseball", false);
	ggb1.instance.setValue("nyHomes", false);
	table1.updateData({ visible: true });
}

if (choiceNum === "1") {
	text1.updateData({
		text:
			"This data set shows the number of miles that used cars with a specific model year and name have been driven, and the price of the cars.\n\n*What is the approximate price of a used car that has been driven $25,000$ miles?*",
	});
	ggb1.instance.setValue("cars", true);
	ggb1.instance.setValue("craters", false);
	ggb1.instance.setValue("crawling", false);
	ggb1.instance.setValue("baseball", false);
	ggb1.instance.setValue("nyHomes", false);
	table2.updateData({ visible: true });
}

if (choiceNum === "2") {
	text1.updateData({
		text:
			"This data set shows the average temperature outside when a baby crawls for the first time.\n\n*Approximately when will a baby start to crawl if the average outside temperature is $42$ degrees Fahrenheit?*",
	});
	ggb1.instance.setValue("crawling", true);
	ggb1.instance.setValue("cars", false);
	ggb1.instance.setValue("craters", false);
	ggb1.instance.setValue("baseball", false);
	ggb1.instance.setValue("nyHomes", false);
	table3.updateData({ visible: true });
}

if (choiceNum === "3") {
	text1.updateData({
		text:
			"This data set shows the salary and batting average of a sample of Major League Baseball players in 2018.\n\n*What was the approximate batting average of a player that made $$31$ million in 2018?*",
	});
	ggb1.instance.setValue("baseball", true);
	ggb1.instance.setValue("cars", false);
	ggb1.instance.setValue("crawling", false);
	ggb1.instance.setValue("craters", false);
	ggb1.instance.setValue("nyHomes", false);
	table4.updateData({ visible: true });
}

if (choiceNum === "4") {
	text1.updateData({
		text:
			"This data set shows the price and size of living space of a sample of homes for sale in New York in 2010.\n\n*What would be the approximate cost of a home in New York in 2010 that has $1350$ square feet of living space?*",
	});
	ggb1.instance.setValue("nyHomes", true);
	ggb1.instance.setValue("cars", false);
	ggb1.instance.setValue("crawling", false);
	ggb1.instance.setValue("baseball", false);
	ggb1.instance.setValue("craters", false);
	table5.updateData({ visible: true });
}

autorun(() => {
	if (!select1.data.selected.length) {
		ggb1.instance.setValue("lineOfBestFit", false);
		ggb1.instance.setValue("residuals", false);
		ggb1.instance.setValue("equation", false);
		ggb1.instance.setValue("r", false);
	}
	if (select1.data.selected.includes("0")) {
		ggb1.instance.setValue("lineOfBestFit", true);
	} else {
		ggb1.instance.setValue("lineOfBestFit", false);
	}
	if (select1.data.selected.includes("1")) {
		ggb1.instance.setValue("equation", true);
	} else {
		ggb1.instance.setValue("equation", false);
	}
});
