import { component$, useContextProvider } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { PostsContainer } from "~/components/Posts/PostsContainer";
import { PostsContext } from "~/components/Posts/PostsContext";


export const useGetAllPosts = routeLoader$(async (requestEvent) => {
  console.log(requestEvent.env.get('API_URL'))
  const result = await fetch(`${requestEvent.env.get('API_URL')}/api/posts?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + requestEvent.env.get('STRAPI_API_TOKEN')
    }
  });
  return result.json();
})

export default component$(() => {
  const postsArray = useGetAllPosts().value.data;
  useContextProvider(PostsContext, postsArray ? postsArray : [])
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
