const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice() {
            let totalPrice = 0
            // for
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // for in
            // for (let i in this.books) {
            //     const book = this.books[i]
            //     totalPrice += book.price * book.count
            // }
            // for of
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            // reduce
            totalPrice = this.books.reduce(function (pre, book) {
                return pre + book.price * book.count
            }, 0)
            return totalPrice
        }
    },
    methods: {
        // getFinalPrice(price) {
        //     return '¥' + price.toFixed(2)
        // }
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '¥ ' + price.toFixed(2)
        }
    }
})

// filter, map, reduce
// const nums = [1,2,3,4,5,6,7,8]
// let total = nums.filter(function (n) {
//     return n < 5
// }).map(function (n) {
//     return n * 2
// }).reduce(function (preValue, n) {
//     return preValue + n
// }, 0)
// let total = nums.filter(x => x < 5).map(x => x * 2).reduce((pre, x) => pre + x)
// console.log(total)