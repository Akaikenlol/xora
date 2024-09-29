declare type NavLinkProps = {
	title: string;
};

declare type ButtonProps = {
	icon?: string;
	children: React.ReactNode;
	href?: string;
	containerClassName?: string;
	onClick?: () => void;
	markerFill?: string;
};
