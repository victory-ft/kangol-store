import React from "react";
import CatalogItem from "@/components/CatalogItem";
import Filters from "@/components/Filters";
import "@/styles/page.scss";
import "@/styles/mobile/catalog.scss";
import "@/styles/catalog.scss";

const getBagData = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/items`);

	if (!response.ok) {
		throw new Error("Failed to get data");
	}

	return response.json();
};

const Bags = async () => {
	const style = "Bags";

	const saleItems = await getBagData();
	const filteredItems = saleItems.filter((item) => item.category === "bag");

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

export default Bags;
