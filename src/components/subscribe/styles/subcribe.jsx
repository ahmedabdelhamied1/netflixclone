import styled from "styled-components"
export const Container=styled.div`
background:#000;
padding:0 8em 3.5rem 8em;
border-bottom:10px solid #232323;
@media(max-width:600px)
{
 padding:0 2em 2em 2em ;
}

`
export const Title=styled.h3`
font-size: 1.25rem;
font-weight: 400;
line-height: 1.5;
color:#fff;
text-align:center;
`
export const Form=styled.div`
display:flex;
justify-content:center;
max-width:580px;
margin:1em auto;
@media(max-width:600px)
{
    flex-direction:column;
    align-items:center;
    input
    {
        width:100%;
        margin:1.2em 0;
    }
    
}
`
export const Input=styled.input`
padding: 1.5rem 1rem 0.5rem;
flex-grow:2;
background:#0f0f0f;
border:0;
outline:0;
color:#fff;
border:1px solid #232323;
border-radius: 0.25rem;
@media(max-width:600px)
{
    font-size:1.2rem;
}

`
export const Button=styled.button`
margin-left:5px;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-grow:1;
border:0;
outline:0;
line-height: 1;
border: 0px;
border-radius: 0.25rem;
cursor: pointer;
font-size: 1.5rem;
font-weight: 500;
min-height: 3.5rem;
padding: 0.75rem 1.5rem;
background: rgb(229, 9, 20);
color: rgb(255, 255, 255);
&:hover
{
    background: rgb(193, 17, 25);
}
`
export const Image=styled.img`
max-width:16px;
-webkit-filter: invert(1);
filter: invert(1);
`






