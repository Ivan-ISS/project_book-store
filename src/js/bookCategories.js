export class BookCategories {

    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, classActive, bookShop) {
        this.subject = '';
        this.apiKey = apiKey;
        this.printType = 'books';
        this.startIndex = startIndex;
        this.maxResults = maxResults;
        this.langRestrict = langRestrict;

        this.btnCategory = btnCategory;
        this.bookShop = bookShop;
        this.btnLoadMore = btnLoadMore;
        this.displayPlaceBooks = displayPlaceBooks;
        this.classActive = classActive;
    }

    defaultLoad() {
        this.displayPlaceBooks.innerHTML = '';
        this.subject = this.btnCategory[0].innerText;
        this._createUrl();
        this._request();
    }

    _createUrl() {
        this.url = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`;
    }

    _request() {
        fetch(this.url)
            .then((response) => {
                // console.log('response', response);
                const result = response.json();
                return result;
            })
            .then((data) => {
                console.log(data);
                // this.imageCoverLinks = data.items[0].volumeInfo.imageLinks.thumbnail;
                let booksJSON = [];

                data.items.forEach((item) => {
                    booksJSON.push({
                        id: item.id,
                        imageCoverLinks: item.volumeInfo.imageLinks?.thumbnail,
                        author: item.volumeInfo.authors,
                        title: item.volumeInfo.title,
                        rating: item.volumeInfo.averageRating,
                        review: item.volumeInfo.ratingsCount,
                        description: item.volumeInfo.description,
                        retailPrice: item.saleInfo.retailPrice,
                    });
                });

                localStorage.setItem('booksJSON', JSON.stringify(booksJSON));
                document.dispatchEvent(this.bookShop.requestEvent);
                // this.bookShop.card.createContent();
                // this.bookShop.shopBag.counterProduct();
            })
            .catch(() => {
                console.log('error');
            });
    }

    handlerBtnCategory() {
        const classActive = this.classActive;
        for (let i = 0; i < this.btnCategory.length; i++) {
            this.btnCategory[i].addEventListener('click', (event) => {

                this.displayPlaceBooks.innerHTML = '';
                this.subject = event.currentTarget.dataset.attribute;
                
                this.btnCategory.forEach(function(element) {
                    element.classList.remove(classActive);
                });
                event.currentTarget.classList.add(classActive);

                this.startIndex = 0;
                this._createUrl();
                this._request();
            });
        }
    }

    handlerBtnLoadMore() {
        this.btnLoadMore.addEventListener('click', () => {
            this.startIndex = this.startIndex + this.maxResults;
            this._createUrl();
            this._request();
        });
    }
}