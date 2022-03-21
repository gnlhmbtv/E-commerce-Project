export interface IconBoxItem {
    title: string;
    content: string;
    icClass: string;
}

// icon box class
export interface IconBox {
    title: string;
    subtitle: string;
    cols: string;
    wrClass: string;
    adClass: string;
    mbClass: string;
    items: IconBoxItem[];
}

const items1: IconBoxItem[] = [
    {
        icClass: "icon-info-circle",
        title: "Quisque a lectus",
        content: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."
    },
    {
        icClass: "icon-star-o",
        title: "Suspendisse potenti",
        content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."
    },
    {
        icClass: "icon-heart-o",
        title: "Phasellus hendrerit",
        content: "Pellentesque a diam sit amet mi ullamcorper vehicula. Nullam quis massa sit amet nibh viverra malesuada."
    }
]

const items2: IconBoxItem[] = [
    {
        icClass: "icon-info-circle",
        title: "Quisque a lectus",
        content: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."
    },
    {
        icClass: "icon-star-o",
        title: "Suspendisse potenti",
        content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."
    },
    {
        icClass: "icon-heart-o",
        title: "Phasellus hendrerit",
        content: "Pellentesque a diam sit amet vehicula. Nullam quis massa sit amet nibh viverra malesuada."
    }
]

const items3: IconBoxItem[] = [
    {
        icClass: "icon-info-circle",
        title: "Quisque a lectus",
        content: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus augue."
    },
    {
        icClass: "icon-star-o",
        title: "Suspendisse potenti",
        content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate eu erat. "
    },
    {
        icClass: "icon-heart-o",
        title: "Phasellus hendrerit",
        content: "Pellentesque a diam sit amet vehicula. Nullam quis massa sit amet nibh viverra malesuada."
    }
]

const items4: IconBoxItem[] = [
    {
        icClass: "icon-info-circle",
        title: "Quisque a lectus",
        content: "Sed egestas, ante et vulputate volutpat, eros pede semper"
    },
    {
        icClass: "icon-star-o",
        title: "Suspendisse potenti",
        content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas "
    },
    {
        icClass: "icon-heart-o",
        title: "Phasellus hendrerit",
        content: "Pellentesque a diam sit amet mi ullamcorper vehicula."
    },
    {
        icClass: "icon-cog",
        title: "Fusce pellentesque",
        content: "Nullam quis massa sit amet nibh viverra malesuada."
    }
]

const items5: IconBoxItem[] = [
    {
        icClass: "icon-info-circle",
        title: "Quisque a lectus",
        content: "Sed egestas, ante et vulputate volutpat eros "
    },
    {
        icClass: "icon-star-o",
        title: "Suspendisse potenti",
        content: "Praesent dapibus, neque id cursus faucibus tortor "
    },
    {
        icClass: "icon-heart-o",
        title: "Phasellus hendrerit",
        content: "Pellentesque a diam sit amet vehicula. "
    },
    {
        icClass: "icon-cog",
        title: "Fusce pellentesque",
        content: "Nullam quis massa sit amet nibh viverra "
    }
]

const items6: IconBoxItem[] = [
    {
        icClass: "icon-info-circle",
        title: "Quisque a lectus",
        content: "Sed egestas, ante et vulputate volutpat, eros pede semper "
    },
    {
        icClass: "icon-star-o",
        title: "Suspendisse potenti",
        content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas "
    },
    {
        icClass: "icon-heart-o",
        title: "Phasellus hendrerit",
        content: "Pellentesque a diam sit amet mi ullamcorper vehicula. "
    },
    {
        icClass: "icon-cog",
        title: "Fusce pellentesque",
        content: "Nullam quis massa sit amet nibh viverra malesuada."
    }
]

export const iconBoxes: IconBox[] = [
    {
        title: "Simple Icons",
        subtitle: "Centered Align",
        cols: "3 Columns",
        mbClass: "mb-4",
        wrClass: "col-lg-4",
        adClass: "text-center",
        items: items1
    },
    {
        title: "Simple Icons",
        subtitle: "Left Align",
        cols: "3 Columns",
        mbClass: "mb-5",
        wrClass: "col-lg-4",
        adClass: "icon-box-left",
        items: items2
    },
    {
        title: "Circle Icons",
        subtitle: "Centered Align",
        cols: "3 Columns",
        mbClass: "mb-4",
        wrClass: "col-lg-4",
        adClass: "icon-box-circle text-center",
        items: items1
    },
    {
        title: "Circle Icons",
        subtitle: "Left Align",
        cols: "3 Columns",
        mbClass: "mb-5",
        wrClass: "col-lg-4",
        adClass: "icon-box-left icon-box-circle",
        items: items3
    },
    {
        title: "Simple Icons",
        subtitle: "Centered Align",
        cols: "4 Columns",
        mbClass: "mb-4",
        wrClass: "col-lg-3",
        adClass: "text-center",
        items: items4
    },
    {
        title: "Simple Icons",
        subtitle: "Left Align",
        cols: "4 Columns",
        mbClass: "mb-5",
        wrClass: "col-lg-3",
        adClass: "icon-box-left",
        items: items5
    },
    {
        title: "Circle Icons",
        subtitle: "Centered Align",
        cols: "4 Columns",
        mbClass: "mb-4",
        wrClass: "col-lg-3",
        adClass: "icon-box-circle text-center",
        items: items6
    }
]
