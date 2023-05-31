import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { env } from "process";

export const PostsContainer = component$(() => {
    const postsResource = useResource$<any[]>(async ({ track, cleanup }) => {
        const result = await fetch('http://localhost:1337/api/posts?populate=*', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + env.STRAPI_API_TOKEN
            }
        });
        return result.json();
    });

    return <div>
        <Resource
            value={postsResource}
            onPending={() => <>Loading...</>}
            onRejected={(error) => <>Error: {error}</>}
            onResolved={(posts) => (
                <div>
                    {posts.data.map((post) => (
                        <div key={post.title}>
                            <h1>{post.title}</h1>
                            <p>{post.shortDescription}</p>
                            <p>{post.longDescription}</p>
                        </div>
                    ))}
                </div>
            )}
        />
    </div>
});