import React from "react";
import Link from "next/link";
import { Suspense } from "react";
import ProductImages from "@/components/ProductImages";
import SaleItems from "@/components/SaleItems";
import "@/styles/page.scss";
import "@/styles/collection.scss";
import "@/styles/product.scss";
import "@/styles/mobile/product.scss";
import "@/styles/mobile/page.scss";

const ItemPage = async ({ params: { id } }) => {
	const getItem = async () => {
		const response = await fetch(`http://localhost:3000/api/items/${id}`);

		if (!response.ok) {
			throw new Error("Failed to get data");
		}

		return response.json();
	};

	const item = await getItem();

	const getHatData = async () => {
		const response = await fetch(`${process.env.API_URL}/api/items`);

		if (!response.ok) {
			throw new Error("Failed to get data");
		}

		return response.json();
	};

	const saleItems = await getHatData();
	const filteredItems = saleItems.filter((item) => item.category === "hat");

	return (
		<main className="product-page">
			<div className="product-container">
				<div className="product-header">
					<h1 className="section-title">
						<span>/</span>
						{item.name}
					</h1>
					<h1>${(Math.round(item.price * 100) / 100).toFixed(2)}</h1>
				</div>
			</div>

			<ProductImages images={item.images} name={item.name} />

			<div className="size-brand-container">
				<div className="div">
					<div className="size">
						<h4>SIZE:</h4>
						<div className="size-buttons">
							{item.sizes.length !== 0 ? (
								item.sizes.map((size, index) => (
									<button className="size-btn" key={index}>
										{size}
									</button>
								))
							) : (
								<p className="grey-text">No sizes for this product.</p>
							)}
						</div>
					</div>
				</div>

				<div className="brand">
					<h4>BRAND:</h4>
					<p>{item.brand}</p>
				</div>
			</div>

			<div className="cart-btn-container">
				<button className="cart-btn">ADD TO CART</button>
			</div>

			<div className="product-description-container">
				<p className="product-description">{item.description}</p>
			</div>

			<div className="product-details">
				<div className="product-detail-header">
					<h4>DETAILS:</h4>
				</div>
				<div className="product-detail">
					<h4>DETAILS:</h4>
					<p>
						<span>SHAPE:</span> BUCKET
					</p>
					<p>
						<span>FABRICATION:</span> FUGORA
					</p>
					<p>
						<span>CONTAINS FUR:</span> YES
					</p>
					<p>
						<span>MATERIAL:</span> ANGORA-ACRYLIC BLEND
					</p>
					<p>
						<span>BRIM:</span> 2/14"
					</p>
					<p>
						<span>CROWN:</span> ROUND
					</p>
					<p>
						<span>SEASON:</span> AUTUMN/WINTER
					</p>
					<p>
						<span>USA MADE/IMPORTED:</span> IMPORTED
					</p>
				</div>
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				<section className="sale">
					<SaleItems filteredItems={filteredItems} name="YOU MAY ALSO LIKE" />
				</section>
			</Suspense>
		</main>
	);
};

export default ItemPage;
