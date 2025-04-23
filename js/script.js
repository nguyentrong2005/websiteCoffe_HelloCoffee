let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

document.querySelectorAll('.image-slider img').forEach(images => {
  images.onclick = () => {
    var src = images.getAttribute('src');
    document.querySelector('.main-home-image').src = src;
  };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  },
});

document.querySelector('.book form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[placeholder="Name"]').value.trim();
  const email = this.querySelector('input[placeholder="Email"]').value.trim();
  const number = this.querySelector('input[placeholder="Number"]').value.trim();
  const message = this.querySelector('textarea[placeholder="Message"]').value.trim();

  const time = new Date().toLocaleString();
  const content = `--- Booking ---\nName: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}\nTime: ${time}\n\n`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'booking.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert('Booking saved to booking.txt');
  this.reset();
});
