const menuItems = [
    {
        name: 'Casa',
        to: '/',
        icon: 'icons/home.svg',
        subMenuItems: []
    },
    {
        name: 'About',
        to: '/about',
        icon: 'icons/about.svg',
        subMenuItems: []
    },
    {
        name: 'Services',
        to: '/services',
        icon: 'icons/services.svg',
        subMenuItems: [
            {
                name: 'Salud',
                to: '/salud',
                icon: '/'
            },
            {
                name: 'Medioambiente',
                to: '/medioambiente',
                icon: '/'
            }
        ]
    },
    {
        name: 'Contact',
        to: '/contact',
        icon: 'icons/contact.svg',
        subMenuItems: []
    },
]


export default menuItems;