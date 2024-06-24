"use client";
import { useState } from "react";
import "@/styles/page.scss";
import "@/styles/about.scss";

const AboutUs = () => {
	const [showTimeline, setShowTimeline] = useState({
		one: false,
		two: false,
		three: false,
		four: false,
		five: false,
		six: false,
		seven: false,
		eight: false,
	});

	const handleHeaderClick = (key) => {
		setShowTimeline((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	console.log(showTimeline);

	return (
		<main className="about-page">
			<section className="who-we-are">
				<h1 className="section-title">
					<span>/</span>WHO WE ARE
				</h1>

				<div className="timeline">
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("one")}
						>
							<h4>1918</h4>
							<h4>The Beginning</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div className={`timeline-body ${showTimeline.one ? "show" : ""}`}>
							<img
								src="https://www.kangol.com/media/wysiwyg/1918_2.jpg"
								alt="1918"
							/>
							<p>
								Jacques Spreiregen returns to civilian life after WWI and enters
								into the headwear business in 1918 as an importer of Basque
								berets from France.
							</p>
							<p>
								A timeless classic, an incarnation of this beret has been in the
								Kangol line ever since.
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("two")}
						>
							<h4>1938</h4>
							<h4>The Anglo Tradition</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div className={`timeline-body ${showTimeline.two ? "show" : ""}`}>
							<img
								src="https://www.kangol.com/media/wysiwyg/1938.jpg"
								alt="1938"
							/>
							<p>
								Marketing them as a must-have post-war fashion item, Jacques
								becomes increasingly involved in the production and distribution
								of berets over the next 20 years. In 1938, Jacques creates the
								name KANGOL to distinguish himself from the competition.
							</p>
							<p>
								he most widely believed theory is that the founder combined the
								K from knitting, the ANG from angora, and the OL from wool.
								Whatever the true origins the name was an inspired invention.
								Officially born in Cleator, Cumbria in the U.K., Kangol gained
								notoriety as a brand for providing berets to the British army in
								WWII, most notably for General Bernard Montgomery.
							</p>
							<p>
								The anglo tradition continued in the post war years as Kangol
								outfitted the English Olympic Team with berets for the 1948
								opening ceremonies.
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("three")}
						>
							<h4>1954</h4>
							<h4>Redesign</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div
							className={`timeline-body ${showTimeline.three ? "show" : ""}`}
						>
							<img
								src="https://www.kangol.com/media/wysiwyg/1954_2.jpg"
								alt="1954"
							/>
							<p>
								The beret was re-designed into the first of the now famous
								Kangol caps by using stiffened materials to form a peak.
							</p>
							<p>
								he Carricap was made at Carrick’s premises in Carlisle. It was
								designed by one of Carrick’s designers
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("four")}
						>
							<h4>1964</h4>
							<h4>The Swinging Sixties</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div className={`timeline-body ${showTimeline.four ? "show" : ""}`}>
							<img
								src="https://blog.urbanjunglestore.com/wp-content/uploads/2021/10/sec4_img1.jpg"
								alt="1964"
							/>
							<p>
								The business did flirt with the Swinging Sixties. The most
								influential youth icons of the 1960s were the Beatles. In 1964
								Kangol Wear obtained the sole right to make and distribute
								worldwide any headgear which featured the image, endorsement or
								name of the Beatles.
							</p>
							<p>
								The business did flirt with the Swinging Sixties. The most
								influential youth icons of the 1960s were the Beatles. In 1964
								Kangol Wear obtained the sole right to make and distribute
								worldwide any headgear which featured the image, endorsement or
								name of the Beatles.
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("five")}
						>
							<h4>1981</h4>
							<h4>Golf and Music</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div className={`timeline-body ${showTimeline.five ? "show" : ""}`}>
							<img
								src="https://www.kangol.com/media/wysiwyg/1981.jpg"
								alt="1981"
							/>
							<p>
								In 1979 hats are still being produced in the UK, however, the
								focus was on the US market, particularly golf and music. In 1981
								Kangol enlisted world famous miliner Graham Smith, who developed
								the luxurious yet affordable headwear collection called “Graham
								Smith for Kangol.”
							</p>
							<p>
								Under this label he created hats for the 1980s British Airways
								cabin crew.
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("six")}
						>
							<h4>1983</h4>
							<h4>The Kangaroo</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div className={`timeline-body ${showTimeline.six ? "show" : ""}`}>
							<img
								src="https://www.kangol.com/media/wysiwyg/1983.jpg"
								alt="1983"
							/>
							<p>
								Princess Diana appears in Vogue wearing one of Smith's pieces in
								1983.
							</p>
							<p>
								In 1983 it was recognized that Kangol needed a mark to
								distinguish the world famous product. The Cleator factory in
								Britain had been experimenting with logos and sent out a whole
								batch for his review.
							</p>
							<p>
								These ranged from crocodiles to horses and turtles. Americans
								had been going into stores asking for the “kangaroo” hats. So
								instead of trying to fight it, Kangol adopted the Kangaroo into
								the logo.
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("seven")}
						>
							<h4>2012</h4>
							<h4>Cultural Fashion Fusion</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div
							className={`timeline-body ${showTimeline.seven ? "show" : ""}`}
						>
							<img
								src="https://www.kangol.com/media/wysiwyg/2012.jpg"
								alt="2012"
							/>
							<p>
								Today Kangol produces a wide range of headwear, that crosses
								generations and cultures. It’s not just hip hop and it’s not
								just heritage. Kangol is not just a fashion brand. Kangol is a
								cultural fashion fusion, taking the very best of British
								heritage and retro hip hop and mixing it with future fashion.
								Kangol seeks to satisfy a new generation of consumers without
								discarding, abandoning or alienating the people who put it where
								it is today.
							</p>
							<p>
								This is demonstrated in the mutual respect that is exchanged
								between Kangol and the talented, influential individuals the
								brand collaborates with. In the past decade Kangol has worked
								with Antoni & Alison, ALIFE, Hiroshi Fujiwara, D*Face,
								Apishangel, Pure Evil, SSUR, Stereo Sound Agency, Commes Des
								Garçons, INSA, Evil Monito, Katherine Hamnet, Married to the MOB
								and Catherine Malandrino.
							</p>
						</div>
					</div>
					<div className="timeline-item">
						<button
							className="timeline-header"
							onClick={() => handleHeaderClick("eight")}
						>
							<h4>2013</h4>
							<h4>The 75th anniversary of kangol</h4>
							<img src="/icons/add.svg" alt="open" />
						</button>
						<div
							className={`timeline-body ${showTimeline.eight ? "show" : ""}`}
						>
							<img
								src="https://www.kangol.com/media/wysiwyg/2013_2.jpg"
								alt="2013"
							/>
							<p>
								2013 marked the 75th anniversary of Kangol. To honor this
								accomplishment, we hosted a year-long run of global activations
								taking place in New York, Hong Kong, Taipei, Sydney, Seoul and
								Tokyo.
							</p>
							<p>
								Each event featured various aspects of art, music, sport and
								fashion, encompassing all facets of the Kangol lifestyle.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutUs;
