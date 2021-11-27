const heroContent = {
    p1: 'XXXXxxxx',
    p2: 'HOTEL',
    pic: 'assets/p2.jpg',
    h: '5 STAR HOTEL',
    p3: 'Occaecat aliqua aliqua laboris non et id magna in officia velit elit nostrud.'
}

const introContent = {
    h: 'Culpa culpa do ullamco incididunt fugiat ipsum voluptate tempor.',
    p: 'Id ad enim commodo minim laboris ex magna minim officia fugiat enim ea deserunt proident. Non Lorem duis veniam fugiat aute ex sit pariatur aute aliquip ea. Irure excepteur aliquip labore laboris adipisicing occaecat sit quis. Qui reprehenderit sint consectetur aliqua Lorem. Nulla pariatur eu qui sint cupidatat proident ut velit. Ex occaecat do incididunt excepteur eiusmod consectetur proident occaecat. Enim sint id laboris ipsum id ullamco est in.'
}

const frameSlideContent = [
    {
        id: 1,
        title: 'xx 1',
        img: 'assets/p3.jpg'
    },
    {
        id: 2,
        title: 'xx 2',
        img: 'assets/p3.jpg'
    },
    {
        id: 3,
        title: 'xx 3',
        img: 'assets/p3.jpg'
    },
]

const tabsContent = [
    {
        id: 1,
        title: 'GUEST ROOMS',
        tabID: 'test1',
        cards: [
            {
                title: 'KING ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p4.jpg'
            }, {
                imgtitle: 'DOUBLE QUEEN ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p5.jpg'
            }, {
                title: 'QUEEN ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p6.jpg'
            },
        ]
    }, {
        id: 2,
        title: 'SUITES',
        tabID: 'test2',
        cards: [
            {
                title: 'KING ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p6.jpg'
            }, {
                title: 'QUEEN ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p4.jpg'
            }, {
                title: 'Double QUEEN ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p5.jpg'
            },
        ]
    }, {
        id: 3,
        title: 'PENTHOUSE',
        tabID: 'test3',
        cards: [
            {
                title: 'Double QUEEN ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p5.jpg'
            }, {
                title: 'QUEEN ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p6.jpg'
            }, {
                title: 'KING ROOM',
                info: 'Aliqua labore eiusmod enim quis.',
                img: 'assets/p4.jpg'
            },
        ]
    }
]

const slideContent = [
    {
        href: "#test1",
        img: "assets/f1.jpg"
    },{
        href: "#test2",
        img: "assets/f2.jpg"
    },{
        href: "#test3",
        img: "assets/f3.jpg"
    },{
        href: "#test4",
        img: "assets/f4.jpg"
    },{
        href: "#test5",
        img: "assets/f5.jpg"
    },{
        href: "#test6",
        img: "assets/f6.jpg"
    },{
        href: "#test7",
        img: "assets/f7.jpg"
    },
]

const amenitiesContent = [
    {
        title: 'breakfast',
        info: 'Pariatur labore veniam magna reprehenderit.',
        img: 'assets/a1.jpg'
    },
    {
        title: 'fitness center',
        info: 'Sint et nostrud ad adipisicing incididunt..',
        img: 'assets/a2.jpg'
    },
    {
        title: 'concierge',
        info: 'Aliquip tempor in commodo enim reprehenderit amet anim dolor.',
        img: 'assets/a3.jpg'
    },
    {
        title: 'parking',
        info: 'Commodo consequat ut et excepteur incididunt..',
        img: 'assets/a4.jpg'
    },
    {
        title: 'internet access',
        info: 'Velit aliqua deserunt cupidatat ipsum duis excepteur enim..',
        img: 'assets/a5.jpg'
    },
    {
        title: 'pets',
        info: 'Excepteur dolor voluptate eu dolor ex eu mollit aliquip elit mollit dolor do ullamco mollit..',
        img: 'assets/a6.jpg'
    },
]

const buttons = {
    tabs_Btn: {
        id: 'EXPLORE MORE ROOMS',
        path: '/'
    }
}

const initContent = {
    heroContent,
    introContent,
    frameSlideContent,
    tabsContent,
    slideContent,
    amenitiesContent,
    buttons
}

module.exports = {initContent}