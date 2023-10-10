import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logo } from "../assets/index";
import { allItems } from "../constants";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
	const products = useSelector((state) => state.amazon.products)
	console.log(products)

	const [city, setCity] = useState();
	const [postal, setPostal] = useState();
	// setting current city and postal using api
	useEffect(() => {
		axios
			.get("https://ipinfo.io/json?token=9792e4a0d74241")
			.then((response) => {
				setCity(response.data.city);
				setPostal(response.data.postal);
			});
	}, []);

	const [ShowAll, setShowAll] = useState(false);
	console.log(ShowAll);

	return (
		<div className="w-full sticky top-0 z-50">
			<div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
				{/*=============Image Start here==============*/}
				<Link to='/'>
					<div className="headerHover">
						<img className="w-24 mt-2" src={logo} alt="amazon-logo" />
					</div>
				</Link>
				{/*=============Image Ends here==============*/}
				{/*=============Delivery Start here==============*/}
				<div className="headerHover hidden md:inline-flex">
					<LocationOnOutlinedIcon />
					<p className="text-xs text-lightText font-light flex flex-col">
						Deliver to{" "}

						<span className="text-sm font-semibold -mt-1 text-whiteText">
							{city} {postal}
						</span>
					</p>
				</div>
				{/*=============Delivery Ends here==============*/}
				{/*=============Search Start here==============*/}
				<div className="h-10 rounded-md hidden lgl:flex  flex-grow relative">
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
				<Link to="/signin">
					<div className="flex flex-col items-start justify-center headerHover">
						<p className="text-xs md:text-xs text-white md:text-lightText font-light">
							Hello, sign in
						</p>
						<p className="text-sm font-semibold -mt-1 text-whiteText hidden md:inline-flex">
							Accounts & Lists{" "}
							<span>
								<ArrowDropDownOutlinedIcon />
							</span>
						</p>
					</div>
				</Link>
				{/*=============Sign-in Ends here==============*/}
				{/*=============Orders Start here==============*/}
				<div className="hidden md:inline-flex flex-col items-start justify-center headerHover">
					<p className="text-xs text-lightText font-light">Returns</p>
					<p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
				</div>
				{/*=============Orders Ends here==============*/}
				{/*=============cart Start here==============*/}
				<Link to='/cart'>
					<div className="flex items-start justify-center headerHover relative">
						<ShoppingCartIcon />
						<p className="text-xs font-semibold mt-3 text-whiteText">
							Cart
							<span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center ">
								{
									products.length > 0 ? products.length : 0
								}
							</span>
						</p>
					</div>
				</Link>
				{/*=============cart Ends here==============*/}
			</div>
			<HeaderBottom />
		</div>
	);
};

export default Header;
