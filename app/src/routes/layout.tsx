import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { BackgroundBlur } from '~/components/Posts/BackgroundAssets/BackgroundBlur';
import { BlueDot } from '~/assets/BlueDot';
import { GreenDot } from '~/assets/GreenDot';
import { Header } from '~/components/Header/Header';
import { css } from '../../styled-system/css';

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
