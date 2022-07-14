import { Order } from './order.js';
export class OrderCoffePage extends Order {
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
        this.linkDataToBtns(dataPriceCup, output, 8);
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
      <h1 class="h1 title bold">Order Coffe page</h1>
      <div class="main-content">
        <div class="cup-size">
          <img class="img-small img" data-price-cup='small' src="src/assets/order/small.svg" alt="">
          <p class="p bold">Small ${this.price.small} грн</p>
          <div class="btn__wrap bold">
            <button class="btn btn_milk" data-price-cup='smallOp'>Small with milk ${this.generatePriceOp(this.price.small, 8)} грн</button>
          </div>
        </div>
        <div class="cup-size">
          <img class="img-middle img" data-price-cup='middle' src="src/assets/order/middle.svg" alt="">
          <p class="p bold">Middle ${this.price.middle} грн </p>
          <div class="btn__wrap bold">
            <button class="btn btn_milk" data-price-cup='middleOp' >Small with milk ${this.generatePriceOp(this.price.middle, 8)} грн</button>
          </div>
        </div>
        <div class="cup-size">
          <img class="img-big img" data-price-cup='big' src="src/assets/order/big.svg" alt="">
          <p class="p bold" >Big ${this.price.big} грн</p>
          <div class="btn__wrap bold"> 
            <button class="btn btn_milk" data-price-cup='bigOp' >Small with milk ${this.generatePriceOp(this.price.big, 8)} грн</button>
          </div>
        </div>
      </div>
      <div class="price">
        <h1 class="h1 price__total bold">Цена заказа: <span data-output ">0</span> грн</h1>
        <button class="btn" data-clear >Очистить заказ</button>
        <a "><button class="btn" data-push data-change-page="table">Перейти к таблице заказов</button></a>
      </div>
    </main>
    `;
    }
}
