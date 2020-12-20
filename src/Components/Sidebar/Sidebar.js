import React, { useState, useEffect } from 'react';
import * as s from '../Sidebar/Sidebar.styles'


const Sidebar = props => {

    // Props
    const { backgroundImage = '',
        sidebarHeader = {
            fullName: 'React-Sidebar',
            shortName: 'RS'
        },
        menuItems = [],
        fonts = {
            header: '',
            menu: ''
        }
    } = props;

    // get width for set the sidebar opened or closed
    const widthDefault = window.innerWidth > 768 ? true : false;


    // State
    const [selected, setSelected] = useState(menuItems[0].name);
    const [isOpen, setIsOpen] = useState(widthDefault);
    const [header, setHeader] = useState('');
    const [subMenuItemsStates, setSubMenus] = useState({})

    // Effect of Name Header
    useEffect(() => {
        isOpen ? setTimeout(() => { setHeader(sidebarHeader.fullName) }, 200) : setHeader(sidebarHeader.shortName);
    }, [isOpen, sidebarHeader])

    // Add index of menu items to state
    useEffect(() => {
        const newSubMenus = {};

        menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;
            if (hasSubmenus) {
                newSubMenus[index] = {};
                newSubMenus[index]['isSubmenuOpen'] = false;
                newSubMenus[index]['indexSelected'] = null;
            }
        });
        setSubMenus(newSubMenus)
    }, [menuItems]);

    // Handle click menu items
    const handleItemSelected = (name, index) => {
        setSelected(name)
        const subMenusCopy = JSON.parse(JSON.stringify(subMenuItemsStates))
        
        if (subMenuItemsStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isSubmenuOpen'] = !subMenuItemsStates[index]['isSubmenuOpen']
            setSubMenus(subMenusCopy)
        }
    }


    // Rendering Menu Items
    const menuItemsJSX = menuItems.map((item, index) => {

        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length;
        var isSubmenuOpen = subMenuItemsStates[index]?.isSubmenuOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuIndex) => {
            return <s.subMenuItem
                key={subMenuIndex}
                isSubmenuOpen={isSubmenuOpen}
                isOpen={isOpen}
            >
                {subMenuItem.name}
            </s.subMenuItem>
        });

        return (
            <s.MenuItemsContainer key={index}>
                <s.MenuItem
                    font={fonts.menu}
                    isItemSelected={isItemSelected}
                    onClick={() => handleItemSelected(item.name, index)}
                    isOpen={isOpen}
                >
                    <s.Icon src={item.icon} isOpen={isOpen}></s.Icon>
                    <s.Text isOpen={isOpen}>{item.name}</s.Text>
                    {hasSubmenus && (
                        <s.DropdownIcon
                            isSubmenuOpen={isSubmenuOpen}
                            isOpen={isOpen}
                        />
                    )}
                </s.MenuItem>
                <s.subMenuItemsContainer
                    isOpen={isOpen}>
                    {subMenusJSX}
                </s.subMenuItemsContainer>
            </s.MenuItemsContainer>

        )
    })
    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}
            isOpen={isOpen}>
            <s.TogglerContainer
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}>
            </s.TogglerContainer>
            <s.SidebarHeader
                font={fonts.header}
            >
                {header}
            </s.SidebarHeader>
            <s.MenuContainer>{menuItemsJSX}</s.MenuContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar;