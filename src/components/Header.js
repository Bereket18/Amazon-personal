import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logo } from "../assets/index";
import { allItems } from "../constants";

const Header = () => {
	const [ShowAll, setShowAll] = useState(false);
	console.log(ShowAll);

	return (
		<div className="">
			<div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
				{/*=============Image Start here==============*/}
				<div className="headerHover">
					<img className="w-24 mt-2" src={logo} alt="amazon-logo" />
				</div>
				{/*=============Image Ends here==============*/}
				{/*=============Delivery Start here==============*/}
				<div className="headerHover">
					<LocationOnOutlinedIcon />
					<p className="text-sm text-lightText font-light flex flex-col">
						Deliver to{" "}
						<span className="text-sm font-semibold -mt-1 text-whiteText">
							Ethiopia
						</span>
					</p>
				</div>
				{/*=============Delivery Ends here==============*/}
				{/*=============Search Start here==============*/}
				<div className="h-10 rounded-md flex flex-grow relative">
					<span
						onClick={() => setShowAll(!ShowAll)}
						className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
						All
						<span></span>
						<ArrowDropDownOutlinedIcon />
					</span>
					{ShowAll && (
						<div>
							<ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
								{allItems.map((item) => (
									<li
										className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
										key={item._id}>
										{item.title}
									</li>
								))}
							</ul>
						</div>
					)}
					<input
						type="text"
						className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
					/>
					<span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
						<SearchIcon />
					</span>
				</div>
				{/*=============Search Ends here==============*/}
				{/*=============Sign-in Start here==============*/}
				<div className="flex flex-col items-start justify-center headerHover">
					<p className="text-xs text-lightText font-light">Hello, sign in</p>
					<p className="text-sm font-semibold -mt-l text-whiteText">
						Accounts & Lists{" "}
						<span>
							<ArrowDropDownOutlinedIcon />
						</span>
					</p>
				</div>
				{/*=============Sign-in Ends here==============*/}
				{/*=============Orders Start here==============*/}
				<div className="flex flex-col items-start justify-center headerHover">
					<p className="text-xs text-lightText font-light">Return</p>
					<p className="text-sm font-semibold -mt-l text-whiteText">Orders</p>
				</div>
				{/*=============Orders Ends here==============*/}
				{/*=============cart Start here==============*/}
				<div className="flex items-start justify-center headerHover relative">
					<ShoppingCartIcon />
					<p>
						Cart<span>0</span>
					</p>
				</div>
				{/*=============cart Ends here==============*/}
			</div>
		</div>
	);
};

export default Header;
