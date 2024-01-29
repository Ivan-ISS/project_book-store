export class Cards {

    constructor(imageCoverLinks, authors, title, description, price) {
        this.imageCoverLinks = imageCoverLinks;
        this.authors = authors;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    displayCard() {
        
    }

    createContent() {
        const content = `
        <div class="showcase__book">
            <div class="showcase__book-cover">
                <img class="showcase__book-cover-img" src="${this.authors}" alt="Book cover">
            </div>
            <div class="showcase__book-info">
                <div class="showcase__book-data">
                    <p class="showcase__book-author">${this.authors}</p>
                    <h3 class="showcase__book-title">${this.authors}</h3>
                    <div class="showcase__book-rating">
                        <div class="showcase__stars">
                            <svg class="showcase__star" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
                            </svg>
                            <svg class="showcase__star" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
                            </svg>
                            <svg class="showcase__star" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
                            </svg>
                            <svg class="showcase__star" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
                            </svg>
                            <svg class="showcase__star" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="#EEEDF5"/>
                            </svg>
                        </div>
                        <span class="showcase__review">000 review</span>
                    </div>
                </div>
                <p class="showcase__book-description">${this.authors}</p>
                <span class="showcase__book-price">Price</span>
                <button class="showcase__buy-btn">Buy now</button>
            </div>
        </div>
        `;
        return content;
    }
}