"use client";
import { useRouter } from "next/navigation";

const Button = ({ children, link }) => {
	const router = useRouter();

	return (
		<>
			<button onClick={() => router.push(link)}>{children}</button>
		</>
	);
};

export default Button;
