// create objects that depend on each other without running into circular defs or stack overflows
var ggbItem;

function ggbOnInit(name, applet) {
    ggbItem = applet;
    ggbItem.registerClientListener("clients");
}

var selected = "";

function clients(a) {
    switch (a.type) {
        case "select":
            selected = a.target;
            ggbItem.registerObjectUpdateListener(selected, "grab" + selected);
            break;
        case "deselect":
            ggbItem.unregisterObjectUpdateListener(selected);
            selected = "";
    }
}

function adjustX(A, B) {
    ggbItem.setCoords(A, ggbItem.getXcoord(B), ggbItem.getYcoord(A));
}

function adjustY(A, B) {
    ggbItem.setCoords(A, ggbItem.getXcoord(A), ggbItem.getYcoord(B));
}

function grabA() {
    adjustX("B", "A");
    adjustY("D", "A");
}

function grabB() {
    adjustX("A", "B");
    adjustY("C", "B");
}

function grabC() {
    adjustX("D", "C");
    adjustY("B", "C");
}

function grabD() {
    adjustX("C", "D");
    adjustY("A", "D");
}
