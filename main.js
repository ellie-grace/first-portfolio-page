
// email encrypting

var parts=["info","builtbyellie","com","&#46;","&#64;"];
      var email=parts[0]+parts[4]+parts[1]+parts[3]+parts[2];
      var emailad=document.querySelector('#email-ad');
      emailad.innerHTML=email;

// cookie - disable google analytics on request



// styling main landing page button

const intouch = document.getElementById('intouch');
        const intouchText = document.querySelector('.intouch-text');
        intouch.addEventListener('mouseover', function(){
          intouchText.style.color = '#C5001A';
        });
        intouch.addEventListener('mouseout', function(){
          intouchText.style.color = '#C5BEBA';
        });
  

// creating a sticky navbar
// =========================
  	const nav = document.querySelector('#navigation');
		const navTop = nav.offsetTop;
		function stickyNavigation() {

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);

// ==========================

// changing navbar- changing colours to match sections
// and highlight corresponding nav
	(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        var sectionClass = `active-${i}`;
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*= ' + i + ']').setAttribute('class', 'active');
        document.querySelector('nav').setAttribute('class', sectionClass);
      }
    }
  };
})();



// update date automatically
 var date = new Date().getFullYear();
     
document.querySelector('#date').innerHTML = date;
 

 // create modals for portfolios

var btn = document.getElementsByClassName("click-to-open");

for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    var span = document.getElementById(this.dataset.modal).getElementsByClassName("close")[0];
    modal.style.display = "block";
 	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

span.onclick = function(event) {
	console.log("clicked!")
    modal.style.display = "none";
}


}, false);

}
