import styled from "styled-components"
import {Link as ReactLink} from "react-router-dom"
export const Container=styled.div`
position:relative;
padding:0;
background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url("${({src})=>src?src:'../../../../images/misc/home-bg.jpg'}");
bacground-size:cover;
background-color: #000;
background-repeat: no-repeat;
background-position:center;
padding:2em 2em 7em 2em;
}
   
`

export const Base=styled.div`
display:flex;
justify-content:space-between;


align-items:center;
`
export const Logo=styled.img`
width:9.25rem;
height:2.5rem;
@media(max-width:600px)
{
    width: 5.5625rem;
    height: 1.5rem;
}
}
`
export const Buttonlink=styled(ReactLink)`
display:flex;
color:#fff;
text-decoration:none;
font-weight:600;
background:rgb(229,9,20);
align-items:center;
padding:4px 16px;
border-radius:.25em
`



