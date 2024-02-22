import { createRoot } from "react-dom/client";

import { Counter } from ".";

export default (element: HTMLElement) => {
  createRoot(element).render(<Counter />);
};
