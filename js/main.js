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
