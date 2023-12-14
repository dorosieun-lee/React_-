import OrderForm from "../../components/OrderForm.jsx";
import Page from "../../components/Page.jsx";
import PaymentButton from "../../components/PaymentButton.jsx";
import Title from "../../components/Title.jsx";
import ProductItem from "../../components/ProductItem.jsx";

const fakeProduct = {
	id: "CACDA421",
	name: "해물 계란 라면",
	price: 6000,
	thumbnail: "./images/menu-해물계란라면.jpg",
};

const CartPage = () => {
	return (
		<Page
			header={<Title title="장바구니" backUrl={"/"} />}
			footer={<PaymentButton />}
		>
			<>
				<ProductItem product={fakeProduct} />
				<OrderForm />
			</>
		</Page>
	);
};

export default CartPage;
