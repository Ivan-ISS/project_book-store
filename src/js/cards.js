export class Cards {

    constructor(displayPlaceBooks, bookShop) {
        this.displayPlaceBooks = displayPlaceBooks;
        this.bookShop = bookShop;
    }

    displayCard() {

    }

    createContent() {
        let cards = '';
        const data = JSON.parse(localStorage.getItem('booksJSON'));
        data.forEach((item) => {
            if (item.rating === undefined) { item.rating = 0; }
            /* if (item.imageCoverLinks === undefined) { item.imageCoverLinks = './images/png/placeholder.png'; } */
            const content = `
            <div class="showcase__book">
                <div class="showcase__book-cover">
                    <img class="showcase__book-cover-img" src="${item.imageCoverLinks ? item.imageCoverLinks : './images/png/placeholder.png' }" alt="Book cover">
                </div>
                <div class="showcase__book-info">
                    <div class="showcase__book-data">
                        <p class="showcase__book-author">${item.author ? item.author : 'Author unknown' }</p>
                        <h3 class="showcase__book-title">${item.title}</h3>
                        <div class="showcase__book-rating">
                            <div class="showcase__stars">
                                <svg width="60" height="11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m5.8718,0.03648l1.80568,3.51469l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147l0,0.00001z
                                    m11.92307,0.03647l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z
                                    m12.10257,0.03648l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z
                                    m12.28205,0.03647l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z
                                    m12.33333,0.03648l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z" 
                                    fill="#f2c94c" clip-path="inset(0 ${(1 - item.rating / 5) * 100}% 0 0)" id="svg_1"/>
                                </svg>
                            </div>
                            <span class="showcase__review">${item.review ? item.review + 'review' : '' }</span>
                        </div>
                    </div>
                    <p class="showcase__book-description">${item.description ? item.description : 'No description'}</p>
                    <span class="showcase__book-price">${item.retailPrice?.amount ? item.retailPrice?.amount + ' ' + item.retailPrice?.currencyCode : ''}</span>
                    <button class="showcase__buy-btn" id="${item.id}">Buy now</button>
                </div>
            </div>
            `;
            cards = cards + content;
        });
        this.displayPlaceBooks.innerHTML += cards;
        this.bookShop.shopBag.checkingBooksInShopBag();
        return cards;
    }
}