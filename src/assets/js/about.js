import '../scss/app.scss';
import '../scss/about.scss';
new Vue({
  el: '#about',
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