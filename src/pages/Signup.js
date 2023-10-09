import React, { useState } from "react";
import { darkLogo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const Signup = () => {
	const [clientName, setClientName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCpassword] = useState("");

	//Error handling message start
	const [errClientName, setErrClientName] = useState("");
	const [errEmail, setErrEmail] = useState("");
	const [errPassword, setErrPassword] = useState("");
	const [errCpassword, setErrCpassword] = useState("");

	//Handle function Start
	const handleName = (e) => {
		setClientName(e.target.value);
		setErrClientName("");
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrEmail("");
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setErrPassword("");
	};
	const handleCpassword = (e) => {
		setCpassword(e.target.value);
		setErrCpassword("");
	};

	// Email validation starts here
	const emailValidation = (email) => {
		return String(email)
			.toLowerCase()
			.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
	};

	//submit button starts here
	const handleRegistration = (e) => {
		e.preventDefault();
		if (!clientName) {
			setErrClientName(" Enter your name");
		}
		if (!email) {
			setErrEmail("Enter your email or mobile phone number");
		} else {
			if (!emailValidation(email)) {
				setErrEmail("Please enter a valid email");
			}
		}
		if (!password) {
			setErrPassword("Enter your password");
		} else {
			if (password.length < 6) {
				setErrPassword("Minimum 6 characters required");
			}
		}
		if (!cPassword) {
			setErrCpassword("confirm your password");
		} else {
			if (cPassword !== password) {
				setErrCpassword("Passwords must match");
			}
		}
		if (
			clientName &&
			email &&
			emailValidation(email) &&
			password &&
			password.length >= 6 &&
			cPassword &&
			cPassword === password
		) {
			console.log(clientName, email, password, cPassword);
			setClientName("");
			setEmail("");
			setPassword("");
			setCpassword("");
		}
	};
	return (
		<div className="w-full">
			<div className="w-full bg-gray-100 pb-10">
				<form className="w-[350px] mx-auto flex flex-col items-center">
					<Link to="/">
						<img
							className="w-28 mt-4 mb-4"
							src={darkLogo}
							alt="dark-amazon-logo"
						/>
					</Link>

					<div className="w-full border border-zinc-200 p-6">
						<h2 className="font-titleFont text-3xl font mb-4">
							Create account
						</h2>
						<div className="flex flex-col gap-3">
							<div className="flex flex-col gap-2">
								<p className="text-sm font-medium">Your name</p>
								<input
									onChange={handleName}
									value={clientName}
									placeholder="First and last name"
									className="w-full py-1 border border-zinc-400 
                  px-2 text-sm rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="text"
								/>
								{errClientName && (
									<p
										className="text-red-600 text-xs font-xs font-semibold tracking-wide 
										flex items-center gap-2 -mt-1.5 italic">
										{" "}
										<span className="italic font-titleFont font-extrabold text-base">
											!
										</span>
										{errClientName}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-3">
								<p className="text-sm font-medium">Mobile number or email</p>
								<input
									onChange={handleEmail}
									value={email}
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-sm rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
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
							<div className="flex flex-col gap-3">
								<p className="text-sm font-medium">Password</p>
								<input
									onChange={handlePassword}
									value={password}
									placeholder="At least 6 characters"
									className=" w-full py-1 border border-zinc-400 
                  px-2 text-sm rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="password"
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
									onChange={handleCpassword}
									value={cPassword}
									className="w-full lowercase py-1 border border-zinc-400 
                  px-2 text-sm rounded-sm outline-none focus-within:border-[#e77600] 
                  focus-within:shadow-amazonInput duration-100"
									type="password"
								/>
								{errCpassword && (
									<p
										className="text-red-600 text-xs font-xs font-semibold tracking-wide 
										flex items-center gap-2 -mt-1.5 italic">
										{" "}
										<span className="italic font-titleFont font-extrabold text-base">
											!
										</span>
										{errCpassword}
									</p>
								)}
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
