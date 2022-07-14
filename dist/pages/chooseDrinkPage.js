export class ChooseDrinkPage {
    constructor(root) {
        root.innerHTML += this.render();
    }
    render() {
        return `
    <main class="main">
      <h1 class="h1 title bold">Choose Drink</h1>
      <div class="main-content">
        <div class="card">
          <a ><img data-change-page="orderCoffe" class="img-coffe" src="src/assets/chooseDrink/coffe.jpg" alt=""></a>
          <p class="p bold">Coffe</p>
        </div>
        <div class="card">
          <a ><img data-change-page="orderTea" class="img-tea" src="src/assets/chooseDrink/tea.png" alt=""></a>
          <p class="p bold">Tea</p>
        </div>
        <div class="card">
          <a ><img data-change-page="orderCacao" class="img-cacao" src="src/assets/chooseDrink/cacao.png" alt=""></a>
          <p class="p bold">Cacao</p>
        </div>
      </div>
    </main>
    `;
    }
}
