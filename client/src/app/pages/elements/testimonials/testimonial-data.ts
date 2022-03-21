import { sliderOpt } from 'src/app/shared/data';

interface Testmonial {
    photo?: string,
    comment: string,
    name: string,
    type: string
}

interface TestmonialSlider {
    title: object,
    titleAclass?: string,
    sliderClass: string,
    sliderOption: object,
    items: Testmonial[],
    testStyle?: string
}

const item1: Testmonial[] = [
    {
        comment: "“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”",
        name: "Jenson Gregory",
        type: "Customer"
    },
    {
        comment: "“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”",
        name: "Damon Stone",
        type: "Customer"
    },
    {
        comment: "“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”",
        name: "John Smith",
        type: "Customer"
    }
]

const item2: Testmonial[] = [
    {
        photo: "assets/images/testimonials/user-1.jpg",
        comment: "“  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis.  ”",
        name: "Jenson Gregory",
        type: "Customer"
    },
    {
        photo: "assets/images/testimonials/user-2.jpg",
        comment: "“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus. ”",
        name: "Victoria Ventura",
        type: "Customer"
    },
    {
        photo: "assets/images/testimonials/user-1.jpg",
        comment: "“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis, voluptate, distinctio earum veritatis animi. ”",
        name: "John Smith",
        type: "Customer"
    }
]

const item3: Testmonial[] = [
    {
        comment: "“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus quet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis. ”",
        name: "Jenson Gregory",
        type: "Customer"
    },
    {
        comment: "“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusand. ”",
        name: "Victoria Ventura",
        type: "Customer"
    },
    {
        comment: "“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab, modi animi. ”",
        name: "Angelica Lynch",
        type: "Customer"
    },
    {
        comment: "“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab. ”",
        name: "John Smith",
        type: "Customer"
    }
]

const item4: Testmonial[] = [
    {
        photo: "assets/images/testimonials/user-1.jpg",
        comment: "“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”",
        name: "Jenson Gregory",
        type: "Customer"
    },
    {
        photo: "assets/images/testimonials/user-2.jpg",
        comment: "“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”",
        name: "Victoria Ventura",
        type: "Customer"
    }
]

const sliderOption1 = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    loop: true,
    responsive: {
        1200: {
            nav: true
        }
    }
}

const sliderOption2 = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2,
            nav: true
        }
    }
}

const sliderOption3 = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3,
            nav: true
        }
    }
}

export const sliders: TestmonialSlider[] = [
    {
        title: ["Quote Sign", "Centered Align"],
        sliderClass: "owl-theme owl-testmonials",
        sliderOption: sliderOption1,
        items: item1,
        testStyle: "testimonial-icon"
    },
    {
        title: ["Quote Sign", "Centered Align", "2 Columns"],
        sliderClass: "owl-theme owl-testmonials",
        sliderOption: sliderOption2,
        items: item2,
        testStyle: "testimonial-icon"
    },
    {
        title: ["Quote Sign", "Centered Align", "3 Columns"],
        sliderClass: "owl-theme owl-testmonials",
        sliderOption: sliderOption3,
        items: item3,
        testStyle: "testimonial-icon"
    },
    {
        title: ["Quote Sign", "Centered Align", "Dark Background"],
        titleAclass: "text-white",
        sliderClass: "owl-theme owl-testmonials owl-light",
        sliderOption: sliderOption1,
        items: item1,
        testStyle: "testimonial-icon text-white"
    },
    {
        title: ["Customer Photo", "Centered Align"],
        sliderClass: "owl-theme owl-testimonials-photo",
        sliderOption: sliderOption1,
        items: item4
    },
    {
        title: ["Customer Photo", "Centered Align", "2 Columns"],
        sliderClass: "owl-theme owl-testimonials-photo",
        sliderOption: sliderOption2,
        items: item2
    }
]