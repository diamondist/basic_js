// Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого
// товара есть кнопка «Купить», при нажатии на которую происходит добавление
// имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму
// заказа.

class Product {
    constructor(id, name, description, price, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    };

    show() {
        this.card = document.createElement('div');
        this.card.classList.add('card');

        this.cardImage = document.createElement('img');
        this.cardImage.classList.add('card_image');
        this.cardImage.src = this.image;
        this.card.appendChild(this.cardImage);

        this.cardName = document.createElement('h4');
        this.cardName.classList.add('tiny-header')
        this.cardName.innerHTML = this.name
        this.card.appendChild(this.cardName);

        this.cardText = document.createElement('p');
        this.cardText.classList.add('text');
        this.cardText.innerHTML = this.description;
        this.card.appendChild(this.cardText);

        this.cardPrice = document.createElement('p');
        this.cardPrice.classList.add('tiny-header');
        this.cardPrice.innerHTML = '$ ' + this.price;
        this.card.appendChild(this.cardPrice);

        this.cardButton = document.createElement('button');
        this.cardButton.classList.add('cart_button');
        this.cardButton.innerHTML = 'Add to cart';
        this.cardButton.addEventListener('click', () => {cart.addProduct(this)});
        this.card.appendChild(this.cardButton);

        this.list = document.getElementById('list')
        this.list.appendChild(this.card)
    }
}

class Cart {
    constructor() {
        this.storage = [];
        this.total = 0;
        this.cart = document.getElementById('cart');
        this.productsList = document.createElement('ul');
        this.productsList.id = 'cartList';
        this.cart.appendChild(this.productsList);
        this.showSum()
    }

    showSum() {
        this.sum = document.createElement('p');
        this.sum.classList.add('total');
        this.sum.id = 'total';
        this.sum.innerHTML = 'Sum of cart: $' + this.total;
        this.cart.appendChild(this.sum)
    }

    countSum() {
        this.cart.removeChild(this.sum);
        this.total = 0;
        for (let i = 0; i < this.storage.length; i ++) {
            this.total += this.storage[i].price;
        }
        this.showSum();
    }

    addProduct(product) {
        this.storage.push(product);
        this.list = document.getElementById('cartList')
        this.newItem = document.createElement('li');
        this.newItem.classList.add('tiny-header')
        this.newItem.innerHTML = product.name + '\t\t\t$' + product.price;
        this.list.appendChild(this.newItem);
        this.countSum()
    }
}

const product1 = new Product( 
    1, 
    'Cool Product', 
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
    150,
    'product.png'
)

const product2 = new Product( 
    2, 
    'Another Product', 
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
    200,
    'product.png'
)

const product3 = new Product( 
    3, 
    'The Coolest Product', 
    'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 
    300,
    'product.png'
)


product1.show();
product2.show();
product3.show();

const cart = new Cart();