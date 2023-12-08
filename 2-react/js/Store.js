import storage from './storage.js';


const tag = "[Store]";

class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;
  }

  search(keyword) {
    return this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    ); // storage에서 상품을 검색하는 로직
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

}


const store = new Store(storage)
export default store;