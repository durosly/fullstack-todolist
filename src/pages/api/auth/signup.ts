// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { UserBase } from "@/lib/connection";
import isEmail from "validator/lib/isEmail";
import { UserSignupResponseDataType } from "@/types/shared/user";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<UserSignupResponseDataType>
) {
	if (req.method === "POST") {
		const { email, username, password } = req.body;

		try {
			if (password.length < 4) {
				throw new Error("Password must be more than 3 characters");
			}

			if (!isEmail(email)) throw new Error("Invalid E-mail address");

			const userQuery = UserBase.select({
				filterByFormula: `OR(Email = "${email}", Username = "${username}")`,
			});

			const userResponse = await userQuery.firstPage();

			if (userResponse[0]?.get("Username") === username)
				throw new Error("Username is already taken");

			if (userResponse[0]?.get("Email") === email)
				throw new Error("Email address is already used");

			await UserBase.create({
				Email: email,
				Username: username,
				Password: password,
			});
			res.status(200).json({ message: "John Doe", status: true });
		} catch (error) {
			let errMsg = "";
			if (error instanceof Error) {
				errMsg = error.message;
			} else {
				errMsg = "Something went wrong";
			}
			res.status(400).json({ message: errMsg, status: false });
		}
	} else {
		res.status(400).json({
			status: false,
			message: "Invalid request method",
		});
	}
}
