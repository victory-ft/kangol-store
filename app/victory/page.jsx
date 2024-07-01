import Link from "next/link";
import "@/styles/page.scss";
const Victory = () => {
	return (
		<div className="made-by">
			<div className="made-info">
				<h1>Made By Victory using NextJS + MongoDB</h1>
				<h3>
					View my website{" "}
					<Link href="https://victory-fatoyinbo.vercel.app/" target="_blank">
						here
					</Link>
					.
				</h3>
			</div>
		</div>
	);
};

export default Victory;
