import React from "react";
import "@/styles/page.scss";
import "@/styles/catalog.scss";
import CatalogItem from "@/components/CatalogItem";
import Filters from "@/components/Filters";

const getHatData = async () => {
	const response = await fetch("http://localhost:3000/api/items");

	if (!response.ok) {
		throw new Error("Failed to get data");
	}

	return response.json();
};

const Hats = async ({ searchParams }) => {
	const { style } = searchParams;

	const saleItems = await getHatData();
	const filteredItems = saleItems.filter((item) => item.category === "hat");

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

export default Hats;
