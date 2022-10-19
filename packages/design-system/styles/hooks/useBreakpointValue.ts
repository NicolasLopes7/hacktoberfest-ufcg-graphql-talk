import { useEffect, useState } from 'react';
import { config } from '../stitches.config';

type Breakpoints = Partial<Record<keyof typeof media, string>>;
type Breakpoint = keyof Breakpoints;
type UseBreakpointValue = (
  breakpoints: Partial<Record<keyof Breakpoints, any>> & { base: any }
) => any;

const { media } = config;

const getMatchingBreakpoints = (breakpoints: Breakpoints) => {
  return Object.entries(breakpoints)
    .map(([key, val]) => {
      if (window.matchMedia(val).matches) {
        return key;
      }
    })
    .reverse() as Breakpoint[];
};

export const useBreakpointValue: UseBreakpointValue = (breakpoints) => {
  const [currBreakpoint, setCurrBreakpoint] = useState<Breakpoint | 'base'>(
    'base'
  );

  function handleChange() {
    const matchingBreakpoints = getMatchingBreakpoints(media);
    const breakpoint = matchingBreakpoints.find((bp) =>
      Object.keys(breakpoints).includes(bp)
    );
    setCurrBreakpoint(breakpoint ?? 'base');
  }

  useEffect(() => {
    handleChange();
    window.addEventListener('resize', handleChange);

    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  return breakpoints[currBreakpoint];
};
