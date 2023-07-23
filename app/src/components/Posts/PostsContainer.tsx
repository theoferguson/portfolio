import { component$, useContext, useContextProvider, useStore, useTask$ } from "@builder.io/qwik";
import { getAllPosts } from "~/routes/layout";
import { PostsContext } from "./PostsContext";
import { PostCard } from "./PostCard";
import { isServer } from "@builder.io/qwik/build";
import { css } from "../../../styled-system/css";

const postsContainer = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "2rem",
    padding: "2rem",
});

export const PostsContainer = component$(() => {
    const postsArray = useStore(getAllPosts().value.data || []);
    useContextProvider(PostsContext, postsArray)

    const posts = useContext(PostsContext, postsArray);

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