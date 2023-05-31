import { component$ } from '@builder.io/qwik';
import { Header } from '~/components/Header';
import { PostsContainer } from '~/components/PostsContainer';



export default component$(() => {
  return (
    <>
      <Header />
      <body>
        <PostsContainer />
      </body>
      <footer>
        <p>© 2023 theo ferguson</p>
      </footer>
    </>
  );
});
