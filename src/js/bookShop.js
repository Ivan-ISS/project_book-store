import { BookCategories } from './bookCategories';
import { Cards } from './cards';
import { ShopBag } from './shopBag';

export class BookShop {
    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, shopBagCount, btnBuyNameClass) {
        this.card = new Cards(displayPlaceBooks, this);
        this.bookCategory = new BookCategories(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, this);
        this.shopBag = new ShopBag(shopBagCount, btnBuyNameClass);

        this.requestEvent = new Event('requestCompleted');
        this.createContentEvent = new Event('createContentCompleted');
    }

    run() {
        this.bookCategory.defaultLoad();
        this.bookCategory.handlerButton();
        this.bookCategory.loadMore();

        document.addEventListener('requestCompleted', () => {
            this.card.createContent();
            this.shopBag.counterProduct();
        });

        document.addEventListener('createContentCompleted', () => {
            this.shopBag.checkingBooksInShopBag();
        });
    }
}