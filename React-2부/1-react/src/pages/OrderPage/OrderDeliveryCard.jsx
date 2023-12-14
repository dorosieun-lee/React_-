import Card from "../../components/Card.jsx";

const OrderDeliveryCard = ({ order }) => {
	const { deliveryAddress, deliveryContact, messageToShop, messageToRider } =
		order;
	const data = [
		{ term: "배달주소", description: deliveryAddress },
		{ term: "전화번호", description: deliveryContact },
		{ term: "가게사장님께", description: messageToShop },
		{ term: "라이더님께", description: messageToRider },
	];
	return <Card data={data}></Card>;
};

export default OrderDeliveryCard;
