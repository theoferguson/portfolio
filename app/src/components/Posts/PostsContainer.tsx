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

const postContainer = css({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    wordBreak: "break-word",
    width: "25rem",
    borderRadius: "2rem",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), #D9D9D9",
    boxShadow: "0px 4px 10px 6px rgba(0, 0, 0, 0.10)",
    zIndex: 1,

});

const projectName = css({
    position: "absolute",
    bottom: "1.5rem",
    left: "1.5rem",
    width: "100%",
    marginBottom: 0,
    zIndex: 2,
});

const postCardImage = css({
    height: "25rem",
    objectFit: "cover",
    borderRadius: "2rem",
    WebkitMask: "linear-gradient(#000, #0000)",
});

export const PostsContainer = component$(() => {
    const postsArray = useStore(getAllPosts().value.data);
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