import styled from "styled-components";
export const Container=styled.div`
padding:3.5em 8em;
background:#000;
@media(max-width:600px)
{
    padding:2em;
}
`
export const Inner=styled.div``
export const Row=styled.div`
display:flex;
justfiy-content:space-between;
flex-wrap:wrap;

`
export const Column=styled.div`
display:flex;
flex-direction:column;
width:25%;
@media(max-width:600px)
{
    width:50%;
}
`
export const Link=styled.a`
display:block;
cursor:pointer;
color: rgba(255,255,255,0.7);
margin-top:1em;
@media(max-width:600px)
{
    font-size:1rem;
    font-weight:400;
}
font-size:.9rem;
font-weight:600;
`
export const Text=styled.p`
color:rgba(255,255,255,0.7);
margin-top:1em;
font-weight:400;

`