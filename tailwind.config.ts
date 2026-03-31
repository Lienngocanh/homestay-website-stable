import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm stone neutrals
        primary: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0C0A09',
        },

        // Warm amber accent
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },

        // genz aliases → warm values
        genz: {
          navy: '#1C1917',
          darkTeal: '#292524',
          sage: '#57534E',
          gold: '#D97706',
          cream: '#FAFAF9',
        },
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(217, 119, 6, 0.6)' },
        },
      },

      backgroundImage: {
        'gradient-genz': 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
        'gradient-warm': 'linear-gradient(135deg, #D97706 0%, #FAFAF9 100%)',
        'gradient-sage': 'linear-gradient(135deg, #57534E 0%, #FAFAF9 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #292524 0%, #57534E 100%)',
        'gradient-charcoal': 'linear-gradient(135deg, #1C1917 0%, #44403C 50%, #78716C 100%)',
        'gradient-sky': 'linear-gradient(135deg, #D97706 0%, #FBBF24 100%)',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}

export default config
