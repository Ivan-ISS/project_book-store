export class BookCategories {

    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, bookShop) {
        this.subject = '';
        this.apiKey = apiKey;
        this.printType = 'books';
        this.startIndex = startIndex;
        this.maxResults = maxResults;
        this.langRestrict = langRestrict;

        this.btnCategory = btnCategory;

        this.bookShop = bookShop;
    }

    createUrl() {
        this.url = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`;
    }

    request() {
        for (let i = 0; i < this.btnCategory.length; i++) {
            this.btnCategory[i].addEventListener('click', (event) => {
                console.log(event.currentTarget);
                console.log(event.currentTarget.innerText);
                this.subject = event.currentTarget.innerText;
                this.createUrl();

                console.log(this.url);
                this.string = '0';

                /* return */ fetch(this.url)
                    .then((response) => {
                        console.log('response', response);
                        const result = response.json();
                        console.log('result', result);
                        return result;
                    })
                    .then((data) => {
                        /* console.log(data);
                        console.log(data.items[0].volumeInfo);
                        console.log(data.items[0].volumeInfo.imageLinks);
                        console.log(data.items[0].volumeInfo.authors);
                        console.log(data.items[0].volumeInfo.title);
                        console.log(data.items[0].volumeInfo.description);
                        console.log(data.items[0].volumeInfo.categories); */

                        this.imageCoverLinks = data.items[0].volumeInfo.imageLinks;
                        this.authors = data.items[0].volumeInfo.authors;
                        this.title = data.items[0].volumeInfo.title;
                        this.description = data.items[0].volumeInfo.description;

                        this.bookShop.getData();

                        //const pictureJSON = [];
                        
                        //data.forEach((item) => {
                        //    pictureJSON.push({
                        //        src: item.download_url,
                        //        author: item.author,
                        //    });
                        //});
                        //localStorage.setItem('pictureJSON', JSON.stringify(pictureJSON));
                    //console.log(localStorage)
                    })
                    .catch(() => {
                        console.log('error');
                    });
            });
        }
    }
}