const {ggb1, buttonGroup1} = components;


buttonGroup1.on("click:1",()=>{
    hideAndTile();
})


function hideAndTile() {
    ggb1.instance.setValue("time", 0);
    ggb1.instance.setAnimating("time", true);
    ggb1.instance.startAnimation();
    var draggedBlocks = ggb1.instance.getAllObjectNames("quadrilateral");
    for (var i = 0; i < draggedBlocks.length; i++) {
        if (draggedBlocks[i].includes("dragged")) {
            ggb1.instance.deleteObject(draggedBlocks[i]);
        }
    }
    for (var i = 1; i <= ggb1.instance.getValue("Length(draggerSnapList)"); i++) {
        if (ggb1.instance.getValue("IsInRegion(draggerSnapList(" + i + "),q1)") == true && ggb1.instance.getValue("IsDefined(Intersect(draggerSnapList(" + i + "),k))") == false && ggb1.instance.getValue("IsDefined(Intersect(draggerSnapList(" + i + "),l))") == false) {
            ggb1.instance.evalCommand("dragged" + i + "=l3(" + i + ")");
            ggb1.instance.setColor("dragged" + i, 0, 127, 175);
            ggb1.instance.setFixed("dragged" + i, true, false);
        }
    }
}
