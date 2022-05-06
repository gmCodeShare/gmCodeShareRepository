/**
 * Through the power of closures, ensure that scoped variables persist (since they normally don't) without making them global
 * Specifically, make sure that your applet API (ggbApplet vs ggb1 vs ggbObject) won't collide with others
 * Check out the LiL Course on closures by Sasha Vodnik for more info
 *
 * @link https://www.linkedin.com/learning-login/share?account=2307626&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fjavascript-closures%3Ftrk%3Dshare_ent_url%26shareId%3DtKf2x9pjRZet7msnW27Tnw%253D%253D
 */

// Make your global JS tab look something like this:
function ggbOnInit(name, ggbObject) {
  function doStuff() {
    // do stuff
  }
  ggbObject.registerObjectUpdateListener("slider", doStuff);
}
