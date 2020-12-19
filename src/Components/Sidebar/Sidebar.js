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

    const widthDefault = window.innerWidth > 768 ? true : false;

    // State
    const [selected, setSelected] = useState(menuItems[0].name);
    const [isOpen, setIsOpen] = useState(widthDefault);
    const [header, setHeader] = useState('');


    // Effect
    useEffect(() => {
       
        isOpen ? setTimeout(()=>{setHeader(sidebarHeader.fullName)},200) : setHeader(sidebarHeader.shortName);
        
    }, [isOpen,sidebarHeader])

    // Menu Items
    const menuItemsJSX = menuItems.map((item, index) => {

        const isItemSelected = selected === item.name;

        return (
            <s.MenuItem
                key={index}
                font={fonts.menu}
                isItemSelected={isItemSelected}
                onClick={() => handleItemSelected(item.name)}
            >
                <s.Icon src={item.icon}></s.Icon>
                <s.Text>{item.name}</s.Text>
            </s.MenuItem>
        )
    })

    const handleItemSelected = name => {
        setSelected(name)
    }

    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isOpen={isOpen}>
            <s.TogglerContainer onClick={() => setIsOpen(!isOpen)} ></s.TogglerContainer>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemsContainer>{menuItemsJSX}</s.MenuItemsContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar;