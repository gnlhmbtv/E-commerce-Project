import { sliderOpt } from 'src/app/shared/data';

interface Category {
    image: string;
    name: string;
    query: string;
}

export const cats: Category[] = [
    {
        image: "assets/images/market/cats/1.jpg",
        name: "Desktop Computers",
        query: "computers"
    },
    {
        image: "assets/images/market/cats/2.jpg",
        name: "Monitors",
        query: "monitors"
    },
    {
        image: "assets/images/market/cats/3.jpg",
        name: "Laptops",
        query: "laptops"
    },
    {
        image: "assets/images/market/cats/4.jpg",
        name: "iPads & Tablets",
        query: "tablets"
    },
    {
        image: "assets/images/market/cats/5.jpg",
        name: "Hard Drives & Storage",
        query: "storage"
    },
    {
        image: "assets/images/market/cats/6.jpg",
        name: "Printers & Supplies",
        query: "printers"
    },
    {
        image: "assets/images/market/cats/7.jpg",
        name: "Computer Accessories",
        query: "accessories"
    },
]

export const brands = [
    "assets/images/brands/2.png",
    "assets/images/brands/3.png",
    "assets/images/brands/4.png",
    "assets/images/brands/5.png",
    "assets/images/brands/6.png",
    "assets/images/brands/1.png",
    "assets/images/brands/2.png"
]

export const bannerSlider = {
    ...sliderOpt,
    nav: false,
    responsive: {
        992: {
            nav: true
        }
    }
}

export const brandSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 30,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6,
            nav: true,
            dots: false
        }
    }
};