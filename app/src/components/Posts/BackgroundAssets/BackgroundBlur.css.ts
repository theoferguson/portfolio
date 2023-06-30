import { recipe } from '@vanilla-extract/recipes';

export const backgroundBlur = recipe({
    base: {
        position: "absolute",
        zIndex: 0,
        filter: "blur(150px)",
    },
    variants: {
        position: {
            left: {
                top: "25%",
                left: "-50%",
            },
            right: {
                top: "-15%",
                right: "-50%",
            },
        },
    },
})