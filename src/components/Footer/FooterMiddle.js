import React from "react";
import FooterMdList from "./FooterMdList";
import { middleList } from "../../constants";
import { logo, ET } from "../../assets/index";

const FooterMiddle = () => {
	return (
		<div className="w-full bg-amazon_light text-white">
			{/******************Top Starts Here*********************/}
			<div className="w-full border-b-[1px] border-gray-500 py-10">
				<div className="max-w-5xl mx-auto text-gray-300"></div>
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
			{/******************Top Ends Here*********************/}
			{/******************Bottom Starts Here*********************/}
			<div className="w-full flex gap-6 items-center justify-center py-6">
				<div>
					<img src={logo} alt="Flag" />
				</div>
			</div>
			{/******************Bottom Ends Here*********************/}
		</div>
	);
};

export default FooterMiddle;
