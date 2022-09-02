
                                // counterUp
// $('.counter').counterUp({
//     delay: 5,
//     time: 2000
// });


                                // carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

                                // NAVBAR FIXED


var elNavbarFixed = document.querySelector(".navbar");

    // bu esa scroll bo'ganda brauzerni qiynamaslik uchun kod
var debounce = function (func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// scroll 200 
var onWindowScroll = function(){
  if (window.scrollY > 300) {
      elNavbarFixed.classList.add("navbar-fixed")
      document.body.style.marginTop = elNavbar.offsetHeight + "px"
  }else{
        document.body.style.marginTop = "0"
        elNavbarFixed.classList.remove("navbar-fixed")
    }
}

document.addEventListener("scroll", debounce(onWindowScroll, 100))

