import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

const API_URL = import.meta.env.DEV ? import.meta.env.PUBLIC_DEV_API_URL : import.meta.env.PUBLIC_PROD_API_URL;

export const getAllPosts = routeLoader$(async (requestEvent) => {
    const result = await fetch(`${API_URL}/api/posts?populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + requestEvent.env.get('STRAPI_API_TOKEN')
        }
    });
    return result.json();
})

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
