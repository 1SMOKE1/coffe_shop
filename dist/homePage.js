import { data } from "./main.js";
export class HomePage {
    userName;
    constructor(root) {
        root.innerHTML += this.render();
        this.getUserInput('[data-input]');
        this.dataPushUserName();
    }
    getUserName() {
        return this.userName;
    }
    setUserName(val) {
        this.userName = val;
    }
    getUserInput(htmlEl) {
        document.querySelector(htmlEl)
            .addEventListener('input', (e) => {
            let elem = e.target;
            this.setUserName(elem.value);
        });
    }
    dataPushUserName() {
        document.querySelector('[data-user-name]')
            .addEventListener('click', () => {
            let obj;
            if (this.getUserName() == undefined) {
                obj = {
                    userName: 'No name'
                };
            }
            else {
                obj = {
                    userName: this.getUserName()
                };
            }
            data.push(obj);
        });
    }
    render() {
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
    `;
    }
}
