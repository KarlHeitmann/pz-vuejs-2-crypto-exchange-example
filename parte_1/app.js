Vue.component('CoinDetail', {
  props: ['coin'],

  data () {
    return {
      showPrices: false,
      value: 0,
    }
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices

      this.$emit('change-color',
        this.showPrices ? 'FF96C8' : '3D3D3D')
    }
  },

  computed: {
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`
    },
    convertedValue () {
      if (!this.value) { return 0 }

      return this.value / this.coin.price
    }
  },

  template: `
  <div>
    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="coin.img" v-bind:alt="coin.name">

    <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'"><!-- si changePercent > 0 aplica a atributo class el valor green, y si no le aplica red -->
      {{ title }}
      <span v-if="coin.changePercent > 0">👍</span>
      <span v-else-if="coin.changePercent < 0">👎</span>
      <span v-else>🤞</span>

      <span v-show="coin.changePercent > 0">👍</span>
      <span v-show="coin.changePercent < 0">👎</span>
      <span v-show="coinchangePercent == 0">🤞</span>
      <span v-on:click="toggleShowPrices">{{ showPrices ? '🤲' : '🐵' }}</span>

    </h1>

    <input type="number" v-model="value">
    <span>{{ convertedValue }}</span>

    <ul v-show="showPrices">
      <li
        class="uppercase"
        v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price}"
        v-for="(p, i) in coin.pricesWithDays"
        v-bind:key="p.day"> <!--
          v-bind:class aplica clase orange en caso que p.value sea igual a price, red si p.value es menor a price, y green si p.value es mayor a price 
          Notese que se combinan las clases uppercase de 5 lineas hacia arriba con las clases dinamicas de 4 lineas mas arriba.
        -->
        {{ i + 1 }} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>

  </div>
  `
})


new Vue({
  el: '#app',

  data () {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 63000,
        pricesWithDays: [
          { day: 'Lunes', value: 55000 },
          { day: 'Martes', value: 60000 },
          { day: 'Miércoles', value: 63000 },
          { day: 'Jueves', value: 67000 },
          { day: 'Viernes', value: 64000 },
          { day: 'Sábado', value: 58000 },
          { day: 'Domingo', value: 59000 },
        ],
      },
      prices: [55000, 60000, 63000, 67000, 64000, 58000, 59000],
      color: 'f4f4f4',
      // price: 60900,

    }
  },


  methods: {
    updateColor(color) {
      this.color = color || this.color
        .split('')
        .reverse()
        .join('')
    }
  }
})