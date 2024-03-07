import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sm: { max: '800px' },
			md: { min: '801px', max: '1200px' },
			lg: { min: '1201px' }
		},
		boxShadow: {
			menu: '0px 0px 5px 0px rgba(0,0,0,0.03)',
			md: '0 6px 6px 0px rgba(0, 0, 0, 0.1)',
			inner: 'inset 0px 3px 4px 0px rgba(0, 0, 0, 0.06)'
		},
		fontFamily: {
			display: ['Gugi regular'],
			body: ['Open Sans']
		},
		fontSize: {
			xxs: '.5rem',
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem'
		},
		colors: {
			themeColorMain: '#5A75CE',
			themeColorSecondary: '#CEB35A',
			textColor: '#EBE0BC',
			compBgDark: '#2b3143',
			appBgDark: '#1c2234',
			auth: '#D9DADD',
			textColorSecondary: '#000000',
			appBg: '#121212',
			compBg: '#181818',
			navbarBg: '#000000',
			welcomeCard: '#EC5640'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	keyframes: {
		'fade-in-down': {
			'0%, 100%': {
				opacity: '0S',
				transform: 'translateX(6px)'
			},
			'50%': {
				opacity: '1',
				transform: 'translateX(0px)'
			}
		},
		'animate-spin': {
			'0, 360': {
				transform: 'rotate(0deg)'
			},
			360: {
				transform: 'rotate(360deg)'
			}
		},
		'animate-ping': {
			'75%, 100%': {
				transform: 'translateX(1)',
				opacity: '0'
			}
		},
		'animate-pulse': {
			'0%, 100%': {
				opacity: '1S'
			},
			'50%': {
				opacity: '0.5'
			}
		},
		'animate-bounce': {
			'0%, 100%': {
				transform: 'translateY(-25%)',
				animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
			},
			'50%': {
				transform: 'translateY(0)',
				animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
			}
		},
		animation: {
			'fade-in-down': 'fade-in-down 2s ease-out infinite',
			'fade-in-down-l': 'fade-in-down 2s ease-out infinite',
			'animate-spin': 'spin 1s linear infinite',
			'animate-ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 2',
			'animate-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) o',
			'animate-bounce': 'bounce 1s infinite'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}

export default config
