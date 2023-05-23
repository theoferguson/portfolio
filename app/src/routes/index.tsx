import { component$ } from '@builder.io/qwik';
import { Header } from '~/components/Header';

export default component$(() => {
  return (
    <>
      <Header />
      <body>
        content
      </body>
      <footer>
        <p>© 2023 theo ferguson</p>
      </footer>
    </>
  );
});
