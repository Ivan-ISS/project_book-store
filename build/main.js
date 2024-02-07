(()=>{"use strict";let t=1;const e=(t,e,s)=>{t.src=`${e[s].img}`};class s{constructor(t,e,s,o,n,i,a,r,l){this.subject="",this.apiKey=t,this.printType="books",this.startIndex=e,this.maxResults=s,this.langRestrict=o,this.btnCategory=n,this.bookShop=l,this.btnLoadMore=i,this.displayPlaceBooks=a,this.classActive=r}defaultLoad(){this.displayPlaceBooks.innerHTML="",this.subject=this.btnCategory[0].innerText,this._createUrl(),this._request()}_createUrl(){this.url=`https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`}_request(){fetch(this.url).then((t=>t.json())).then((t=>{console.log(t);let e=[];t.items.forEach((t=>{e.push({id:t.id,imageCoverLinks:t.volumeInfo.imageLinks?.thumbnail,author:t.volumeInfo.authors,title:t.volumeInfo.title,rating:t.volumeInfo.averageRating,review:t.volumeInfo.ratingsCount,description:t.volumeInfo.description,retailPrice:t.saleInfo.retailPrice})})),localStorage.setItem("booksJSON",JSON.stringify(e)),document.dispatchEvent(this.bookShop.requestEvent)})).catch((()=>{console.log("error")}))}handlerBtnCategory(){const t=this.classActive;for(let e=0;e<this.btnCategory.length;e++)this.btnCategory[e].addEventListener("click",(e=>{this.displayPlaceBooks.innerHTML="",this.subject=e.currentTarget.dataset.attribute,this.btnCategory.forEach((function(e){e.classList.remove(t)})),e.currentTarget.classList.add(t),this.startIndex=0,this._createUrl(),this._request()}))}handlerBtnLoadMore(){this.btnLoadMore.addEventListener("click",(()=>{this.startIndex=this.startIndex+this.maxResults,this._createUrl(),this._request()}))}}class o{constructor(t,e){this.displayPlaceBooks=t,this.bookShop=e}displayCard(){let t="";JSON.parse(localStorage.getItem("booksJSON")).forEach((e=>{void 0===e.rating&&(e.rating=0);const s=`\n            <div class="showcase__book">\n                <div class="showcase__book-cover">\n                    <img class="showcase__book-cover-img" src="${e.imageCoverLinks?e.imageCoverLinks:"./images/png/placeholder.png"}" alt="Book cover">\n                </div>\n                <div class="showcase__book-info">\n                    <div class="showcase__book-data">\n                        <p class="showcase__book-author">${e.author?e.author:"Author unknown"}</p>\n                        <h3 class="showcase__book-title">${e.title}</h3>\n                        <div class="showcase__book-rating">\n                            <div class="showcase__stars">\n                                <svg width="60" height="11" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="m5.8718,0.03648l1.80568,3.51469l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147l0,0.00001z\n                                    m11.92307,0.03647l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\n                                    m12.10257,0.03648l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\n                                    m12.28205,0.03647l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\n                                    m12.33333,0.03648l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z" \n                                    fill="#f2c94c" clip-path="inset(0 ${100*(1-e.rating/5)}% 0 0)" id="svg_1"/>\n                                </svg>\n                            </div>\n                            <span class="showcase__review">${e.review?e.review+"review":""}</span>\n                        </div>\n                    </div>\n                    <p class="showcase__book-description">${e.description?e.description:"No description"}</p>\n                    <span class="showcase__book-price">${e.retailPrice?.amount?e.retailPrice?.amount+" "+e.retailPrice?.currencyCode:""}</span>\n                    <button class="showcase__buy-btn" id="${e.id}">Buy now</button>\n                </div>\n            </div>\n            `;t+=s})),this.displayPlaceBooks.innerHTML+=t,document.dispatchEvent(this.bookShop.createContentEvent)}}class n{constructor(t,e,s,o,n){this.btnBuyNameClass=e,this.shopBagCount=t,this.classActive=s,this.textBuyNow=o,this.textInTheCart=n,this.count=0,this.booksInShopBag=JSON.parse(localStorage.getItem("booksInShopBag"))?JSON.parse(localStorage.getItem("booksInShopBag")):{},console.log(this.booksInShopBag)}_addLocalStorage(t){JSON.parse(localStorage.getItem("booksJSON")).forEach((e=>{e.id===t&&(this.booksInShopBag[e.id]=e,localStorage.setItem("booksInShopBag",JSON.stringify(this.booksInShopBag)))}))}_removeLocalStorage(t){t in this.booksInShopBag&&(delete this.booksInShopBag[t],localStorage.setItem("booksInShopBag",JSON.stringify(this.booksInShopBag)))}checkingBooksInShopBag(){this.btnBuy=document.querySelectorAll(this.btnBuyNameClass),this.booksInShopBag&&(this.count=Object.keys(this.booksInShopBag).length),console.log(this.booksInShopBag),console.log(this.count);for(let t=0;t<this.btnBuy.length;t++)this.booksInShopBag&&this.btnBuy[t].id in this.booksInShopBag&&(this.btnBuy[t].classList.add(this.classActive),this.btnBuy[t].innerText=this.textInTheCart);this.shopBagCount.innerText=this.count,this.count&&(this.shopBagCount.style.display="block")}handlerBtnBuy(){this.btnBuy=document.querySelectorAll(this.btnBuyNameClass);for(let t=0;t<this.btnBuy.length;t++)this.btnBuy[t].addEventListener("click",(t=>{t.currentTarget.innerText===this.textBuyNow?(this.count+=1,t.currentTarget.innerText=this.textInTheCart,this._addLocalStorage(t.currentTarget.id)):(this.count-=1,t.currentTarget.innerText=this.textBuyNow,this._removeLocalStorage(t.currentTarget.id)),this.shopBagCount.style.display="block",t.currentTarget.classList.toggle(this.classActive),this.shopBagCount.innerText=this.count}))}}document.write("Hello, webpack-dev-server");const i=[{img:"./images/png/banner-sale.png"},{img:"./images/png/banner-entrepreneurs.png"},{img:"./images/png/banner-selection-books.png"}],a=document.querySelector(".banner__image-slide"),r=document.querySelectorAll(".selection__circle-btn"),l="selection__circle-btn-focus";!function(s,o,n,i){!function(t,e,s,o){for(let n=0;n<o.length;n+=1)o[n].img===s.getAttribute("src")&&t[n].classList.add(e)}(s,o,n,i),s.forEach(((a,r)=>{a.addEventListener("click",(()=>{e(n,i,r);for(let t=0;t<s.length;t+=1)s[t].classList.remove(o);s[r].classList.add(o),t=r+1,t===s.length&&(t=0)}))}))}(r,l,a,i),function(s,o,n,i){setInterval((()=>{e(n,i,t);for(let t=0;t<s.length;t+=1)s[t].classList.remove(o);s[t].classList.add(o),t++,t===s.length&&(t=0)}),5e3)}(r,l,a,i);const c=document.querySelectorAll(".showcase__btn-category"),h=document.querySelector(".button-load__more-btn"),g=document.querySelector(".showcase__set-books"),u=document.querySelector(".header__shop-bag-count"),d=new class{constructor(t,e,i,a,r,l,c,h,g,u,d,p){this.card=new o(c,this),this.bookCategory=new s(t,e,i,a,r,l,c,u,this),this.shopBag=new n(h,g,u,d,p),this.requestEvent=new Event("requestCompleted"),this.createContentEvent=new Event("createContentCompleted")}run(){this.bookCategory.defaultLoad(),this.bookCategory.handlerBtnCategory(),this.bookCategory.handlerBtnLoadMore(),document.addEventListener("requestCompleted",(()=>{this.card.displayCard(),this.shopBag.handlerBtnBuy()})),document.addEventListener("createContentCompleted",(()=>{this.shopBag.checkingBooksInShopBag()}))}}("AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8",0,6,"ru",c,h,g,u,".showcase__buy-btn","active","BUY NOW","IN THE CART");d.run()})();