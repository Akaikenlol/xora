import React from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }: { title: string }) => {
	return (
		<LinkScroll
			to={title}
			offset={-100}
			spy
			smooth
			activeClass="nav-active"
			className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5"
		>
			{title}
		</LinkScroll>
	);
};

export default NavLink;
