const { image1, image2, image3, image4, select1, text1, text2 } = components;

slide.on('firstload', () => {
  select1.selectOption('0');
  image2.updateData({ visible: false });
  image3.updateData({ visible: false });
  image4.updateData({ visible: false });
});

select1.on('change', (selected) => {
  if (select1.data.selected.includes('0')) {
    image1.updateData({ visible: true });
    text1.updateData({
      text: `**Height Requirement:**\n\nAt least $36$ inches`,
    });
    text2.updateData({
      text: `**Description:**\n\nThis is a classic coaster just for smaller children! Hop aboard Caitlyn the Caterpillar and zoom through this fun-filled track. But, hold on! She zips through those twists and turns faster than you think!`,
    });
  } else {
    image1.updateData({ visible: false });
  }
  if (select1.data.selected.includes('1')) {
    image2.updateData({ visible: true });
    text1.updateData({
      text: `**Height Requirement:**\n\nAt least $54$ inches`,
    });
    text2.updateData({
      text: `**Description:**\n\nGet your thrills and boggle your mind! This single-track coaster races two cars at once. You leave the station on one side and come back on the other!`,
    });
  } else {
    image2.updateData({ visible: false });
  }
  if (select1.data.selected.includes('2')) {
    image3.updateData({ visible: true });
    text1.updateData({
      text: `**Height Requirement:**\n\nAt least $36$ inches but no more than $54$ inches`,
    });
    text2.updateData({
      text: `**Description:**\n\nThis historic ride, opened in 1968, is an amusement park classic! Take a journey along the $400$-foot long Roaring River through the Wandering Woods. Then pass through the Mammoth Mountains before plummeting down the $82$-foot Falcon Falls. Coming Soon: The Roaring River attraction will soon undergo many changes, which include restoration of your favorite characters and improved height clearance, so our taller guests can join in the fun!`,
    });
  } else {
    image3.updateData({ visible: false });
  }
  if (select1.data.selected.includes('3')) {
    image4.updateData({ visible: true });
    text1.updateData({
      text: `**Height Requirement:**\n\nLess than $48$ inches`,
    });
    text2.updateData({
      text: `**Description:**\n\nThis is a rocket adventure for our smallest guests! Blast off for the Milky Way in the Lil’ Dipper. Take control of your rocket, soaring to new heights or cruising down low as you drift through the stars.`,
    });
  } else {
    image4.updateData({ visible: false });
  }
});
