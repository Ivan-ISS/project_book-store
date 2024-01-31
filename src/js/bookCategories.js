export class BookCategories {

    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, bookShop, firstEntry) {
        this.subject = '';
        this.apiKey = apiKey;
        this.printType = 'books';
        this.startIndex = startIndex;
        this.maxResults = maxResults;
        this.langRestrict = langRestrict;

        this.btnCategory = btnCategory;
        this.bookShop = bookShop;
        this.firstEntry = firstEntry;
    }

    createUrl() {
        this.url = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`;
    }

    request() {
        fetch(this.url)
            .then((response) => {
                console.log('response', response);
                const result = response.json();
                console.log('result', result);
                return result;
            })
            .then((data) => {
                console.log(data);
                let booksJSON = [];

                data.items.forEach((item) => {
                    booksJSON.push({
                        imageCoverLinks: item.volumeInfo.imageLinks.thumbnail,
                        author: item.volumeInfo.authors,
                        title: item.volumeInfo.title,
                        description: item.volumeInfo.description,
                    });
                });

                localStorage.setItem('booksJSON', JSON.stringify(booksJSON));
                this.bookShop.card.createContent();
            })
            .catch(() => {
                console.log('error');
            });
    }

    defaultLoad() {
        this.subject = this.btnCategory[0].innerText;
        this.createUrl();
        this.request();
    }

    handlerButton() {
        for (let i = 0; i < this.btnCategory.length; i++) {
            this.btnCategory[i].addEventListener('click', (event) => {
                // console.log(event.currentTarget);
                // console.log(event.currentTarget.innerText);
                this.subject = event.currentTarget.innerText;
                // this.btnCategory[i].classList.add('.active');
                if (this.firstEntry) {
                    this.subject = this.btnCategory[0].innerText;
                    this.firstEntry = false;
                }
                this.createUrl();
                this.request();

                // console.log(this.url);

                // fetch(this.url)
                //     .then((response) => {
                //         console.log('response', response);
                //         const result = response.json();
                //         console.log('result', result);
                //         return result;
                //     })
                //     .then((data) => {
                //         console.log(data);
                        // console.log(data.items[0].volumeInfo);
                        // console.log(data.items[0].volumeInfo.imageLinks);
                        // console.log(data.items[0].volumeInfo.authors);
                        // console.log(data.items[0].volumeInfo.title);
                        // console.log(data.items[0].volumeInfo.description);
                        // console.log(data.items[0].volumeInfo.categories);

                        // this.imageCoverLinks = data.items[0].volumeInfo.imageLinks.thumbnail;
                        // this.authors = data.items[0].volumeInfo.authors;
                        // this.title = data.items[0].volumeInfo.title;
                        // this.description = data.items[0].volumeInfo.description;

                    //     let booksJSON = [];

                    //     data.items.forEach((item) => {
                    //         booksJSON.push({
                    //             imageCoverLinks: item.volumeInfo.imageLinks.thumbnail,
                    //             author: item.volumeInfo.authors,
                    //             title: item.volumeInfo.title,
                    //             description: item.volumeInfo.description,
                    //        });
                    //     });

                    //     localStorage.setItem('booksJSON', JSON.stringify(booksJSON));
                    //     this.bookShop.card.createContent();
                    // })
                    // .catch(() => {
                    //     console.log('error');
                    // });
            });
        }
    }
}