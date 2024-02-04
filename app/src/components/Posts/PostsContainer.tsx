import { Resource, component$, useContext, useResource$ } from "@builder.io/qwik";
import { PostCard } from "./PostCard";
import { css, cx } from "../../../styled-system/css";
import { MenuContext } from "~/routes/MenuContext";
import { serverGetAllPosts } from "~/routes";

const postsContainer = css({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "2rem",
    transition: "top 0.5s ease-in-out",
});

export const PostsContainer = component$(() => {
    const menuOpen = useContext(MenuContext);

    const postsArray = useResource$(async ({ cleanup }) => {
        const controller = new AbortController();
        cleanup(() => controller.abort());

        const res = serverGetAllPosts();

        return res;
    });

    return <Resource
        value={postsArray}
        onPending={() => <div>Loading...</div>}
        onResolved={(posts) => {
            return <div class={cx(postsContainer, css({ top: menuOpen ? "100vh" : 0 }))}>
                {posts.data ? posts.data.map((post: any) => {
                    return <PostCard key={post.id} post={post} />
                }) : <div>no posts</div>}
            </div>
        }}
    />
});