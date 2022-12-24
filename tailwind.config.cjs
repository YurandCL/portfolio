/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				current: 'currentColor',
				transparent: 'transparent',
				primary: '#ea60d3',
				secondary: {
					500: {
						DEFAULT: '#1a5f82',
						800: 'rgba(26,95,130,0.8)'
					},
					700: '#154d69',
					900: '#103a4f'
				},
				accent: {
					DEFAULT: '#ffccf4',
					300: '#debfff',
					500: '#ffccf4'
				},
				white: {
					DEFAULT: '#fff',
					transparent: {
						DEFAULT: 'rgba(255, 255, 255, 0.5)',
						50: 'rgba(255, 255, 255, 0.05)',
						100: 'rgba(255, 255, 255, 0.1)',
						500: 'rgba(255, 255, 255, 0.5)',
						700: 'rgba(255, 255, 255, 0.7)',
						800: 'rgba(255, 255, 255, 0.8)'
					}
				}
			},
			maxHeight: {
				17: '4.25rem'
			},
			height: {
				17: '4.25rem'
			},
			transitionProperty: {
				position: 'top, right, bottom, left'
			}
		}
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				button: { cursor: 'default' }
			})
		})
	]
}
