import Button from "../../components/Button.jsx";
import Card from "../../components/Card.jsx";

const OrderStatusCard = ({ order }) => {
	const { name, orderDate, id, status } = order;
	const data = [
		{ term: "주문일시", description: orderDate },
		{ term: "주문번호", description: id },
	];
	const footer = (
		<>
			<Button>전화</Button>
			<Button>가게보기</Button>
		</>
	);
	return (
		<Card
			header={
				<>
					<strong>{status}</strong>
					<br />
					{name}
				</>
			}
			data={data}
			footer={footer}
		></Card>
	);
};

export default OrderStatusCard;
