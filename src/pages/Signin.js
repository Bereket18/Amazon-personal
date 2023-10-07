import React from "react";
import { darkLogo } from "../assets";

const Signin = () => {
	return (
		<div className="w-full">
			<div className="w-full bg-gray-100 pb-10">
				<form className="w-[350px] mx-auto flex flex-col items-center">
					<img className="w-32 my-5" src={darkLogo} alt="darklogo" />
					<div className="w-full border border-zinc-200 p-6">
						<h2 className="font-titleFont text-3xl font-medium mb-4">
							Sign In
						</h2>
						<div className="flex flex-col gap-2">
							<div className="flex flex-col gap-2">
								<p className="text-sm font-medium ">
									Email or Mobile Phone Number
								</p>
								<input
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
									type="email"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-sm font-medium ">Password</p>
								<input
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
									type="Password"
								/>
							</div>
							<button
								onClick={(event) => event.preventDefault()}
								className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t 
              from-[#fed20b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput mt-1">
								Continue
							</button>
						</div>
						<p className="text-xs text-black leading-4 mt-4">
							By Continuing, you agree to Amazon's{" "}
							<span className="text-blue-600">Conditions of Use</span> and{" "}
							<span className="text-blue-600"> Privacy Notice.</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signin;
