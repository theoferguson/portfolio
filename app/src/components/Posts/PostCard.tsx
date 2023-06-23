import { component$ } from "@builder.io/qwik";
import { postContainer, projectName } from "./PostsContainer.css";
import { PostType } from "./PostsContext";
import { useNavigate } from "@builder.io/qwik-city";

interface PostCardProps {
    post: PostType;
}

export const PostCard = component$<PostCardProps>(({ post }) => {
    const API_URL = import.meta.env.DEV ? import.meta.env.PUBLIC_DEV_API_URL : import.meta.env.PUBLIC_PROD_API_URL;
    const nav = useNavigate();

    return <div class={postContainer} onClick$={() => nav(`${API_URL}/posts/${post.id}`)}>
        <img src={`${API_URL}${post.attributes.image.data.attributes.formats.medium.url}`} />
        <h1 class={projectName} >{post.attributes.title}</h1>
    </div>
});