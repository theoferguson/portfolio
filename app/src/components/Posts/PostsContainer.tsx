import { component$ } from "@builder.io/qwik";
import { getAllPosts } from "~/routes/layout";
import { postContainer, postsContainer, projectName } from "./PostsContainer.css";

export const PostsContainer = component$(() => {

    return <div class={postsContainer}>
            {getAllPosts().value.data.map((post: any) => {
                return <div class={postContainer} key={post.attributes.title}>
                    <p>{post.attributes.shortDescription}</p>
                    <p>{post.attributes.longDescription}</p>
                    <h1 class={projectName} >{post.attributes.title}</h1>
                </div>
            })}
    </div>
});