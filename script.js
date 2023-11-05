let menuBtn = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header .navbar a');
  
    section.forEach(sec =>{
      let top = window.scrollY; // Corrected the variable name from 'heigth' to 'height'
      let height = sec.offsetHeight; // Corrected the variable name from 'heigth' to 'height'
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height) // Corrected the comparison operator from '=>' to '>='
      {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      }
    });
}

document.querySelector('#search-icon').onclick=() =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick=() =>{
    document.querySelector('#search-form').classList.remove('active');
    
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper
  var mySwiper = new Swiper('.home-slider', {
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});

// var swiper = new Swiper(".home-slider", {
//   spaceBetween: 20,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

// loop : true,
// });

var mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});


/* ===========Sing Form ============ */



document.getElementById('user-icon').addEventListener('click', function() {
  document.getElementById('loginPopup').style.display = 'flex';
});

document.getElementById('loginPopup').addEventListener('click', function(event) {
  if (event.target === this) {
      this.style.display = 'none';
  }
});

document.getElementById('signup-link').addEventListener('click', function() {
  document.getElementById('loginPopup').style.display = 'none';
  document.getElementById('signupPopup').style.display = 'flex';
});

document.getElementById('login-link').addEventListener('click', function() {
  document.getElementById('signupPopup').style.display = 'none';
  document.getElementById('loginPopup').style.display = 'flex';
});
