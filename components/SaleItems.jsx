"use client";
import React, { useRef } from "react";
import Link from "next/link";

const SaleItems = ({ filteredItems, name }) => {
	const ref = useRef();

	const scroll = (direction) => {
		if (direction === "right") {
			ref.current.scrollLeft += 480;
		} else {
			ref.current.scrollLeft -= 480;
		}
	};

	return (
		<>
			<div className="sale-header">
				<h1 className="section-title">
					<span>/</span>
					{name}
				</h1>

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
			</div>
			<div className="sale-items" ref={ref}>
				{filteredItems.map((item) => {
					return (
						<Link href={`/item/${item._id}`} key={item._id}>
							<div className="sale-item">
								<div className="sale-img-container">
									<img src={item.images[0]} alt={item.name} />
								</div>
								<div>
									<p className="product-name">{item.name}</p>
									<p className="product-price">
										${(Math.round(item.price * 100) / 100).toFixed(2)}
									</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default SaleItems;
