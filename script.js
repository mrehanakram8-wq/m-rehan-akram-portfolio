// // 




// // Mobile Navigation Toggle
// const menubar = document.querySelector('#menu');
// const Navbar = document.querySelector('.navbar');

// if (menubar && Navbar) {
//     menubar.onclick = () => {
//         menubar.classList.toggle('bx-x');
//         Navbar.classList.toggle('active');
//     };
// }

// // Active Nav Link & Scroll Animations
// const sections = document.querySelectorAll('section');
// const navlinks = document.querySelectorAll('header nav a');
// const header = document.querySelector('.header');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('start-animation');

//             if (id) {
//                 navlinks.forEach(link => {
//                     link.classList.remove('active');
//                     let activeLink = document.querySelector('header nav a[href*=' + id + ']');
//                     if (activeLink) {
//                         activeLink.classList.add('active');
//                     }
//                 });
//             }
//         }
//     });

//     // Sticky Navbar Toggle
//     if (header) {
//         header.classList.toggle('sticky', top > 100);
//     }

//     // Close Mobile Menu on Scroll
//     if (menubar && Navbar) {
//         menubar.classList.remove('bx-x');
//         Navbar.classList.remove('active');
//     }
// };

// // EmailJS Public Key Initialization
// (function() {
//     if (typeof emailjs !== 'undefined') {
//         emailjs.init("_BrC7wu4_hA-vmC5C");
//     }
// })();

// // Contact Form Submit Handler
// const contactForm = document.getElementById('contact-form');

// if (contactForm) {
//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         emailjs.sendForm('service_ngs68t5', 'template_o9r9y24', this)
//             .then(function() {
//                 alert('Message sent successfully!');
//                 contactForm.reset();
//             }, function(error) {
//                 alert('Failed to send message: ' + JSON.stringify(error));
//             });
//     });
// }

// // Read More Button Toggle Handler
// document.addEventListener("DOMContentLoaded", function() {
//     const readMoreBtn = document.getElementById('read-more-btn');
//     const moreText = document.getElementById('more-text');

//     if (readMoreBtn && moreText) {
//         readMoreBtn.addEventListener('click', function(e) {
//             e.preventDefault();

//             if (moreText.style.display === 'none' || moreText.style.display === '') {
//                 moreText.style.display = 'inline';
//                 readMoreBtn.textContent = 'Read Less';
//             } else {
//                 moreText.style.display = 'none';
//                 readMoreBtn.textContent = 'Read More';
//             }
//         });
//     }
// });

// // Random Theme Selector
// (function setRandomTheme() {
//     const totalThemes = 8; // Aap ke pas 5 extra themes hain
//     const randomThemeIndex = Math.floor(Math.random() * totalThemes) + 1;
    
//     // Body tag par random theme class add karein
//     document.body.classList.add(`theme-${randomThemeIndex}`);
// })();



// Mobile Navigation Toggle
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

if (menubar && Navbar) {
    menubar.onclick = () => {
        menubar.classList.toggle('bx-x');
        Navbar.classList.toggle('active');
    };
}

// Active Nav Link & Scroll Animations
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            sec.classList.add('start-animation');

            if (id) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                    let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                });
            }
        }
    });

    // Sticky Navbar Toggle
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    // Close Mobile Menu on Scroll
    if (menubar && Navbar) {
        menubar.classList.remove('bx-x');
        Navbar.classList.remove('active');
    }
};

// Flask Backend Contact Form Handler
// Flask Backend Contact Form Handler
// Flask Backend Contact Form Handler
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Exact Input Fields Capture
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        const formData = {
            fullName: inputs[0]?.value || "N/A",
            email: inputs[1]?.value || "N/A",
            mobile: inputs[2]?.value || "N/A",
            subject: inputs[3]?.value || "N/A",
            message: inputs[4]?.value || "N/A"
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                contactForm.reset();
            } else {
                alert('Server Error: Submission failed.');
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            alert('Python Backend disconnect hai! Terminal mein app.py chalaein.');
        }
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

// Random Theme Selector
(function setRandomTheme() {
    const totalThemes = 8;
    const randomThemeIndex = Math.floor(Math.random() * totalThemes) + 1;
    
    document.body.classList.add(`theme-${randomThemeIndex}`);
})();