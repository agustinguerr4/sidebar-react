import styled from '@emotion/styled';


export const SidebarContainer = styled.div`
width: ${p => p.isOpen ? '20%' : '5%'} ;

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

@media (max-width: 575.98px) and (max-width: 767.97px){ 
    width: ${p => p.isOpen ? '80%' : '20%'} ;
 }

@media (max-width: 767.98px) and (max-width: 991.97px){ 
    width: ${p => p.isOpen ? '40%' : '10%'} ;
 }
`

export const SidebarHeader = styled.h3`
        text-align: center;
        margin-bottom: 1em;
        margin-top: .5em;
        letter-spacing: .1em;
        font-size: 1em;
        font-family: ${p => p.font}
`

export const MenuItemsContainer = styled.div`
`

export const MenuItem = styled.div`
    padding: .5em 2em;
    font-size:.9em;
    font-weight:200;
    color: ${p => p.isItemSelected ? 'white ' : 'rgb(19,15,64)'} ;
    font-family: ${p => p.font};
    transition:  .2s ease-in all;

    &:hover{
        color: rgb(255,255,255);
        transition:  .1s ease-in all;
        cursor: default;
    }

    &:after{
        content: '';
        border: 1px solid ${p => p.isItemSelected ? 'white ' : 'rgba(255,112,85)'};
        display:block;
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
    display: inline;
`

export const Icon = styled.img`
    height:1em;
    padding-right: 1em;
`

//--------------- Toggler -----------------

export const TogglerContainer = styled.div`
        position: relative;

        &:after{
            content:'<';
            text-align:center;
            position:absolute;
            background-color: #E58C8A;
            background-image: linear-gradient(315deg, #E58C8A 0%, #EEC0C6 74%);
            right:0;
            transform: translateX(12px);
            width: 24px;
            height: 24px;
            margin-top:15px;
            border-radius: 50%;
            color:rgb(19,15,64);
            box-shadow: 4px 2px 2px rgba(0,0,0,0.3);
        }
        &:hover{
            &:after{
                box-shadow: 5px 3px 3px rgba(0,0,0,0.3);
                transition:  .2s ease-in all;
            }
        }
`


