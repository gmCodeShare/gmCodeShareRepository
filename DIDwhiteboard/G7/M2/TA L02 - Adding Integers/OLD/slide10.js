const {
  ggb1,
  cc_sharewithclass_6b3976079b53_button1: button1,
  cc_sharewithclass_6b3976079b53_input1: input1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setSize(590, 590);
button1.updateData({ align: "right" });

const id0 = "slide-1bbbce9dd14d";
const id1 = "slide-bcd29a068199";
const id2 = "slide-684a38e253ee";
const id3 = "slide-a790d5267a64";

let defPrevGGB1 = {
  innerData: { addend1: 0, addend2: 0, addendSum: 0 },
};

let previous0 = getFromSlide(id0, "ggb1", false) || false; // don't forget to change slide id

let id0HasData = !previous0
  ? false
  : !Object.keys(previous0).includes("innerData")
  ? false
  : !Object.keys(previous0.innerData).length
  ? false
  : true;

if (!id0HasData) {
  previous0 = defPrevGGB1;
}

let previous1 = getFromSlide(id1, "ggb1", false) || false; // don't forget to change slide id

let id1HasData = !previous1
  ? false
  : !Object.keys(previous1).includes("innerData")
  ? false
  : !Object.keys(previous1.innerData).length
  ? false
  : true;

if (!id1HasData) {
  previous1 = defPrevGGB1;
}

let previous2 = getFromSlide(id2, "ggb1", false) || false; // don't forget to change slide id

let id2HasData = !previous2
  ? false
  : !Object.keys(previous2).includes("innerData")
  ? false
  : !Object.keys(previous2.innerData).length
  ? false
  : true;

if (!id2HasData) {
  previous2 = defPrevGGB1;
}

let previous3 = getFromSlide(id3, "ggb1", false) || false; // don't forget to change slide id

let id3HasData = !previous3
  ? false
  : !Object.keys(previous3).includes("innerData")
  ? false
  : !Object.keys(previous3.innerData).length
  ? false
  : true;

if (!id3HasData) {
  previous3 = defPrevGGB1;
}

// let previous0 = getFromSlide("slide-1bbbce9dd14d", "ggb1");
ggb1.instance.setValue("g0Addend", previous0.innerData["addend1"]);
ggb1.instance.setValue("g0Sum", previous0.innerData["addendSum"]);
// let previous1 = getFromSlide("slide-bcd29a068199", "ggb1");
ggb1.instance.setValue("g1Addend", previous1.innerData["addend1"]);
ggb1.instance.setValue("g1Sum", previous1.innerData["addendSum"]);
// let previous2 = getFromSlide("slide-684a38e253ee", "ggb1");
ggb1.instance.setValue("g2Addend", previous2.innerData["addend1"]);
ggb1.instance.setValue("g2Sum", previous2.innerData["addendSum"]);
// let previous3 = getFromSlide("slide-a790d5267a64", "ggb1");
ggb1.instance.setValue("g3Addend", previous3.innerData["addend1"]);
ggb1.instance.setValue("g3Sum", previous3.innerData["addendSum"]);
