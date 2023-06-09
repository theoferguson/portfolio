import { component$, useSignal } from "@builder.io/qwik";
import { header, headerLink, headerLinkSection } from "./Header.css";
import { useLocation } from "@builder.io/qwik-city";

export const Header = component$(() => {
    const loc = useLocation();
    const currentLocation = useSignal(loc.url.pathname);

    console.log(currentLocation.value)

    return (
        <div class={header}>
            <div>
                Theo Ferguson
            </div>
            <div class={headerLinkSection}>
                <a class={headerLink} href="/" style={currentLocation.value === "/" ? "text-decoration: underline; text-underline-offset: 3px" : ""}>WORK</a>
                <a class={headerLink} href="/about" style={currentLocation.value.includes('about') ? "text-decoration: underline; text-underline-offset: 3px" : ""}>ABOUT</a>
            </div>
        </div>
    );
});