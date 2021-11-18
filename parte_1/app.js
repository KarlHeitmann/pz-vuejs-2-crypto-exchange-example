new Vue({
  el: '#app',

  data () {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      value: 0,
      color: 'f4f4f4',
      // price: 60900,
      price: 63000,
      prices: [55000, 60000, 63000, 67000, 64000, 58000, 59000],
      pricesWithDays: [
        { day: 'Lunes', value: 55000 },
        { day: 'Martes', value: 60000 },
        { day: 'Miércoles', value: 63000 },
        { day: 'Jueves', value: 67000 },
        { day: 'Viernes', value: 64000 },
        { day: 'Sábado', value: 58000 },
        { day: 'Domingo', value: 59000 },
      ],

      showPrices: false,
    }
  },

  computed: {
    title () {
      return `${this.name} - ${this.symbol}`
    },
    convertedValue () {
      if (!this.value) { return 0 }

      return this.value / this.price
    }
  },

  watch: {
    showPrices (newVal, oldVal) {
      console.log("newVal, oldVal - ", newVal, oldVal)
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices
      this.color = this.color.split('')
        .reverse().join('')
    }
  }
})