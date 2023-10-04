import React from "react";
import FooterMdList from "./FooterMdList";
import { middleList } from "../../constants";
import { logo, ET } from "../../assets/index";

const FooterMiddle = () => {
	return (
		<div className="w-full bg-amazon_light text-white">
			{/******************Top Starts Here*********************/}
			<div className="w-full border-b-[1px] border-gray-500 py-10">
				<div className="max-w-5xl mx-auto text-gray-300">
					<div className="w-full grid grid-cols-4 place-items-center items-start">
						{middleList.map((item) => (
							<FooterMdList
								key={item._id}
								title={item.title}
								listItem={item.listItem}
							/>
						))}
					</div>
				</div>
			</div>
			{/******************Top Ends Here*********************/}
			{/******************Bottom Starts Here*********************/}
			<div className="w-full flex gap-6 items-center justify-center py-6">
				<div>
					<img className="w-20 pt-3" src={logo} alt="Logo" />
				</div>
				<div className="flex gap-2">
					<p
						className="flex gap-1 items-center justify-center border border-gray-500 
					hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
						English
					</p>
				</div>
				<div
					className="flex gap-1 items-center justify-center border border-gray-500 
					hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
					<img className="w-6" src={ET} alt="Flag" />
					<p>Ethiopia</p>
				</div>
			</div>
			{/******************Bottom Ends Here*********************/}
		</div>
	);
};

export default FooterMiddle;
