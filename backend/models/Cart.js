import { Schema, model, models } from "mongoose";
const ObjectID = Schema.Types.ObjectId;

const cartSchema = new Schema(
	{
		owner: {
			type: ObjectID,
			required: true,
			ref: "User",
		},
		items: [
			{
				itemId: {
					type: ObjectID,
					ref: "Item",
					required: true,
				},
				name: String,
				quantity: {
					type: Number,
					required: true,
					min: 1,
					default: 1,
				},
				sizes: String,
				price: Number,
			},
		],
		bill: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
