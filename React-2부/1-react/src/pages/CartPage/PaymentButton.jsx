import Button from "../../components/Button.jsx";

const PaymentButton = () => {
	return (
		<div className="PaymentButton">
			<Button styleType="brand-solid" block form="order-form">
				결제하기
			</Button>
		</div>
	);
};

export default PaymentButton;
