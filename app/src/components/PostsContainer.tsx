import { component$ } from "@builder.io/qwik";
import { getAllPosts } from "~/routes/layout";

export const PostsContainer = component$(() => {

    return <div>
            {getAllPosts().value.data.map((post: any) => {
                return <div key={post.attributes.title}>
                    <h1>{post.attributes.title}</h1>
                    <p>{post.attributes.shortDescription}</p>
                    <p>{post.attributes.longDescription}</p>
                </div>
            })}
    </div>
});