import Card from "../../components/Card.jsx";

const OrderPaymentCard = ({ order }) => {
	const {
		totalPrice,
		deliveryPrice,
		discountPrice,
		productPrice,
		paymentMethod,
	} = order;

	const header = (
		<>
			총 결제금액: {totalPrice.toLocaleString()}원
			<br />
			결제 방법: {paymentMethod}
		</>
	);

	const data = [
		{ term: "메뉴가격", description: `${productPrice.toLocaleString()}원` },
		{ term: "배달료", description: `${deliveryPrice.toLocaleString()}원` },
		{ term: "할인금액", description: `${discountPrice.toLocaleString()}원` },
	];
	return <Card header={header} data={data}></Card>;
};

export default OrderPaymentCard;
