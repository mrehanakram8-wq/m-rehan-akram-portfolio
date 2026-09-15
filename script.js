const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}


// EmailJS Public Key Initialization
(function() {
  emailjs.init("_BrC7wu4_hA-vmC5C");
})();

// Contact Form Submit Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ngs68t5', 'template_o9r9y24', this)
      .then(function() {
        alert('Message sent successfully!');
        contactForm.reset();
      }, function(error) {
        alert('Failed to send message: ' + JSON.stringify(error));
      });
  });
}


// Read More Button Toggle Handler
document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.getElementById('read-more-btn');
  const moreText = document.getElementById('more-text');

  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();

      if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        readMoreBtn.textContent = 'Read Less';
      } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
      }
    });
  }
});