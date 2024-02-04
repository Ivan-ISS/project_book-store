import { BookCategories } from './bookCategories';
import { Cards } from './cards';
import { ShopBag } from './shopBag';

export class BookShop {
    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, shopBagCount, btnBuyNameClass) {
        this.card = new Cards(displayPlaceBooks, this);
        this.bookCategory = new BookCategories(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, this);
        this.shopBag = new ShopBag(shopBagCount, btnBuyNameClass);
    }

    run() {
        this.bookCategory.defaultLoad();
        this.bookCategory.handlerButton();
        this.bookCategory.loadMore();
        // this.shopBag.counterProduct();
    }
}