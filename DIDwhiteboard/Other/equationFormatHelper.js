
//equation helper function
//assuming line is graphed in geogebra

//Ax+By=C
//Abs(Numerator(Slope))x+Denom(SLope)y=DenomSlope*yInt

//cases
//fractional slope
//whole number slope
//vertical line
//horizontal line
//negative vs positive slope

const {ggb1,text1,input1,input2,button1} = components;
function equationFormatter(lineName, desiredForm = "slopeIntercept") {
	let currentForm = "";
    let initialEquation = ggb1.instance.getDefinitionString(lineName);
    let slope = ggb1.instance.getValue(`Slope(${lineName})`);
	let slopeNum = ggb1.instance.getValue(`Numerator(Slope(${lineName}))`);
    let slopeDenom = ggb1.instance.getValue(`Denominator(Slope(${lineName}))`);
    let slopeSign = slope > 0 ? "" : "-";
    let yInt = ggb1.instance.getValue(`${lineName}(0)`);
    let yIntSign = yInt > 0 ? "+" : "-";
	let equationOutput = "";

	switch (true) {
		case initialEquation.includes("y") && !initialEquation.includes("x"):
			//horizontal
			currentForm = "horizontal";
			break;
		case initialEquation.includes("x") && !initialEquation.includes("y"):
			//vertical
			currentForm = "vertical";
			break;
		case initialEquation.slice(0, 3) == "y =":
			//slope-intercept
			currentForm = "slopeIntercept";
			break;
		case initialEquation.charAt(0, 3) != "y =":
			//standard
			currentForm = "standard";
			break;
		default:
			break;
	}
	switch (true) {
		case currentForm == desiredForm:
			equationOutput = `$`+initialEquation+`$`;
			break;
        case (currentForm = "slopeIntercept" && desiredForm == "standard"):
            equationOutput = ``;
			break;
        case (currentForm = "standard" && desiredForm == "slopeIntercept"):
            if (Math.floor(slope) == slope) {
                equationOutput = `$y=${slopeSign}${slope}x${yIntSign}${yInt}$`;
            }

			break;
	}
	return equationOutput;
}

button1.on("click", () => {
    text1.updateData({text: equationFormatter(input1.data.text, input2.data.text)});
console.log(equationFormatter(input1.data.text, input2.data.text))
})
