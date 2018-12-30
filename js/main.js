let pos;

window.onload = () => {
  document.getElementById('nav').classList.remove("noJS");

};

window.addEventListener('scroll', () =>{

  pos = (document.body.getBoundingClientRect()).top;

  if (pos == 0) {
    document.getElementById('nav').classList.remove("responsive");
    document.getElementById('splash').classList.remove("responsive");
  } else {
    document.getElementById('nav').classList.add("responsive");
    document.getElementById('splash').classList.add("responsive");
  };

});

function getVars(variable) {

  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i=0;i<vars.length;i++) {
     var pair = vars[i].split("=");
     if(pair[0] == variable){return pair[1];}
   }

  return(false);

};

function clearAuthor() {
  document.getElementById('author-details').classList.add("hidden");
  document.getElementById('author-details').innerHTML = "";
}

function loadAuthor(authorID) {
  document.getElementById('author-details').classList.remove("hidden");

  let author = data.authors[authorID];

  document.getElementById('author-details').innerHTML = `
  <section class="marker" id="author"></section>
  <section class="heading sub">

    <h1><a href="#authors" onclick="clearAuthor()">${author.name}</a></h1>

  </section>

  <section>

    <p>${author.about}</p>

  </section>
  `
};
