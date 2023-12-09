import React from "react";
import List from "./List.js";
import store from "../Store.js";

export default class KeywordList extends List {
	componentDidMount() {
		const data = store.getKeywordList();
		this.setState({
			data,
		});
	}

    // List 클래스의 render 메서드에서 어떻게 자식 클래스의 renderItem이 호출되는지 의문
	renderItem(item, index) {
		return (
			<>
				<span className="number">{index + 1}</span>
				<span>{item.keyword}</span>
			</>
		);
	}
}
