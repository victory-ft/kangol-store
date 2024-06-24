import connectDB from "@/backend/config/database";

export const GET = async () => {
	try {
		await connectDB();
		return new Response(JSON.stringify({ message: "hello world" }));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: "Something went wrong." }));
	}
};
