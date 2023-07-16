export const defaultTheme = {
  colors: {
    'bg-white': '#ffffff',
    'bg-lightWhite': '#f4f6fa',
    'bg-blue': '#007be9',
    'bg-lightBlue': '#cae9ff',
    'bg-lightBlack': '#2d3d50',
    'border-blue': '#007be9',
    'border-white': '#ffffff',
    'ft-lightGray': '#a7afb6',
    'ft-black': '#1e2025',
    'ft-white': '#ffffff',
  },
} as const;

export type DefaultThemeColors = (typeof defaultTheme)[keyof typeof defaultTheme];
