export class BookCategories {

    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, bookShop) {
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
    }

    defaultLoad() {
        this.displayPlaceBooks.innerHTML = '';
        this.subject = this.btnCategory[0].innerText;
        this.createUrl();
        this.request();
    }

    createUrl() {
        this.url = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`;
    }

    request() {
        fetch(this.url)
            .then((response) => {
                // console.log('response', response);
                const result = response.json();
                // console.log('result', result);
                return result;
            })
            .then((data) => {
                console.log(data);
                // this.imageCoverLinks = data.items[0].volumeInfo.imageLinks.thumbnail;
                // this.authors = data.items[0].volumeInfo.authors;
                // this.title = data.items[0].volumeInfo.title;
                // this.description = data.items[0].volumeInfo.description;
                let booksJSON = [];

                data.items.forEach((item) => {
                    booksJSON.push({
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
                this.bookShop.card.createContent();
            })
            .catch(() => {
                console.log('error');
            });
    }

    handlerButton() {
        for (let i = 0; i < this.btnCategory.length; i++) {
            this.btnCategory[i].addEventListener('click', (event) => {
                this.displayPlaceBooks.innerHTML = '';
                this.subject = event.currentTarget.dataset.attribute;
                console.log(event.currentTarget.dataset.attribute);
                // this.btnCategory[i].classList.add('.active');

                this.createUrl();
                this.request();
            });
        }
    }

    loadMore() {
        this.btnLoadMore.addEventListener('click', () => {
            this.startIndex = this.startIndex + this.maxResults;
            this.createUrl();
            this.request();
        });
    }
}