import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { PostCard } from "./PostCard";
import { isServer } from "@builder.io/qwik/build";
import { css } from "../../../styled-system/css";
import { PostsContext } from "./PostsContext";

const postsContainer = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "2rem",
});

export const PostsContainer = component$(() => {
    const posts = useContext(PostsContext);

    useTask$(() => {
        if (isServer) {
            return;
        }
        console.log(window)
    })

    return <div class={postsContainer}>
            {posts.map((post: any) => {
                return <PostCard key={post.id} post={post}/>
            })}
    </div>
});