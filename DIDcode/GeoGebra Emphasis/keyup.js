function ggbOnInit() {
    ggbObject.registerClientListener("dragit");
    document.addEventListener("keyup", keyit);
}
function dragit(a) {
    if (a.type == "dragEnd") {
        check();
    };
}
function keyit(event) {
//event keys may be different depending on how object is moved with the keyboard
    if (event.key == "ArrowLeft" || event.key == "ArrowUp" || event.key == "ArrowRight" || event.key == "ArrowDown") {
        check();
    };
}
function check(){
    //do something;
}
