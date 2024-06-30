"use client";
import React, { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
	const [menu, showMenu] = useState(false);
	const [subMenu, showSubMenu] = useState({
		collection: false,
		hatStyle: false,
		hatFabric: false,
		clothing: false,
	});

	const menuClick = () => {
		showMenu((prev) => {
			if (prev) {
				document.body.style.overflow = "unset";
			} else {
				if (typeof window != "undefined" && window.document) {
					document.body.style.overflow = "hidden";
				}
			}
			return !prev;
		});
	};

	const showMenuFunc = () => {
		showMenu(false);
		document.body.style.overflow = "unset";
	};

	const subMenuClick = (key) => {
		showSubMenu((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<div className="mobile-nav">
			<div className="mobile-nav-header">
				<button
					className={`menu-btn ${menu ? "menu-open" : ""}`}
					onClick={menuClick}
				>
					<svg
						width="48px"
						height="48px"
						viewBox="0 0 48 48"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<line x1="0" y1="17" x2="48" y2="17" strokeWidth="3" />
							<line x1="0" y1="31" x2="48" y2="31" strokeWidth="3" />
						</g>

						<g>
							<line x1="0" y1="24" x2="48" y2="24" strokeWidth="3" />
							<line x1="0" y1="24" x2="48" y2="24" strokeWidth="3" />
						</g>
					</svg>
				</button>

				{/* <h4> */}
				<Link href="/" onClick={showMenuFunc} className="logo-image">
					{/* kangol store */}
					<img src="/logo.svg" alt="logo" />
				</Link>
				{/* </h4> */}
				<div className="store-btns">
					<button className="store-btn">
						<img src="/icons/search.svg" alt="search" />
					</button>
					<button className="store-btn">
						<img src="/icons/shopping-bag.svg" alt="cart" />
					</button>
				</div>
			</div>

			<ul className={`mobile-nav-items ${menu ? "show" : ""}`}>
				<li className="dropdown">
					<button onClick={() => subMenuClick("collection")}>
						Collections <img src="/icons/arrow-down.svg" alt="arrow" />
					</button>
					{/*  */}

					<ul className={`subitems ${subMenu.collection ? "show" : ""}`}>
						<li>
							<Link href="/collections" onClick={menuClick}>
								Icons
							</Link>
						</li>
						<li>
							<Link href="/collections" onClick={menuClick}>
								Collaborations
							</Link>
						</li>
						<li>
							<Link href="/collections" onClick={menuClick}>
								US Collections
							</Link>
						</li>
						<li>
							<Link
								href={{
									pathname: "/hats",
									query: { style: "New Arrivals" },
								}}
								onClick={menuClick}
							>
								New Arrivals
							</Link>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<button onClick={() => subMenuClick("hatStyle")}>
						Hat Style <img src="/icons/arrow-down.svg" alt="arrow" />
					</button>

					<ul className={`subitems ${subMenu.hatStyle ? "show" : ""}`}>
						<li>
							<Link href="/hats" onClick={menuClick}>
								All
							</Link>
						</li>
						<li>
							<Link href="/hats" onClick={menuClick}>
								504 Caps
							</Link>
						</li>
						<li>
							<Link href="/hats" onClick={menuClick}>
								507 Caps
							</Link>
						</li>
						<li>
							<Link href="/hats" onClick={menuClick}>
								Army Caps
							</Link>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<button onClick={() => subMenuClick("hatFabric")}>
						Hat Fabric <img src="/icons/arrow-down.svg" alt="arrow" />
					</button>

					<ul className={`subitems ${subMenu.hatFabric ? "show" : ""}`}>
						<li>
							<Link href="/hats" onClick={menuClick}>
								All
							</Link>
						</li>
						<li>
							<Link href="/hats" onClick={menuClick}>
								Cotton
							</Link>
						</li>
						<li>
							<Link href="/hats" onClick={menuClick}>
								Denim
							</Link>
						</li>
						<li>
							<Link href="/hats" onClick={menuClick}>
								Wool
							</Link>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<button onClick={() => subMenuClick("clothing")}>
						Clothing & Accessories{" "}
						<img src="/icons/arrow-down.svg" alt="arrow" />
					</button>

					<ul className={`subitems ${subMenu.clothing ? "show" : ""}`}>
						<li>
							<Link href="/clothing-accs" onClick={menuClick}>
								All
							</Link>
						</li>
						<li>
							<Link href="/clothing-accs/bags" onClick={menuClick}>
								Backpacks & Bags
							</Link>
						</li>
						<li>
							<Link href="/clothing-accs/bottoms" onClick={menuClick}>
								Bottoms
							</Link>
						</li>
						<li>
							<Link href="/clothing-accs/sweatshirts" onClick={menuClick}>
								Sweatshirts
							</Link>
						</li>
						<li>
							<Link href="/clothing-accs/wallets" onClick={menuClick}>
								Wallets
							</Link>
						</li>
					</ul>
				</li>

				<li className="about-li">
					<Link href="/about-us" className="about-btn">
						About
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MobileNav;
