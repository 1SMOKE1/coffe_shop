import { Price } from "./priceInterface";
import { CounterCup} from './counterCupInterface'
import { data } from "../main.js";

export abstract class Order{
  protected outputField: HTMLElement
  constructor(
    protected root: HTMLElement,
    protected output: string,
    protected totalCost: any,
    public drink: string,
    protected price: Price,
    protected counterCup?: CounterCup,

  ){
  }
  generatePriceOp(price: number, changePrice?: number): number{
    console.log(price)
    return price + changePrice
  }
  linkDataToBtns(dataEl: string, out: string, changePrice?: number): void{
    document.querySelectorAll(dataEl)
    .forEach((el) => 
      el.addEventListener('click', (e)  =>{
      let curTarget = e.target as HTMLElement;
      switch(curTarget.dataset.priceCup){
        case 'small':
          this.totalCost += this.price.small;
          this.counterCup.small++;
          console.log(this.totalCost, this.counterCup)
          break;
        case 'smallOp':
          this.totalCost += this.generatePriceOp(this.price.small, changePrice);
          this.counterCup.smallOp++;
          console.log(this.totalCost, this.counterCup)
          break;
        case 'middle':
          this.totalCost += this.price.middle;
          this.counterCup.middle++;
          console.log(this.totalCost, this.counterCup)
          break;
        case 'middleOp':
          this.totalCost += this.generatePriceOp(this.price.middle, changePrice);
          this.counterCup.middleOp++;
          console.log(this.totalCost, this.counterCup)
          break;
        case 'big':
          this.totalCost += this.price.big;
          this.counterCup.big++;
          console.log(this.totalCost,  this.counterCup)
          break;
        case 'bigOp':
          this.totalCost += this.generatePriceOp(this.price.big, changePrice);
          this.counterCup.bigOp++;
          console.log(this.totalCost, this.counterCup)
          break;
      }
      document.querySelector(out).innerHTML = this.totalCost
    }))
  }
  protected cleanAll(out: string): void{
    this.totalCost = 0;
    this.counterCup = {
      small: 0,
      middle: 0,
      big: 0,
      smallOp: 0,
      middleOp: 0,
      bigOp: 0,
    }
    document.querySelector(out).innerHTML = '0';
    console.log(this.totalCost, this.counterCup)
  }
  pushData(): void{
    data[data.length - 1].totalCost = this.totalCost;
    data[data.length - 1].counterCup = this.counterCup;
    data[data.length - 1].drink = this.drink;
  }
  render(): string{
    return ''
  }
}