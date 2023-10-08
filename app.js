const { createApp } = Vue;
//Автобус и пассажиры
const task1 = createApp({
  data() {
    return {
      people: 0,
      coach: 0,
      water: 0,
      sandwich: 0,
    };
  },
  methods: {
    changePeople() {
      if (this.people < 0) {
        return this.people;
      } else {
        this.coach = Math.ceil(this.people / 20);
        this.water = this.people * 2;
        this.sandwich = this.people * 3;
      }
    },
  },
});
task1.mount("#task1");
//Времена года
const task2 = createApp({
  data() {
    return {
      textCloth: "",
      imgHeight: 350,
      imgWidth: 350,
      monthNumber: 0,
      imgWeather: "",
      // autumImg: "/test/task2/autum.jpg",
    };
  },
  methods: {
    changeInfoAboutWeather() {
      switch (this.monthNumber) {
        case 3:
        case 4:
        case 5:
          this.textCloth = "Легкая куртка, джинсы, кроссовки, шапка.";
          this.imgWeather = "/HM№1/task2/spring.jpg";
          break;
        case 6:
        case 7:
        case 8:
          this.textCloth = "Майка, шорты, шлепки, кепка.";
          this.imgWeather = "/HM№1/task2/summer.jpg";
          break;
        case 9:
        case 10:
        case 11:
          this.textCloth = "Ветровка, джинынсы, кроссовки.";
          this.imgWeather = "/HM№1/task2/autum.jpg";
          break;
        case 12:
        case 1:
        case 2:
          this.textCloth = "Тёплая куртка, шапка, утепленные штаны, ботинки.";
          this.imgWeather = "/HM№1/task2/winter.jpg";
          break;
        default:
          this.textCloth = "Задайте месяц от 1 до 12!";
          this.imgWeather = "";
      }
    },
  },
});
task2.mount("#task2");
//Random number (task 3)
const task3 = createApp({
  data() {
    return {
      startNumber: 0,
      endNumber: 0,
      randomNumber: 0,
      errorText: "",
    };
  },
  methods: {
    changeNumber() {
      if (this.startNumber >= this.endNumber) {
        this.errorText = "Ошибка ввода диапазона!";
        this.randomNumber = 0;
      } else {
        this.errorText = "";
        let min = parseInt(this.startNumber);
        let max = parseInt(this.endNumber);
        this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    },
  },
});
task3.mount("#task3");
//Bank Account
const task4 = createApp({
  data() {
    return {
      totalSum: 0,
      amountDeposit: 0,
      amountWithdraw: 0,
      dollars: 0,
      euro: 0,
      dollarCourse: 35,
      euroCourse: 38,
      // procenteForOperation: 0,
    };
  },
  methods: {
    deposit() {
      if (this.totalSum >= 0) {
        this.totalSum += this.amountDeposit;
        this.amountDeposit = 0;
        document.querySelector(".total-sum").style.color = "green";
      }
    },
    withdraw() {
      if (this.amountWithdraw > 0 && this.amountWithdraw <= this.totalSum) {
        this.totalSum -= this.amountWithdraw;
        this.amountWithdraw = 0;
        document.querySelector(".total-sum").style.color = "red";
      } else this.amountWithdraw = 0;
    },
    convertToDollars() {
      this.dollars = (this.totalSum / this.dollarCourse).toFixed(2);
      return this.dollars;
    },
    convertToEuro() {
      this.euro = (this.totalSum / this.euroCourse).toFixed(2);
      return this.euro;
    },
    checkBalanceDollars() {
      if (this.dollars < 100) {
        return "red";
      } else {
        return "green";
      }
    },
    checkBalanceEuro() {
      if (this.euro < 100) {
        return "red";
      } else {
        return "green";
      }
    },
  },
});
task4.mount("#task4");
//Login and password
const task5 = createApp({
  data() {
    return {
      usersArr: [
        { login: "Master1999", password: "1289cool" },
        { login: "222Natasha", password: "4567890frui" },
        { login: "Glebaster228", password: "Glebaster228" },
        { login: "NikolasCage220", password: "coolCage220" },
        { login: "1", password: "1" },
      ],
      login: "",
      password: "",
      access: "",
    };
  },
  methods: {
    checkUser() {
      let check = this.usersArr.some((user) => user.login === this.login && user.password === this.password);
      if (check) this.access = "Доступ разрешен!";
      else this.access = "Доступ запрещен!";
    },
  },
});
task5.mount("#task5");
