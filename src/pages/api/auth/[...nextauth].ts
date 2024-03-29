import NextAuth, { AuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmailOrUsername } from "@/lib/get-user";

export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "Credentials",

			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "jsmith",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				if (!credentials?.username || !credentials.password)
					throw new Error("Enter all fields");

				const user = await getUserByEmailOrUsername({
					username: credentials?.username || "",
				});

				if (user) {
					if (user.Auth_Type !== "Credentials") {
						throw new Error(
							`Account already exist with ${user.Auth_Type} auth`
						);
					}
					const isValidPassword = await bcrypt.compare(
						credentials.password,
						user.Password as string
					);
					if (!isValidPassword) {
						throw new Error("Invalid credentials");
					}

					// Any object returned will be saved in `user` property of the JWT
					return {
						id: user.id,
						email: user.Email as string,
						username: user.Username,
					};
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn({ account, profile }) {
			if (account && account.provider === "google") {
				if (profile) {
					// return (
					// 	profile.email_verified &&
					// 	profile?.email?.endsWith("@example.com")
					// );
					return true;
				}
			} else if (account && account.provider === "github") {
				return true;
			}
			return true; // Do different verification for other providers that don't have `email_verified`
		},
		async session({ session, token, user }) {
			return session; // The return type will match the one returned in `useSession()`
		},
	},
};

export default NextAuth(authOptions);
