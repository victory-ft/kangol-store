"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useOverflowDetector } from "react-detectable-overflow";

const ProductImages = ({ images, name }) => {
	const { ref, overflow } = useOverflowDetector({});

	const scroll = (direction) => {
		if (direction === "right") {
			ref.current.scrollLeft += 480;
		} else {
			ref.current.scrollLeft -= 480;
		}
	};
	const [isImageLoading, setImageLoading] = React.useState(true);

	return (
		<>
			<div className="sale-header product">
				{overflow && (
					<div className="btn-container">
						<button onClick={() => scroll("left")}>
							<img
								src="/icons/arrow-right-up.svg"
								alt="arrow"
								className="arrow-left"
							/>
						</button>
						<button onClick={() => scroll("right")}>
							<img
								src="/icons/arrow-right-up.svg"
								alt="arrow"
								className="arrow-right"
							/>
						</button>
					</div>
				)}
			</div>
			<div className="product-images-container">
				<div className="inner-container" ref={ref}>
					{images.map((itemImage, index) => {
						return (
							<div className="product-images" key={index}>
								<div className="product-image">
									{/* <img src={itemImage} alt={name} /> */}
									<Image
										src={itemImage.replace("/upload/", "/upload/e_bgremoval/")}
										alt={name}
										onLoad={() => setImageLoading(false)}
										className={`${isImageLoading ? "" : "loaded"}`}
										width={0}
										height={0}
										sizes="100vw"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProductImages;
