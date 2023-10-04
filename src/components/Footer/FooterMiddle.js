import React from "react";
import FooterMdList from "./FooterMdList";
import { middleList } from "../../constants";

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
			{/******************Bottom Ends Here*********************/}
		</div>
	);
};

export default FooterMiddle;
