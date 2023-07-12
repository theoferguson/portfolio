import { component$ } from '@builder.io/qwik';
import { css } from '../../styled-system/css';
import { Hamburger } from '~/assets/hamburger';

const hamburgerButton = css  ({
    background: "transparent",
    border: "none",
    _expanded: {
    },
    "&:hover": {
        cursor: "pointer",
    }
});

export const HamburgerMenu = component$(() => {
    return <button class={hamburgerButton} aria-controls="primary-navigation" aria-expanded="false">
        <Hamburger />
    </button>
});