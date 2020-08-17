import '../scss/app.scss';
import '../scss/terms-of-use.scss';
new Vue({
  el: '#terms-of-use',
  data() {
    return {
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