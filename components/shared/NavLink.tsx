import React from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }: NavLinkProps) => {
	return (
		<div className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5">
			{title}
		</div>
	);
};

export default NavLink;
