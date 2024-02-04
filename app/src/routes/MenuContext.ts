import { type Signal, createContextId } from "@builder.io/qwik";

export const MenuContext = createContextId<Signal<boolean>>('docs.menu-context');