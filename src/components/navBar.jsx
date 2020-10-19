import React from "react";

const NavBar = ({ totalCounters }) => {
	console.log("App - NavBar");
	return (
		<nav className='navbar navbar-light bg-light'>
			<a className='navbar-brand' href='#'>
				<span className='badge badge-pill badge-secondary'>
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
