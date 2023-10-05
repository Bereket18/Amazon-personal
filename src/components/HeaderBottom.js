import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SlideNavContent from "./SlideNavContent";

const HeaderBottom = () => {
	const ref = useRef();
	const [Sidebar, setSidebar] = useState(false);
	useEffect(() => {
		document.body.addEventListener("click", (e) => {
			if (e.target.contains(ref.current)) {
				setSidebar(false);
			}
		});
	}, [ref, Sidebar]);
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
				<li className="headerHover hidden md:inline-flex">Today's Deals</li>
				<li className="headerHover hidden md:inline-flex"> Customer Service</li>
				<li className="headerHover hidden md:inline-flex">Gift Cards</li>
				<li className="headerHover hidden md:inline-flex">Registry</li>
				<li className="headerHover hidden md:inline-flex">Sell</li>
			</ul>
			{/* ****************** listItems End here  ***************** */}
			{/* ****************** SlideNav Start here ***************** */}
			{Sidebar && (
				<div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
					<div className="w-full h-full relative">
						<motion.div
							ref={ref}
							initial={{ x: -500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-[350px] h-full bg-white border border-black">
							<div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
								<AccountCircleIcon />
								<h3 className="font-titleFont font-bold text-lg tracking-wide">
									Hello, Sign In
								</h3>
							</div>
							<SlideNavContent
								title="Digital Content & Devices"
								one="Amazon Music"
								two="	Kindle E-readers & Books"
								three="Amazon Appstore"
							/>
							<SlideNavContent
								title="Shop By Department"
								one="Electronics"
								two="	Computers"
								three="Smart Home"
							/>
							<SlideNavContent
								title="Programs & Features"
								one="Gift Cards"
								two="Amazon live"
								three="International Shopping"
							/>
							<SlideNavContent
								title="Help & Settings"
								one="Your Account"
								two="Customer Service"
								three="Contact Us"
							/>
							<span
								onClick={() => setSidebar(false)}
								className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
								<CloseIcon />
							</span>
						</motion.div>
					</div>
				</div>
			)}
			{/* ****************** SlideNav Start here ***************** */}
		</div>
	);
};

export default HeaderBottom;
