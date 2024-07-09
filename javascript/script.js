

document.getElementById('First-click').addEventListener('click', function () {
  $('#On-click').slideToggle();
});

document.getElementById('hello_menue').addEventListener('click', function () {
  $('#highsecond-deep-click').slideToggle();
});

document.getElementById('thred-click').addEventListener('click', function () {
  $('#thred-deep').slideToggle();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },

  loop: true,

  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



var swiper = new Swiper("#Testimonial", {
  loop: true,
});

// document.getElementById('Second-click').addEventListener('click',function(){
//     $('#On-two-click').slideToggle();
// })


function changeBg(){
  let header= document.getElementById("header");
  let scroolValue = window.scrollY;
  if (scroolValue>500) {
    header.classList.add('header-main');
  }else{
    header.classList.remove('header-main');
  }
}

window.addEventListener("scroll",changeBg);

$(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();
})

