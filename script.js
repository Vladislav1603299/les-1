const API_URL = "http://localhost:3000";

class GoodsItem {
  constructor(title, price, button) {
    this.title = title;
    this.price = price;

  }
  render() {
    return `<div class="conteyner"><div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div><button class="button" ${onclick = new Basket("Привет").addToBasket()}> Добавить в корзину</button ></div > `;
  }
}

Vue.component("goods-list", {
  props: ["goods"],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `,
});

Vue.component("goods-item", {
  props: ["goodProp"],
  methods: {
    async addToCart() {
      const response = await fetch(`${API_URL}/addToCart`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.goodProp)
      });
    },
  },
  template: `
    <div class="goods-item" @click=addToCart>
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
    </div>
  `,
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
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    searchLine: "",
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalog`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
  },

  async mounted() {
    await this.getProducts();
  },
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
  addToBasket() {
    fetch(`${API_URL}/addToCart`);
  }

  // Удаление товара из корзины (привязываем на нажатие кнопки)
  deleteFromBasket() {
    fetch(`${API_URL}/deleteCart`);
  }

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
