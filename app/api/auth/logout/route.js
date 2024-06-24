import connectDB from "@/backend/config/database";
import User from "@/backend/models/User";

//logout with POST request to /api/auth/logout
export const POST = async (req, res) => {
	const body = await req.json();
	try {
		await connectDB();
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();
		return new Response("Logged out", { status: 200 });
	} catch (error) {
		res.status(500).json({ error: "Something went wrong." });
	}
};
