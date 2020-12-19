const menuItems = [
    {
        name: 'Casa',
        to: '/',
        icon: 'icons/home.svg',
        submenuItems: []
    },
    {
        name: 'About',
        to: '/about',
        icon: 'icons/about.svg',
        submenuItems: []
    },
    {
        name: 'Services',
        to: '/services',
        icon: 'icons/services.svg',
        submenuItems: [
            {
                name: 'Derecho a la Salud',
                to: '/salud',
                icon: '/'
            },
            {
                name: 'Derecho al Medioambiente',
                to: '/medioambiente',
                icon: '/'
            }
        ]
    },
    {
        name: 'Contact',
        to: '/contact',
        icon: 'icons/contact.svg',
        submenuItems: []
    },
]


export default menuItems;