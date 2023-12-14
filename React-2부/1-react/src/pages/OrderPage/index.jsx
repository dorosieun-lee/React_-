import React from "react";
import OrderApi from "../../../../shared/api/OrderApi";
import Navbar from "../../components/Navbar.jsx";
import Page from "../../components/Page.jsx";
import Title from "../../components/Title.jsx";
import OrderDeliveryCard from "./OrderDeliveryCard.jsx";
import OrderPaymentCard from "./OrderPaymentCard.jsx";
import OrderStatusCard from "./OrderStatusCard.jsx";

const fakeProduct = {
	deliveryAddress: "서울특별시 송파구 잠실동 1번지",
	deliveryContact: "010-1111-2222",
	deliveryPrice: 3000,
	discountPrice: 2000,
	id: "CACDA420",
	messageToRider: "안전하게 오세요",
	messageToShop: "포크는 주지 마세요",
	name: "짜장면",
	orderDate: "2023. 12. 14. 오전 11:36:23",
	paymentMethod: "마이페이",
	position: [60, 60],
	productPrice: 6000,
	status: "배달중",
	totalPrice: 7000,
};

class OrderPage extends React.Component {
	constructor() {
		super();
		this.state = {
			order: null,
		};
	}

	async fetch() {
		const order = await OrderApi.fetchMyOrder();
		this.setState({ order });
	}
	catch(err) {
		console.log(err);
	}

	componentDidMount() {
		this.fetch();
	}

	render() {
		const { order } = this.state;
		return (
			<div className="OrderPage">
				<Page header={<Title title="주문내역" />} footer={<Navbar />}>
					{order && (
						<>
							<OrderStatusCard order={order} />
							<OrderPaymentCard order={order} />
							<OrderDeliveryCard order={order} />
						</>
					)}
				</Page>
			</div>
		);
	}
}

export default OrderPage;
