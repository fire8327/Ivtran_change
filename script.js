$('.openMenu').click(() => {
    $('#menu').toggleClass('active');

    $('.openMenu').find('.topLine').toggleClass('rt-45 translateY');
    $('.openMenu').find('.midLine').toggleClass('opacity-0');
    $('.openMenu').find('.bottomLine').toggleClass('rt45 translate-Y');

});

$(window).on('load resize', () => {
    if($(window).width() < 901) {
        $('.openLink').each((o, link) => {
            $(link).click(() => {
                $(link).closest('li').find('ul').toggleClass('hidden');
                if($(link).closest('li').find('ul').hasClass('hidden')) {
                    $(link).closest('li').find('ul').attr('style', 'display: none !important');
                    $(link).find('svg').attr('style', 'transform: rotate(0deg)');
                } else {
                    $(link).closest('li').find('ul').attr('style', 'display: grid');
                    $(link).find('svg').attr('style', 'transform: rotate(-180deg)');
                }
            });
        });
    }
});


$('.closeMenu').each((c, close) => {
    $(close).click(() => {
        $(close).closest('.inner_link').addClass('hidden');
        $('#menu').toggleClass('active');
    });
});

const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 1,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


let timelineSwiper = new Swiper ('.swiper-container', {
    loop: false,
    speed: 1600,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span style="padding-top: 16px;" class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-next',
    prevButton: '.swiper-prev',
});
