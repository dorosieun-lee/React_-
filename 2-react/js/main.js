import store from "./js/Store.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  handleChangeInput(event) {
    //   this.state.searchKeyword = event.target.value;
    //   this.forceUpdate(); // 강제로, 상태 변화를 감지하고 렌더링하게 하는 메서드 -> 리액트스럽지 못함
    const searchKeyword = event.target.value;

    // 검색어 삭제 시, 검색결과 리셋 (아래의 this.setState는 동작하지 않음)
    if (searchKeyword.length <= 0 && this.state.submitted) {
      return this.handleReset();
    }

    this.setState({ searchKeyword, submitted: false });
    // setState() : React의 내장메서드 -> 상태의 변화를 감지하고 렌더링함
    // console.log(this.state.searchKeyword)
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("handleSubmit", this.state.searchKeyword);
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchKeyword, searchResult, submitted: true });
    // 변경된 필드만 기존 필드와 병합하는 방식으로 동작함
  }

  handleReset() {
    // this.setState({ searchKeyword: "" });
    // console.log("handleReset", this.state.searchKeyword);
    // setState는 항상 비동기로 동작한다. -> 모든 동기적인 동작이 끝나고 setState가 반영되기 때문에 console.log와 같은 동기적인 동작이 먼저 수행됨. -> console.log에서 변경된 사항을 확인하고 싶으면, 아래와 같은 콜백함수 형태로 작성해야함
    this.setState(
      () => {
        return { searchKeyword: "", submitted: false };
      },
      () => {
        console.log("handleReset", this.state.searchKeyword);
      }
    );
  }

  handleTabClick(tabType) {
    if (tabType == TabType.KEYWORD) {
      const keywordList = store.getKeywordList();
      this.setState({ keywordList });
    }
  }

  render() {
    // let resetButton = null;

    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = <button type="reset" className="btn-reset"></button>;
    // }

    const searchForm = (
      <form
        onSubmit={(event) => this.handleSubmit(event)}
        onReset={() => this.handleReset()}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={this.state.searchKeyword}
          onChange={(event) => this.handleChangeInput(event)}
        />
        {/* reset 버튼을 조건부 렌더링하는 방법 */}

        {/* 위의 resetButton, if 문을 사용하는 방법 */}
        {/* {resetButton} */}

        {/* 삼항연산자를 사용하는 방법 */}
        {/* {this.state.searchKeyword.length > 0 ? <button type="reset" className="btn-reset"></button> : null} */}

        {/* &&을 사용하는 방법 -> 조건에 맞지 않는 경우 null인 경우에만 사용할 수 있음*/}
        {this.state.searchKeyword.length > 0 && (
          <button type="reset" className="btn-reset"></button>
        )}
      </form>
    );

    const searchResult =
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다</div>
      );

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map((item, index) => {
          return (
            <li key={item.id} 
              onClick={() => this.search(item.keyword)}>
              <span className="number">{index + 1}</span>
              <span>{item.keyword}</span>
            </li>
          );
        })}
      </ul>
    );

    // const historyList = (

    // )

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => {
            return (
              <li
                className={tabType === this.state.selectedTab ? "active" : ""}
                key={tabType}
                onClick={() => { this.setState({ selectedTab: tabType })
                                  handleTabClick(tabType)}}
              >
                {TabLabel[tabType]}
              </li>
            );
          })}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
      </>
    );
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}{" "}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
