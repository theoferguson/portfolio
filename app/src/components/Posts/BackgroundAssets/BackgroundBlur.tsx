import { Slot, component$ } from "@builder.io/qwik"
import { backgroundBlur } from "./BackgroundBlur.css"

interface BackgroundBlurProps {
    position?: "left" | "right";
}

export const BackgroundBlur = component$<BackgroundBlurProps>(({position="left"}) => {

    return <div class={`${backgroundBlur({
        position: position,
    })}`} >
        <Slot />
    </div>
})