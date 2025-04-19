

//Initialize Swiper
const swiperTT = new Swiper('.slider-wrapper-timetraveller', {
    loop: true,
    grabCursor:true,
    spaceBetween:25,
    
    // Autoplay settings
    autoplay: {
        delay: 1500, // Change slide every 3 seconds
        disableOnInteraction: false, // Prevent stopping autoplay when user interacts
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
     // Reverse sliding behavior when it reaches the last slide
/*      on: {
      slideChange: function () {
          if (this.isEnd) {
              this.params.autoplay.reverseDirection = true;
          } else {
              this.params.autoplay.reverseDirection = false;
          }
      }
  }, */
    //Responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView:1
        },  /* 480:{ slidesPerView:1.5 }, */
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
 
  });

  // Pause autoplay on hover
swiperTT.el.addEventListener('mouseenter', function() {
  swiperTT.autoplay.stop();
});

// Resume autoplay when hover ends
swiperTT.el.addEventListener('mouseleave', function() {
  swiperTT.autoplay.start();
});





//Initialize Swiper
const swiperTile = new Swiper('.slider-wrapper-tilesim', {
  loop: true,
  grabCursor:true,
  spaceBetween:25,
  
  // Autoplay settings
  autoplay: {
      delay: 700, // Change slide every 3 seconds
      disableOnInteraction: false, // Prevent stopping autoplay when user interacts
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,      
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
   // Reverse sliding behavior when it reaches the last slide
/*      on: {
    slideChange: function () {
        if (this.isEnd) {
            this.params.autoplay.reverseDirection = true;
        } else {
            this.params.autoplay.reverseDirection = false;
        }
    }
}, */
  //Responsive breakpoints
  breakpoints:{
      0:{
          slidesPerView:1
      },  /* 480:{ slidesPerView:1.5 }, */
      768:{
          slidesPerView:2
      },
      1024:{
          slidesPerView:3
      }
  }

});

// Pause autoplay on hover
swiperTile.el.addEventListener('mouseenter', function() {
  swiperTile.autoplay.stop();
});

// Resume autoplay when hover ends
swiperTile.el.addEventListener('mouseleave', function() {
  swiperTile.autoplay.start();
});