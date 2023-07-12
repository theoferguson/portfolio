import { component$ } from "@builder.io/qwik";
import { PostType } from "./PostsContext";
import { useNavigate } from "@builder.io/qwik-city";
import { css } from "../../../styled-system/css";

interface PostCardProps {
    post: PostType;
}

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

export const PostCard = component$<PostCardProps>(({ post }) => {
    const API_URL = import.meta.env.DEV ? import.meta.env.PUBLIC_DEV_API_URL : import.meta.env.PUBLIC_PROD_API_URL;
    const nav = useNavigate();

    return <div class={postContainer} onClick$={() => nav(`${API_URL}/posts/${post.id}`)}>
        <img src={`${API_URL}${post.attributes.image.data.attributes.url}`} class={postCardImage} />
        <h2 class={projectName} >{post.attributes.title}</h2>
    </div>
});