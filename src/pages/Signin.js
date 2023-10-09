import React, { useState } from "react";
import { darkLogo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errEmail, setErrEmail] = useState("");
	const [errPassword, setErrPassword] = useState("");

	//handle email starts here
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrEmail("");
	};

	//handle password starts here
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setErrPassword("");
	};

	//handle login starts here
	const handleLogin = (e) => {
		e.preventDefault();
		if (!email) {
			setErrEmail("Enter your email or mobile phone number");
		}
		if (!password) {
			setErrPassword("Enter your password");
		}
		if (email && password) {
			console.log(email, password);
			setEmail("");
			setPassword("");
		}
	};

	return (
		<div className="w-full">
			<div className="w-full bg-gray-100 pb-10">
				<form className="w-[350px] mx-auto flex flex-col items-center">
					<Link to="/">
						<img className="w-28 mt-6 mb-4" src={darkLogo} alt="darklogo" />
					</Link>
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
									onChange={handleEmail}
									value={email}
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
									type="email tel"
								/>
								{errEmail && (
									<p
										className="text-red-600 text-xs font-xs font-semibold tracking-wide 
										flex items-center gap-2 -mt-1.5 italic">
										{" "}
										<span className="italic font-titleFont font-extrabold text-base">
											!
										</span>
										{errEmail}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-sm font-medium ">Password</p>
								<input
									onChange={handlePassword}
									value={password}
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
									type="Password"
								/>
								{errPassword && (
									<p
										className="text-red-600 text-xs font-xs font-semibold tracking-wide 
										flex items-center gap-2 -mt-1.5 italic">
										{" "}
										<span className="italic font-titleFont font-extrabold text-base">
											!
										</span>
										{errPassword}
									</p>
								)}
							</div>
							<button
								onClick={handleLogin}
								className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t 
              from-[#fed20b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput mt-1">
								Continue
							</button>
						</div>
						<p className="text-xs text-black leading-4 mt-4">
							By Continuing, you agree to Amazon's{" "}
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
						<p className="text-xs text-gray-600 mt-4 cursor-pointer group">
							<ArrowRightIcon />
							<span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
								Need Help?
							</span>
						</p>
						<div className="w-full text-xs text-gray-600 mt-4 flex items-center my-3">
							<span className="w-2/3 h-[1px] bg-zinc-400 inline-flex ml-12"></span>
						</div>
						<div className="text-xs text-black leading-4 mt-4">
							<p className="font-semibold">Buying for work?</p>
							<span
								className="text-blue-500 hover:text-orange-600 hover:underline underline-offset-1
          cursor-pointer duration-100">
								<p className="mt-2">Shop on Amazon Business</p>
							</span>
						</div>
					</div>
					<p className="w-full text-xs text-gray-600 mt-4 flex items-center">
						<span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
						<span className="w-1/3 text-center">New to Amazon?</span>
						<span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
					</p>
					<Link className="w-full" to="/signup">
						<button
							className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t
        from-slate-100 to-slate-200 hover:bg-gradient-to-b border border-zinc-400
        active:border-yellow-800 active:shadow-amazonInput ">
							Create your Amazon account
						</button>
					</Link>
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

export default Signin;
