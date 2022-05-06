const {
  ggb1,
  text1,
  cc_sharewithclass_3e9fc0209643_button1: button1,
  cc_sharewithclass_3e9fc0209643_input1: input1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setSize(590, 590);
button1.updateData({ align: "right" });

const id2 = "slide-4ac183d82668";
const id3 = "slide-59c6c2158d6f";

let defPrevGGB1 = {
  innerData: { addend1: 0, addend2: 0, addendSum: 0 },
};

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

// let previous2 = getFromSlide("slide-4ac183d82668", "ggb1");
ggb1.instance.setValue("g2Addend", previous2.innerData["addend1"]);
ggb1.instance.setValue("g2Sum", previous2.innerData["addendSum"]);
// let previous3 = getFromSlide("slide-59c6c2158d6f", "ggb1");
ggb1.instance.setValue("g3Addend", previous3.innerData["addend1"]);
ggb1.instance.setValue("g3Sum", previous3.innerData["addendSum"]);
