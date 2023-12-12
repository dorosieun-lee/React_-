const Navbar = ({ nav1, nav2 }) => {
	return (
		<nav className="Navbar">
			<a className="active" href="#">
				{nav1}
			</a>
			<a className="" href="#">
				{nav2}
			</a>
		</nav>
	);
};

export default Navbar;
