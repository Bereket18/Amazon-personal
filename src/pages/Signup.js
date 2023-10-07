import React, { useState } from "react";
import { darkLogo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const Signup = () => {
	const [clientName, setClientName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setcPassword] = useState("");

	//Error handling message start
	const [errName, setErrName] = useState("");
	const [erremail, setErrEmail] = useState("");
	const [errpassword, setErrPassword] = useState("");
	const [errcPassword, setErrcPassword] = useState("");

	const handleName = (e) => {
		setClientName(e.target.value);
	};
	const handleRegistration = (e) => {
		e.preventDefault();
	};
	return (
		<div className="w-full">
			<div className="w-full bg-gray-100 pb-10">
				<form className="w-[350px] mx-auto flex flex-col items-center">
					<img
						className="w-28 mt-4 mb-4"
						src={darkLogo}
						alt="dark-amazon-logo"
					/>
					<div className="w-full border border-zinc-200 p-6">
						<h2 className="font-titleFont text-3xl font mb-4">
							Create account
						</h2>
						<div className="flex flex-col gap-3">
							<div className="flex flex-col gap-2">
								<p className="text-sm font-medium">Your name</p>
								<input
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="text"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<p className="text-sm font-medium">Mobile number or email</p>
								<input
									onChange={handleName}
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="email tel"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<p className="text-sm font-medium">Password</p>
								<input
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="password"
								/>
								<p className="text-xs text-black-600">
									<span
										className="text-blue-600 font-serif text-sm mr-1
                   italic">
										{" "}
										i{" "}
									</span>{" "}
									{""}Passwords must be at least 6 characters.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<p className="text-sm font-medium">Re-enter password</p>
								<input
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="text"
								/>
							</div>
							<button
								onClick={handleRegistration}
								className="w-full py-1.5 text-sm font-normal rounded-sm bg-[#fed20b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput mt-1">
								Continue
							</button>
						</div>
						<p className="text-xs text-black leading-4 mt-4">
							By creating an account, you agree to Amazon's{" "}
							<span
								className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
								Conditions of Use
							</span>{" "}
							and{" "}
							<span
								className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
								{" "}
								Privacy Notice.
							</span>
						</p>
						<div className="w-full text-xs text-gray-600 mt-4 flex items-center my-3">
							<span className="w-2/3 h-[1px] bg-zinc-400 inline-flex ml-12"></span>
						</div>
						<div className="text-xs text-black leading-4 mt-4">
							<p className="font-semibold">Buying for work?</p>
							<span
								className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
								Create a free business account
							</span>
						</div>
						<div className="w-full text-xs text-gray-600 mt-4 flex items-center my-3">
							<span className="w-2/3 h-[1px] bg-zinc-400 inline-flex ml-12"></span>
						</div>

						<p className=" text-xs text-black">
							Already have an account?{" "}
							<Link to="/signin">
								<span
									className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100 font-light font-xs">
									Sign in
									<ArrowRightIcon />
								</span>
							</Link>
						</p>
					</div>
				</form>
			</div>
			<div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center">
				<div className="flex items-center gap-6 pt-10">
					<p
						className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
						Conditions of Use
					</p>
					<p
						className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
						Privacy Notice
					</p>
					<p
						className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
						Help
					</p>
				</div>
				<p className="text-xs text-gray-600">
					© 1996-2023, Amazon.com, Inc. or its affiliates
				</p>
			</div>
		</div>
	);
};

export default Signup;
