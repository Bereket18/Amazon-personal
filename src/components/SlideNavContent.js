import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SlideNavContent = () => {
	return (
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
	);
};

export default SlideNavContent;
