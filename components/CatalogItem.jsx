import React from "react";
import Link from "next/link";
import "@/styles/page.scss";
import "@/styles/catalog.scss";

const CatalogItem = ({ item }) => {
	return (
		<Link href={`/item/${item._id}`} className="catalog-item" key={item._id}>
			<div className="catalog-img-wrapper">
				<p className="product-name">
					<span className="grey-title">RATING:</span> 4.5/5.0
				</p>
				<img
					src={item.images[0].replace(
						"/upload/",
						"/upload/e_make_transparent/",
					)}
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
