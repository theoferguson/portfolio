import { component$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HamburgerMenu } from "../HamburgerMenu";
import { css } from "../../../styled-system/css";

const header = css({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 25,
    alignItems: "center",
    zIndex: 3,
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
        </div>
    );
});