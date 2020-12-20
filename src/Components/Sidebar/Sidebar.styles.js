import styled from '@emotion/styled';


export const SidebarContainer = styled.div`
    width: ${p => p.isSidebarOpen ? '18%' : '5%'} ;
    background-image: 
    linear-gradient(
        315deg,
        rgba(252,82,150,0.8) 0%,
        rgba(246,112, 98, 0.8) 74%),
        url(${p => p.backgroundImage}
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: white;
    position: relative; // Toggler
    transition: .2s ease-in all;

    @media (max-width: 576.97px){ 
        width: ${p => p.isSidebarOpen ? '80%' : '15%'} ;
    }

    @media (min-width: 577px) and (max-width: 992px){ 
        width: ${p => p.isSidebarOpen ? '30%' : '7%'} ;
    }
`

export const SidebarHeader = styled.h3`
    text-align: center;
    height:10%;
    margin-top: .5em;
    letter-spacing: .1em;
    font-size: 1em;
    font-family: ${p => p.font};
    overflow: hidden;
    padding: 0em .3em;
`

// ----------------- Menu Items
export const MenuItemsContainer = styled.div`
position:relative`
export const MenuContainer = styled.div``

export const MenuItem = styled.div`

    ${p => !p.isSidebarOpen && `
        text-align: center;
        ${p.isItemSelected && 'background: rgba(0,0,0,0.6)'};
    `}
    padding: .5em;
    font-size:.9em;
    font-weight:200;
    color: ${p => p.isItemSelected ? 'white ' : 'rgb(19,15,64)'} ;

    ${p => p.isItemSelected && 'font-weight:400; letter-spacing:1px'};
    
    font-family: ${p => p.font};
    transition:  .2s ease-in all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    position:relative;

    &:hover{
        color: rgb(255,255,255);
        transition:  .1s ease-in all;
        cursor: default;
    }

    &:after{
        content: '';
        border: 1px solid ${p => p.isItemSelected ? 'white ' : 'rgba(255,112,85)'};
        display: ${p => p.isSubmenuOpen && p.isSidebarOpen && p.isItemSelected ? 'none' : 'block'};
        margin: 8px 0 4px;
        transition: .1s ease-in all;
    }

    ${p => !p.isItemSelected && `
        &:hover{
            &:after{
                border: 1px solid rgba(255,255,255,0.2);
                transition:  .1s ease-in all;
            }
        }
    `}
    
`

export const Text = styled.p`
    display: ${p => p.isSidebarOpen ? 'inline' : 'none'};
`

export const Icon = styled.img`
    ${p => p.isSidebarOpen ? `
    padding-right: 1em;
    font-size: 1em;
    transition: .2s ease-in padding-right;
    `
    :
    `
    padding-right: 0em;
    font-size:1.5em;
    `}

    height:1em;
`

// -------------------- Sub Menu Items

export const DropdownIcon = styled.div`
${p => p.isSidebarOpen &&
`
position:absolute;
border: solid ${p.isItemSelected ? 'white ' : 'rgb(19,15,64)'} ;
border-width: 0 1px 1px 0;
transform:rotate(${p.isSubmenuOpen ? '225deg' : '45deg'});
padding:.2em;
top:${p.isSubmenuOpen ? '1em' : '1em'};
right:1em;
transition: .2s ease-in transform;
`}
    
`

export const subMenuItemsContainer = styled.div`
${p => !p.isSidebarOpen && `

position: absolute;
top:0;
left:4.1em;
transition: .2s ease-in all;

@media (max-width: 991.97px){
    left:3.2em;
}
`}

`


export const subMenuItem = styled.p`
    font-size:.8em;
    font-weight:200;
    padding: .5em 2em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    color: ${p => p.selected ? 'rgb(255,255,255)' : 'rgb(19,15,64)' };
    ${p => p.selected && 'font-weight:500; letter-spacing:2px'};
    transition: .2s;
    &:hover{
        color: rgb(255,255,255);
        cursor:default;
    }


    ${p => p.isSubmenuOpen ? 'display:block' : 'display:none'};

    ${p => !p.isSidebarOpen && `
    font-size: .7em;
    text-align: center;
    background: rgba(0,0,0,0.3);
    border-bottom: 1px solid white;
    `}

    transition: .2s ease-in all;
    `

//--------------- Toggler -----------------

export const TogglerContainer = styled.div`
        position: relative;
        
        &:after{
            ${p => p.isSidebarOpen ? `content:'<';`
                            : `content:'>';`}
            text-align:center;
            position:absolute;
            background-color: #E58C8A;
            background-image: linear-gradient(315deg, #E58C8A 0%, #EEC0C6 74%);
            right:0;
            transform: translateX(12px);
            width: 24px;
            height: 24px;
            margin-top:2em;
            border-radius: 50%;
            color:rgb(19,15,64);
            box-shadow: 4px 2px 2px rgba(0,0,0,0.3);
            transition:  .2s ease-in box-shadow;
        }
        &:hover{
            &:after{
                box-shadow: 5px 3px 3px rgba(0,0,0,0.3);
                transition:  .2s ease-in all;
            }
        }

`


