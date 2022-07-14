import { HomePage } from './pages/homePage.js';
import { ChooseDrinkPage } from './pages/chooseDrinkPage.js';
import { OrderCoffePage } from './pages/orderCoffePage.js';
import { OrderTeaPage } from './pages/orderTeaPage.js';
import { OrderCacaoPage } from './pages/orderCacaoPage.js';
import { TablePage } from './pages/tablePage.js';
let root = document.getElementById('root');
new HomePage(root);
export const data = [];
root.addEventListener('click', (e) => {
    let curTarget = e.target;
    if (curTarget.hasAttribute('data-change-page')) {
        switch (curTarget.dataset.changePage) {
            case 'home':
                new HomePage(root);
                hiddenPage(root);
                break;
            case 'chooseDrink':
                new ChooseDrinkPage(root);
                hiddenPage(root);
                break;
            case 'orderCoffe':
                new OrderCoffePage(root, '[data-output]', '[data-price-cup]', '[data-clear]', '[data-push]', 0, 'кофе', {
                    small: 10,
                    middle: 15,
                    big: 25,
                }, 8);
                hiddenPage(root);
                break;
            case 'orderTea':
                new OrderTeaPage(root, '[data-output]', '[data-price-cup]', '[data-clear]', '[data-push]', 0, 'чай', {
                    small: 4,
                    middle: 7,
                    big: 10,
                }, 2);
                hiddenPage(root);
                break;
            case 'orderCacao':
                new OrderCacaoPage(root, '[data-output]', '[data-price-cup]', '[data-clear]', '[data-push]', 0, 'какао', {
                    small: 12,
                    middle: 19,
                    big: 30,
                });
                hiddenPage(root);
                break;
            case 'table':
                new TablePage(root);
                hiddenPage(root);
                break;
        }
    }
});
function hiddenPage(rootEl) {
    rootEl.querySelector('main').remove();
}
