import { createStore } from "@stencil/store";

export const { state, onChange } = createStore({
    posts: [],
    colors: [],
    fonts: {}
});
