import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { PostsContainer } from "~/components/Posts/PostsContainer";

export const serverGetAllPosts = server$(async function () {
  const API_URL = import.meta.env.DEV ? this.env.get('PUBLIC_DEV_API_URL') : this.env.get('PUBLIC_API_URL');
  const result = await fetch(`${API_URL}/api/posts?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.env.get('STRAPI_API_TOKEN')
    }
  });
  return result.json();
})

export default component$(() => {
  return (
    <>
      <PostsContainer />
    </>
  );
});
