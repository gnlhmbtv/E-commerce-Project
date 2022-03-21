import { sliderOpt } from 'src/app/shared/data';

export const productSlider = {
        ...sliderOpt,
        loop: false,
        dots: false,
        responsive: {
                0: {
                        items: 1
                },
                560: {
                        items: 2
                },
                992: {
                        items: 3
                },
                1200: {
                        items: 3
                }
        }
}