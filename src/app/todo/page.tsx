import React from "react";
import { redirect } from "next/navigation";

import CreateForm from "./components/CreateForm";
import { deleteTodoById, readTodo, updateTodoById } from "./actions";
import { cn } from "@/lib/utils";
import { readUserSession } from "@/lib/actions";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const { data } = await readUserSession();
  if (!data.session) redirect("/auth");

  const { data: todos } = await readTodo();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 space-y-5">
        <CreateForm />

        {todos?.map((todo, index) => {
          const deleteTodo = deleteTodoById.bind(null, todo.id);
          const updateTodo = updateTodoById.bind(
            null,
            todo.id,
            !todo.completed,
          );

          return (
            <div
              key={index}
              className="flex justify-between items-center gap-6"
            >
              <h1
                className={cn({
                  "line-through": todo?.completed,
                })}
              >
                {todo.title}
              </h1>
              <div className="flex gap-2">
                {!todo.completed && (
                  <form action={updateTodo}>
                    <Button className="bg-green-500 hover:bg-green-700">
                      Finish
                    </Button>
                  </form>
                )}
                <form action={deleteTodo}>
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-700"
                  >
                    delete
                  </Button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
