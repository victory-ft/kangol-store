import connectDB from "@/backend/config/database";
import Item from "@/backend/models/Item";

//GET single item at /api/items/:id
export const GET = async (req, { params }) => {
	try {
		await connectDB();
		const item = await Item.findOne({ _id: params.id });
		if (!item) {
			return new Response(JSON.stringify({ error: "Item not found" }), {
				status: 404,
			});
		}
		return new Response(JSON.stringify(item), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 400 });
	}
};

//DELETE single item at /api/items/:id
export const DELETE = async (req, { params }) => {
	try {
		await connectDB();
		const deletedItem = await Item.findOneAndDelete({ _id: req.params.id });
		if (!deletedItem) {
			return new Response(JSON.stringify({ error: "Item not found" }), {
				status: 404,
			});
		}
		return new Response(JSON.stringify(deletedItem), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 400 });
	}
};
