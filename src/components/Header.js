import React from "react";
import { logo } from "../assets/index";

const Header = () => {
	return (
		<div className="">
			<div className="w-full bg-amazon_blue text-white px-4 py-3">
				{/*=============Image Start here==============*/}
				<div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
					<img className="w-24 mt-2" src={logo} alt="amazon-logo" />
				</div>
				{/*=============Image Ends here==============*/}
				{/*=============Delivery Start here==============*/}
				<div></div>
				{/*=============Delivery Ends here==============*/}
				{/*=============Search Start here==============*/}

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
