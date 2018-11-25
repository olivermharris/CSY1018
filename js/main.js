// Header Splash Screen

let pos;
/*
  On page load: set header height to not interfer when javascript is disabled
*/
window.onload = () => { /* run after contents loaded */
  document.getElementById('header').style.height = "100vh";
};


window.addEventListener('scroll', () => {
  pos = (document.body.getBoundingClientRect()).top;
  if (pos < -10) {
    document.getElementById('header').style.height = "15vh";

    document.getElementById('headerTxt').classList.add("hidden");
    document.getElementById('menu').classList.add("hidden");
  } else {
    document.getElementById('header').style.height = "100vh";

    document.getElementById('headerTxt').classList.remove("hidden");
    document.getElementById('menu').classList.remove("hidden");
  }
});

// Responsive Navigation Menu for Mobile
