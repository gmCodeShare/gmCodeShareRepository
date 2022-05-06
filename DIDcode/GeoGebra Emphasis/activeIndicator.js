function ggbOnInit(name, ggbObject) {
  
  function indicator(a) {
    switch (a.type) {
        case "select":
            if (ggbObject.getObjectType(a.target) == "point") {
                ggbObject.setLabelVisible(a.target, true);
            };
            break;
        case "deselect":
            ggbObject.setLabelVisible("A", false);
            ggbObject.setLabelVisible("B", false);
    };
  };

  ggbObject.registerClientListener(indicator);
}
