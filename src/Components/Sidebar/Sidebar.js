import React, { useState, useEffect } from 'react';
import * as s from '../Sidebar/Sidebar.styles'
import { AnimatePresence, motion } from 'framer-motion'

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
    const [isSidebarOpen, setisSidebarOpen] = useState(widthDefault);
    const [header, setHeader] = useState('');
    const [subMenuItemsStates, setSubMenus] = useState({})

    // Effect of Name Header
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => { setHeader(sidebarHeader.fullName) }, 200) : setHeader(sidebarHeader.shortName);
    }, [isSidebarOpen, sidebarHeader])

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
                    isSidebarOpen={isSidebarOpen}
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
                    isSidebarOpen={isSidebarOpen}
                    isSubmenuOpen={isSubmenuOpen}
                >
                    <s.Icon src={item.icon} isSidebarOpen={isSidebarOpen}></s.Icon>
                    <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                    {hasSubmenus && (
                        <s.DropdownIcon
                            isSubmenuOpen={isSubmenuOpen}
                            isSidebarOpen={isSidebarOpen}
                            isItemSelected={selected}
                        />
                    )}
                </s.MenuItem>
                <AnimatePresence>
                {isSidebarOpen ?
                hasSubmenus && isSubmenuOpen &&(
                    <motion.nav
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35}}
                    exit={{ opacity: 0, x: -10 }}
                    >
                        <s.subMenuItemsContainer
                            isSidebarOpen={isSidebarOpen}>
                            {subMenusJSX}
                        </s.subMenuItemsContainer>
                    </motion.nav>
                ) :
                hasSubmenus && isSubmenuOpen &&(
                    <motion.nav
                    initial={{ opacity: 0, y:0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5}}
                    exit={{ opacity: 0, x: 0 }}
                    >
                        <s.subMenuItemsContainer
                            isSidebarOpen={isSidebarOpen}>
                            {subMenusJSX}
                        </s.subMenuItemsContainer>
                    </motion.nav>
                ) 
                }</AnimatePresence>
                
            </s.MenuItemsContainer>

        )
    })
    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}
            isSidebarOpen={isSidebarOpen}>
            <s.TogglerContainer
                onClick={() => setisSidebarOpen(!isSidebarOpen)}
                isSidebarOpen={isSidebarOpen}>
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