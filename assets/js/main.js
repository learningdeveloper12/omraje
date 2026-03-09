// wow init
function wowAnimation() {
  new WOW({
    offset: 100,
    animateClass: "animated",
    mobile: true
  }).init();
}

$(window).on('load', function () {
  wowAnimation();
});


// cusor 1 animation
$(document).ready(function (params) {
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  const anchor = document.querySelectorAll('a, button');
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };

  document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
  });


  anchor.forEach(el => {
    el.addEventListener('mouseover', () => {
      cursorBorder.style.display = "none"
      cursor.classList.add('grow')
    })
  })

  anchor.forEach(el => {
    el.addEventListener('mouseout', () => {
      cursorBorder.style.display = "block"
      cursor.classList.remove('grow')
    })
  })
})



// mobile menu
let mobileBar = document.querySelector(".mobile__bar");
let bar = document.getElementById("mobile-bar");
let line1 = document.querySelector(".line-one");
let line2 = document.querySelector(".line-two");
let line3 = document.querySelector(".line-three");
let navDark = document.querySelector(".nav__dark");

mobileBar.addEventListener("click", (e) => {
  mobileBar.classList.toggle("close");
  navDark.classList.toggle("show");
})

// Home page hero Brand Slider (Proudly work with selected companies)
var brand_slider = new Swiper('.brand__slider', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  speed: 3000,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 5
    },
    1400: {
      slidesPerView: 5
    }
  }
});


// SKILLS PROGRESS BAR (HOME)
var skillPers = document.querySelectorAll(".bar");

skillPers.forEach(function (skillPer) {
  var per = parseFloat(skillPer.getAttribute("data-percent"));
  skillPer.style.width = per + "%";
});


$(document).ready(function () {
  // Odometer Counter
  $(".counter").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });

  // princing card styles
  const allCard = document.querySelectorAll(".pricing__card");
  allCard.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
      allCard.forEach(cd => cd.classList.remove("varient__two"));

      card.classList.add("varient__two");
    })
  })
})


