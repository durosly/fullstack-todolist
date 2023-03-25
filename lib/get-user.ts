import { UserBase } from "./connection";

async function getUserByEmailOrUsername({ username }: { username: string }) {
	const userQuery = UserBase.select({
		filterByFormula: `OR(Email = "${username}", Username = "${username}")`,
	});

	const userResponse = await userQuery.firstPage();
	const { fields, id } = userResponse[0];
	const { Email, Password, Username: fieldUsername, Auth_Type } = fields;

	return { id, Email, Username: fieldUsername, Password, Auth_Type };
}

export { getUserByEmailOrUsername };
