const menuItems = [
    {
        name: 'Inicio',
        to: '/',
        icon: 'icons/home.svg',
        subMenuItems: []
    },
    {
        name: 'Nostros',
        to: '/nosotros',
        icon: 'icons/about.svg',
        subMenuItems: []
    },
    {
        name: 'Servicios',
        to: '/servicios',
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
            },
            {
                name: 'Medioambiente',
                to: '/medioambiente',
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
        name: 'Contacto',
        to: '/contacto',
        icon: 'icons/contact.svg',
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
            },
            {
                name: 'Medioambiente',
                to: '/medioambiente',
                icon: '/'
            },
            {
                name: 'Medioambiente',
                to: '/medioambiente',
                icon: '/'
            }
        ]
    },
]


export default menuItems;