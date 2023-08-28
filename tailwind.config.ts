function toRgba(cssVariable : string){
  const color = `var(${cssVariable})`;
  return ({ opacityValue }: {opacityValue: string})  => `rgba(${color}, ${opacityValue})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mulish: 'Mulish, sans-serif',
    },
    screens: {
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-tablet)',
      desktop: 'var(--screen-desktop)',
      tv: 'var(--screen-tv)',
    },
    spacing: {
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },
    fontSize: {
      xs: 'var(--font-xs)',
      sm: 'var(--font-sm)',
      md: 'var(--font-md)',
      lg: 'var(--font-lg)',
      xl: 'var(--font-xl)',
    },
    extend: {
      colors: {
        primary: toRgba('--primary'),
        secondary: toRgba('--secondary'),
        tertiary: toRgba('--tertiary'),
        quaternary: toRgba('--quaternary'),
        hover: toRgba('--hover'),
        click: toRgba('--click'),
        icon: toRgba('--icon'),
        outline: toRgba('--outline'),
        divider: toRgba('--divider'),
      },
      backgroundColor: {
        light: 'rgba(var(--bg-light), <alpha-value>)',
        dark: 'rgba(var(--bg-dark), <alpha-value>)',
        disabled: 'rgba(var(--bg-disabled), <alpha-value>)',
      },
      textColor: {
        gray: {
          primary: 'rgba(var(--text-primary), <alpha-value>)',
          secondary: 'rgba(var(--text-secondary), <alpha-value>)',
          tertiary: 'rgba(var(--text-tertiary), <alpha-value>)',
        },
        disabled: 'rgba(var(--text-disabled), <alpha-value>)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
    },
  },
  plugins: [],
}
