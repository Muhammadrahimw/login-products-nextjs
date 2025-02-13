"use client";

import {signIn} from "next-auth/react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";

export const LoginComponent = () => {
	const signInGitHub = () => {
		signIn("github", {
			redirect: true,
			callbackUrl: "/products",
		});
	};
	const signInGoogle = () => {
		signIn("google", {
			redirect: true,
			callbackUrl: "/products",
		});
	};
	return (
		<section className="w-full h-screen flex items-center justify-center">
			<div className="w-[25em] flex flex-col gap-4">
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<Button variant={"outline"}>Log In</Button>
				<div className="flex items-center justify-between gap-4">
					<Button onClick={signInGoogle} variant={"outline"} className="w-full">
						Login with Google
					</Button>
					<Button onClick={signInGitHub} variant={"outline"} className="w-full">
						Login with GitHub
					</Button>
				</div>
			</div>
		</section>
	);
};
