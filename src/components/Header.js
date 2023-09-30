import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { logo } from "../assets/index";

const Header = () => {
	return (
		<div className="">
			<div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
				{/*=============Image Start here==============*/}
				<div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
					<img className="w-24 mt-2" src={logo} alt="amazon-logo" />
				</div>
				{/*=============Image Ends here==============*/}
				{/*=============Delivery Start here==============*/}
				<div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
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
