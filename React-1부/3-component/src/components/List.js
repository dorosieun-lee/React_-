import React from "react";
import { formatRelativeDate } from "../helpers.js";


// keywordList와 HistoryList의 공통 부분과 차이나는 부분을 조건부 렌더링을 사용하여 return (렌더링) -> 조합: 특수화
const List = ({
	data = [],
	onClick,
	hasIndex = false,
	hasDate = false,
	onRemove,
}) => {
	const handleClickRemoveHistory = (event, keyword) => {
		event.stopPropagation();
		onRemove(keyword);
	};
	return (
		<ul className="list">
			{data.map((item, index) => {
				return (
					<li key={item.id} onClick={() => onClick(item.keyword)}>
						{hasIndex && <span className="number">{index + 1}</span>}
						<span>{item.keyword}</span>
						{hasDate && (
							<span className="date">{formatRelativeDate(item.date)}</span>
						)}
						{/* onRemove는 함수인데, 있는지 없는지 불리언 값으로 나타내기 위하여 !!를 앞에 붙임 */}
						{!!onRemove && (
							<button
								className="btn-remove"
								onClick={(event) =>
									handleClickRemoveHistory(event, 
                                        item.keyword)
								}
							></button>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default List;
