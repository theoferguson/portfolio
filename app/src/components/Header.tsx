import { component$ } from "@builder.io/qwik";
import { container } from "./Header.css";

export const Header = component$(() => {

    return (
        <div class={container}>
            <div>
                Theo's Portfolio Site
            </div>
            <div>
                <a href="/">Home</a>
                <a href="/posts">Posts</a>
                <a href="/about">About</a>
                <a href="/admin">Contact</a>
            </div>
        </div>
    );
});