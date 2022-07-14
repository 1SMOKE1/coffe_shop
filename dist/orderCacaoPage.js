import { Order } from "./order.js";
export class OrderCacaoPage extends Order {
    counterCup = {
        small: 0,
        middle: 0,
        big: 0,
        smallOp: 0,
        middleOp: 0,
        bigOp: 0
    };
    constructor(root, output, dataPriceCup, dataClear, dataPush, totalCost, drink, price) {
        super(root, output, totalCost, drink, price);
        root.innerHTML += this.render();
        this.linkDataToBtns(dataPriceCup, output);
        document.querySelector(dataClear)
            .addEventListener('click', () => {
            this.cleanAll(output);
        });
        document.querySelector(dataPush)
            .addEventListener('click', () => {
            this.pushData();
        });
    }
    render() {
        return `
    <main class="main">
      <h1 class="h1 title bold">Order Cacao page</h1>
      <div class="main-content">
        <div class="cup-size">
          <img class="img-small img" data-price-cup="small" src="assets/order/small.svg" alt="">
          <p class="p bold">Small cacao cup ${this.price.small} грн</p>
        </div>
        <div class="cup-size">
          <img class="img-middle img" data-price-cup="middle" src="assets/order/middle.svg" alt="">
          <p class="p bold">Middle cacao cup ${this.price.middle}</p>
        </div>
        <div class="cup-size">
          <img class="img-big img" data-price-cup="big" src="assets/order/big.svg" alt="">
          <p class="p bold">Big cacao cup ${this.price.big} грн</p>
        </div>
      </div>
      <div class="price">
        <h1 class="h1 price__total bold"  >Цена заказа: <span data-output >0</span> грн</h1>
        <button class="btn" data-clear ">Очистити заказ</button>
        <a ><button data-change-page="table" data-push class="btn" >Перейти к таблице заказов</button></a>
      </div>
    </main>
    `;
    }
}
