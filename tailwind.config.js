/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		screens: {
  			"xs": '375px',
			"slg":"900px",
  		},
		  dropShadow: {
			'green': '10px 35px 35px rgba(79, 159, 118, 0.8)',
			'4xl': [
				'0 35px 35px rgba(0, 0, 0, 0.25)',
				'0 45px 65px rgba(0, 0, 0, 0.15)'
			]
		  },
  		fontFamily: {
  			Poppins: ["var(--font-poppins)"],
  			Manrope: ["var(--font-manrope)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		transitionDuration: {
  			'1500': '1500ms'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			  float: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-15px)' },
			  },
			  ping: {
				'0%, 100%': { transform: 'scale(1)', opacity: '1' },
				'50%': { transform: 'scale(1.5)', opacity: '0.5' },
			  }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			  'float': 'float 4s ease-in-out infinite',
			  'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
