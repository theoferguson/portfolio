import { component$, useContext, useContextProvider, useStore } from "@builder.io/qwik";
import { getAllPosts } from "~/routes/layout";
import { postsContainer } from "./PostsContainer.css";
import { PostsContext } from "./PostsContext";
import { PostCard } from "./PostCard";


export const PostsContainer = component$(() => {
    const postsArray = useStore(getAllPosts().value.data);
    useContextProvider(PostsContext, postsArray)

    const posts = useContext(PostsContext, postsArray);

    return <div class={postsContainer}>
            {posts.map((post: any) => {
                return <PostCard key={post.id} post={post}/>
            })}
    </div>
});