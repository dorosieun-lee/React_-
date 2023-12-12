import React from "react";

// props 부분을 해체 문법인 { value, onChange, onSubmit, onReset }으로 작성하면,
// props.onSubmit -> onSubmit으로 간단하게 작성할 수 있음
const SearchForm = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(props.value);
	};

	const handleReset = () => {
		props.onReset();
	};

	const handleChangeInput = (event) => {
		props.onChange(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} onReset={handleReset}>
			<input
				type="text"
				placeholder="검색어를 입력하세요"
				autoFocus
				value={props.value}
				onChange={handleChangeInput}
			/>
			{props.value.length > 0 && (
				<button type="reset" className="btn-reset"></button>
			)}
		</form>
	);
};

export default SearchForm;
