import styled from "styled-components";
export const Container=styled.div`
background:#000;
padding: 3.5rem 0;
border-bottom:10px solid #232323;

`
export const Inner=styled.div`
padding:0 8em;
@media (max-width:600px)
{
    padding:0 2em;
}
`
export const Item=styled.section`
margin-bottom:.8em;
`
export const Title=styled.h2`
text-align:center;
color:#fff;
font-size: 3rem;
font-weight: 900;
margin-bottom:.5em;
@media(max-width:600px)
{
    font-size: 2rem;
    font-weight: 700;
}

`
export const Header=styled.div`
padding: 1.5rem;
background:#2d2d2d;
color:#fff;
border-bottom:1px solid #000; 
display:flex;
justify-content:space-between;
align-items:center;
font-size: 1.5rem;
font-weight: 400;
img
{
    width:16px;
    height:16px;
    -webkit-filter: invert(1);
    filter: invert(1);
}
&:hover
{
    background:rgb(65,65,65);
    cursor:pointer;
}
@media(max-width:600px)
{
    font-size: 1.125rem;
    font-weight: 400;
   
}

`
export const Content=styled.div`
padding: 1.5rem;
background:#2d2d2d;
color:#fff;
font-size:1.6rem;
max-height:600px;
transition: max-height .25s cubic-bezier(.5,0,.1,1);
font-size: 1.5rem;
font-weight: 400;
@media(max-width:600px)
{
    font-size: 1.125rem;
    font-weight: 400;
    
}
`

