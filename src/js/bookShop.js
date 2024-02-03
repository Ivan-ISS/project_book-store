import { BookCategories } from './bookCategories';
import { Cards } from './cards';

export class BookShop {
    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks) {
        this.card = new Cards(displayPlaceBooks);
        this.bookCategory = new BookCategories(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, this);
    }

    run() {
        this.bookCategory.defaultLoad();
        this.bookCategory.handlerButton();
        this.bookCategory.loadMore();
    }
}