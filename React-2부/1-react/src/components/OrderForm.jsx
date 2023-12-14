import FormControl from "./FormControl.jsx";

const OrderForm = () => {
	return (
		<form className="OrderForm">
			{/* 클래스 적용 안되는 문제가 있음 */}
			<FormControl label="주소" htmlFor={"deliveryAddress"} required>
				<input
					type="text"
					name="deliveryAddress"
					id="deliveryAddress"
					placeholder="배달받을 주소를 입력하세요"
					required
					autoFocus
				/>
			</FormControl>

			{/* <FormControl label="연락처" htmlFor={"contact"} required>
				<input id="contact" placeholder="연락처를 입력하세요" />
			</FormControl>
			<form>
				<label htmlFor="payment">결제수단</label>
				<select name="payment" id="payment">
					<option value="mypay">마이페이</option>
					<option value="card">신용카드</option>
					<option value="cash">계좌이체</option>
				</select>
			</form>
			<FormControl label="가게 사장님께" htmlFor={"toHost"}>
				<input id="toHost" />
			</FormControl>
			<FormControl label="라이더님께" htmlFor={"toRider"}>
				<input id="toRider" />
			</FormControl> */}
		</form>
	);
};

export default OrderForm;
