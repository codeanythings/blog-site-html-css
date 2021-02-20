const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
});

window.onscroll = function() {progress()};

const progress = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
}

