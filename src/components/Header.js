import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logo } from "../assets/index";

const Header = () => {
	const [ShowAll, setShowAll] = useState(false);
	console.log(ShowAll);
	const allItems = [
		{
			_id: "100",
			title: "All Departments",
		},

		{
			_id: "101",

			title: "Alexa Skills",
		},
		{
			_id: "102",
			title: "Amazon Devices",
		},
		{
			_id: "103",
			title: "Amazon Fresh",
		},
		{
			_id: "104",
			title: "Amazon Pharmacy",
		},
		{
			_id: "105",
			title: "Amazon Warehouse ",
		},
		{
			_id: "107",
			title: "   Appliances",
		},
		{
			_id: "108",
			title: "Apps & Games",
		},
		{
			_id: "109",
			title: "Arts, Crafts & Sewing",
		},
		{
			_id: "110",
			title: "Audible Books & Originals",
		},
		{
			_id: "111",
			title: "Automotive Parts & Accessories",
		},
		{
			_id: "112",

			title: "    Baby",
		},
		{
			_id: "113",

			title: "    Beauty & Personal Care",
		},
		{
			_id: "114",

			title: "    Books",
		},
		{
			_id: "115",

			title: "    CDs & Vinyl",
		},
		{
			_id: "116",

			title: "    Cell Phones & Accessories",
		},
		{
			_id: "117",

			title: "    Clothing, Shoes & Jewelry",
		},
		{
			_id: "118",

			title: "    &#160;&#160;&#160;Women",
		},
		{
			_id: "119",

			title: "    &#160;&#160;&#160;Men",
		},
		{
			_id: "120",

			title: "    &#160;&#160;&#160;Girls",
		},
		{
			_id: "121",

			title: "    &#160;&#160;&#160;Boys",
		},
		{
			_id: "122",

			title: "    &#160;&#160;&#160;Baby",
		},
		{
			_id: "123",

			title: "    Collectibles & Fine Art",
		},
		{
			_id: "124",

			title: "    Computers",
		},
		{
			_id: "125",

			title: "    Credit and Payment Cards",
		},
		{
			_id: "126",

			title: "    Digital Music",
		},
		{
			_id: "127",

			title: "    Electronics",
		},
		{
			_id: "128",

			title: "    Garden & Outdoor",
		},
		{
			_id: "129",

			title: "    Gift Cards",
		},
		{
			_id: "130",

			title: "    Grocery & Gourmet Food",
		},
		{
			_id: "131",

			title: "    Handmade",
		},
		{
			_id: "132",

			title: "    Health, Household & Baby Care",
		},
		{
			_id: "133",

			title: "    Home & Business Services",
		},
		{
			_id: "134",

			title: "    Home & Kitchen",
		},
		{
			_id: "135",

			title: "    Industrial & Scientific",
		},
		{
			_id: "136",

			title: "    Just for Prime",
		},
		{
			_id: "137",

			title: "    Kindle Store",
		},
		{
			_id: "138",

			title: "    Luggage & Travel Gear",
		},
		{
			_id: "139",

			title: "    Luxury Stores",
		},
		{
			_id: "140",

			title: "    Magazine Subscriptions",
		},
		{
			_id: "141",

			title: "    Movies & TV",
		},
		{
			_id: "142",
			title: "musical Instruments",
		},
		{
			_id: "143",

			title: "    Office Products",
		},
		{
			_id: "144",

			title: "    et Supplies",
		},
		{
			_id: "145",

			title: "    Premium Beauty",
		},
		{
			_id: "146",

			title: "    Prime Video",
		},
		{
			_id: "147",

			title: "    Smart Home",
		},
		{
			_id: "148",

			title: "    Software",
		},
		{
			_id: "149",

			title: "    Sports & Outdoors",
		},
		{
			_id: "150",

			title: "    Subscribe & Save",
		},
		{
			_id: "151",

			title: "    Subscription Boxes",
		},
		{
			_id: "152",

			title: "    Tools & Home Improvement",
		},
		{
			_id: "153",

			title: "    Toys & Games",
		},
		{
			_id: "154",

			title: "    Under $10",
		},
		{
			_id: "155",

			title: "    Video Games",
		},
		{
			_id: "156",

			title: "    Whole Foods Market",
		},
	];

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

				{/*=============Sign-in Ends here==============*/}
				{/*=============Orders Start here==============*/}

				{/*=============Orders Ends here==============*/}
				{/*=============Delivery Start here==============*/}

				{/*=============Delivery Ends here==============*/}
			</div>
		</div>
	);
};

export default Header;
