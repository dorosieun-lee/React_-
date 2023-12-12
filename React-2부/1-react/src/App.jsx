import Button from "./components/Button.jsx";
import ProductItem from "./components/ProductItem.jsx";
import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";

const fakeProduct = {
	id: "CACDA421",
	name: "해물 계란 라면",
	price: 6000,
	thumbnail: "./images/menu-해물계란라면.jpg",
};

const App = () => (
	<div className="ProductPage">
		<div className="Page">
			<header>
				<Title title="메뉴 목록"/>
			</header>
			<main>
				<ul>
					<li>
						<ProductItem product={fakeProduct} />
					</li>
				</ul>
			</main>
			<footer>
                <Navbar nav1="메뉴목록" nav2="주문내역" />
			</footer>
		</div>
	</div>
);

export default App;
