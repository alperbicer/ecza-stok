import '../scss/app.scss';
import '../scss/register.scss';
new Vue({
  el: '#register',
  data() {
    return {
      email: '',
      newEmail: '',
      step: 0,
      gln: '',
      categoryList: [
        {
          name: 'İlaç',
          selected: false,
        },
        {
          name: 'Hepsi',
          selected: false,
        },
        {
          name: 'Anne Bebek',
          selected: false,
        },
        {
          name: 'Anne Bebek',
          selected: false,
        },
        {
          name: 'Anne Bebek',
          selected: false,
        },
        {
          name: 'Anne Bebek',
          selected: false,
        },
      ]
    };
  },
  methods: {
    selectCategory(index) {
      this.categoryList[index].selected = !this.categoryList[index].selected;
      document.querySelector('#categoryCheck' + index).checked = this.categoryList[index].selected;
    },
    register() {
      console.log('register');
    },
    goHome() {
      debugger;
      event.preventDefault();
      if (this.step === 0 || this.step === 2 || this.step === 4) {
        location.href = '/';
      } else if (this.step === 1) {
        this.goRegister();
      } else if (this.step === 3) {
        this.goValidMail();
      }
    },
    useMail() {
      location.href = '/welcome.html';
    },
    newMail() {
      this.step = 1;
    },
    useNewMail() {
      location.href = '/welcome.html';
    },
    goRegister() {
      event.preventDefault();
      setTimeout(() => {
        this.step = 0;
      }, 200);
    },
    goValidMail() {
      event.preventDefault();
      setTimeout(() => {
        this.step = 1;
      }, 200);
    },
    goLastStep() {
      event.preventDefault();
      setTimeout(() => {
        this.step = 3;
      }, 200);
    },
    tryAgain() {
      // TODO: servise istek atılacak. sonrasında step 0 a setlenecek.
      console.log(this.categoryList);
      if (this.gln) {
        this.step = 0;
      }
    }
  },
  created() {
    // TODO: url'de gln parametresi kontrol edilecek. varsa servis isteği atılacak. servisten gln yanlış dönerse step 2 ye setlenecek. dooğru dönerse step 0 olacak.
    const urlParams = new URLSearchParams(window.location.search);
    const gln = urlParams.get('gln');
    if (gln) {
      this.step = 2;
      this.gln = gln;
    } else {
      this.step = 4;
    }
  }
});