import React, { useState } from "react";
import Slider from "react-slick";
import {
	bannerImgOne,
	bannerImgTwo,
	bannerImgThree,
	bannerImgFour,
	bannerImgFive,
} from "../../assets/index";
import CarouselVid from "../../assets/banner/carousel_vid.mp4";
import CarouselOne from "../../assets/banner/carousel_1.jpg";
const Banner = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoPlay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,

		appendDots: (dots) => (
			<div
				style={{
					position: "absolute",
					top: "70%",
					left: "45%",
					transform: "translate(-50% -50%)",
					width: "210px",
				}}>
				<ul
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					{" "}
					{dots}{" "}
				</ul>
			</div>
		),
		customPaging: (i) => (
			<div
				style={{
					width: "30px",
					height: "30px",
					borderRadius: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "white",
					background: "#131921",
					padding: "8px 0",
					cursor: "pointer",
					border: "1px solid #f3a847",
				}}>
				{i + 1}
			</div>
		),
	};
	return (
		<div className="w-full">
			<div className="w-full h-full relative">
				<Slider {...settings}>
					<div>
						<img src={bannerImgOne} alt="bannerImg1" />
					</div>
					<div>
						<img src={bannerImgTwo} alt="ban2" />
					</div>
					<div>
						<img src={bannerImgThree} alt="ban3" />
					</div>
					<div>
						<img src={bannerImgFour} alt="ban4" />
					</div>
					<div>
						<img src={bannerImgFive} alt="ban5" />
					</div>
					<div style={{ backgroundColor: "black" }}>
						<video
							controls
							autoPlay
							muted
							style={{ height: "300px", width: "100%" }}>
							<source src={CarouselVid} type="video/mp4" autoPlay />
						</video>
						<img
							style={{ height: "300px", width: "100%" }}
							src={CarouselOne}
							alt="carouse"
						/>
					</div>
				</Slider>
			</div>
		</div>
	);
};
export default Banner;
