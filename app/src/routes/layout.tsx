import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { BackgroundBlur } from '~/components/Posts/BackgroundAssets/BackgroundBlur';
import { main } from './MainLayout.css';
import { BlueDot } from '~/assets/BlueDot';
import { GreenDot } from '~/assets/GreenDot';

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
      <BackgroundBlur position='left'>
        <GreenDot />
      </ BackgroundBlur>
      <BackgroundBlur position='right'>
        <BlueDot />
      </BackgroundBlur>
      <div class={main}>
        <Header />
        <main>
          <Slot />
        </main>
      </div>
    </>
  );
});
