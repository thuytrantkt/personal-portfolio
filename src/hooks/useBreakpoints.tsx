import { BREAKPOINTS } from "utils/constants";
import { useWindowSize } from "@uidotdev/usehooks";

/* Use the BREAKPOINTS keys as the possible values: */
type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Convenience wrapper for the useWindowSize hook. This minimizes imports
 * in components that need to check window width.
 * @returns {boolean} true if the window is wider than the given breakpoint
 */
function useBreakpoint(bp: Breakpoint): boolean {
  const { width } = useWindowSize();
  return width !== null && width >= BREAKPOINTS[bp];
}

export default useBreakpoint;
