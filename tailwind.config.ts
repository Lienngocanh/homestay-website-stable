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
        // Primary colors - Charcoal grays
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9', 
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',  // Main charcoal
          800: '#1e293b',
          900: '#0f172a',  // Darkest
        },
        
        // Accent colors - Cool blues
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Sky blue accent
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },

        // Keep genz names but use charcoal-white scheme
        genz: {
          navy: '#0f172a',      // Deep charcoal
          darkTeal: '#1e293b',  // Dark charcoal
          sage: '#475569',      // Medium charcoal  
          gold: '#0ea5e9',      // Sky blue accent
          cream: '#f8fafc'      // Almost white
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif']
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
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
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.6)' },
        }
      },
      
      backgroundImage: {
        'gradient-genz': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-warm': 'linear-gradient(135deg, #0ea5e9 0%, #f8fafc 100%)', 
        'gradient-sage': 'linear-gradient(135deg, #475569 0%, #f8fafc 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
        'gradient-charcoal': 'linear-gradient(135deg, #0f172a 0%, #334155 50%, #64748b 100%)',
        'gradient-sky': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}

export default config