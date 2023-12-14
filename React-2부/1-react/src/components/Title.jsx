const Title = ({ backUrl, title }) => {
	if (backUrl) {
		return (
			<>
				<a href={backUrl}></a>
				<h1 style={{ paddingRight: "44px" }}>{title}</h1>
			</>
		);
	} else {
		return <h1>{title}</h1>;
	}
};

export default Title;
