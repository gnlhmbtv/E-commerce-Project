interface Price {
    text: string,
    range: {
        max: number,
        min: number
    }
}

interface Rating {
    ratings: number
}

export const prices: Price[] = [
    {
        text: "Under $25",
        range: {
            min: 0,
            max: 25
        }
    },
    {
        text: "$25 to $50",
        range: {
            min: 25,
            max: 50
        }
    },
    {
        text: "$50 to $100",
        range: {
            min: 50,
            max: 100
        }
    },
    {
        text: "$100 to $200",
        range: {
            min: 100,
            max: 200
        }
    },
    {
        text: "$200 & Above",
        range: {
            min: 200,
            max: 1000
        }
    }
]

export const ratings: Rating[] = [
    {
        ratings: 5
    },
    {
        ratings: 4
    },
    {
        ratings: 3
    },
    {
        ratings: 2
    },
    {
        ratings: 1
    },
]