/**
 * These breakpoints match Tailwind config.
 * For use in JS (e.g. with the useWindowSize hook)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const NAVOGATION_LIST_ITEMS = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];
