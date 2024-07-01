import { Suspense } from "react";
import Link from "next/link";
import SaleItems from "@/components/SaleItems";
import Button from "@/components/Button";
import { Syncopate } from "next/font/google";
import "@/styles/page.scss";
import "@/styles/mobile/page.scss";

const getHatData = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/items`);
	if (!response.ok) {
		throw new Error("Failed to get data");
	}

	return response.json();
};

const syncopate = Syncopate({ weight: "400", subsets: ["latin"] });

export default async function Home() {
	const saleItems = await getHatData();
	const filteredItems = saleItems.filter((item) => item.category === "hat");
	const bags = saleItems.filter((item) => item.category === "bag");

	return (
		<main className="home-page">
			<div className="header-container">
				<h1>KANGOL STORE</h1>
				<h1>&reg; 1938</h1>
			</div>

			<div className="top-links">
				<Button link={"/hats?style=New+Arrivals"}>
					<h2>New Arrivals</h2>
					<img src="/icons/arrow-right-up.svg" alt="arrow" />
				</Button>
				<Button link={"/collections"}>
					<h2>Collections</h2>
					<img src="/icons/arrow-right-up.svg" alt="arrow" />
				</Button>
			</div>

			<h1 className="section-title pop">
				<span>/</span>POPULAR PRODUCTS
			</h1>

			<section className="popular-products">
				<div className="product-grid">
					<div className="product-1">
						<Link href="/item/6672fa2895be51fb4a1681c5">
							<img
								src="https://res.cloudinary.com/victory-dev/image/upload/v1718815109/kangol/9720bc-kangol-cotton-twill-army-cap-starry-blue-7_3_j4iqdv.jpg"
								alt="product"
							/>
							<p className="product-name">COTTON TWILL ARMY CAP</p>
							<p className="product-price">$30.00</p>
						</Link>
					</div>
					<div className="product-2">
						<Link href="/item/668046c1d4e2da23654a639e">
							<img
								src="https://www.kangol.com/media/wysiwyg/2Col-D-sustainable-styles.jpg"
								alt="product"
							/>
						</Link>
						<p className="product-name">GEO BOARD BIN</p>
						<p className="product-price">$48.00</p>
					</div>
					<div className="product-3">
						<Link href="/item/667304a395be51fb4a1681e9">
							<img
								src="https://res.cloudinary.com/victory-dev/image/upload/v1718813825/kangol/k96153-kangol-gothic-popover-sweatshirt-black-4_5_l0bcpi.jpg"
								alt="product"
							/>
							<p className="product-name">GOTHIC POPOVER</p>
							<p className="product-price">$70.00</p>
						</Link>
					</div>
					<div className="product-4 list-links">
						<h3>MORE PRODUCTS</h3>
						{filteredItems.slice(0, 4).map((item, index) => {
							return (
								<Link href={`/item/${item._id}`} key={index}>
									<p className="uppercase">{item.name}</p>
									<img src="/icons/arrow-right-up.svg" alt="arrow" />
								</Link>
							);
						})}
						<Link href="/hats" className="special">
							<p>CHECK ALL THE STUFF</p>
						</Link>
					</div>
				</div>
			</section>

			<section className="iconic-shapes">
				<h1 className="section-title">
					<span>/</span>ICONIC SHAPES
				</h1>

				<div className="shapes-items">
					<h3 className="uppercase">
						from the british military, to the beatles, to hip-hop, kangol
						embraces a punk spirit & youth culture since 1938 with it's iconic
						shapes
					</h3>

					<Link href="/hats" className="shapes-wrapper shapes-1">
						<div className="shapes-img-cont">
							<img
								src="https://www.hats.com/media/wysiwyg/man-gray-flat-cap-types-of-winter-hats.jpeg"
								alt="504"
							/>
							<h1 className="uppercase font-bold">504's</h1>
						</div>

						<p>
							<span>/</span>
							named for the block number on which it is formed, a stiffened peak
							was added to the original beret to create this classic style.
						</p>
					</Link>

					<Link href="/hats" className="shapes-wrapper shapes-2">
						<div className="shapes-img-cont">
							<img
								src="https://eu.kangol.com/media/catalog/product/k/a/kangol-anglobasque-beret-camel-av7.jpg?optimize=medium&fit=bounds&height=340&width=340&canvas=340:340"
								alt="casuals"
							/>
							<h1 className="uppercase font-bold">casuals</h1>
						</div>
						<p>
							<span>/</span>
							iconic bucket shape first originated in the 1970s where it was
							quickly adopted by the burgeoning hip-hop culture of 1980s New
							York.
						</p>
					</Link>
				</div>

				<div className="more-shapes">
					<div className="list-links">
						<h3>OTHER KANGOL SHAPES</h3>
						<Link href="/hats">
							<p>ARMY CAPS</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</Link>
						<Link href="/hats">
							<p>PORK PIES</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</Link>
						<Link href="/hats">
							<p>SPACECAPS</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</Link>
						<Link href="/hats">
							<p>TRAPPERS</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</Link>
					</div>

					<Link href="/hats" className="shapes-img-cont more-1">
						<img
							src="https://www.bballtown.sk/cdn/shop/products/48287.jpg?v=1610198062&width=360"
							alt="504"
						/>
						<h1 className="uppercase font-bold">Berets</h1>
					</Link>

					<Link href="/hats" className="shapes-img-cont more-2">
						<img
							src="https://m.media-amazon.com/images/I/61y5KRe3U0L._AC_SX679_.jpg"
							alt="504"
						/>
						<h1 className={` uppercase font-bold`}>507's</h1>
					</Link>
				</div>
			</section>

			<Suspense fallback={<div>Loading...</div>}>
				<section className="sale">
					<SaleItems filteredItems={filteredItems} name="SALE" />
				</section>
			</Suspense>

			<section className="clothing">
				<h1 className="section-title">
					<span>/</span>CLOTHING & ACCESSORIES
				</h1>

				<div className="clothing-grid">
					<Link href="/clothing-accs" className="cloth-img-wrapper cloth-1">
						<img
							src="https://www.b2-brands.com/cdn/shop/products/kangol-prism_wallet-silver-av7_1_1024x1024@2x.jpg?v=1613907618"
							alt="wallet"
						/>
						<p className="product-name">prism wallet</p>
						<p className="product-price">$35.00</p>
					</Link>
					<Link href="/clothing-accs" className="cloth-img-wrapper cloth-2">
						<img
							src="https://cotwohk.com/cdn/shop/files/download_79120992-b168-4e55-a032-230159d98eb8_600x.jpg?v=1698384978"
							alt="wallet"
						/>
						<p className="product-name">icon hoodie</p>
						<p className="product-price">$180.00</p>
					</Link>
					<Link href="/clothing-accs" className="cloth-img-wrapper cloth-3">
						<img
							src="https://www.kangol.com/media/catalog/product/e/b/eb0037-kangol-eco-friendly-bag-plus-tote-ivory-1_1.jpg?optimize=medium&fit=bounds&height=340&width=340&canvas=340:340"
							alt="wallet"
						/>
						<p className="product-name">casual shopper</p>
						<p className="product-price">$72.00</p>
					</Link>
					<Link href="/clothing-accs" className="cloth-img-wrapper cloth-4">
						<img
							src="https://www.kangol.com/media/catalog/product/k/3/k3504-kangol-face-mask-red_av7_1.jpg?optimize=medium&fit=bounds&height=340&width=340&canvas=340:340"
							alt="wallet"
						/>
						<p className="product-name">kangol face mask</p>
						<p className="product-price">$20.00</p>
					</Link>
				</div>

				<div className="more-shapes">
					<div className="list-links">
						<h3>MORE ACCESSORIES</h3>
						{bags.slice(0, 4).map((item, index) => {
							return (
								<Link href={`/item/${item._id}`} key={index}>
									<p className="uppercase">{item.name}</p>
									<img src="/icons/arrow-right-up.svg" alt="arrow" />
								</Link>
							);
						})}
						<Link href="/clothing-accs" className="special">
							<p>SEE MORE STUFF</p>
						</Link>
					</div>

					<Link href="/clothing-accs" className="shapes-img-cont more-1">
						<img
							src="https://m.media-amazon.com/images/I/61Am5UjrSWL._AC_SX569_.jpg"
							alt="504"
						/>
						<p className="product-name">Bermuda stripe headband</p>
						<p className="product-price">$35.00</p>
					</Link>

					<Link href="/clothing-accs" className="shapes-img-cont more-2">
						<img
							src="https://s.alicdn.com/@sc04/kf/H92caad8c845b4d398cd97bbca93aac3bD.png"
							alt="504"
						/>
						<p className="product-name">perfect jogger</p>
						<p className="product-price">$150.00</p>
					</Link>
				</div>
			</section>
		</main>
	);
}
