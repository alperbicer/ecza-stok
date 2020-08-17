import '../scss/app.scss';
import '../scss/faq.scss';
new Vue({
  el: '#faq',
  data() {
    return {
      faqList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
  },
  mounted() {
  }
});