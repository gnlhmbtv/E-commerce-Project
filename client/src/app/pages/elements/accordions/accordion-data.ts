export interface Card {
    title: string,
    icon?: string,
    body: string
}

export interface Accordion {
    adClass?: string,
    cardAclass?: string,
    showIcon?: boolean,
    cards: Card[]
}

export interface AccordionGroup {
    title?: string,
    items: Accordion[]
}

const card1: Card = {
    title: 'Cras ornare tristique elit.',
    icon: 'icon-star-o',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.'
}

const card2: Card = {
    title: 'Vivamus vestibulum ntulla',
    icon: 'icon-info-circle',
    body: 'Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. '
}

const card3: Card = {
    title: 'Praesent placerat risus',
    icon: 'icon-heart-o',
    body: 'Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. '
}

const accordion1: Accordion = {
    cards: [
        card1, card2, card3
    ]
}

const accordion2: Accordion = {
    adClass: 'accordion-plus',
    cards: [
        card1, card2, card3
    ]
}

const accordion3: Accordion = {
    adClass: 'accordion-icon',
    showIcon: true,
    cards: [
        card1, card2, card3
    ]
}

const accordion4: Accordion = {
    adClass: 'accordion-icon',
    showIcon: true,
    cardAclass: 'card-box bg-light',
    cards: [
        card1, card2, card3
    ]
}

const accordion5: Accordion = {
    adClass: 'accordion-rounded',
    cardAclass: 'card-box card-sm bg-light',
    cards: [
        card1, card2, card3
    ]
}

const accordion6: Accordion = {
    adClass: 'accordion-rounded accordion-plus',
    cardAclass: 'card-box card-sm bg-white',
    cards: [
        card1, card2, card3
    ]
}

export const accordionGroups: AccordionGroup[] = [
    {
        title: 'Simple Accordions',
        items: [
            accordion1, accordion2
        ]
    },
    {
        title: 'Accordion with Icons',
        items: [
            accordion3, accordion4
        ]
    },
    {
        title: 'Accordions on Background',
        items: [
            accordion5, accordion6
        ]
    }
]