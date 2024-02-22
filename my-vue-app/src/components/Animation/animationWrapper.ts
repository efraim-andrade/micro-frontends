import { createApp } from "vue";

import Animation from "./index.vue";

export default (element: HTMLElement) => {
  return createApp(Animation).mount(element);
};
