import { BookCategories } from './bookCategories';
import { Cards } from './cards';

export class BookShop {
    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory) {
        this.card = new Cards();
        this.bookCategory = new BookCategories(apiKey, startIndex, maxResults, langRestrict, btnCategory, this);
    }

    getData() {
        console.log(this.bookCategory.imageLinks);
        console.log(this.bookCategory.authors);
        console.log(this.bookCategory.title);
        console.log(this.bookCategory.description);
    }
}