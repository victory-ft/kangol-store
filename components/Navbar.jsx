import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import "@/styles/navbar.scss";
import "@/styles/mobile/navbar.scss";

const Navbar = () => {
	return (
		<>
			<nav className="main-nav">
				<div className="header">
					<Link href="/">
						<img src="/logo.svg" alt="kangol" />
					</Link>
					<h4>kangol store</h4>
					<h4>t: 1-866-8-6465</h4>
					<h4>usa</h4>
					<h4>account</h4>
				</div>
				<ul className="wide-nav">
					<li className="dropdown">
						<Link href="/collections">Collections</Link>
						<img src="/icons/arrow-down.svg" alt="arrow" />

						<ul className="subitems">
							<li>
								<Link href="/collections">Icons</Link>
							</li>
							<li>
								<Link href="/collections">Collaborations</Link>
							</li>
							<li>
								<Link href="/collections">US Collections</Link>
							</li>
							<li>
								<Link
									href={{
										pathname: "/hats",
										query: { style: "New Arrivals" },
									}}
								>
									New Arrivals
								</Link>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<Link href="/hats">Hat Style</Link>
						<img src="/icons/arrow-down.svg" alt="arrow" />
						<ul className="subitems">
							<li>
								<Link href="/hats">504 Caps</Link>
							</li>
							<li>
								<Link href="/hats">507 Caps</Link>
							</li>
							<li>
								<Link href="/hats">Army Caps</Link>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<Link href="/hats">Hat Fabric</Link>
						<img src="/icons/arrow-down.svg" alt="arrow" />

						<ul className="subitems">
							<li>
								<Link href="/hats">Cotton</Link>
							</li>
							<li>
								<Link href="/hats">Denim</Link>
							</li>
							<li>
								<Link href="/hats">Wool</Link>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<Link href="/clothing-accs">Clothing & Accessories</Link>
						<img src="/icons/arrow-down.svg" alt="arrow" />

						<ul className="subitems">
							<li>
								<Link href="/clothing-accs/bags">Backpacks & Bags</Link>
							</li>
							<li>
								<Link href="/clothing-accs/bottoms">Bottoms</Link>
							</li>
							<li>
								<Link href="/clothing-accs/sweatshirts">Sweatshirts</Link>
							</li>
							<li>
								<Link href="/clothing-accs/wallets">Wallets</Link>
							</li>
						</ul>
					</li>
					<li className="dropdown">
						<Link href="/">Sale</Link>
						<img src="/icons/arrow-down.svg" alt="arrow" />
					</li>
					<li>
						<Link href="/">Lookbook</Link>
					</li>
					<li>
						<Link href="/about-us">About</Link>
					</li>
					<li className="special">
						<div className="search-container">
							<input type="text" name="" id="" />
							<button>
								<img src="/icons/search.svg" alt="search" />
							</button>
						</div>
						<button>CART: 01</button>
					</li>
				</ul>
			</nav>

			<MobileNav />
		</>
	);
};

export default Navbar;
