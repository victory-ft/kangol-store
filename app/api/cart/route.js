import Item from "@/backend/models/Item";
import Cart from "@/backend/models/Cart";

//GET cart items at /api/cart/
export const GET = async (req) => {
	const { user } = await req.json();
	const owner = user._id;
	try {
		await connectDB();
		const cart = await Cart.findOne({ owner });
		if (cart && cart.items.length > 0) {
			return new Response(JSON.stringify(cart), {
				status: 200,
			});
		} else {
			return new Response(null);
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
};

//add item to cart using POST request to /api/cart
export const POST = async (req) => {
	const { user, itemId, quantity, size } = await req.json();
	const owner = user._id;

	try {
		await connectDB();
		const cart = await Cart.findOne({ owner });
		const item = await Item.findOne({ _id: itemId });

		if (!item) {
			return new Response(JSON.stringify({ error: "Item not Found" }), {
				status: 404,
			});
		}

		const price = item.price;
		const name = item.name;

		//If cart already exists for user,
		if (cart) {
			const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);

			//check if product is already in cart or not
			if (itemIndex > -1) {
				let product = cart.items[itemIndex];
				product.quantity += quantity;
				cart.bill = cart.items.reduce((acc, curr) => {
					return acc + curr.quantity * curr.price;
				}, 0);
				cart.items[itemIndex] = product;
				await cart.save();
				return new Response(JSON.stringify(cart), {
					status: 200,
				});
			} else {
				cart.items.push({ itemId, name, quantity, price, size });
				cart.bill = cart.items.reduce((acc, curr) => {
					return acc + curr.quantity * curr.price;
				}, 0);
				await cart.save();
				return new Response(JSON.stringify(cart), {
					status: 200,
				});
			}
		} else {
			//no cart exists, create one
			const newCart = await Cart.create({
				owner,
				items: [{ itemId, name, quantity, price, size }],
				bill: quantity * price,
			});
			return new Response(JSON.stringify(newCart), {
				status: 200,
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
};

//DELETE an item in cart at /api/cart/
export const DELETE = async (req) => {
	const { user, itemId } = await req.json();
	const owner = user._id;
	try {
		await connectDB();
		let cart = await Cart.findOne({ owner });
		const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
		if (itemIndex > -1) {
			let item = cart.items[itemIndex];
			cart.bill -= item.quantity * item.price;
			if (cart.bill < 0) {
				cart.bill = 0;
			}
			cart.items.splice(itemIndex, 1);
			cart.bill = cart.items.reduce((acc, curr) => {
				return acc + curr.quantity * curr.price;
			}, 0);
			cart = await cart.save();
			return new Response(JSON.stringify(cart), {
				status: 200,
			});
		} else {
			return new Response(JSON.stringify({ error: "Item not Found" }), {
				status: 404,
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: error }), { status: 500 });
	}
};
