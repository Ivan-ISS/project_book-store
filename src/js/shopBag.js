export class ShopBag {

    constructor(shopBagCount, btnBuyNameClass, classActive, textBuyNow, textInTheCart) {
        this.btnBuyNameClass = btnBuyNameClass;
        this.shopBagCount = shopBagCount;
        this.classActive = classActive;
        this.textBuyNow = textBuyNow;
        this.textInTheCart = textInTheCart;
        this.count = 0;
        this.booksInShopBag = JSON.parse(localStorage.getItem('booksInShopBag')) ? JSON.parse(localStorage.getItem('booksInShopBag')) : {};
        console.log(this.booksInShopBag);
    }

    _addLocalStorage(book) {
        const data = JSON.parse(localStorage.getItem('booksJSON'));
        data.forEach((item) => {
            if (item.id === book) {
                this.booksInShopBag[item.id] = item;
                localStorage.setItem('booksInShopBag', JSON.stringify(this.booksInShopBag));
            }
        });
    }

    _removeLocalStorage(book) {
        if (book in this.booksInShopBag) {
            delete this.booksInShopBag[book];
            localStorage.setItem('booksInShopBag', JSON.stringify(this.booksInShopBag));
            // console.log(JSON.parse(localStorage.getItem('booksInShopBag')));
        }
    }

    checkingBooksInShopBag() {
        this.btnBuy = document.querySelectorAll(this.btnBuyNameClass);
        if (this.booksInShopBag) this.count = Object.keys(this.booksInShopBag).length;

        console.log(this.booksInShopBag);
        console.log(this.count);

        for (let i = 0; i < this.btnBuy.length; i++) {
            if (this.booksInShopBag && this.btnBuy[i].id in this.booksInShopBag) {
                this.btnBuy[i].classList.add(this.classActive);
                this.btnBuy[i].innerText = this.textInTheCart;              // присвоить текст кнопке 'IN THE CART'
            }
        }
        this.shopBagCount.innerText = this.count;
        if (this.count) this.shopBagCount.style.display = 'block';
    }

    handlerBtnBuy() {
        this.btnBuy = document.querySelectorAll(this.btnBuyNameClass);
        for (let i = 0; i < this.btnBuy.length; i++) {
            this.btnBuy[i].addEventListener('click', (event) => {

                if (event.currentTarget.innerText === this.textBuyNow) {    // присвоить текст кнопке 'BUY NOW'
                    this.count += 1;
                    event.currentTarget.innerText = this.textInTheCart;     // присвоить текст кнопке 'IN THE CART'
                    // console.log(event.currentTarget.id);
                    this._addLocalStorage(event.currentTarget.id);
                } else {
                    this.count -= 1;
                    event.currentTarget.innerText = this.textBuyNow;        // присвотить текст кнопке 'BUY NOW'
                    this._removeLocalStorage(event.currentTarget.id);
                }

                this.shopBagCount.style.display = 'block';
                event.currentTarget.classList.toggle(this.classActive);
                this.shopBagCount.innerText = this.count;
            });
        }
    }
}





// localStorage.removeItem('booksInShopBag'); localStorage.removeItem('numBooks'); - команды для очистки localStorage от информации о книгах в корзине