//original matID = yedmqcxm

function ggbOnInit() {
    //if object goes in left cup, move point C by angle (around circle ccw)
    //if object goes in right cup, move point C by angle (around circle cw)
    //resultant angle gives total circle movement

    function moveIt(event) {
        if (event.type == "dragEnd") {
            let grabbedName = event.target;
            let itemName = [];
            let originalOrder= ["Shoe", "Glue", "Crayon", "Bus"];
            switch (grabbedName) {
                case "Shoe":
                itemName = ["Shoe", "Glue", "Crayon", "Bus"];
                    break;
                case "Glue":
                    itemName = ["Glue", "Crayon", "Bus", "Shoe"];
                    break;
                case "Bus":
                    itemName = ["Bus", "Shoe", "Glue", "Crayon"];
                    break;
                case "Crayon":
                    itemName = ["Crayon", "Shoe", "Glue", "Bus"];
                    break;
                default:
                    itemName = ["Shoe", "Glue", "Crayon", "Bus"];
            }

            //animation timer to make it move smoothly?
            for (let i = 0, L = 4; i < L; i++) {
                console.log(itemName[i], ggbApplet.getValue("Dynamic" + itemName[i]), ggbApplet.getValue(itemName[i] + "Width"));
                ggbApplet.setValue(itemName[i] + "Location", ggbApplet.getValue("Dynamic" + itemName[i]));
                if (ggbApplet.getValue(itemName[i] + "Location") == 1) {
                    ggbApplet.setCoords(itemName[i] + "PointL", ggbApplet.getXcoord("L"), ggbApplet.getYcoord("L"));
                    ggbApplet.setCoords(itemName[i] + "PointR", ggbApplet.getXcoord("L") + ggbApplet.getValue(itemName[i] + "Width"), ggbApplet.getYcoord("L"));
                } else if (ggbApplet.getValue(itemName[i] + "Location") == -1) {
                    ggbApplet.setCoords(itemName[i] + "PointL", ggbApplet.getXcoord("F"), ggbApplet.getYcoord("F"));
                    ggbApplet.setCoords(itemName[i] + "PointR", ggbApplet.getXcoord("F") + ggbApplet.getValue(itemName[i] + "Width"), ggbApplet.getYcoord("F"));
                } else {
                    ggbApplet.setCoords(originalOrder[i] + "PointL", (-12 + 6 * i), -2.5);
                    ggbApplet.setCoords(originalOrder[i] + "PointR", (-12 + 6 * i + ggbApplet.getValue(originalOrder[i] + "Width")), -2.5);
                }
            }
        }
    }

    ggbApplet.registerClientListener(moveIt);
}