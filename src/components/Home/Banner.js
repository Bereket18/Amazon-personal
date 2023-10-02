import React from "react";
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
					backgroundColor: "#ddd",
					borderRadius: "10px",
					padding: "10px",
				}}>
				<ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		),
		customPaging: (i) => (
			<div
				style={{
					width: "30px",
					color: "blue",
					border: "1px blue solid",
				}}>
				{i + 1}
			</div>
		),
	};
	return (
		<div>
			<Slider {...settings}>
				<div>
					<img src={bannerImgOne} alt="bannerImg1" />
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
			</Slider>
		</div>
	);
};
export default Banner;
