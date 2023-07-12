import { component$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HamburgerMenu } from "../HamburgerMenu";
import { css } from "../../../styled-system/css";

const header = css({
    display: "flex",
    justifyContent: "space-between",
    fontSize: 25,
    alignItems: "center",
});

const headerLinkSection = css({
    display: "flex",
    alignItems: "center",
});

const headerLink = css({
    textDecoration: "none",
    paddingLeft: 25,
    fontSize: 12.5,
    color: "inherit",
});

export const Header = component$(() => {
    const loc = useLocation();
    const currentLocation = useSignal(loc.url.pathname);

    console.log(currentLocation.value)

    return (
        <div class={header}>
            <div>
                <strong>
                    Theo Ferguson
                </strong>
            </div>
            <HamburgerMenu />
            <div class={headerLinkSection}>
                <a class={headerLink} href="/" style={currentLocation.value === "/" ? "text-decoration: underline; text-underline-offset: 3px" : ""}>WORK</a>
                <a class={headerLink} href="/about" style={currentLocation.value.includes('about') ? "text-decoration: underline; text-underline-offset: 3px" : ""}>ABOUT</a>
            </div>
        </div>
    );
});