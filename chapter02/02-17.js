let p1 = {
    name: '맥북 프로',
    price: 3000000,
    quantity: 1,

    order: function () {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }

        console.log('주문 금액: ' + this.amount);
    },

    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
        }

        console.log(100 * rate + '% 할인된 가격으로 구매 가능합니다.');
    },
};

p1.discount(0.2);
p1.order();

// 20% 할인된 가격으로 구매 가능합니다.
// 주문 금액: 2400000
