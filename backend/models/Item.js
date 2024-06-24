import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: { type: String, required: true },
		sizes: [{ type: String }],
		brand: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		images: [{ type: String }],
	},
	{
		timestamps: true,
	},
);

const Item = models.Item || model("Item", ItemSchema);

export default Item;
