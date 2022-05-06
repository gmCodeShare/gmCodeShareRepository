function ggbOnInit() {
    ggbApplet.registerClickListener("cycle");
}

function cycle(a) {
    switch (ggbApplet.getColor(a)) {
        case "#FFFFFF":
            ggbApplet.setColor(a, 141, 56, 201);
            break;
        case "#8D38C9":
            ggbApplet.setColor(a, 0, 136, 0);
            break;
        case "#008800":
            ggbApplet.setColor(a, 255, 255, 255);
    };
}
