class GoodsItem {
  constructor(title, price, button) {
    this.title = title;
    this.price = price;

  }
  render() {
    return `<div class="conteyner"><div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div><button class="button" ${onclick = new Basket("Привет").addToBasket()}> Добавить в корзину</button ></div > `;
  }
}



class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];


  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;


  }
  calcAllGoods()  {
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

function regxtText(){
  let str = document.getElementById('text').value;
  let regexpAllPoints = new RegExp('\'', 'gm');
  let regexpReturnApostroph = /\b\"\b/gm;
  let newstr = str.replace(regexpAllPoints, '"');
  newstr = newstr.replace(regexpReturnApostroph, '\'');
  document.getElementById('output').value = newstr;
}
document.getElementById('text').addEventListener("keyup", regxtText);

