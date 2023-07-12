import { Slot, component$ } from "@builder.io/qwik"
import { cva } from "../../../../styled-system/css";

interface BackgroundBlurProps {
    position?: "left" | "right";
}

const backgroundBlur = cva({
    base: {
        position: "fixed",
        zIndex: 0,
        filter: "blur(150px)",
    },
    variants: {
        position: {
            left: {
                top: "0",
                left: "0",
                transform: "translate(-25%, -15%)",
            },
            right: {
                top: "0",
                right: "0",
                transform: "translate(25%, 75%)",
            },
        },
    },
})

export const BackgroundBlur = component$<BackgroundBlurProps>(({position="left"}) => {

    return <div class={`${backgroundBlur({
        position: position,
    })}`} >
        <Slot />
    </div>
})