import styled from "styled-components";
export const Container=styled.section`
padding:8em;
text-align:center;
@media(max-width:600px)
{
    padding:2.5em 0 1em 0;
}
`
export const Title=styled.h1`
font-size: 3rem;
font-weight: 900;
width: max-content;
color:#fff;
@media(max-width:600px)
{
    font-size: 2rem;
    font-weight: 700;
    width: fit-content;

    
}
`
export const Text=styled.h2`
font-size: 1.5rem;
font-weight: 400;
margin:0;
color:#fff;
@media(max-width:600px)
{
    font-size: 1.125rem;
    font-weight: 400;
}
`