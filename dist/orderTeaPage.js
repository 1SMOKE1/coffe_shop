import { Order } from "./order.js";
export class OrderTeaPage extends Order {
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
        this.linkDataToBtns(dataPriceCup, output, 2);
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
      <h1 class="h1 title bold">Order Tea page</h1>
      <div class="main-content">
        <div class="cup-size">
          <img class="img-small img" data-price-cup='small' src="assets/order/small.svg" alt="">
          <p class="p bold">Small black tea ${this.price.small} грн </p>
          <div class="btn__wrap bold">
            <button class="btn btn_tea" data-price-cup='smallOp' >Small green tea ${this.generatePriceOp(this.price.small, 2)}  грн</button>
          </div>
        </div>
        <div class="cup-size">
          <img class="img-middle img" data-price-cup='middle' src="assets/order/middle.svg" alt="">
          <p class="p bold"  >Middle black tea ${this.price.middle}  грн </p>
          <div class="btn__wrap bold">
            <button class="btn btn_tea" data-price-cup='middleOp' >Middle green tea ${this.generatePriceOp(this.price.middle, 2)} грн</button>
          </div>
        </div>
        <div class="cup-size">
          <img class="img-big img" src="assets/order/big.svg" data-price-cup='big' alt="">
          <p class="p bold" >Big black tea ${this.price.big} грн </p>
          <div class="btn__wrap bold"> 
            <button class="btn btn_tea" data-price-cup='bigOp' >Big green tea  ${this.generatePriceOp(this.price.big, 2)} грн</button>
          </div>
        </div>
      </div>
      <div class="price">
        <h1 class="h1 price__total bold">Цена заказа: <span data-output ">0</span> грн</h1>
        <button class="btn" data-clear >Очистить заказ</button>
        <a  "><button data-push data-change-page="table" class="btn" id="get-order-tea">Перейти к таблице заказов</button></a>
      </div>
    </main>
    `;
    }
}
