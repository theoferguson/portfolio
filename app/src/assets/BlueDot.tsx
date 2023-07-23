import { component$ } from "@builder.io/qwik";
import { css } from "../../styled-system/css";

const blueDot = css({
    height: "500px",
    width: "500px",
    borderRadius: "50%",
    backgroundColor: "#C6FF7E",
});

export const BlueDot = component$(() => {

    return <div class={blueDot}>
        
    </div>
})