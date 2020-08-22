import '../scss/app.scss';
import '../scss/homepage.scss';
new Vue({
  el: '#homepage',
  data() {
    return {
      isShowCargo: true,
      categorySlider: null,
      happyCustomerSlider: null,
      gln: '',
      businessPartnerSlideList: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    close() {
      this.isShowCargo = false;
    },
    changeCategortySlider(route) {
      if (route === 'forward') {
        this.categorySlider.slideNext();
      } else {
        this.categorySlider.slidePrev();
      }
    },
    changeHappyCustomerSlider(route) {
      if (route === 'forward') {
        this.happyCustomerSlider.slideNext();
      } else {
        this.happyCustomerSlider.slidePrev();
      }
    },
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    goRegister() {
      location.href = '/register.html';
    }
  },
  mounted() {
    this.categorySlider = new Swiper('.header-left__swiper-container', {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetweenSlides: 16
        },
        640: {
          slidesPerView: 3,
          spaceBetweenSlides: 16
        },
        1040: {
          slidesPerView: 4,
          spaceBetweenSlides: 16
        },
      }
    });
    new Swiper('.business-partner__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.business-partner__swiper-button-next',
        prevEl: '.business-partner__swiper-button-prev',
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetweenSlides: 0
        },
        700: {
          slidesPerView: 3,
          spaceBetweenSlides: 0
        },
        988: {
          slidesPerView: 4,
          spaceBetweenSlides: 0
        },
        1200: {
          slidesPerView: 5,
          spaceBetweenSlides: 0
        },
        1300: {
          slidesPerView: 6,
          spaceBetweenSlides: 0
        },
      }
    });
    this.happyCustomerSlider = new Swiper('.happy-customer__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      loopFillGroupWithBlank: true,
    });
    new Swiper('.how-to-work__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 660,
      loop: true,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.how-to-work__swiper-button-next',
        prevEl: '.how-to-work__swiper-button-prev',
      },
    });
  }
});