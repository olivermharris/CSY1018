let pos;

// on load
window.onload = () => {
  document.getElementById('nav').classList.remove("noJS");

};

// listen to the user scrolling
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

// functions //



// clear author information
function clearAuthor() {
  document.getElementById('author-details').classList.add("hidden");
  document.getElementById('author-details').innerHTML = "";
}

// load author information
function loadAuthor(authorID) {
  document.getElementById('author-details').classList.remove("hidden");

  let author = data.authors[authorID];

  document.getElementById('author-details').innerHTML = `
  <section class="marker" id="author"></section>
  <section class="heading sub">

    <h1><a href="#authors" onclick="clearAuthor()">${author.name}</a></h1>

  </section>

  <section class="flex1-1">

    <section class="captioned">

      <img src="images/authors/${author.picture}.jpg" alt="${author.picture}"></img>

      <p>${author.role}</p>

      <ul class="sociallinks">

        <li id="github">
          <a href="${author.socialmedia.github}">
            <!-- Icon made by Dave Gandy from flaticon under Creative Commons 3.0 -->
            <!-- https://www.flaticon.com/free-icon/github-logo_25231#term=github&page=1&position=1 -->
            <img src="images/icons/github.svg" alt="Github Icon By Dave Gandy">
          </a>
        </li>

        <li id="twitter">
          <a href="${author.socialmedia.twitter}">
            <!-- Icon made by Freepik from flaticon under Creative Commons 3.0 -->
            <!-- https://www.flaticon.com/free-icon/twitter-social-logotype_49351#term=twitter&page=1&position=46 -->
            <img src="images/icons/twitter.svg" alt="Twitter Icon By Freepik">
          </a>
        </li>

        <li id="blog">
          <a href="${author.socialmedia.blog}">
            <!-- Icon made by Freepik from flaticon under Creative Commons 3.0 -->
            <!-- https://www.flaticon.com/free-icon/wordpress_152848 -->
            <img src="images/icons/wordpress.svg" alt="Wordpress Icon By Freepik">
            </a>
        </li>

        <li id="linkedin">
          <a href="${author.socialmedia.linkedin}">
            <!-- Icon made by Freepik from flaticon under Creative Commons 3.0 -->
            <!-- https://www.flaticon.com/free-icon/linkedin_1384014#term=linkedin&page=1&position=27 -->
            <img src="images/icons/linkedin.svg" alt="Linkedin Icon By Freepik">
          </a>
        </li>

        <li id="website">
          <a href="${author.socialmedia.website}">
            <!-- Icon made by Hanan from flaticon under Creative Commons 3.0 -->
            <!-- https://www.flaticon.com/free-icon/internet_109476#term=website&page=1&position=2 -->
            <img src="images/icons/website.svg" alt="Website Icon By Hanan">
          </a>
        </li>

      </ul>

    </section>

    <section>



    </section>

  </section>

  `

};
