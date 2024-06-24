import React from "react";
import Link from "next/link";
import "@/styles/footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="footer-section footer-1">
				<h4>STAY CONNECTED</h4>
				<p>join our mailing list and receive 10% off your first order</p>

				<div className="footer-input">
					<input type="email" placeholder="EMAIL" />
					<button>OK</button>
				</div>
			</div>

			<div className="footer-section footer-2">
				<div className="section-link-cont">
					<ul className="section-links">
						<h4 className="section-link-title">about us</h4>
						<li>
							<Link href="#">Who We Are</Link>
						</li>
						<li>
							<Link href="#">Terms of Service</Link>
						</li>
						<li>
							<Link href="#">Security & Privacy Policy</Link>
						</li>
						<li>
							<Link href="#">Website Accessibility</Link>
						</li>
					</ul>
					<ul className="section-links">
						<h4 className="section-link-title">Customer Service</h4>
						<li>
							<Link href="#">Track Your Order</Link>
						</li>
						<li>
							<Link href="#">Start a Return</Link>
						</li>
						<li>
							<Link href="#">Ordering</Link>
						</li>
						<li>
							<Link href="#">Promotions</Link>
						</li>
						<li>
							<Link href="#">Shipping</Link>
						</li>
						<li>
							<Link href="#">Returns</Link>
						</li>
						<li>
							<Link href="#">Gift Cards</Link>
						</li>
					</ul>
					<ul className="section-links">
						<h4 className="section-link-title">Customer Service</h4>
						<li>
							<Link href="#">Size Chart</Link>
						</li>
						<li>
							<Link href="#">Lookbook</Link>
						</li>
						<li>
							<Link href="#">Blog</Link>
						</li>
						<li>
							<Link href="#">Reviews</Link>
						</li>
						<li>
							<Link href="#">Glossary</Link>
						</li>
					</ul>
				</div>
				<div className="copy-r">
					<h4>&copy;2024 KANGOL</h4>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
