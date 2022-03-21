import { transition, trigger, query, style, animate, animateChild } from '@angular/animations';

// Animation for route
export const routeAnimation = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':leave', [
			style({
				display: 'none'
			})
		], { optional: true }),
		query(':enter', [
			style({
				display: 'block',
				opacity: 0
			}),
			animate('300ms ease-in', style({ opacity: 1 })),
			animateChild()
		], { optional: true })
	])
]);

export const sliderOpt = {
    items: 1,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    autoplayTimeout: 15000
}

export const animations = {
    fadeIn: {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },

    fadeInRightShorter: {
        from: {
            'opacity': 0,
            'transform': 'translate(-50px,0)',
            'transform-origin': '0 0'
        },

        to: {
            opacity: 1,
            transform: 'none'
        }
    },

    fadeInRight: {
        from: {
            opacity: 0,
            transform: 'translate3d(100%,0,0)'
        },

        to: {
            opacity: 1,
            transform: 'translateZ(0)'
        }
    },

    fadeInLeftShorter: {
        from: {
            opacity: 0,
            transform: 'translate(50px,0)',
            'transform-origin': '0 0',
        },
        to: {
            opacity: 1,
            transform: 'none'
        }
    },

    fadeInLeft: {
        from: {
            opacity: 0,
            transform: 'translate3d(-100%,0,0)'
        },

        to: {
            opacity: 1,
            transform: 'translateZ(0)'
        }
    },

    fadeInUpShorter: {
        from: {
            opacity: 0,
            transform: 'translate(0,50px)',
            'transform-origin': '0 0',
        },
        to: {
            opacity: 1,
            transform: 'none'
        }
    },

    fadeInDownShorter: {
        from: {
            opacity: 0,
            transform: 'translate(0,-50px)',
            'transform-origin': '0 0',
        },
        to: {
            opacity: 1,
            transform: 'none'
        }
    },

    blurIn: {
        from: {
            opacity: 0,
            filter: 'blur(20px)',
            transform: 'scale(1.2)',
        },
        to: {
            opacity: 1,
            filter: 'blur(0)',
            transform: 'none'
        }
    }
}