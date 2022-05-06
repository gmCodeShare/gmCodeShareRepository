// WARNING: this code is frowned upon by the devs. Use at your own risk!
// execute some code when the student moves to the next slide

let now = controls.current;
autorun(() => {
  if (controls.current == now + 1) {
    // code here
  }
});

// this will execute when the student leaves the slide more broadly

let now = controls.current;
autorun(() => {
  if (controls.current != now) {
    // code here
  }
});
