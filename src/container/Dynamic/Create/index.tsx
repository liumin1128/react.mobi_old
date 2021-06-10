import { useRef } from "react";
import Button from "@material-ui/core/Button";
import { CreateDynamic, DynamicResult } from "@/graphql/dynamic";
import { useMutation } from "@apollo/client";

export default function DynamicListContainer() {
  const input = useRef<HTMLInputElement | null>(null);

  const [createDynamic, { data, loading, error }] =
    useMutation<DynamicResult>(CreateDynamic);

  console.log("data, loading, error");
  console.log(data, loading, error);

  if (loading) return "loading";
  if (error) return "error";

  function handleClick() {
    createDynamic({
      variables: { content: input.current?.value },

      update(cache, { data }) {
        cache.modify({
          fields: {
            todos(existingItems = []) {
              console.log("existingItems");
              console.log(existingItems);
              console.log("existingItems");
              console.log(existingItems);
              //   const newTodoRef = cache.writeFragment({
              //     data: addTodo,
              //     fragment: gql`
              //       fragment NewTodo on Todo {
              //         id
              //         type
              //       }
              //     `,
              //   });
              //   return [...existingTodos, newTodoRef];
            },
          },
        });
      },
    });
  }

  return (
    <div>
      <input ref={input} />
      <Button onClick={handleClick}>createDynamic</Button>
    </div>
  );
}
