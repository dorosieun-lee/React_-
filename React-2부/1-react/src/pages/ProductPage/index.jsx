import React from "react";
import ProductApi from "../../../../shared/api/ProductApi.js";
import Navbar from "../../components/Navbar.jsx";
import ProductItem from "../../components/ProductItem.jsx";
import Title from "../../components/Title.jsx";
import Page from "../../components/Page.jsx";

const fakeProduct = {
	id: "CACDA421",
	name: "해물 계란 라면",
	price: 6000,
	thumbnail: "./images/menu-해물계란라면.jpg",
};

class ProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
		};
	}

	async fetch() {
		try {
			const productList = await ProductApi.fetchProductList();
			this.setState({ productList });
		} catch (err) {
			console.log(err);
		}
	}

	componentDidMount() {
		this.fetch();
	}

	onClick() {
		console.log("클릭했습니다.");
	}

	render() {
		return (
			<div className="ProductPage">
				<Page header={<Title title="메뉴목록" />} footer={<Navbar />}>
					<ul>
						{this.state.productList.map((product) => (
							<li key={product.id}>
								<ProductItem product={product} onClick={this.onClick} />
							</li>
						))}
					</ul>
				</Page>
			</div>
		);
	}
}

export default ProductPage;
