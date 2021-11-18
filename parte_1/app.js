new Vue({
    el: '#app',

    data () {
        return {
            name: 'Bitcoin',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 0,
            prices: [55000, 60000, 63000, 67000, 64000, 58000, 59000],
            pricesWithDays: [
                { day: 'Lunes', value: 55000 },
                { day: 'Martes', value: 60000 },
                { day: 'Miércoles', value: 63000 },
                { day: 'Jueves', value: 67000 },
                { day: 'Viernes', value: 64000 },
                { day: 'Sábado', value: 58000 },
                { day: 'Domingo', value: 59000 },
            ]
        }
    }
})