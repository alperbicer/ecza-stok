import '../scss/app.scss';
import '../scss/contact.scss';
new Vue({
  el: '#contact',
  data() {
    return {
      nameSurname: '',
      message: '',
      email: '',
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
    sendForm() {
      console.log(this.nameSurname);
      console.log(this.message);
      console.log(this.email);
    }
  },
  mounted() {
  }
});