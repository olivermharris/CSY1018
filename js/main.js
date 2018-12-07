// Header Splash Screen
/* to track screen position */
let pos;

/*
  On page load: set header height to not interfer when javascript is disabled
*/
window.onload = () => { /* run after contents loaded */
//  document.getElementById('hd').style.height = "100vh";
  if (checkAnchor() == true) {
    document.getElementById('hd').classList.add("splash");
  }
  document.getElementById('hd').style.position = "fixed";
  document.getElementById('menu').classList.add("hidden");

//  if there is an article, append to page title
  let article = document.getElementById('article');
  if (article != null) {
    document.title = `Byte Planet | ${article.dataset.title}`
  }
};

function checkAnchor() {
  let url = document.URL;

  let bookmark = url.split('#');

  if (bookmark[1] == null) {
    return true;
  }
}

/*
  run arrow function on page scroll
*/
window.addEventListener('scroll', () => {
  // update pos
  pos = (document.body.getBoundingClientRect()).top;

  if (pos < -10) {

    document.getElementById('hd').classList.remove("splash");
    document.getElementById('menu').classList.remove("hidden");

  } else {

    document.getElementById('hd').classList.add("splash");
    document.getElementById('menu').classList.add("hidden");

  }

});
