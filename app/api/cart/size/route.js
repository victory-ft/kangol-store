import Cart from "@/backend/models/Cart";

//GET cart size at /api/cart/size
export const GET = async (req) => {
	const { user } = await req.json();
	const owner = user._id;
	try {
		await connectDB();
		const cart = await Cart.findOne({ owner });
		if (cart && cart.items.length > 0) {
			cartSize = cart.items.length;
			return new Response(JSON.stringify(cartSize), {
				status: 200,
			});
		} else {
			return new Response(null);
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
};
