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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
      slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetweenSlides: 0
        },
        640: {
          slidesPerView: 3,
          spaceBetweenSlides: 0
        },
        1040: {
          slidesPerView: 4,
          spaceBetweenSlides: 0
        },
      }
    });
    this.happyCustomerSlider = new Swiper('.happy-customer__swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});