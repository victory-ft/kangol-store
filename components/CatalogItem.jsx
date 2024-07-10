"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/page.scss";
import "@/styles/catalog.scss";
import Image from "next/image";

const CatalogItem = ({ item }) => {
	const [isImageLoading, setImageLoading] = React.useState(true);

	return (
		<Link href={`/item/${item._id}`} className="catalog-item" key={item._id}>
			<div className="catalog-img-wrapper">
				<p className="product-name">
					<span className="grey-title">RATING:</span> 4.5/5.0
				</p>
				<Image
					src={item.images[0].replace(
						"/upload/",
						"/upload/e_make_transparent/",
					)}
					onLoad={() => setImageLoading(false)}
					className={`${isImageLoading ? "" : "loaded"}`}
					width={0}
					height={0}
					sizes="100vw"
					alt={item.name}
				/>
			</div>
			<p className="product-name">{item.name}</p>
			<p className="product-price">
				${(Math.round(item.price * 100) / 100).toFixed(2)}
			</p>
		</Link>
	);
};

export default CatalogItem;
