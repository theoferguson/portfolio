import { component$, useContext } from '@builder.io/qwik';
import { css } from '../../styled-system/css';
import { Hamburger } from '~/assets/hamburger';
import { MenuContext } from '~/routes/MenuContext';

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
    const menuOpen = useContext(MenuContext)

    return <button class={hamburgerButton} aria-controls="primary-navigation" aria-expanded="false" onClick$={() => menuOpen.value = !menuOpen.value}>
        <Hamburger />
    </button>
});