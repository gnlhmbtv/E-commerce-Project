import { sliderOpt } from 'src/app/shared/data';

export const itemsPerRowOption = {
	'grid-2': 2,
	'grid-3': 3,
	'grid-4': 4,
	'grid-sidebar': 2
}

export const itemsPerRowOption1 = {
	'masonry-2': 2,
	'masonry-3': 3,
	'masonry-4': 4,
	'masonry-sidebar': 2
}

export const getPostsAmount = {
	'grid-2': 6,
	'grid-3': 9,
	'grid-4': 12,
	'grid-sidebar': 8
}

export const getPostsAmount1 = {
	'masonry-2': 6,
	'masonry-3': 9,
	'masonry-4': 12,
	'masonry-sidebar': 8
}

export const categories = [
	'Lifestyle', 'Shopping', 'Fashion', 'Travel', 'Hobbies'
]

export const pageTitles1 = {
	'grid-2': 'Grid 2 Columns',
	'grid-3': 'Grid 3 Columns',
	'grid-4': 'Grid 4 Columns',
	'grid-sidebar': 'Grid With Sidebar'
}

export const pageTitles2 = {
	'masonry-2': 'Masonry 2 Columns',
	'masonry-3': 'Masonry 3 Columns',
	'masonry-4': 'Masonry 4 Columns',
	'masonry-sidebar': 'Masonry With Sidebar'
}

export const gridOption = {
	itemSelector: '.entry-item',
	layoutMode: 'fitRows',
	masonry: {
		columnWidth: '.grid-sizer'
	}
}

export const masonryOption = {
	itemSelector: '.entry-item',
	masonry: {
		columnWidth: '.grid-sizer'
	}
}

export const postSlider1 = {
	...sliderOpt,
	nav: false,
	dots: true,
	margin: 20,
	loop: false,
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 2
		},
		768: {
			items: 3
		}
	}
}

export const postSlider2 = {
	...sliderOpt,
	nav: false,
	dots: true,
	margin: 20,
	loop: false,
	responsive: {
		0: {
			items: 1
		},
		480: {
			items: 2
		},
		768: {
			items: 3
		},
		992: {
			items: 4
		}
	}
}