// sample video code updated 2021-06-04

const { media1, buttonGroup1 } = components; 
buttonGroup1.updateData({ visible: false }); 

media1.on('ready', () => { 
  buttonGroup1.updateData({ visible: true, lastButtonClicked: '' }); // last button clicked will help solve crosstime() behavior that pauses even after a button click
}); 

media1.updateData({ align: 'center' }); 
// automatically pause at the end of part 1 and display buttons 
media1.on( 
  'crosstime', 
  () => { 
    media1.pause(); 
    console.log('the video reached first pause point'); 
    if (buttonGroup1.data.lastButtonClicked == 2) { // if they just clicked part 2 button to get here, play. If there are more than two parts, you will need more code here. Ask in #em-did-help
      media1.play(); 
    } 
    buttonGroup1.updateData({ lastButtonClicked: '' }); 
  }, 
  { time: 64 } 
); // Set pause time here in seconds. (currently integers work but decimals get truncated to integers) 

// play part 1 button 
buttonGroup1.on('click:1', () => { 
  media1.skipTo(0); 
  media1.play(); 
}); 
// play part 2 button 
buttonGroup1.on('click:2', () => { 
  buttonGroup1.updateData({ lastButtonClicked: 2 }); 
  media1.skipTo(65); // Set start time for part 2. Note: appropriate part 2 starting point is not necessarily the same as the pause time. 
}); 

// if there is a need for additional parts you will need (a) a new button in the buttonGroup (b) a new 'crosstime' chunk for the new pause and (c) a new "onclick" chunk for the button press.
// need help? ask in #em-did-help
