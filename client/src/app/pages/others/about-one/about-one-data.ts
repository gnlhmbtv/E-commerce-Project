interface Testmonial {
    photo?: string,
    comment: string,
    name: string,
    type: string
}

interface member {
    photo: string,
    name: string,
    title: string
}

export const customSay: Testmonial[] = [
    {
        photo: "assets/images/testimonials/user-1.jpg",
        comment: "“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”",
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

export const team: member[]  = [
    {
        photo: "assets/images/team/member-1.jpg",
        name: "Samanta Grey",
        title: "Founder & CEO"
    },
    {
        photo: "assets/images/team/member-2.jpg",
        name: "Bruce Sutton",
        title: "Sales & Marketing Manager"
    },
    {
        photo: "assets/images/team/member-3.jpg",
        name: "Janet Joy",
        title: "Product Manager"
    }
]

export const brands = [
    {
        name: "brand",
        image: "assets/images/brands/1.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/2.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/3.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/4.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/5.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/6.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/7.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/8.png"
    },
    {
        name: "brand",
        image: "assets/images/brands/9.png"
    }
]