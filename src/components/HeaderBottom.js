import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderBottom = () => {
	const [Sidebar, setSidebar] = useState(false);
	return (
		<div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
			{/* ****************** listItems Start here **************** */}
			<ul className="flex items-start gap-2 text-sm tracking-tight">
				<li
					onClick={() => setSidebar(true)}
					className="headerHover flex items-center gap-1">
					<MenuIcon />
					All
				</li>
				<li className="headerHover">Today's Deals</li>
				<li className="headerHover"> Customer Service</li>
				<li className="headerHover">Gift Cards</li>
				<li className="headerHover">Registry</li>
				<li className="headerHover">Sell</li>
			</ul>
			{/* ****************** listItems End here  ***************** */}
			{/* ****************** SlideNav Start here ***************** */}

			{/* ****************** SlideNav Start here ***************** */}
		</div>
	);
};

export default HeaderBottom;
