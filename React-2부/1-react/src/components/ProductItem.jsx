import Button from "./Button.jsx";

const ProductItem = ({ onClick, product }) => {
	const { name, price, thumbnail } = product;

	return (
		<div className="ProductItem">
			<div className="description">
				<h2>{name}</h2>
				<div>{price}원</div>
				{onClick && (
					<Button styleType="brand" onClick={onClick}>
						주문하기
					</Button>
				)}
			</div>
			<div className="thumbnail">
				<img src={thumbnail} alt={`${name} ${price}`} />
			</div>
		</div>
	);
};

export default ProductItem;
