import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
				const user = {
					id: "1",
					name: "J Smith",
					email: "jsmith@example.com",
				};

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
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
			if (account.provider === "google") {
				return (
					profile.email_verified &&
					profile.email.endsWith("@example.com")
				);
			}
			return true; // Do different verification for other providers that don't have `email_verified`
		},
	},
};

export default NextAuth(authOptions);
