import { css } from '@emotion/core'

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
]

const toEm = (size: number) => size / 16 + 'em'
/*
const mediaQueries = breakpoints.reduce(
  (acc, [label, size], i) => ({
    ...acc,
    // max-width media query e.g. mediaqueries.desktop
    [label]: (...args) => css`
      @media (max-width: ${toEm(size)}) {
        ${css(...args)};
      }
    `,
    // min-width media query e.g. mediaqueries.desktop_up
    // This is the breakpoint prior's size +1
    [`${label}_up`]: (...args) => css`
      @media (min-width: ${toEm(breakpoints[i - 1][1] + 1)}) {
        ${css(...args)};
      }
    `,
  }),
  {}
)

export default mediaQueries
*/
