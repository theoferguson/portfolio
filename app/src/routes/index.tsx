import { component$ } from '@builder.io/qwik';
import { body } from '~/app.css';
import { PostsContainer } from '~/components/Posts/PostsContainer';

export default component$(() => {
  return (
    <>
      <body class={body}>
        <PostsContainer />
      </body>
      <footer>
        <p>© 2023 theo ferguson</p>
      </footer>
    </>
  );
});
