if(!!window.performance && window.performance.navigation.type == 2)
{
    window.location.reload();
}
$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });
    window.addEventListener("scroll", function(){
        var nav = document.querySelector("nav");
        nav.classList.toggle("stuck", window.scrollY, 10);
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints:{
            640: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10
          },
        }
      });
      var $a = $('.fa-search'),
      $b = $('.bag'),
      $c = $('.fa-times');

      $a.click(function(){
        $b.fadeIn();
        // $nav.toggleClass('collapse');
    })
    $c.click(function(){
      $b.fadeOut();
  })
  AOS.init();
});
