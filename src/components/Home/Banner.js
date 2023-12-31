import React, { useState } from "react";
import Slider from "react-slick";
import {
	// bannerImgOne,
	bannerImgTwo,
	bannerImgThree,
	bannerImgFour,
	bannerImgFive,
	bannerImgSix,
} from "../../assets/index";
// import CarouselVid from "../../assets/banner/carousel_vid.mp4";
// import CarouselOne from "../../assets/banner/carousel_1.jpg";
const Banner = () => {
	const [dotActive, setDocActive] = useState(0);
	const settings = {
		dots: true,
		infinite: true,
		autoPlay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		beforeChange: (prev, next) => {
			setDocActive(next);
		},
		appendDots: (dots) => (
			<div
				style={{
					position: "absolute",
					top: "70%",
					left: "0",
					right: "0",
					margin: "0 auto",
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
				style={
					i === dotActive
						? {
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
						}
						: {
							width: "30px",
							height: "30px",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							background: "#232F3E",
							color: "white",
							padding: "8px 0",
							cursor: "pointer",
							border: "1px solid white",
						}
				}>
				{i + 1}
			</div>
		),
		responsive: [
			{
				breakpoint: 576,
				settings: {
					dots: true,
					appendDots: (dots) => (
						<div
							style={{
								position: "absolute",
								top: "70%",
								left: "0",
								right: "0",
								margin: "0 auto",
								transform: "translate(-50% -50%)",
								width: "150px",
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
							style={
								i === dotActive
									? {
										width: "20px",
										height: "20px",
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "white",
										background: "#131921",
										padding: "8px 0",
										cursor: "pointer",
										border: "1px solid #f3a847",
									}
									: {
										width: "20px",
										height: "20px",
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: "#232F3E",
										color: "white",
										padding: "8px 0",
										cursor: "pointer",
										border: "1px solid white",
										fontSize: "12px",
									}
							}>
							{i + 1}
						</div>
					),
				},
			},
		],
	};
	return (
		<div className="w-full">
			<div className="w-full h-full relative">
				<Slider {...settings}>
					<div>
						<img src={bannerImgSix} alt="bannerImg1" />
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
					{/* <div>
						<video controls autoPlay muted>
							<source src={CarouselVid} type="video/mp4" autoPlay />
						</video>
						<img src={CarouselOne} alt="carouse" />
					</div> */}
				</Slider>
			</div>
		</div>
	);
};
export default Banner;
