import { createNextId } from './helpers.js';
import storage from './storage.js';


const tag = "[Store]";

class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;
  }

  search(keyword) {
    this.addHistory(keyword);
    
    return this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    ); // storage에서 상품을 검색하는 로직
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history2.date - history1.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  }

  addHistory(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) {
      return;
    }

    // 이미 존재하는 키워드면(hasHistory로 검사) 삭제하고 최신 날짜로 다시 추가하는 로직
    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    );
    if (hasHistory) {this.removeHistory(keyword)};

    const id = createNextId(this.storage.historyData);
    const date = new Date();
    this.storage.historyData.push({ id, keyword, date });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  }

}


const store = new Store(storage)
export default store;