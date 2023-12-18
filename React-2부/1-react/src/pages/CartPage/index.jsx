import PaymentButton from "./PaymentButton";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import React from "react";
import ProductApi from "shared/api/ProductApi";

const fakeProduct = {
	id: "CACDA421",
	name: "해물 계란 라면",
	price: 6000,
	thumbnail: "./images/menu-해물계란라면.jpg",
};

class CartPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: null,
		};
	}

	componentDidMount() {
		this.fetch();
	}

	async fetch() {
		try {
			const product = await ProductApi.fetchProduct("CACDA421");
			// console.log(product);
			this.setState({ product });
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		return (
			<div className="CartPage">
				<Page
					header={<Title backUrl="/">장바구니</Title>}
					footer={<PaymentButton />}
				>
					{this.state.product && <ProductItem product={this.state.product} />}
					<OrderForm />
				</Page>
			</div>
		);
	}
}

export default CartPage;
