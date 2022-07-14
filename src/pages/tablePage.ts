import { DataObj } from "interfaces/dataObjInterface.js";
import { data } from "../main.js"

export class TablePage{
  constructor(root: HTMLElement){
    root.innerHTML += this.render();
    this.renderData(data)
    console.log(data)
  }
  renderData(data: DataObj[]){
    data.map((el) => {
      let tableRoot = document.querySelector('table');
      if(el.drink === 'какао'){
        tableRoot.innerHTML += `
        <tr>
        <td>${el.userName}</td>
        <td>Маленький ${el.drink}: ${el.counterCup.small} шт.</br>
            Средний ${el.drink}: ${el.counterCup.middle} шт.</br>
            Большой ${el.drink}: ${el.counterCup.big} шт.</br>
        </td>
        <td>${el.totalCost} грн</td>
      </tr>`
      } else {
        tableRoot.innerHTML += `
        <tr>
        <td>${el.userName}</td>
        <td>Маленький ${el.drink}: ${el.counterCup.small} шт.</br>
            Средний ${el.drink}: ${el.counterCup.middle} шт.</br>
            Большой ${el.drink}: ${el.counterCup.big} шт.</br>
            Маленький с допом ${el.drink}: ${el.counterCup.smallOp} шт.</br>
            Средний с допом ${el.drink}: ${el.counterCup.middleOp} шт.</br>
            Большой с допом ${el.drink}: ${el.counterCup.bigOp} шт. </br>
        </td>
        <td>${el.totalCost} грн</td>
      </tr>`
      }
    })
  }
  render(): string{
    return `
    <main class="main">
      <h1 class="h1 title bold">Table of Orders page</h1>
      <div class="main-content" data-table >
        <table>
          <tr>
            <td>Имя клиента</td>
            <td>Заказ клиента</td>
            <td>Окночателная цена заказа</td>
          </tr>
        </table>
        <a ><button data-change-page="home" class="btn">Back to Home Page</button></a>
      </div>
    </main>
    `
  }
}