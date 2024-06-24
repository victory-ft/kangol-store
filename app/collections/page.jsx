import React from "react";
import Link from "next/link";
import "@/styles/page.scss";
import "@/styles/collection.scss";

const getCollectionItems = async () => {
	const response = await fetch("http://localhost:3000/api/items");

	if (!response.ok) {
		throw new Error("Failed to get data");
	}

	return response.json();
};

const Collections = async () => {
	const items = await getCollectionItems();
	const collectionItems = items.filter(
		(item) => item.category === "collection",
	);
	// console.log(collectionItems);

	return (
		<main className="collection-page">
			<div className="header-container">
				<h1>KANGOL + H&M FEAT. MABEL</h1>
				<h1>FW20 &rarr; 21</h1>
			</div>

			<div className="top-links">
				<button>
					<h2>Fall/Winter</h2>
					<img src="/icons/arrow-right-up.svg" alt="arrow" />
				</button>
				<button>
					<h2>31-piece drop</h2>
					<img src="/icons/arrow-right-up.svg" alt="arrow" />
				</button>
			</div>

			<div className="collections-container">
				<div className="collection-grid ">
					<h3 className="col-item-1">
						A DROP INSPIRED STYLE BY MABEL'S STYLE AND PERSONALITY, FEATURING
						THE ICONIC BUCKET HAT AND NEW KANGOL PIECES.
					</h3>
					<Link href="#" className="collection-item col-item-2">
						<img
							src={collectionItems[0].images[0]}
							alt={collectionItems[0].name}
						/>
						<p className="product-name">{collectionItems[0].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[0].price * 100) / 100).toFixed(2)}
						</p>
					</Link>
					<Link href="#" className="collection-item col-item-3">
						<img
							src={collectionItems[1].images[0]}
							alt={collectionItems[1].name}
						/>
						<p className="product-name">{collectionItems[1].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[1].price * 100) / 100).toFixed(2)}
						</p>
					</Link>
					<Link href="#" className="collection-item col-item-4">
						<img
							src={collectionItems[2].images[0]}
							alt={collectionItems[2].name}
						/>
						<p className="product-name">{collectionItems[2].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[2].price * 100) / 100).toFixed(2)}
						</p>
					</Link>
					<Link href="#" className="collection-item col-item-5">
						<img
							src={collectionItems[3].images[0]}
							alt={collectionItems[3].name}
						/>
						<p className="product-name">{collectionItems[3].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[3].price * 100) / 100).toFixed(2)}
						</p>
					</Link>
					<Link href="#" className="collection-item col-item-6">
						<img
							src={collectionItems[3].images[1]}
							alt={collectionItems[3].name}
						/>
					</Link>
					<h4 className="col-item-7">
						TRUE TO KANGOL'S LEGACY AND CONNECTION TO MUSIC AND THE STREETWEAR
						COMMUNITY AS AN ARTIST AND CREATOR, R&B STAR MABEL IS A SELF-MADE
						ICON AND REPRESENTS HER SELF-MADE GENERATION.
					</h4>

					<Link href="#" className="collection-item col-item-8">
						<img
							src={collectionItems[5].images[0]}
							alt={collectionItems[5].name}
						/>
						<p className="product-name">{collectionItems[5].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[5].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<Link href="#" className="collection-item col-item-9">
						<img
							src={collectionItems[4].images[0]}
							alt={collectionItems[4].name}
						/>
					</Link>

					<Link href="#" className="collection-item col-item-10">
						<img
							src={collectionItems[4].images[1]}
							alt={collectionItems[4].name}
						/>
						<div>
							<p className="product-name">{collectionItems[4].name}</p>
							<p className="product-price">
								${(Math.round(collectionItems[4].price * 100) / 100).toFixed(2)}
							</p>
						</div>
					</Link>

					<p className="slash-description col-item-11">
						<span>/</span>
						the collection captures the perfect kangol wardrobe for the
						self-made generation like mabel: fresh, authentic, fun.
					</p>

					<h1 className="col-item-12">IT'S IMMEDIATELY IDENTIFIABLE. &copy;</h1>

					<Link href="#" className="collection-item col-item-13">
						<img
							src={collectionItems[6].images[0]}
							alt={collectionItems[6].name}
						/>
						<p className="product-name">{collectionItems[6].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[6].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<Link href="#" className="collection-item col-item-14">
						<img
							src={collectionItems[7].images[0]}
							alt={collectionItems[7].name}
						/>
						<p className="product-name">{collectionItems[7].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[7].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<Link href="#" className="collection-item col-item-15">
						<img
							src={collectionItems[8].images[0]}
							alt={collectionItems[8].name}
						/>
						<p className="product-name">{collectionItems[8].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[8].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<Link href="#" className="collection-item col-item-16">
						<img
							src={collectionItems[9].images[0]}
							alt={collectionItems[9].name}
						/>
						<p className="product-name">{collectionItems[8].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[8].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<Link href="#" className="collection-item col-item-17">
						<img
							src={collectionItems[10].images[0]}
							alt={collectionItems[10].name}
						/>
						<p className="product-name">{collectionItems[10].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[10].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<h4 className="col-item-18">
						THE COLLECTION PERFECTLY CAPTURES THE ESSENCE OF KANGOL TODAY, FULL
						OF FRESH UPDATES ON STREETWEAR STYLE
					</h4>

					<Link href="#" className="collection-item col-item-19">
						<img
							src={collectionItems[11].images[0]}
							alt={collectionItems[11].name}
						/>
						<p className="product-name">{collectionItems[11].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[11].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<Link href="#" className="collection-item col-item-20">
						<img
							src={collectionItems[11].images[2]}
							alt={collectionItems[11].name}
						/>
					</Link>

					<Link href="#" className="collection-item col-item-21">
						<img
							src={collectionItems[12].images[0]}
							alt={collectionItems[12].name}
						/>
						<p className="product-name">{collectionItems[12].name}</p>
						<p className="product-price">
							${(Math.round(collectionItems[12].price * 100) / 100).toFixed(2)}
						</p>
					</Link>

					<div className="list-links col-item-22">
						<h3>OTHER KANGOL SHAPES</h3>
						<button>
							<p>ARMY CAPS</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</button>
						<button>
							<p>PORK PIES</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</button>
						<button>
							<p>SPACECAPS</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</button>
						<button>
							<p>TRAPPERS</p>
							<img src="/icons/arrow-right-up.svg" alt="arrow" />
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Collections;
