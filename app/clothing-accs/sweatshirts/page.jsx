import React from "react";
import CatalogItem from "@/components/CatalogItem";
import Filters from "@/components/Filters";
import "@/styles/page.scss";
import "@/styles/mobile/catalog.scss";
import "@/styles/catalog.scss";

const getClothData = async () => {
	const response = await fetch(`${process.env.API_URL}/api/items`);

	if (!response.ok) {
		throw new Error("Failed to get data");
	}

	return response.json();
};

const Sweatshirts = async () => {
	const style = "Sweatshirts";

	const saleItems = await getClothData();
	const filteredItems = saleItems.filter(
		(item) => item.category === "sweatshirt",
	);

	return (
		<main className="catalog-page-container">
			<section className="catalog-page">
				<h1 className="section-title mobile-only">
					<span>/</span>
					{style || "HATS"}
				</h1>

				<div className="top-links mobile-only">
					<button>
						<h2>SORT BY</h2>
						<img src="/icons/arrow-right-up.svg" alt="arrow" />
					</button>
					<button>
						<h2>FILTERS</h2>
						<img src="/icons/arrow-right-up.svg" alt="arrow" />
					</button>
				</div>
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

export default Sweatshirts;
