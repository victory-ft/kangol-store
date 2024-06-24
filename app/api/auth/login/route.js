import connectDB from "@/backend/config/database";
import User from "@/backend/models/User";

//login with POST request to /api/auth/login
export const POST = async (req, res) => {
	const body = await req.json();
	try {
		await connectDB();
		const user = await User.findByCredentials(body.email, body.password);
		const token = await user.generateAuthToken();
		return new Response(JSON.stringify(user, token), { status: 200 });
	} catch (error) {
		if (error.type === "CredentialsSignin") {
			return new Response(JSON.stringify({ error: "Invalid credentials." }), {
				status: 400,
			});
		} else {
			return new Response(JSON.stringify({ error: "Something went wrong." }), {
				status: 500,
			});
		}
	}
};
