import { component$, useContext } from "@builder.io/qwik"
import { cva } from "../../styled-system/css"
import { MenuContext } from "~/routes/MenuContext";

const slideout = cva({
    base: {
        position: "fixed",
        left: "0",
        width: "100vh",
        height: "100%",
        transition: "top 1s ease-in-out",
        background: "transparent",
        zIndex: 2,
    },
    variants: {
        open: {
            true: {
                top: "0",
            },
            false: {
                top: "-100vh",
            },
        },
    }
})

export const Slideout = component$(() => {
    const menuOpen = useContext(MenuContext);

    return <div class={slideout({ open: menuOpen.value })}>
        <h1>Slideout</h1>
    </div>
})