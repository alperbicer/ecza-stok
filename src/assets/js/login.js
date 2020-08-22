import '../scss/app.scss';
import '../scss/login.scss';
new Vue({
  el: '#login',
  data() {
    return {
      loginSlider: null,
      loginSlideList: [1, 2, 3],
      showForgotPassword: false,
      forgotEmail: '',
    };
  },
  methods: {
    login() {
      console.log('login');
    },
    goHome() {
      location.href = '/';
    },
    goContact() {
      location.href = 'contact.html';
    },
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    sendForgotForm() {
      console.log(this.forgotEmail);
      this.showForgotPassword = false;
    },
  },
  mounted() {
    this.loginSlider = new Swiper('.login__swiper-container', {
      slidesPerView: 1,
      loop: true,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});