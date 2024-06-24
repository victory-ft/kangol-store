import connectDB from "@/backend/config/database";
import User from "@/backend/models/User";

//sign with POST request to /api/auth/signup
export const POST = async (req, res) => {
	const body = await req.json();
	const user = new User(body);
	try {
		await connectDB();
		await user.save();
		const token = await user.generateAuthToken();
		return new Response(JSON.stringify(user, token), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 400 });
	}
};
