import { style } from "@vanilla-extract/css";

export const postsContainer = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
});

export const postContainer = style({
    display: "flex",
    flexDirection: "column",
    wordBreak: "break-word",
    width: "25rem",
    padding: "1rem",
});

export const projectName = style({
    width: "100%",
});