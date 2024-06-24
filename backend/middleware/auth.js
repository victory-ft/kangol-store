import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../models/User";

const auth = async (req, res) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findOne({
			_id: decoded._id,
			"tokens.token": token,
		});
		if (!user) {
			throw new Error();
		}
		req.token = token;
		req.user = user;
		NextResponse.next();
	} catch (error) {
		res.status(401).send({ error: "Authentication required" });
	}
};

export default auth;
