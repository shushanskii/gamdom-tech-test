import { css } from 'styled-components'

export enum FontWeight {
  thin = 100,
  extralight = 200,
  light = 300,
  normal = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
  extrabold = 800,
  black = 900,
}

export enum FontSize {
  xs = '12px',
  sm = '14px',
  base = '16px',
  lg = '18px',
  xl = '20px',
  '2xl' = '24px',
  '3xl' = '30px',
  '4xl' = '36px',
  '5xl' = '48px',
  '6xl' = '60px',
  '7xl' = '72px',
  '8xl' = '96px',
  '9xl' = '128px',
}

export enum LineHeight {
  leadingNone = '100%',
  leadingTight = '125%',
  leadingNormal = '150%',
  leadingLoose = '200%',
}

export const font = (
  fontSize: FontSize,
  fontWeight: FontWeight,
  lineHeight: LineHeight,
) => css`
  font-family: Arial, sans-serif;
  font-size: ${`${fontSize}`};
  font-style: normal;
  font-weight: ${`${fontWeight}`};
  line-height: ${`${lineHeight}`};
`
