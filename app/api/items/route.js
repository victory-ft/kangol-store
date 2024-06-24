import connectDB from "@/backend/config/database";
import Item from "@/backend/models/Item";

//create item with POST request to /api/items
export const POST = async (req, res) => {
	const body = await req.json();
	try {
		await connectDB();
		const newItem = new Item({
			...body,
		});
		await newItem.save();
		return new Response(JSON.stringify("successful ", newItem), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 400 });
	}
};

//GET all items at /api/items/
export const GET = async (req) => {
	try {
		await connectDB();
		const items = await Item.find({});
		if (!items) {
			return new Response(JSON.stringify({ error: "No Items Found" }), {
				status: 404,
			});
		}
		return new Response(JSON.stringify(items), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 400 });
	}
};
