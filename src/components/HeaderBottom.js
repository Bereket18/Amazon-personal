import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
			{Sidebar && (
				<div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
					<div className="w-full h-full relative">
						<div className="w-[350px] h-full bg-white border border-black">
							<div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
								<AccountCircleIcon />
								<h3 className="font-titleFont font-bold text-lg tracking-wide">
									Hello, Sign In
								</h3>
							</div>
							<div>
								<h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
									Digital Content & Devices
								</h3>
								<ul>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Amazon Music{" "}
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Kindle E-readers & Books{" "}
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Amazon Appstore
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
										Shop By Department
									</h3>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Electronics
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Computers
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Smart Home
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>

									<h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
										Programs & Features
									</h3>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Gift Cards
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Amazon live
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										International Shopping
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>

									<h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
										Help & Settings
									</h3>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Your Account
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
									<li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
										Customer Service
										<span>
											<KeyboardArrowRightIcon />
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
			{/* ****************** SlideNav Start here ***************** */}
		</div>
	);
};

export default HeaderBottom;
