const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
  constructor(title, price, button) {
    this.title = title;
    this.price = price;

  }
  render() {
    return `<div class="conteyner"><div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div><button class="button" ${onclick = new Basket("Привет").addToBasket()}> Добавить в корзину</button ></div > `;
  }
}

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
  `
});

Vue.component('goods-item', {
  props: ['good'],
  template: `
    <div class="goods-item">
      <h3>{{ good.product_name }}</h3>
      <p>{{ good.price }}</p>
    </div>
  `
});

Vue.component('basket', {
  props: ['name'],
  template: `<div class="bascet">
  <h3 class="bascet-name1">{{name}}</h3>
  </div>`
});

Vue.component('search', {
  props: ['name'],
  template: `
  <button class="button-search" onclick="filterGoods()">{{name}}</button>
  `
});




const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    isVisibleCart: ''
  },

  methods: {
    makeGETRequest(url, callback) {
      const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

      var xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      }

      xhr.open('GET', url, true);
      xhr.send();
    }
  },

  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
    });
  }

});







class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }


  fetchGoods() {

    this.goods = [
      { title: 'Шорты', price: 150 },
      { title: 'Носки', price: 50 },
      { title: 'Пиджак', price: 350 },
      { title: 'Туфли', price: 250 },
    ]
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;


  }
  calcAllGoods() {
    let totalPrice = 0;
    this.goods.forEach(good => {
      if (good.price !== undefined) {
        totalPrice += good.price;
        console.log(good.price);
      }
    });

    let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
    document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
  }

  filterGoods() {

  }


}















// Класс элемента корзины
class BasketItem {
  // По сути, нам нужно отображать в корзине те же самые элементы, что и в списке
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

// Класс корзины
class Basket {
  constructor(button) {
    // В классе корзины массив с добавленными товарами
    this.addGoods = [];
    this.button = button;
  }
  // Добавление товара в корзину (привязываем на нажатие кнопки)
  addToBasket() { this.addGoods }

  // Удаление товара из корзины (привязываем на нажатие кнопки)
  deleteFromBasket() { }

  // Считаем стоимость и количество товаров в корзине
  calcBasket() { }

  // Метод, который определяет, добавлены ли в корзину какие-либо товары и при их наличии активирует кнопку "Оформить заказ"
  isOrder() { }

  // Рендер динамического содержимого корзины
  render() { }

  // Метод открывания корзины
  openBasket() { }
}


const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
  list.render();

}

function regxtText() {
  {
    let str = document.getElementById('text').value;
    let regexpAllPoints = new RegExp('\'', 'gm');
    let regexpReturnApostroph = /\b\"\b/gm;
    let newstr = str.replace(regexpAllPoints, '"');
    newstr = newstr.replace(regexpReturnApostroph, '\'');
    document.getElementById('output').value = newstr;
  }
  document.getElementById('text').addEventListener("keyup", regxtText);
}
