let ggbObject = ggbApplet37374116;
let allNames = ggbObject.getAllObjectNames();

function getAllInfo(element) {
	objName = element;
	objType = ggbObject.getObjectType(element);
	objColor = ggbObject.getColor(element);
	visible = ggbObject.getVisible(element);
	layer = ggbObject.getLayer(element);
	lineStyle = ggbObject.getLineStyle(element);
	lineThickness = ggbObject.getLineThickness(element);
	pointStyle = ggbObject.getPointStyle(element);
	pointSize = ggbObject.getPointSize(element);
	filling = ggbObject.getFilling(element);
	caption = ggbObject.getCaption(element);
	labelStyle = ggbObject.getLabelStyle(element);
	labelVisible = ggbObject.getLabelVisible(element);
	return {
		objName,
		objType,
		objColor,
		visible,
		layer,
		lineStyle,
		lineThickness,
		pointStyle,
		pointSize,
		filling,
		caption,
		labelStyle,
		labelVisible,
	};
}

let everything = [];
for (let i = 0, L = allNames.length; i < L; i++) {
	everything.push(getAllInfo(allNames[i]));
}

for (let i = 0, L = everything.length; i < L; i++) {
	if (everything[i].objColor.includes("#007FAF")) {
		console.log(everything[i].objName);
	}
}

[
	{
		objName: "corner",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "circleRad",
		objType: "numeric",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 2,
		pointStyle: -1,
		pointSize: -1,
		filling: 0.10000000149011612,
		caption: "",
		labelStyle: 2,
		labelVisible: true,
	},
	{
		objName: "A",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "c",
		objType: "circle",
		objColor: "#EDB220",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 13,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "B",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "d",
		objType: "circle",
		objColor: "#DA291C",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 13,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "C",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "e",
		objType: "circle",
		objColor: "#008139",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 13,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "D",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "E",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "greenApple",
		objType: "image",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 1,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "F",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "G",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "yellowApple",
		objType: "image",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 1,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "H",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "I",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "redApple",
		objType: "image",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 1,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "largeGreenApple",
		objType: "image",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 1,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "largeRedApple",
		objType: "image",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 1,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "largeYellowApple",
		objType: "image",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 1,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "binHeight",
		objType: "numeric",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 2,
		pointStyle: -1,
		pointSize: -1,
		filling: 0.10000000149011612,
		caption: "",
		labelStyle: 2,
		labelVisible: true,
	},
	{
		objName: "bin",
		objType: "quadrilateral",
		objColor: "#A0A0A0",
		visible: true,
		layer: 0,
		lineStyle: 2,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0.15,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "text1",
		objType: "text",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "text2",
		objType: "text",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "text3",
		objType: "text",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "J",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "f",
		objType: "circle",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "K",
		objType: "point",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: 10,
		pointSize: 5,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "g",
		objType: "circle",
		objColor: "#007FAF",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "colorSort",
		objType: "boolean",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "sizeSort",
		objType: "boolean",
		objColor: "#000000",
		visible: true,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: true,
	},
	{
		objName: "text4",
		objType: "text",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
	{
		objName: "text5",
		objType: "text",
		objColor: "#000000",
		visible: false,
		layer: 0,
		lineStyle: 0,
		lineThickness: 5,
		pointStyle: -1,
		pointSize: -1,
		filling: 0,
		caption: "",
		labelStyle: 0,
		labelVisible: false,
	},
];
