import { component$ } from "@builder.io/qwik";
import { css } from "../../styled-system/css";

const greenDot = css({
    height: "500px",
    width: "500px",
    borderRadius: "50%",
    backgroundColor: "#008EBB",
});

export const GreenDot = component$(() => {

    return <div class={greenDot}>
    </div>
})