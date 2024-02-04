export class ShopBag {

    constructor(shopBagCount, btnBuyNameClass) {
        this.btnBuyNameClass = btnBuyNameClass;
        this.shopBagCount = shopBagCount;
        this.count = 0;
        // this.booksInShopBag = {};
        this.booksInShopBag = JSON.parse(localStorage.getItem('booksInShopBag')) ? JSON.parse(localStorage.getItem('booksInShopBag')) : {};
        console.log(this.booksInShopBag);
    }

    addLocalStorage(book) {
        const data = JSON.parse(localStorage.getItem('booksJSON'));
        data.forEach((item) => {
            if (item.id === book) {
                this.booksInShopBag[item.id] = item;
                localStorage.setItem('booksInShopBag', JSON.stringify(this.booksInShopBag));
            }
        });
    }

    removeLocalStorage(book) {
        // const data = JSON.parse(localStorage.getItem('booksInShopBag'));
        if (book in this.booksInShopBag) {
            delete this.booksInShopBag[book];
            localStorage.setItem('booksInShopBag', JSON.stringify(this.booksInShopBag));
            // console.log(JSON.parse(localStorage.getItem('booksInShopBag')));
        }
    }

    checkingBooksInShopBag() {
        this.btnBuy = document.querySelectorAll(this.btnBuyNameClass);
        // const books = JSON.parse(localStorage.getItem('booksInShopBag'));
        if (this.booksInShopBag) this.count = Object.keys(this.booksInShopBag).length;

        console.log(this.booksInShopBag);
        console.log(this.count);

        for (let i = 0; i < this.btnBuy.length; i++) {
            if (this.booksInShopBag && this.btnBuy[i].id in this.booksInShopBag) {
                this.btnBuy[i].classList.add('showcase__buy-btn-active');
                this.btnBuy[i].innerText = 'IN THE CART';
            }
        }
        this.shopBagCount.innerText = this.count;
        if (this.count) this.shopBagCount.style.display = 'block';
    }

    counterProduct() {
        this.btnBuy = document.querySelectorAll(this.btnBuyNameClass);
        for (let i = 0; i < this.btnBuy.length; i++) {
            this.btnBuy[i].addEventListener('click', (event) => {
                // console.log(event.currentTarget.innerText);
                if (event.currentTarget.innerText === 'BUY NOW') {
                    this.count += 1;
                    event.currentTarget.innerText = 'IN THE CART';
                    // console.log(event.currentTarget.id);
                    this.addLocalStorage(event.currentTarget.id);
                } else {
                    this.count -= 1;
                    event.currentTarget.innerText = 'BUY NOW';
                    this.removeLocalStorage(event.currentTarget.id);
                }
                this.shopBagCount.style.display = 'block';
                event.currentTarget.classList.toggle('showcase__buy-btn-active');
                this.shopBagCount.innerText = this.count;
            });
        }    
    }
}





// localStorage.removeItem('booksInShopBag'); localStorage.removeItem('numBooks');