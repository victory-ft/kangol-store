import React from "react";
import "@/styles/page.scss";
import "@/styles/catalog.scss";
import CatalogItem from "@/components/CatalogItem";
import Filters from "@/components/Filters";

const getClothData = async () => {
	const response = await fetch("http://localhost:3000/api/items");

	if (!response.ok) {
		throw new Error("Failed to get data");
	}

	return response.json();
};

const Wallets = async () => {
	const style = "Wallets";

	const saleItems = await getClothData();
	const filteredItems = saleItems.filter((item) => item.category === "wallet");

	return (
		<main className="catalog-page-container">
			<section className="catalog-page">
				<div className="catalog-items">
					{filteredItems.map((item) => {
						return <CatalogItem item={item} />;
					})}
				</div>
				<Filters style={style} />
			</section>
		</main>
	);
};

export default Wallets;
