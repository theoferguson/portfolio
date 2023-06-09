import { style } from "@vanilla-extract/css";

export const header = style({
    display: "flex",
    justifyContent: "space-between",
    fontSize: 25,
});

export const headerLinkSection = style({
    display: "flex",
    alignItems: "center",
});

export const headerLink = style({
    textDecoration: "none",
    paddingLeft: 25,
    fontSize: 12.5,
    color: "inherit",
});