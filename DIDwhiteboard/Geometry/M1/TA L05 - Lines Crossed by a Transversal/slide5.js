const { ggb1 } = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAnimating('time', false);
ggb1.instance.setValue('time', 0);
ggb1.instance.setAnimating('time2', false);
ggb1.instance.setValue('time2', 0);
ggb1.instance.setAnimating('time', true);
ggb1.instance.startAnimation();

ggb1.instance.registerObjectUpdateListener('time', startTime2);

function startTime2() {
  if (ggb1.instance.getValue('time') == 1) {
    ggb1.instance.setAnimating('time2', false);
    ggb1.instance.setValue('time2', 0);
    ggb1.instance.setAnimating('time2', true);
    ggb1.instance.startAnimation();
  }
}
