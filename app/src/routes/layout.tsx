import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { BackgroundBlur } from '~/components/Posts/BackgroundAssets/BackgroundBlur';
import { BlueDot } from '~/assets/BlueDot';
import { GreenDot } from '~/assets/GreenDot';
import { Header } from '~/components/Header/Header';
import { css } from '../../styled-system/css';

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

const background = css({
  position: "relative",
})

const main = css({
  position: "relative",
  zIndex: 1,
});

export default component$(() => {

  return (
    <div class={background} >
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
    </div>
  );
});
