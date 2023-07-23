import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PostsContainer } from "~/components/Posts/PostsContainer";

export default component$(() => {
  return (
    <>
      <PostsContainer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "my portfolio site",
    },
  ],
};
