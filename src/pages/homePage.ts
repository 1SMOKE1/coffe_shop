import { data } from "../main.js";
import { DataObj } from "interfaces/dataObjInterface.js";

export class HomePage{
  private userName: string;
  constructor(root: HTMLElement){
    root.innerHTML += this.render();
    this.getUserInput('[data-input]');
    this.dataPushUserName()
  }
  private getUserName(): string{
    return this.userName;
  }
  private setUserName(val: string): void{
    this.userName = val;
  }
  private getUserInput(htmlEl: string){
    document.querySelector(htmlEl)
    .addEventListener('input', (e) => {
      let elem = e.target as HTMLInputElement;
      this.setUserName(elem.value);
    })
  }
  dataPushUserName(){
    document.querySelector('[data-user-name]')
    .addEventListener('click', () => {
      let obj: DataObj;
      if(this.getUserName() == undefined){
        obj = {
          userName: 'No name'
        }
      } else {
        obj = {
          userName: this.getUserName()
        }
      }
      
      data.push(obj)
     
    })
  }
  render(){
    return `
    <main class="main">
      <h1 class="h1 title bold">Home page</h1>
      <div class="name__wrap">
        <label class="p label bold" for="name">Введите свое имя</label>
        <input type="text" data-input>
      </div>
        <div class="main-content">
        <a class="btn" data-user-name data-change-page="chooseDrink">Start Order</a>
        <a class="btn" data-change-page="table">See order table</a>
      </div>
    </main>
    `
  }
}