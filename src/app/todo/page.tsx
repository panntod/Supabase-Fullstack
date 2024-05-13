import React from "react";
import CreateForm from "./components/CreateForm";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import SignOut from "./components/SignOut";

export default async function Page() {
	const { data } = await readUserSession()
	if(!data.session) redirect("/auth")
		

	const todos = [
		{
			title: "Subscribe",
			created_by: "091832901830",
			id: "101981908",
			completed: false,
		},
	];

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-96 space-y-5">
				<SignOut />
				<CreateForm />

				{todos?.map((todo, index) => {
					return (
						<div key={index} className="flex items-center gap-6">
							<h1
								className={cn({
									"line-through": todo.completed,
								})}
							>
								{todo.title}
							</h1>

							<Button>delete</Button>
							<Button>Update</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
