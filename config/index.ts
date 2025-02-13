import {AuthOptions} from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authOption: AuthOptions = {
	providers: [
		Facebook({
			clientId: "",
			clientSecret: "",
		}),
		Github({
			clientId: "Ov23lik9oHX1mtzbUgJL",
			clientSecret: "8684d5a435c8a542d234ae12f3ce6396ddd08a5a",
		}),
		Google({
			clientId:
				"20617657206-7rkmo2v9taotgmeio1s6n766dtui33ge.apps.googleusercontent.com",
			clientSecret: "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",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
};
